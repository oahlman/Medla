import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import {
  ListingCard,
  CompanyCard,
  Page,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink
} from '../../components';
import { TopbarContainer } from '../../containers';
import { getListingsById,  } from './ProjectPage.duck';

import css from './ProjectPage.module.css';
import image from './images/bjornberget.jpg';

export class ProjectPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { listingMenuOpen: null };
    this.onToggleMenu = this.onToggleMenu.bind(this);
  }

  onToggleMenu(listing) {
    this.setState({ listingMenuOpen: listing });
  }

  render() {
    const {
      listings,
      queryInProgress,
      queryListingsError,
      queryParams,
      params,
      scrollingDisabled,
      intl,
      currentUser,
    } = this.props;


    const loadingResults = (
      <h2>
        <FormattedMessage id="ManageListingsPage.loadingOwnListings" />
      </h2>
    );

    const queryError = (
      <h2 className={css.error}>
        <FormattedMessage id="ManageListingsPage.queryError" />
      </h2>
    );

    const panelWidth = 62.5;
    // Render hints for responsive image
    const renderSizes = [
      `(max-width: 767px) 100vw`,
      `(max-width: 1920px) ${panelWidth / 2}vw`,
      `${panelWidth / 3}vw`,
    ].join(', ');

    const userAttributes = currentUser && currentUser.attributes;
  const userSubscriptions = userAttributes && currentUser.attributes.profile.publicData.amenities;
  const userIsSubscribed = userAttributes && userSubscriptions.includes('bjornberget');
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

    <div
      className={
        userIsSubscribed ? css.hidden : css.emailUnverified
      }
    >
      <FormattedMessage id="ProjectPage.callToSubscribe" />
      <span>
      <br></br>
        <NamedLink className={css.settingsLink} name="NotificationSettingsPage">
          <FormattedMessage id="SectionProfileProgress.changeLink" />
        </NamedLink>
      </span>
    </div>

    <div
      className={css.pendingEmailUnverified}
    >
      <FormattedMessage id="Söker du hjälp i projektet?" />
      <span>
      <br></br>
        <NamedLink className={css.settingsLink} name="NewListingPage">
          <FormattedMessage id="Skapa ett uppdrag" />
        </NamedLink>
      </span>
    </div>
  </div>);
    const jobs = listings.filter(listing => listing.attributes.publicData.listingCategory !== 'company');
    const companies = listings.filter(listing => listing.attributes.publicData.listingCategory === 'company');

    return (
      <Page
        scrollingDisabled={scrollingDisabled}
        title="ProjectPage"
        schema={{
          '@context': 'http://schema.org',
          '@type': 'ItemPage',
          description: 'Björnberget',
          name: 'ProjectPage',
        }}>
        <LayoutSingleColumn>
          <LayoutWrapperTopbar>
            <TopbarContainer currentPage="ProjectPage" />
          </LayoutWrapperTopbar>
          <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Välkommen till ProjektTest.</h1>
        </LayoutWrapperMain>
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </Page>
    );
  }
}

ProjectPageComponent.defaultProps = {
  listings: [],
  queryListingsError: null,
  queryParams: null,
  params: null,
  closingListing: null,
  closingListingError: null,
  openingListing: null,
  openingListingError: null,
};

const { arrayOf, bool, func, object, shape, string } = PropTypes;

ProjectPageComponent.propTypes = {
  listings: arrayOf(propTypes.listing),
  queryInProgress: bool.isRequired,
  queryListingsError: propTypes.error,
  queryParams: object,
  params: object,
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const {
    currentPageResultIds,
    listingRefs,
    queryInProgress,
    queryListingsError,
    queryParams,
    params,
    openingListing,
    openingListingError,
    closingListing,
    closingListingError,
  } = state.ProjectPage;
  const { currentUser } = state.user;
  const listings = getListingsById(state, currentPageResultIds);
  return {
    currentPageResultIds,
    listingRefs,
    listings,
    currentUser,
    queryInProgress,
    queryListingsError,
    queryParams,
    params,
    scrollingDisabled: isScrollingDisabled(state),
    openingListing,
    openingListingError,
    closingListing,
    closingListingError,
  };
};

const ProjectPage = compose(
  connect(
    mapStateToProps,
  ),
  injectIntl
)(ProjectPageComponent);

export default ProjectPage;
