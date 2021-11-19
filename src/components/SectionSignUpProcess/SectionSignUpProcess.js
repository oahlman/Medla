import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { compose } from 'redux';
import { LISTING_PAGE_PENDING_APPROVAL_VARIANT, } from '../../util/urlHelpers';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendVerificationEmail, hasCurrentUserErrors } from '../../ducks/user.duck';
import { logout, authenticationInProgress } from '../../ducks/Auth.duck';

import { NamedLink, ExternalLink } from '..';
import { ensureCurrentUser } from '../../util/data';

import css from './SectionSignUpProcess.module.css';


const SectionSignUpProcess = props => {

  const { rootClassName, className, currentUser } = props;
  const linkNotifications = <NamedLink name="NotificationSettingsPage">
  <FormattedMessage id="SectionSignUpProcess.textLinkBevakningar" />
</NamedLink>
  const user = ensureCurrentUser(currentUser);
  const companyName = currentUser && user.attributes.profile.publicData.companyName ? user.attributes.profile.publicData.companyName.replace(/\s+/g, '-').toLowerCase() : "company";
  const hasCompanyListingId = user.id && user.attributes.profile.privateData.companyListingId;
  const companyListingId = user.id && user.attributes.profile.privateData.companyListingId;
  const pageVariant = "CompanyPageVariant";
  const companyPage = hasCompanyListingId ? pageVariant : "ListingBasePage";
  const companyParams = hasCompanyListingId ? { slug: companyName, id: companyListingId, variant: LISTING_PAGE_PENDING_APPROVAL_VARIANT } : "";

const linkCompanySearch = <NamedLink name="SearchPage"  to={{
  search:
  's?address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=company',
}}
>
  <FormattedMessage id="SectionSignUpProcess.textLinkForetagare" />
</NamedLink>

const linkJobSearch = <NamedLink name="SearchPage"  to={{
  search:
  '?address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=job',
}}
>
  <FormattedMessage id="SectionSignUpProcess.textLinkJobb" />
</NamedLink>

const linkToLogin = <NamedLink name="LoginPage">
  <FormattedMessage id="SectionSignUpProcess.login" />
</NamedLink>

const linkToHome = <ExternalLink href='https://www.medla.app/'>
  <FormattedMessage id="SectionSignUpProcess.toHome" />
</ExternalLink>


const linkEditCompany = <NamedLink name="SearchPage"
name={companyPage}
params={companyParams}
>
  <FormattedMessage id="SectionSignUpProcess.textLinkBeskrivForetag"  />
</NamedLink>



  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionSignUpProcess.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionSignUpProcess.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionSignUpProcess.part1Text" values={{ inloggning: linkToLogin }} />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionSignUpProcess.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionSignUpProcess.part2Text" values={{ bevakningar: linkNotifications }} />
          </p>

        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionSignUpProcess.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionSignUpProcess.part3Text" values={{ linkJobSearch, linkToHome }} />
          </p>
        </div>
      </div>


    </div>
  );
};

SectionSignUpProcess.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionSignUpProcess.propTypes = {
  rootClassName: string,
  className: string,
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
const SectionSignUpProcessExport = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SectionSignUpProcess);


export default SectionSignUpProcessExport;
