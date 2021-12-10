import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { REVIEW_TYPE_OF_PROVIDER, REVIEW_TYPE_OF_CUSTOMER, propTypes } from '../../util/types';
import { ensureCurrentUser, ensureUser } from '../../util/data';
import { withViewport } from '../../util/contextHelpers';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { projects } from './ProjectConfig';
import { filters } from '../../marketplace-custom-config';
import image from '../../assets/background-1440.jpg'
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
  Reviews,
  ButtonTabNavHorizontal,
  ExternalLink,
  IconCheckmark,
} from '../../components';
import { TopbarContainer, NotFoundPage } from '../../containers';
import config from '../../config';

import css from './ProjectPage.module.css';

const MAX_MOBILE_SCREEN_WIDTH = 768;

export class ProjectPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // keep track of which reviews tab to show in desktop viewport
      showReviewsType: REVIEW_TYPE_OF_PROVIDER,
    };

    this.showOfProviderReviews = this.showOfProviderReviews.bind(this);
    this.showOfCustomerReviews = this.showOfCustomerReviews.bind(this);
  }


  showOfProviderReviews() {
    this.setState({
      showReviewsType: REVIEW_TYPE_OF_PROVIDER,
    });
  }

  showOfCustomerReviews() {
    this.setState({
      showReviewsType: REVIEW_TYPE_OF_CUSTOMER,
    });
  }

  render() {
    const {
      scrollingDisabled,
      currentUser,
      projectUrl,
      user,
      userShowError,
      queryListingsError,
      listings,
      reviews,
      queryReviewsError,
      viewport,
      intl,
    } = this.props;
    const ensuredCurrentUser = ensureCurrentUser(currentUser);
    const profileUser = ensureUser(user);
    const isCurrentUser =
      ensuredCurrentUser.id && profileUser.id && ensuredCurrentUser.id.uuid === profileUser.id.uuid;
    const displayName = profileUser.attributes.profile.displayName;
    const bio = profileUser.attributes.profile.bio;
    const hasBio = !!bio;
    const hasListings = listings.length > 0;
    const isMobileLayout = viewport.width < MAX_MOBILE_SCREEN_WIDTH;
    const panelWidth = 62.5;
    // Render hints for responsive image
    const renderSizes = [
      `(max-width: 767px) 100vw`,
      `(max-width: 1920px) ${panelWidth / 2}vw`,
      `${panelWidth / 3}vw`,
    ].join(', ');

    const currentProject = projects.findIndex(id => id.id === projectUrl);
    const projectData = projects[currentProject];
    const businessAreas = filters[filters.findIndex(id => id.id === 'category')];
    const businessAreaLabels = businessAreas.config.options.filter(id => projectData.popularBusinessAreas.includes(id.key));
    const projectName = projectData.name;

    const userAttributes = currentUser && currentUser.attributes;
  const userSubscriptions = userAttributes && currentUser.attributes.profile.publicData.amenities;
  const userIsSubscribed = userSubscriptions && userSubscriptions.includes(projectData.id);

  let projectDetailsLink = null
  if (typeof document !== 'undefined') {
    projectDetailsLink = document.getElementById("projectDetails");
  };


  const subscribeToProject = (<div className={css.progressCard}>
    <div
      className={
        userIsSubscribed ? css.emailVerified : css.hidden
      }
    >
      <FormattedMessage id="ProjectPage.alreadySubscribed" />
      <span>
      <br></br>
        <NamedLink className={css.settingsLink} name="NotificationSettingsPage">
          <FormattedMessage id="SectionProfileProgress.changeLink" />

        </NamedLink>
      </span>
    </div>
    <div className={css.step}>
          <NamedLink
            name="NotificationSettingsPage"
            className={css.heroButton}
          >
            <FormattedMessage id={userIsSubscribed ? "ProjectPage.followingProject" : "ProjectPage.followProject"} />
          </NamedLink>
    </div>
        <NamedLink className={css.settingsLink} name="ProfileSettingsPage" >
          <FormattedMessage id="ProjectPage.readMore" />
        </NamedLink>
  </div>);
    const jobs = listings.filter(listing => listing.attributes.publicData.listingCategory !== 'company');
    const companies = listings.filter(listing => listing.attributes.publicData.listingCategory === 'company');

    const editLinkMobile = isCurrentUser ? (
      <NamedLink className={css.editLinkMobile} name="ProfileSettingsPage">
        <FormattedMessage id="ProfilePage.editProfileLinkMobile" />
      </NamedLink>
    ) : null;
    const editLinkDesktop = isCurrentUser ? (
      <NamedLink className={css.editLinkDesktop} name="ProfileSettingsPage">
        <FormattedMessage id="ProfilePage.editProfileLinkDesktop" />
      </NamedLink>
    ) : null;

    const asideContent = (
      <div className={css.asideContent}>
        <AvatarLarge className={css.avatar} user={user} disableProfileLink />
        <h1 className={css.mobileHeading}>
          {displayName ? (
            <FormattedMessage id="ProfilePage.mobileHeading" values={{ name: displayName }} />
          ) : null}
        </h1>
        {editLinkMobile}
        {editLinkDesktop}
      </div>
    );

    const listingsContainerClasses = classNames(css.listingsContainer, {
      [css.withBioMissingAbove]: !hasBio,
    });

    const reviewsOfProvider = reviews.filter(r => r.attributes.type === REVIEW_TYPE_OF_PROVIDER);

    const reviewsOfCustomer = reviews.filter(r => r.attributes.type === REVIEW_TYPE_OF_CUSTOMER);

    const desktopReviewTabs = [
      {
        text: (
          <h3 className={css.desktopReviewsTitle}>
            <FormattedMessage
              id="ProfilePage.reviewsOfProviderTitle"
              values={{ count: reviewsOfProvider.length }}
            />
          </h3>
        ),
        selected: this.state.showReviewsType === REVIEW_TYPE_OF_PROVIDER,
        onClick: this.showOfProviderReviews,
      },
      {
        text: (
          <h3 className={css.desktopReviewsTitle}>
            <FormattedMessage
              id="ProfilePage.reviewsOfCustomerTitle"
              values={{ count: reviewsOfCustomer.length }}
            />
          </h3>
        ),
        selected: this.state.showReviewsType === REVIEW_TYPE_OF_CUSTOMER,
        onClick: this.showOfCustomerReviews,
      },
    ];

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
      <div className={css.searchLink}>
      <NamedLink className={css.helperLink}
        name="SearchPage"
        to={{
          search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_listingCategory=job`,
        }}>
        <span>Se alla jobb</span>
      </NamedLink>
      </div>
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
      <div className={css.searchLink}>
      <NamedLink
        className={css.helperLink}
        name="SearchPage"
        to={{
          search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_listingCategory=company`,
        }}>
        <span>Se alla företag</span>
      </NamedLink>
      </div>
      </div>
      </div>);

