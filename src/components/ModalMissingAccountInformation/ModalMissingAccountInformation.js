import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import routeConfiguration from '../../routeConfiguration';
import { ensureCurrentUser } from '../../util/data';
import { propTypes } from '../../util/types';
import { pathByRouteName } from '../../util/routes';
import { Modal } from '..';
import { ensureOwnListing } from '../../util/data';
import IconCheckmark from '../IconCheckmark/IconCheckmark';
import { FieldCheckbox, IconEmailAttention, InlineTextButton, NamedLink } from '..';
import { types as sdkTypes } from '../../util/sdkLoader';

import EmailReminder from './EmailReminder';

import css from './ModalMissingAccountsInformation.module.css';
import { EditListingPhotosForm } from '../../forms';
import AccountReminder from './AccountReminder copy';
import { xor128 } from 'seedrandom';

const MISSING_INFORMATION_MODAL_WHITELIST = [
  'LoginPage',
  'SignupPage',
  'ContactDetailsPage',
  'EmailVerificationPage',
  'PasswordResetPage',
];

const EMAIL_VERIFICATION = 'EMAIL_VERIFICATION';

class ModalMissingAccountInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMissingInformationReminder: null,
      hasSeenMissingInformationReminder: false,
    };
    this.handleMissingInformationReminder = this.handleMissingInformationReminder.bind(this);
  }

  componentDidUpdate() {
    const {
      currentUser,
      currentUserHasListings,
      currentListingHasImages,
      currentUserHasOrders,
      currentListing,
      location,
      image,
      amenities,
      notifications,
      category,
      listingCategory,
    } = this.props;
    const user = ensureCurrentUser(currentUser);
    ('');

    const listingTest = ensureOwnListing(currentListing);
    const companyListingId = currentListing ? currentListing.id : null;
    const companyListing = listingCategory || { listingCategoryID: companyListingId };

    const TEST = listingTest;

    const transientUserProfileCategory = user.attributes.profile.publicData;
    const transientUserCategory = { ...user, category: transientUserProfileCategory };

    const profileImageId = user.profileImage ? user.profileImage.id : null;
    const profileImage = image || { imageId: profileImageId };

    this.handleMissingInformationReminder(
      user,
      currentUserHasListings,
      currentUserHasOrders,
      location,
      currentListingHasImages,
      transientUserCategory,
      profileImage,
      amenities,
      notifications,
      category
    );
  }

  handleMissingInformationReminder(
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
    newLocation,
    currentListingHasImages,
    transientUserCategory,
    profileImage
  ) {
    const routes = routeConfiguration();
    const whitelistedPaths = MISSING_INFORMATION_MODAL_WHITELIST.map(page =>
      pathByRouteName(page, routes)
    );

    // Is the current page whitelisted?
    const isPageWhitelisted = whitelistedPaths.includes(newLocation.pathname);

    // Track if path changes inside Page level component
    const pathChanged = newLocation.pathname !== this.props.location.pathname;
    const notRemindedYet =
      !this.state.showMissingInformationReminder && !this.state.hasSeenMissingInformationReminder;

    // Is the reminder already shown on current page
    const showOnPathChange = notRemindedYet || pathChanged;

    if (!isPageWhitelisted && showOnPathChange) {
      // Emails are sent when order is initiated
      // Customer is likely to get email soon when she books something
      // Provider email should work - she should get an email when someone books a listing
      const hasOrders = currentUserHasOrders === true;
      const profileCategory = transientUserCategory;

      const hasImage = currentUser.profileImage ? true : false;

      const hasCategory = profileCategory.id && currentUser.attributes.profile.publicData.category;
      // Show reminder

      if (!hasImage || hasCategory == 0) {
        this.setState({ showMissingInformationReminder: EMAIL_VERIFICATION });
      }
    }
  }

  render() {
    const {
      rootClassName,
      className,
      containerClassName,
      currentUser,
      sendVerificationEmailInProgress,
      sendVerificationEmailError,
      onManageDisableScrolling,
      onResendVerificationEmail,
      listing,
      image,
      profileImage,
      hasImage,

      hasCategory,
    } = this.props;

    const user = ensureCurrentUser(currentUser);
    const transientUserProfileCategory = user.attributes.profile.publicData;
    const transientUserCategory = { ...user, category: transientUserProfileCategory };
    const profileCategory = transientUserCategory;
    const categoryVerified = profileCategory.id && user.attributes.profile.publicData.category;
    const imageVerified = user.profileImage ? true : false;

    let content = null;

    const currentUserLoaded = user && user.id;
    if (currentUserLoaded) {
      if (this.state.showMissingInformationReminder === EMAIL_VERIFICATION) {
        content = (
          <div className={className}>
            <p className={css.modalTitle}>
              <FormattedMessage id="ModalMissingInformation.improveProfile" />
            </p>

            <div className={css.columnsStatus}>
              <div className={imageVerified ? css.emailVerified : css.hidden}>
                <FormattedMessage id="ModalMissingInformation.profileImageStatus" />
                <span>
                  <NamedLink className={css.settingsLink} name="ProfileSettingsPage">
                    {'Ändra'}
                  </NamedLink>
                </span>
              </div>

              <div className={imageVerified ? css.hidden : css.emailUnverified}>
                <FormattedMessage id="ModalMissingInformation.profileImageStatusNull" />
                <span>
                  <NamedLink className={css.settingsLink} name="ProfileSettingsPage">
                    {'Fixa'}
                  </NamedLink>
                </span>
              </div>

              <div className={categoryVerified == 0 ? css.hidden : css.emailVerified}>
                <FormattedMessage id="ModalMissingInformation.profileCategoryStatus" />
                <span>
                  <NamedLink className={css.settingsLink} name="ProfileSettingsPage">
                    {'Ändra'}
                  </NamedLink>
                </span>
              </div>

              <div className={categoryVerified == 0 ? css.emailUnverified : css.hidden}>
                <FormattedMessage id="ModalMissingInformation.profileCategoryStatusNull" />
                <span>
                  <NamedLink className={css.settingsLink} name="ProfileSettingsPage">
                    {'Fixa'}
                  </NamedLink>
                </span>
              </div>
            </div>

            <div className={css.bottomWrapper}></div>
          </div>
        );
      }
    }
    const closeButtonMessage = (
      <FormattedMessage id="ModalMissingAccountInformation.closeVerifyEmailReminder" />
    );

    return (
      <Modal
        id="MissingInformationReminder"
        containerClassName={containerClassName}
        isOpen={!!this.state.showMissingInformationReminder}
        onClose={() => {
          this.setState({
            showMissingInformationReminder: null,
            hasSeenMissingInformationReminder: true,
          });
        }}
        usePortal
        onManageDisableScrolling={onManageDisableScrolling}
        closeButtonMessage={closeButtonMessage}
      >
        {content}
      </Modal>
    );
  }
}

ModalMissingAccountInformation.defaultProps = {
  className: null,
  rootClassName: null,
  currentUser: null,
};

ModalMissingAccountInformation.propTypes = {
  id: string.isRequired,
  className: string,
  rootClassName: string,
  containerClassName: string,

  currentUser: propTypes.currentUser,
  onManageDisableScrolling: func.isRequired,
  sendVerificationEmailError: propTypes.error,
  sendVerificationEmailInProgress: bool.isRequired,
};

ModalMissingAccountInformation.displayName = 'ModalMissingAccountInformation';

export default ModalMissingAccountInformation;
