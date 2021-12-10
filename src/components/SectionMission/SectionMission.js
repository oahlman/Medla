import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import { LISTING_PAGE_PENDING_APPROVAL_VARIANT, } from '../../util/urlHelpers';
import classNames from 'classnames';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendVerificationEmail, hasCurrentUserErrors } from '../../ducks/user.duck';
import { logout, authenticationInProgress } from '../../ducks/Auth.duck';

import { NamedLink, ExternalLink } from '../../components';
import { ensureCurrentUser } from '../../util/data';

import css from './SectionMission.module.css';


const SectionMission = props => {

  const { rootClassName, className, currentUser } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionMission.part1Title" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionMission.part1Text" />
          </p>
        </div>
        <div className={css.step}>
            <NamedLink
            name="AboutPage"

           className={css.heroButton}
            >
            <FormattedMessage id="ProjectPage.readMore" />
           </NamedLink>
        </div>
      </div>


    </div>
  );
};

SectionMission.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionMission.propTypes = {
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
const SectionMissionExport = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SectionMission);


export default SectionMissionExport;