const sectionPostJob = (
  <div className={css.newJobSectionBg}>
  <div className={css.newJobSection}>
  <div className={css.newJobContent}>
  <div className={css.newJobDescription}>
  <h1 className={css.pageTitle}>
    <FormattedMessage id="ProjectPage.createJobTitle" />
    {projectName}
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

  const sectionFindCompany = (
  <div className={css.newJobSectionBg}>
  <div className={css.newJobSection}>
  <div className={css.newJobContent}>
  <div className={css.newJobDescription}>
  <h1 className={css.pageTitle}>
    <FormattedMessage id="ProjectPage.findCompanyTitle" />
    {projectName}
  </h1>
  <FormattedMessage id="ProjectPage.findCompanyDescription" />
  </div>
  <div className={css.newJobDesktop}>
      <NamedLink
            className={css.heroButton}
            name="SearchPage"
            to={{
              search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_listingCategory=company`,
            }}>
            <FormattedMessage id="ProjectPage.findCompanies" />
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

    if (projectData.stats.currentStatus === 'planning') {
      statusCard = css.statusCardPlanning;
      statusArrow = css.statusArrowPlanning;
      statusText = css.statusTextPlanning;
      status = 'Status: Planering';
      statusDescription = 'I planeringsfasen görs inventeringar, samråd, tillståndsansökningar och en detaljplanering om projektet beviljas tillstånd.';
      findCompanyMaybe = sectionFindCompany;
    } else if (projectData.stats.currentStatus === 'building') {
      statusCard = css.statusCardBuilding;
      statusArrow = css.statusArrowBuilding;
      statusText = css.statusTextBuilding;
      status = 'Status: Byggnation';
      statusDescription = 'I byggfasen sker upphandling av byggentreprenad, finansiering och byggnation av projektet.';
      jobSectionMaybe = jobSection;
      companySectionMaybe = companySection;
      postJobMaybe = sectionPostJob;
    } else if (projectData.stats.currentStatus === 'running') {
      statusCard = css.statusCardRunning;
      statusArrow = css.statusArrowRunning;
      statusText = css.statusTextRunning;
      status = 'Status: Drift';
      statusDescription = 'Projektet har färdigställts och är i drift. Underhållsjobb kommer att behövas under hela driftperioden.';
      jobSectionMaybe = jobSection;
      companySectionMaybe = companySection;
      postJobMaybe = sectionPostJob;
    }

    const mainContent = (
      <div>
      <div className={css.staticPageWrapper}>
      <div className={css.contentWrapper}>
            <div className={css.coverSection}>
              <div className={css.coverInfo}>
              <h1 className={css.pageTitle} >Välkommen till {projectName}</h1>
              <p>{projectData.description.summary}</p>
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
                          search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_listingCategory=company`,
                        }}
                      ><FormattedMessage id={"ProjectPage.findLocalCompanies"} />
                      </NamedLink>
                </div>
              </div>
              <img className={css.coverImage} src={projectData.image} alt={`Bild från projektet ${projectName}.`} />
            </div>

            <div className={css.contentMain}>
              {jobSectionMaybe}
              {companySectionMaybe}
              <h3 className={css.subtitle}>
                Populära branscher
              </h3>
              <div className={css.serviceCards}>

                  <NamedLink
                    className={css.serviceCard}
                    name="SearchPage"
                    to={{
                      search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_category=has_any:${businessAreaLabels[0].key}&pub_listingCategory=company`,
                    }}>
                    <span>{businessAreaLabels[0].label}</span>
                  </NamedLink>

                  <NamedLink
                    className={css.serviceCard}
                    name="SearchPage"
                    to={{
                      search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_category=has_any:${businessAreaLabels[1].key}&pub_listingCategory=company`,
                    }}>
                    <span>{businessAreaLabels[1].label}</span>
                  </NamedLink>

                  <NamedLink
                    className={css.serviceCard}
                    name="SearchPage"
                    to={{
                      search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_category=has_any:${businessAreaLabels[2].key}&pub_listingCategory=company`,
                    }}>
                    <span>{businessAreaLabels[2].label}</span>
                  </NamedLink>

                  <NamedLink
                    className={css.serviceCard}
                    name="SearchPage"
                    to={{
                      search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_category=has_any:${businessAreaLabels[3].key}&pub_listingCategory=company`,
                    }}>
                    <span>{businessAreaLabels[3].label}</span>
                  </NamedLink>

                  <NamedLink
                    className={css.serviceCard}
                    name="SearchPage"
                    to={{
                      search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_category=has_any:${businessAreaLabels[4].key}&pub_listingCategory=company`,
                    }}>
                    <span>{businessAreaLabels[4].label}</span>
                  </NamedLink>

                  <NamedLink
                    className={css.serviceCard}
                    name="SearchPage"
                    to={{
                      search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_category=has_any:${businessAreaLabels[5].key}&pub_listingCategory=company`,
                    }}>
                    <span>{businessAreaLabels[5].label}</span>
                  </NamedLink>
              </div>
              <div className={css.searchLink}>
              <NamedLink
                className={css.helperLink}
                name="SearchPage"
                to={{
                  search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_listingCategory=company`,
                }}>
                <span>Se alla branscher</span>
              </NamedLink>
              </div>

              <h3 id='projectDetails' className={css.subtitle}> Om projektet </h3>
              <b>{projectName}</b>
              <div className={css.projectDetails}>
              <div className={css.stats}>
                <div className={css.statusBar}>
                  <div className={projectData.stats.currentStatus === 'planning' ? css.statusCirclePlanning : css.statusCircle}></div>
                  <div className={projectData.stats.currentStatus === 'planning' ? css.statusLinePlanning : css.statusLine}></div>
                  <div className={projectData.stats.currentStatus === 'building' ? css.statusCircleBuilding : css.statusCircle}></div>
                  <div className={projectData.stats.currentStatus === 'building' ? css.statusLineBuilding : css.statusLine}></div>
                  <div className={projectData.stats.currentStatus === 'running' ? css.statusCircleRunning : css.statusCircle}></div>
                </div>
                <div className={statusCard}>
                <div className={statusArrow}></div>
                <div className={statusText}> <b>{status}</b><br></br>{statusDescription}</div>
                </div>
              <ul className={css.items}>
                <li><b>Storlek</b> {projectData.stats.turbines} turbiner</li>
                <li><b>Effekt</b> {projectData.stats.mw} MW</li>
                <li><b>Byggperiod</b> {projectData.stats.constructionPeriod.start}—{projectData.stats.constructionPeriod.end}</li>
                <li><b>Plats</b> {projectData.stats.region}</li>
              </ul>
              </div>
              <div className={css.description}>
              <p>{projectData.description.about.aboutProject}</p>

              <p><ExternalLink href={projectData.description.about.externalLink}>{projectData.description.about.linkText}</ExternalLink></p>
              </div>
              </div>
            </div>
          </div>
      </div>
        {postJobMaybe}
        {findCompanyMaybe}
      </div>
    );

    const mainContentExternal = (
      <div className={css.staticPageWrapper}>
      <div className={css.contentWrapper}>
            <div className={css.coverSection}>
              <div className={css.coverInfo}>
              <h1 className={css.pageTitle} >Välkommen till {projectName}</h1>
              <p>{projectData.description.summary}</p>
              <p className={css.externalService}>Projektet har en extern databas för leverantörer</p>
              <div className={css.step}>
                      <ExternalLink
                        href={projectData.description.about.externalServiceLink}
                        className={css.following}
                      >
                        <span className={css.followText}><FormattedMessage id={"ProjectPage.externalService"} /></span>
                      </ExternalLink>
                </div>
              </div>
              <img className={css.coverImage} src={projectData.image} alt={`Bild från projektet ${projectName}.`} />
            </div>

            <div className={css.contentMain}>

              <h3 id='projectDetails' className={css.subtitle}> Om projektet </h3>
              <b>{projectName}</b>
              <div className={css.projectDetails}>
              <div className={css.stats}>
              <ul className={css.items}>
                <li><b>Storlek</b> {projectData.stats.turbines} turbiner</li>
                <li><b>Effekt</b> {projectData.stats.mw} MW</li>
                <li><b>Byggperiod</b> {projectData.stats.constructionPeriod.start}—{projectData.stats.constructionPeriod.end}</li>
                <li><b>Plats</b> {projectData.stats.region}</li>
              </ul>
              </div>
              <div className={css.description}>
              <p>{projectData.description.about.aboutProject}</p>

              <p><ExternalLink href={projectData.description.about.externalLink}>{projectData.description.about.linkText}</ExternalLink></p>
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
    } else if (projectData.type === 'external') {
      content = mainContentExternal;
    } else {
      content = mainContent;
    }

    const schemaTitle = intl.formatMessage(
      {
        id: 'ProjectPage.schemaTitle',
      },
      {
        name: projectName,
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
  projectUrl: null,
  user: null,
  userShowError: null,
  queryListingsError: null,
  reviews: [],
  queryReviewsError: null,
};

const { string, bool, arrayOf, number, shape } = PropTypes;

ProjectPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  currentUser: propTypes.currentUser,
  projectUrl: string.isRequired,
  user: propTypes.user,
  userShowError: propTypes.error,
  queryListingsError: propTypes.error,
  listings: arrayOf(propTypes.listing).isRequired,
  reviews: arrayOf(propTypes.review),
  queryReviewsError: propTypes.error,

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
    reviews,
    queryReviewsError,
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
    reviews,
    queryReviewsError,
  };
};

const ProjectPage = compose(
  connect(mapStateToProps),
  withViewport,
  injectIntl
)(ProjectPageComponent);

export default ProjectPage;
