import React, { useState } from 'react';
import { array, bool, func, number, object, shape, string, } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { propTypes } from '../../util/types';
import { sendVerificationEmail, hasCurrentUserErrors } from '../../ducks/user.duck';
import { logout, authenticationInProgress } from '../../ducks/Auth.duck';
import { manageDisableScrolling } from '../../ducks/UI.duck';
import { Topbar } from '../../components';
import css from './ContactCardCompany.module.css';
import { ensureListing, ensureUser, userDisplayNameAsString, } from '../../util/data';
import { Button, SecondaryButton, PrimaryButton } from '../../components';
import { ensureCurrentUser } from '../../util/data';
import { FormattedMessage } from '../../util/reactIntl';





export const CallButtonComponent = props => {
  const {
    authInProgress,
    currentPage,
    currentSearchParams,
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
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
    listing,
    email,

    ...rest
  } = props;


  const currentListing = ensureListing(listing);
  let contactInformation = currentListing.attributes.publicData.contactNumber;
  let simulateContact = null;
  if (contactInformation === undefined) {
    contactInformation = <FormattedMessage id="ListingPage.contactDetailsMissingButton" />;
    simulateContact = contactInformation => null;
  } else if ((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(contactInformation) && !contactInformation.startsWith('phone+')) {
    contactInformation = contactInformation;
    simulateContact = contactInformation => window.open(`mailto:${currentListing.attributes.publicData.contactNumber}`, '_self');
  } else {
    contactInformation = contactInformation.replace(/phone\+|@medla.app/g, "");
    simulateContact = contactInformation => window.open(`tel:${contactInformation}`, '_self');
  }
  const [companyContact, setEmailHidden] = useState(false);

  const showCompanyContactDetails =(
    <SecondaryButton
    className={companyContact ? css.buttonHiddenNumber : css.hidden}
    type="submit"
    onClick={simulateContact}>
    {contactInformation}
  </SecondaryButton>

);

  return (
    <div >
        <div className={css.headingCard}>
      </div>
      <PrimaryButton  className={!companyContact ? css.buttonHiddenNumber : css.hidden}
      onClick={() => setEmailHidden(showCompanyContactDetails)}>
       <FormattedMessage
      id="ListingPage.contactDetailsButton"

       />

      </PrimaryButton>

      {showCompanyContactDetails}
    </div>
  );
};

CallButtonComponent.defaultProps = {
  currentPage: null,
  currentSearchParams: null,
  currentUser: null,
  currentUserHasOrders: null,
  notificationCount: 0,
  sendVerificationEmailError: null,
  authScopes: null,
};

CallButtonComponent.propTypes = {
  authInProgress: bool.isRequired,
  currentPage: string,
  currentSearchParams: object,
  currentUser: propTypes.currentUser,
  currentUserHasListings: bool.isRequired,
  currentUserHasOrders: bool,
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
    sendVerificationEmailError,
  } = state.user;
  const hasGenericError = !!(logoutError || hasCurrentUserErrors(state));
  return {
    authInProgress: authenticationInProgress(state),
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
    notificationCount,
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
const CallButton = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CallButtonComponent);

export default CallButton;
