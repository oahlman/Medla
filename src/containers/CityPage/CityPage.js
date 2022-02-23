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
import { medlaCities } from '../../cities-config';
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

import css from './CityPage.module.css';

const MAX_MOBILE_SCREEN_WIDTH = 768;

export class CityPageComponent extends Component {
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

    const medlaCity = medlaCities.findIndex(id => id.Områdes_ID === projectId);
    const currentProject = medlaCity;
    const projectData = medlaCities[currentProject];

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
      <h3 className={css.subtitle}>Lokala företag</h3>
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
              search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_listingCategory=company`,
            }}>
            <span>Se alla företag</span>
          </NamedLink>
        </div>
    </div>);

    const sectionPostJob = (
      <div className={css.newJobSectionBg}>
        <div className={css.newJobSection}>
          <div className={css.newJobContent}>
            <div className={css.newJobDescription}>
              <h1 className={css.pageTitle}>
                <FormattedMessage id="CityPage.createJobTitle" />
                {projectData.Projektnamn}
              </h1>
              <FormattedMessage id="CityPage.createJobDescription" />
            </div>
            <div className={css.newJobDesktop}>
              <NamedLink className={css.heroButton} name="NewListingPage">
                <FormattedMessage id="CityPage.newJob" />
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
      statusDescription = 'I planeringsfasen görs inventeringar, samråd, tillståndsansökningar och en detaljplanering om projektet beviljas tillstånd.';
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
      statusDescription = 'Projektet har färdigställts och är i drift. Underhållsjobb kommer att behövas under hela driftperioden.';
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
              <h3 className={css.welcomeTitle}>Välkommen till</h3>
              <h1 className={css.projectTitle} >{projectData.Projektnamn}</h1>
              <p className={css.updatedDate}>Uppdaterad {projectData.Senast_sparad}</p>
                <p>{projectData.about}</p>
                <div className={css.step}>
                  <NamedLink
                    name="NotificationSettingsPage"
                    className={userIsSubscribed ? css.following : css.follow}
                  >
                    <span className={userIsSubscribed ? css.followingText : css.followText}><FormattedMessage id={userIsSubscribed ? "CityPage.followingProject" : "CityPage.followProject"} /></span>
                  </NamedLink>
                </div>
                <div className={css.step}>
                  <NamedLink className={css.following}
                    name="SearchPage"
                    to={{
                      search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_listingCategory=company`,
                    }}
                  ><FormattedMessage id={"CityPage.findLocalCompanies"} />
                  </NamedLink>
                </div>
              </div>
              <img className={css.coverImage} src={projectData.image ? projectData.image : placeholderImg} alt={`Bild från projektet ${projectData.Projektnamn}.`} />
            </div>

            <div className={css.contentMain}>
              {jobSectionMaybe}
              {companySectionMaybe}
            </div>
          </div>
        </div>
        {postJobMaybe}
        {findCompanyMaybe}
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
    } else {
      content = projectPageMedla;
    }

    const schemaTitle = intl.formatMessage(
      {
        id: 'CityPage.schemaTitle',
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
          '@type': 'CityPage',
          name: schemaTitle,
        }}
      >
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="CityPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>{content}</LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </Page>
    );
  }
}

CityPageComponent.defaultProps = {
  currentUser: null,
  projectId: null,
  user: null,
  userShowError: null,
  queryListingsError: null,
};

const { string, bool, arrayOf, number, shape } = PropTypes;

CityPageComponent.propTypes = {
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

const CityPage = compose(
  connect(mapStateToProps),
  withViewport,
  injectIntl
)(CityPageComponent);

export default CityPage;
