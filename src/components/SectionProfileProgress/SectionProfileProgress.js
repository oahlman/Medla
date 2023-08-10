import React from 'react';
import { array, bool, func, number, object, shape, string } from 'prop-types';
import { compose } from 'redux';
import { LISTING_PAGE_PENDING_APPROVAL_VARIANT, LISTING_PAGE_DRAFT_VARIANT, LISTING_PAGE_PARAM_TYPE_EDIT, createSlug, stringify } from '../../util/urlHelpers';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { propTypes } from '../../util/types';
import { NamedLink } from '..';

import { sendVerificationEmail, hasCurrentUserErrors, verifyPhoneNumber } from '../../ducks/user.duck';
import { logout, authenticationInProgress } from '../../ducks/Auth.duck';
import { manageDisableScrolling } from '../../ducks/UI.duck';
import { ensureCurrentUser, ensureOwnListing } from '../../util/data';
import { FormattedMessage } from '../../util/reactIntl';
import css from './SectionProfileProgress.module.css';
import classNames from 'classnames';
import {
  MenuItem,

} from '../../components';
import ModalMissingAccountInformation from '../ModalMissingAccountInformation/ModalMissingAccountInformation';

export const SectionProfileProgress = props => {
  const {
    authInProgress,
    currentPage,
    currentSearchParams,
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
    currentUserCompanyListing,
    history,
    isAuthenticated,
    authScopes,
    hasGenericError,
    location,
    notificationCount,
    onLogout,
    onManageDisableScrolling,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    onResendVerificationEmail,
    image,
    ...rest
  } = props;

  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };
  const companyListing = currentUserCompanyListing && currentUserCompanyListing[0];
  const listingLoaded = companyListing && companyListing.attributes;
  const user = ensureCurrentUser(currentUser);
  const transientUserProfileCategory = user.attributes.profile.publicData;
  const transientUserProfileAmenities = user.attributes.profile.publicData;

  const transientUserCategory = { ...user, category: transientUserProfileCategory };
  const transientUserAmenities = { ...user, amenities: transientUserProfileAmenities };
  const profileCategory = transientUserCategory;
  const isPendingApprovalVariant = listingLoaded ? companyListing.attributes.state === LISTING_PAGE_PENDING_APPROVAL_VARIANT : null;
  const isDraftVariant = listingLoaded ? companyListing.attributes.state === LISTING_PAGE_DRAFT_VARIANT : null;
  const isVariant = isPendingApprovalVariant || isDraftVariant;

  let companyPage = "ListingBasePage";
  if (listingLoaded && isVariant) {
    companyPage = "EditListingPage";
  } else if (listingLoaded && !isVariant) {
    companyPage = "EditListingPage";
  }

  let missingInformationText = 'ModalMissingInformation.companyImprovement';
  let tab = 'description';
  let missingInformation = true;
  if (listingLoaded && companyListing.attributes.description === null) {
    missingInformationText = 'ModalMissingInformation.description';
    tab = 'description';
  } else if (listingLoaded && !companyListing.attributes.publicData.offer1) {
    missingInformationText = 'ModalMissingInformation.services';
    tab = 'pricing';
  } else if (listingLoaded && !companyListing.attributes.publicData.category) {
    missingInformationText = 'ModalMissingInformation.businessAreas';
    tab = 'policy';
  } else if (listingLoaded && !companyListing.attributes.publicData.companyNumber) {
    missingInformationText = 'ModalMissingInformation.organisation';
    tab = 'location';
  } else {
    missingInformationText = 'ModalMissingInformation.photos';
    tab = 'photos';
    missingInformation = false;
  }

  const profileAmenities = transientUserAmenities;
  const profileImageId = user.profileImage ? user.profileImage.id : null;
  const profileImage = image || { imageId: profileImageId };
  console.log('user', user, 'listing', companyListing);
  const companyParams = listingLoaded ? { slug: createSlug(companyListing.attributes.title), id: companyListing.id.uuid, variant: LISTING_PAGE_PENDING_APPROVAL_VARIANT, type: LISTING_PAGE_PARAM_TYPE_EDIT, tab: tab } : "";
  


  const categoryNumber = user?.attributes?.profile?.publicData?.category;
  const amenitiesNumber = user?.attributes?.profile?.publicData?.amenities;
  const hasCategoryorAmemities = ((amenitiesNumber && amenitiesNumber.length > 0 ) || (categoryNumber && categoryNumber.length > 0)) ? true : false;

  const imageVerified = user.profileImage;

  var hour = new Date().getHours();
  const morning = hour >= 1 && hour <= 11;
  const day = hour >= 12 && hour <= 16;
  const evening = hour >= 17 && hour <= 24;

  let greeting = null;
  if (morning) {
    greeting = (<FormattedMessage id="SectionProfileProgress.greetingMorning" />);
  } else if (evening) {
    greeting = (<FormattedMessage id="SectionProfileProgress.greetingEvening" />);
  } else {
    greeting = (<FormattedMessage id="SectionProfileProgress.greetingDay" />);
  };

  return isAuthenticated ? (

      <div>
        <h1 className={css.heroMainTitle}>
          {greeting}
        </h1>
      <h1 className={css.sectionHeadline}>
          <FormattedMessage id="ModalMissingInformation.improveProfile" />
        </h1>
      <div className={css.containerProgressCards}>



        <NamedLink className={css.progressCard1} name="ProfileSettingsPage">
          <div className={imageVerified ? css.emailVerified : css.hidden}>
            <FormattedMessage id="ModalMissingInformation.profileImageStatus" />
            <br></br>
              <NamedLink className={css.settingsLink} name="ProfileSettingsPage">

                <FormattedMessage className={css.settingsLink} id="SectionProfileProgress.changeLink" />

              </NamedLink>

          </div>


          <div className={imageVerified ? css.hidden : css.emailUnverified}>
            <FormattedMessage id="ModalMissingInformation.profileImageStatusNull" />
            <br></br>
              <NamedLink className={css.settingsLink} name="ProfileSettingsPage">
                <FormattedMessage id="SectionProfileProgress.fixLink" />

              </NamedLink>


          </div>
          </NamedLink>



          <NamedLink className={css.progressCard2} name="NotificationSettingsPage">
          <div
            className={
              hasCategoryorAmemities ? css.emailVerified : css.hidden
            }
          >
            <FormattedMessage id="ModalMissingInformation.profileCategoryStatus" />
            <span>
            <br></br>
              <NamedLink className={css.settingsLink} name="NotificationSettingsPage">
                <FormattedMessage id="SectionProfileProgress.changeLink" />

              </NamedLink>
            </span>
          </div>

          <div
            className={
              hasCategoryorAmemities ? css.hidden : css.emailUnverified
            }
          >
            <FormattedMessage id="ModalMissingInformation.profileCategoryStatusNull" />
            <span>
            <br></br>
              <NamedLink className={css.settingsLink} name="NotificationSettingsPage">
                <FormattedMessage id="SectionProfileProgress.fixLink" />
              </NamedLink>
            </span>
          </div>
          </NamedLink>

          <NamedLink className={css.progressCard3}  
            name={companyPage}
            params={companyParams}  >
          <div className={missingInformation ? css.pendingEmailUnverified : css.emailVerified}>
            <FormattedMessage id={missingInformationText} />
            <br></br>
              <NamedLink   className={classNames(css.settingsLink, currentPageClass('ProfilePage'))}
            name={companyPage}
            params={companyParams}
              >
                  <FormattedMessage id={missingInformation ? "SectionProfileProgress.fixLink" : "SectionProfileProgress.changeLink"} />
              </NamedLink>

          </div>
          </NamedLink>
          </div>
          </div>

  ) : null;
};

