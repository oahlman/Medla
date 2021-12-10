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

import css from './SectionProjectTransfer.module.css';


const SectionProjectTransfer = props => {

  const { rootClassName, className, currentUser } = props;
  const linkNotifications = <NamedLink name="NotificationSettingsPage">
  <FormattedMessage id="SectionProjectTransfer.textLinkBevakningar" />
</NamedLink>
  const user = ensureCurrentUser(currentUser);
  const companyListing = currentUserCompanyListing && currentUserCompanyListing[0];
  const companyPage = companyListing ? "CompanyPageVariant" : "ListingBasePage";
  const companyParams = companyListing ? { slug: companyListing.attributes.title.replace(/\s+/g, '-').toLowerCase(), id: companyListing.id.uuid, variant: LISTING_PAGE_PENDING_APPROVAL_VARIANT } : "";

const linkCompanySearch = <NamedLink name="SearchPage"  to={{
  search:
  's?address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=company',
}}
>
  <FormattedMessage id="SectionProjectTransfer.textLinkForetagare" />
</NamedLink>

const linkJobSearch = <NamedLink name="SearchPage"  to={{
  search:
  '?address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=job',
}}
>
  <FormattedMessage id="SectionProjectTransfer.textLinkJobb" />
</NamedLink>

const linkToLogin = <NamedLink name="LoginPage">
  <FormattedMessage id="SectionProjectTransfer.login" />
</NamedLink>

const linkToHome = <NamedLink name="LoginPage">
  <FormattedMessage id="SectionProjectTransfer.toHome" />
</NamedLink>

const mailTo = <ExternalLink  href="mailto:info@medla.app" className={css.link}>

  <FormattedMessage id="SectionProjectTransfer.mailTo" />
</ExternalLink>

const connectProject = <a  href="https://www.peerdigital.se/anslut-projekt" className={css.link}>

  <FormattedMessage id="SectionProjectTransfer.connectProject" />
</a>




const linkEditCompany = <NamedLink name="SearchPage"
name={companyPage}
params={companyParams}
>
  <FormattedMessage id="SectionProjectTransfer.textLinkBeskrivForetag" />
</NamedLink>



  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjectTransfer.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectTransfer.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionProjectTransfer.part1Text" values={{ mailTo: mailTo }} />
          </p>
        </div>



        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectTransfer.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionProjectTransfer.part3Text" values={{ linkJobSearch, mailTo, connectProject }} />
          </p>
        </div>
      </div>


    </div>
  );
};

SectionProjectTransfer.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionProjectTransfer.propTypes = {
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
const SectionProjectTransferExport = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SectionProjectTransfer);


export default SectionProjectTransferExport;
