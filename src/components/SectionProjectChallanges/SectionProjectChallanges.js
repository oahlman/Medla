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

import css from './SectionProjectChallanges.module.css';


const SectionProjectChallanges = props => {

  const { rootClassName, className, currentUser } = props;
  const linkNotifications = <NamedLink name="NotificationSettingsPage">
  <FormattedMessage id="SectionProjectChallanges.textLinkBevakningar" />
</NamedLink>
  const user = ensureCurrentUser(currentUser);



const linkJobSearch = <NamedLink name="SearchPage"  to={{
  search:
  '?address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=job',
}}
>
  <FormattedMessage id="SectionProjectChallanges.textLinkJobb" />
</NamedLink>

const linkToLogin = <NamedLink name="LoginPage">
  <FormattedMessage id="SectionProjectChallanges.login" />
</NamedLink>

const linkToHome = <NamedLink name="LoginPage">
  <FormattedMessage id="SectionProjectChallanges.toHome" />
</NamedLink>

const mailTo = <ExternalLink  href="mailto:info@medla.app" className={css.link}>

  <FormattedMessage id="SectionProjectChallanges.mailTo" />
</ExternalLink>

const connectProject = <a  href="https://www.peerdigital.se/anslut-projekt" className={css.link}>

  <FormattedMessage id="SectionProjectChallanges.connectProject" />
</a>



  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjectChallanges.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectChallanges.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionProjectChallanges.part1Text" values={{ mailTo: mailTo }} />
          </p>
        </div>



        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectChallanges.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionProjectChallanges.part3Text" values={{ linkJobSearch, mailTo, connectProject }} />
          </p>
        </div>
      </div>


    </div>
  );
};

SectionProjectChallanges.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionProjectChallanges.propTypes = {
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
const SectionProjectChallangesExport = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SectionProjectChallanges);


export default SectionProjectChallangesExport;