SectionProfileProgress.defaultProps = {
  currentPage: null,
  currentSearchParams: null,
  currentUser: null,
  currentUserHasOrders: null,
  currentUserCompanyListing: null,
  notificationCount: 0,
  sendVerificationEmailError: null,
  authScopes: null,
};

SectionProfileProgress.propTypes = {
  authInProgress: bool.isRequired,
  currentPage: string,
  currentSearchParams: object,
  currentUser: propTypes.currentUser,
  currentUserHasListings: bool.isRequired,
  currentUserHasOrders: bool,
  currentUserCompanyListing: array,
  isAuthenticated: bool.isRequired,
  authScopes: array,
  notificationCount: number,
  onLogout: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  sendVerificationEmailInProgress: bool.isRequired,
  sendVerificationEmailError: propTypes.error,
  onResendVerificationEmail: func.isRequired,
  hasGenericError: bool.isRequired,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
  location: shape({ state: object }).isRequired,
};

const mapStateToProps = state => {
  // Topbar needs isAuthenticated
  const { isAuthenticated, logoutError, authScopes } = state.Auth;
  // Topbar needs user info.
  const {
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
    currentUserNotificationCount: notificationCount,
    sendVerificationEmailInProgress,
    currentUserCompanyListing,
    sendVerificationEmailError,
  } = state.user;
  const hasGenericError = !!(logoutError || hasCurrentUserErrors(state));

  return {
    authInProgress: authenticationInProgress(state),
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
    notificationCount,
    currentUserCompanyListing,
    isAuthenticated,
    authScopes,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    hasGenericError,
  };
};

const mapDispatchToProps = dispatch => ({
  onLogout: historyPush => dispatch(logout(historyPush)),
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
  onResendVerificationEmail: () => dispatch(sendVerificationEmail()),
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const CompanyProgress = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SectionProfileProgress);

export default CompanyProgress;
