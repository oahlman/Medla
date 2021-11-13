import React, { useState } from 'react';
import { array, bool, func, number, object, shape, string } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { propTypes } from '../../util/types';
import { sendVerificationEmail, hasCurrentUserErrors } from '../../ducks/user.duck';
import { logout, authenticationInProgress } from '../../ducks/Auth.duck';
import { manageDisableScrolling } from '../../ducks/UI.duck';
import { Topbar } from '..';
import css from './ContactCardJob.module.css';
import { ensureListing, ensureUser } from '../../util/data';
import { Button, SecondaryButton, PrimaryButton } from '..';
import { ensureCurrentUser } from '../../util/data';
import { FormattedMessage } from '../../util/reactIntl';






export const ContactCardJob = props => {
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
  const hasContactDetails = currentListing.attributes.publicData.contactNumber;
  const contactInformation = hasContactDetails ? currentListing.attributes.publicData.contactNumber : <FormattedMessage
  id="ListingPage.contactDetailsMissingButton"

   />;
  const isEmail = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(contactInformation);
  const [companyContact, setEmailHidden] = useState(false);
  
  const buttonText =  'Visa kontaktuppgifter';
 
  const simulateCall = contactInformation => window.open(`tel:${contactInformation}`, '_self');
  const simulateEmail = contactInformation => window.open(`mailto:${contactInformation}`, '_self');

  const showCompanyContactDetails =(
    <SecondaryButton
    className={companyContact ? css.buttonHiddenNumber : css.hidden}
    type="submit"
    onClick={isEmail ? (() => simulateEmail(contactInformation)) : (() => simulateCall(contactInformation))}>
    {contactInformation}{}
  </SecondaryButton>
  
);

return (
  <div>
    <SecondaryButton  className={!companyContact ? css.buttonHiddenNumber : css.hidden}
    onClick={() => setEmailHidden(showCompanyContactDetails)}>
     <FormattedMessage
    id="ListingPage.contactDetailsButton"
     /> 
    </SecondaryButton>
    
    {showCompanyContactDetails}
  </div>
);
};


ContactCardJob.defaultProps = {
  currentPage: null,
  currentSearchParams: null,
  currentUser: null,
  currentUserHasOrders: null,
  notificationCount: 0,
  sendVerificationEmailError: null,
  authScopes: null,
};

ContactCardJob.propTypes = {
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
const ContactButton = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ContactCardJob);

export default ContactCardJob;
