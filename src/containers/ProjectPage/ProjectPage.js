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

  console.log(projectDetailsLink);

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

    const reviewsError = (
      <p className={css.error}>
        <FormattedMessage id="ProfilePage.loadingReviewsFailed" />
      </p>
    );

    const reviewsOfProvider = reviews.filter(r => r.attributes.type === REVIEW_TYPE_OF_PROVIDER);

    const reviewsOfCustomer = reviews.filter(r => r.attributes.type === REVIEW_TYPE_OF_CUSTOMER);

    const mobileReviews = (
      <div className={css.mobileReviews}>
        <h2 className={css.mobileReviewsTitle}>
          <FormattedMessage
            id="ProfilePage.reviewsOfProviderTitle"
            values={{ count: reviewsOfProvider.length }}
          />
        </h2>
        {queryReviewsError ? reviewsError : null}
        <Reviews reviews={reviewsOfProvider} />
        <h2 className={css.mobileReviewsTitle}>
          <FormattedMessage
            id="ProfilePage.reviewsOfCustomerTitle"
            values={{ count: reviewsOfCustomer.length }}
          />
        </h2>
        {queryReviewsError ? reviewsError : null}
        <Reviews reviews={reviewsOfCustomer} />
      </div>
    );

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

    const desktopReviews = (
      <div className={css.desktopReviews}>
        <ButtonTabNavHorizontal className={css.desktopReviewsTabNav} tabs={desktopReviewTabs} />

        {queryReviewsError ? reviewsError : null}

        {this.state.showReviewsType === REVIEW_TYPE_OF_PROVIDER ? (
          <Reviews reviews={reviewsOfProvider} />
        ) : (
          <Reviews reviews={reviewsOfCustomer} />
        )}
      </div>
    );

    var status = projectData.stats.currentStatus;

    let projectStatusText = null
    if (status === 'pending') {
      projectStatusText = css.pending;
      status = 'Söker tillstånd';
    } else if (status === 'planning') {
      projectStatusText = css.planning;
      status = 'Planerad byggstart';
    } else if (status === 'building') {
      projectStatusText = css.building;
      status = 'Under byggnation';
    } else if (status === 'running') {
      projectStatusText = css.running;
      status = 'I drift';
    }

    const mainContent = (
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
                    <span className={css.following} onClick={() => projectDetailsLink.scrollIntoView({ block: 'start', behavior: 'smooth' })}>
                      <FormattedMessage id="ProjectPage.readMore" />
                    </span>
              </div>
              <img className={css.coverImage} src={projectData.image} alt={`Bild från projektet ${projectName}.`} />
            </div>

            <div className={css.contentMain}>

              <h3 className={css.subtitle}>Nya uppdrag</h3>
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
                <span>Se alla uppdrag</span>
              </NamedLink>
              </div>
              </div>

              <h3 className={css.subtitle}>Nya företag</h3>
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

              <h3 className={css.subtitle}>
                Populära tjänster
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
                  search: `?address=${projectName}&bounds=${projectData.bounds.ne},${projectData.bounds.sw}&pub_category=has_any&pub_listingCategory=company`,
                }}>
                <span>Se alla tjänster</span>
              </NamedLink>
              </div>

              <h3 id='projectDetails' className={css.subtitle}> Om projektet </h3>
              <b>{projectName}</b>
              <div className={css.projectDetails}>
              <div className={css.stats}>
              <div className={css.newJobDesktop}>
                  <NamedLink className={css.newJob} name="NewListingPage">
                    <FormattedMessage id="ProjectPage.newJob" />
                  </NamedLink>
              </div>
              <ul className={css.items}>
                <li><b>Status</b> {status}</li>
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
              <div className={css.newJobMobile}>
                  <NamedLink className={css.newJob} name="NewListingPage">
                    <FormattedMessage id="ProjectPage.newJob" />
                  </NamedLink>
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

    console.log('projectName', projectName)

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
