import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { ensureCurrentUser, ensureUser } from '../../util/data';
import { withViewport } from '../../util/contextHelpers';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { medlaProjects, externalProjects } from '../../projects-config';
import { filters } from '../../marketplace-custom-config';
import image from '../../assets/background-1440.jpg'
import placeholderImg from '../../assets/placeholder.jpg';
import {
  Page,
  UserNav,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  AvatarLarge,
  NamedLink,
  ListingCard,
  CompanyCard,
  ButtonTabNavHorizontal,
  ExternalLink,
  IconCheckmark,
  IconArrowHead,
} from '../../components';
import { TopbarContainer, NotFoundPage } from '../../containers';
import config from '../../config';

import css from './ProjectPage.module.css';

const MAX_MOBILE_SCREEN_WIDTH = 768;

export class ProjectPageComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      scrollingDisabled,
      currentUser,
      projectId,
      user,
      userShowError,
      queryListingsError,
      listings,
      viewport,
      intl,
    } = this.props;
    const ensuredCurrentUser = ensureCurrentUser(currentUser);
    const isMobileLayout = viewport.width < MAX_MOBILE_SCREEN_WIDTH;
    const panelWidth = 62.5;
    // Render hints for responsive image
    const renderSizes = [
      `(max-width: 767px) 100vw`,
      `(max-width: 1920px) ${panelWidth / 2}vw`,
      `${panelWidth / 3}vw`,
    ].join(', ');

    const medlaProject = medlaProjects.findIndex(id => id.Omr??des_ID === projectId);
    const externalProject = externalProjects.findIndex(id => id.Omr??des_ID === projectId);
    const currentProject = medlaProject < 0 ? externalProject : medlaProject;
    const projectData = currentProject === medlaProject ? medlaProjects[currentProject] : externalProjects[currentProject];

    const userAttributes = currentUser && currentUser.attributes;
    const userSubscriptions = userAttributes && currentUser.attributes.profile.publicData.amenities;
    const userIsSubscribed = userSubscriptions && userSubscriptions.includes(projectData.id);

    let projectDetailsLink = null
    if (typeof document !== 'undefined') {
      projectDetailsLink = document.getElementById("projectDetails");
    };

    const jobs = listings.filter(listing => listing.attributes.publicData.listingCategory !== 'company');
    const companies = listings.filter(listing => listing.attributes.publicData.listingCategory === 'company');

    const jobSection = (<div className={css.jobSection}>
      <h3 className={css.subtitle}>Nya jobb</h3>
      <div className={css.listingCards}>
        {queryListingsError ? queryError : null}
        {queryListingsError ? queryError : null}
        {jobs.slice(0, 3).map(l => (
          <ListingCard
            className={css.listingCard}
            key={l.id.uuid}
            listing={l}
            renderSizes={renderSizes}
          />
        ))}
      </div>
      <div className={css.searchLink}>
          <NamedLink className={css.helperLink}
            name="SearchPage"
            to={{
              search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_listingCategory=job`,
            }}>
            <span>Se alla jobb</span>
          </NamedLink>
        </div>
    </div>);


    const companySection = (<div className={css.companySection}>
      <h3 className={css.subtitle}>Lokala f??retag</h3>
      <div className={css.companyCards}>
        {queryListingsError ? queryError : null}
        {companies.slice(0, 6).map(c => (
          <CompanyCard
            className={css.companyCard}
            key={c.id.uuid}
            listing={c}
            renderSizes={renderSizes}
          />
        ))}
      </div>
      <div className={css.searchLink}>
          <NamedLink
            className={css.helperLink}
            name="SearchPage"
            to={{
              search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_listingCategory=company&sort=meta_rating`,
            }}>
            <span>Se alla f??retag</span>
          </NamedLink>
        </div>
    </div>);

    const sectionPostJob = (
      <div className={css.newJobSectionBg}>
        <div className={css.newJobSection}>
          <div className={css.newJobContent}>
            <div className={css.newJobDescription}>
              <h1 className={css.pageTitle}>
                <FormattedMessage id="ProjectPage.createJobTitle" />
                {projectData.Projektnamn}
              </h1>
              <FormattedMessage id="ProjectPage.createJobDescription" />
            </div>
            <div className={css.newJobDesktop}>
              <NamedLink className={css.heroButton} name="NewListingPage">
                <FormattedMessage id="ProjectPage.newJob" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>);

    let status = null;
    let statusCard = css.statusCard;
    let statusArrow = css.statusArrow;
    let statusText = css.statusText;
    let statusDescription = null
    let jobSectionMaybe = null;
    let companySectionMaybe = null;
    let postJobMaybe = null;
    let findCompanyMaybe = null;

    if (new Date(projectData.Planerad_byggstart) < new Date()) {
      statusCard = css.statusCardPlanning;
      statusArrow = css.statusArrowPlanning;
      statusText = css.statusTextPlanning;
      status = 'Status: Planering';
      statusDescription = 'I planeringsfasen g??rs inventeringar, samr??d, tillst??ndsans??kningar och en detaljplanering om projektet beviljas tillst??nd.';
      jobSectionMaybe = jobSection;
      companySectionMaybe = companySection;
      postJobMaybe = sectionPostJob;
    } else if (new Date(projectData.Planerad_byggstart) > new Date() && new Date(projectData.Planerat_drifttagande) < new Date()) {
      statusCard = css.statusCardBuilding;
      statusArrow = css.statusArrowBuilding;
      statusText = css.statusTextBuilding;
      status = 'Status: Byggnation';
      statusDescription = 'I byggfasen sker upphandling av byggentreprenad, finansiering och byggnation av projektet.';
      jobSectionMaybe = jobSection;
      companySectionMaybe = companySection;
      postJobMaybe = sectionPostJob;
    } else if (new Date(projectData.Planerat_drifttagande) > new Date()) {
      statusCard = css.statusCardRunning;
      statusArrow = css.statusArrowRunning;
      statusText = css.statusTextRunning;
      status = 'Status: Drift';
      statusDescription = 'Projektet har f??rdigst??llts och ??r i drift. Underh??llsjobb kommer att beh??vas under hela driftperioden.';
      jobSectionMaybe = jobSection;
      companySectionMaybe = companySection;
      postJobMaybe = sectionPostJob;
    }

    const projectPageMedla = (
      <div>
        <div className={css.staticPageWrapper}>
          <div className={css.contentWrapper}>
            <div className={css.coverSection}>
              <div className={css.coverInfo}>
              <h3 className={css.welcomeTitle}>V??lkommen till</h3>
              <h1 className={css.projectTitle} >{projectData.Projektnamn}</h1>
              <p className={css.updatedDate}>Uppdaterad {projectData.Senast_sparad}</p>
                <p>{projectData.about}</p>
                <div className={css.step}>
                  <NamedLink
                    name="NotificationSettingsPage"
                    className={userIsSubscribed ? css.following : css.follow}
                  >
                    <span className={userIsSubscribed ? css.followingText : css.followText}><FormattedMessage id={userIsSubscribed ? "ProjectPage.followingProject" : "ProjectPage.followProject"} /></span>
                  </NamedLink>
                </div>
                <div className={css.step}>
                  <NamedLink className={css.following}
                    name="SearchPage"
                    to={{
                      search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_listingCategory=company&sort=meta_rating`,
                    }}
                  ><FormattedMessage id={"ProjectPage.findLocalCompanies"} />
                  </NamedLink>
                </div>
              </div>
              <img className={css.coverImage} src={projectData.image ? projectData.image : placeholderImg} alt={`Bild fr??n projektet ${projectData.Projektnamn}.`} />
            </div>

            <div className={css.contentMain}>
              {jobSectionMaybe}
              {companySectionMaybe}

              <h3 className={css.subtitle}>
                Popul??ra branscher
              </h3>
              <div className={css.serviceCards}>

                <NamedLink
                  className={css.serviceCard}
                  name="SearchPage"
                  to={{
                    search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_category=has_any:kostlogi&pub_listingCategory=company&sort=meta_rating`,
                  }}>
                  <span>Kost och logi</span>
                </NamedLink>

                <NamedLink
                  className={css.serviceCard}
                  name="SearchPage"
                  to={{
                    search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_category=has_any:bygg&pub_listingCategory=company&sort=meta_rating`,
                  }}>
                  <span>Byggentreprenad</span>
                </NamedLink>

                <NamedLink
                  className={css.serviceCard}
                  name="SearchPage"
                  to={{
                    search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_category=has_any:anlaggning&pub_listingCategory=company&sort=meta_rating`,
                  }}>
                  <span>Anl??ggning</span>
                </NamedLink>

                <NamedLink
                  className={css.serviceCard}
                  name="SearchPage"
                  to={{
                    search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_category=has_any:servicetjanster&pub_listingCategory=company&sort=meta_rating`,
                  }}>
                  <span>Servicetj??nster</span>
                </NamedLink>

                <NamedLink
                  className={css.serviceCard}
                  name="SearchPage"
                  to={{
                    search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_category=has_any:transport&pub_listingCategory=company&sort=meta_rating`,
                  }}>
                  <span>Transport</span>
                </NamedLink>

                <NamedLink
                  className={css.serviceCard}
                  name="SearchPage"
                  to={{
                    search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_category=has_any:ovrigt&pub_listingCategory=company&sort=meta_rating`,
                  }}>
                  <span>??vrigt</span>
                </NamedLink>
              </div>
              <div className={css.searchLink}>
                <NamedLink
                  className={css.helperLink}
                  name="SearchPage"
                  to={{
                    search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_listingCategory=company&sort=meta_rating`,
                  }}>
                  <span>Se alla branscher</span>
                </NamedLink>
              </div>

              <h3 id='projectDetails' className={css.subtitle}> Om projektet </h3>
              <b>{projectData.Projektnamn}</b>
              <div className={css.projectDetails}>
              <div className={css.description}>
                  <p>{projectData.about}</p>
                  <p><ExternalLink href={projectData.externalLink}>L??s mer</ExternalLink></p>
                </div>
                <div className={css.stats}>
                  <div className={css.statusBar}>
                    <div className={status === 'Status: Planering' ? css.statusCirclePlanning : css.statusCircle}></div>
                    <div className={status === 'Status: Planering' ? css.statusLinePlanning : css.statusLine}></div>
                    <div className={status === 'Status: Byggnation' ? css.statusCircleBuilding : css.statusCircle}></div>
                    <div className={status === 'Status: Byggnation' ? css.statusLineBuilding : css.statusLine}></div>
                    <div className={status === 'Status: Drift' ? css.statusCircleRunning : css.statusCircle}></div>
                  </div>
                  <div className={statusCard}>
                    <div className={statusArrow}></div>
                    <div className={statusText}> <b>{status}</b><br></br>{statusDescription}</div>
                  </div>
                  <ul className={css.items}>
                    <li><b>Projektnamn</b> {projectData.Projektnamn}</li>
                    <li><b>Projekt??r</b> {projectData.Verksamhetsut??vare}</li>
                    <li><b>Aktuella verk</b> {projectData.Aktuella_verk}</li>
                    <li><b>Ej koordinatsatta verk</b> {projectData.Antal_ej_koordinatsatta_verk}</li>
                    <li><b>Ber??knad ??rsproduktion</b> {projectData.Ber??knad_??rsproduktion_GWh} GWh</li>
                    <li><b>Uppm??tt ??rsproduktion</b> {projectData.Uppm??tt_??rsproduktion_GWh} GWh</li>
                    <li><b>Planerad byggstart</b> {projectData.Planerad_byggstart}</li>
                    <li><b>Planerat drifttagande</b> {projectData.Planerat_drifttagande}</li>
                    <li><b>??terkallat eller ej aktuellt</b> {projectData.Omr??det_ej_aktuellt_i_sin_helhet}</li>
                    <li><b>Kommun</b> {projectData.Kommun}</li>
                    <li><b>L??n</b> {projectData.L??n}</li>
                    <li><b>Elomr??de</b> {projectData.Elomr??de}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {postJobMaybe}
        {findCompanyMaybe}
      </div>
    );

    const projectPageExternal = (
      <div className={css.staticPageWrapper}>
        <div className={css.contentWrapper}>
          <div className={css.coverSection}>
            <div className={css.coverInfo}>
            <h3 className={css.welcomeTitle}>V??lkommen till</h3>
              <h1 className={css.projectTitle} >{projectData.Projektnamn}</h1>
              <p className={css.updatedDate}>Uppdaterad {projectData.Senast_sparad}</p>
              <p>Projektet drivs av {projectData.Verksamhetsut??vare} och best??r av {projectData.Aktuella_verk} vindkraftverk i {projectData.Kommun}, {projectData.L??n}.</p>
              <div className={css.step}>
                <ExternalLink
                  href={`https://www.google.com/search?q=kontakt+${projectData.Projektnamn}+${projectData.Verksamhetsut??vare.replace(/\s/g, '+')}`}
                  className={css.following}
                >
                  <span className={css.followText}><FormattedMessage id={"ProjectPage.externalService"} /></span>
                </ExternalLink>
              </div>
            </div>
            <img className={css.coverImage} src={projectData.image ? projectData.image : placeholderImg} alt={`Bild fr??n projektet ${projectData.Projektnamn}.`} />
          </div>

          <div className={css.contentMain}>

            <h3 id='projectDetails' className={css.subtitle}> Om projektet </h3>
            <b>{projectData.Projektnamn}</b>
            <div className={css.projectDetails}>
            <div className={css.description}>
                <p>Projektet drivs av {projectData.Verksamhetsut??vare} och best??r av {projectData.Aktuella_verk} vindkraftverk i {projectData.Kommun}, {projectData.L??n}.</p>
                <div className={css.projectOwnerInfo}>
                <p className={css.projectOwnerText}>Arbetar du i projektet?</p>
                <div className={css.projectOwnerLinks}>
                  <NamedLink
                  name="NewProjectUserPage"
                  className={css.projectOwnerLink} >
                    <FormattedMessage 
                      id={"ProjectPage.projectOwnerLink"}
                    />
                  </NamedLink>
                  <IconArrowHead direction="right" size="small" rootClassName={css.arrowIcon} />
                  </div>
              </div>
              </div>
              <div className={css.stats}>
                <ul className={css.items}>
                  <li><b>Projektnamn</b> {projectData.Projektnamn}</li>
                  <li><b>Projekt??r</b> {projectData.Verksamhetsut??vare}</li>
                  <li><b>Aktuella verk</b> {projectData.Aktuella_verk}</li>
                  <li><b>Ej koordinatsatta verk</b> {projectData.Antal_ej_koordinatsatta_verk}</li>
                  <li><b>Ber??knad ??rsproduktion</b> {projectData.Ber??knad_??rsproduktion_GWh} GWh</li>
                  <li><b>Uppm??tt ??rsproduktion</b> {projectData.Uppm??tt_??rsproduktion_GWh} GWh</li>
                  <li><b>Planerad byggstart</b> {projectData.Planerad_byggstart}</li>
                  <li><b>Planerat drifttagande</b> {projectData.Planerat_drifttagande}</li>
                  <li><b>??terkallat eller ej aktuellt</b> {projectData.Omr??det_ej_aktuellt_i_sin_helhet}</li>
                  <li><b>Kommun</b> {projectData.Kommun}</li>
                  <li><b>L??n</b> {projectData.L??n}</li>
                  <li><b>Elomr??de</b> {projectData.Elomr??de}</li>
                  <p className={css.updatedDate}>K??lla: Vindbrukskollen</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    let content;

    if (userShowError && userShowError.status === 404) {
      return <NotFoundPage />;
    } else if (userShowError || queryListingsError) {
      content = (
        <p className={css.error}>
          <FormattedMessage id="ProfilePage.loadingDataFailed" />
        </p>
      );
    } else if (currentProject === medlaProject) {
      content = projectPageMedla;
    } else {
      content = projectPageExternal;
    }

    const schemaTitle = intl.formatMessage(
      {
        id: 'ProjectPage.schemaTitle',
      },
      {
        name: projectData.Projektnamn,
        siteTitle: config.siteTitle,
      }
    );

    return (
      <Page
        scrollingDisabled={scrollingDisabled}
        title={schemaTitle}
        schema={{
          '@context': 'http://schema.org',
          '@type': 'ProjectPage',
          name: schemaTitle,
        }}
      >
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="ProjectPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>{content}</LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </Page>
    );
  }
}

ProjectPageComponent.defaultProps = {
  currentUser: null,
  projectId: null,
  user: null,
  userShowError: null,
  queryListingsError: null,
};

const { string, bool, arrayOf, number, shape } = PropTypes;

ProjectPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  currentUser: propTypes.currentUser,
  projectId: string.isRequired,
  user: propTypes.user,
  userShowError: propTypes.error,
  queryListingsError: propTypes.error,
  listings: arrayOf(propTypes.listing).isRequired,

  // form withViewport
  viewport: shape({
    width: number.isRequired,
    height: number.isRequired,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUser } = state.user;
  const {
    userId,
    userShowError,
    queryListingsError,
    userListingRefs,
  } = state.ProjectPage;
  const userMatches = getMarketplaceEntities(state, [{ type: 'user', id: userId }]);
  const user = userMatches.length === 1 ? userMatches[0] : null;
  const listings = getMarketplaceEntities(state, userListingRefs);
  return {
    scrollingDisabled: isScrollingDisabled(state),
    currentUser,
    user,
    userShowError,
    queryListingsError,
    listings,
  };
};

const ProjectPage = compose(
  connect(mapStateToProps),
  withViewport,
  injectIntl
)(ProjectPageComponent);

export default ProjectPage;
