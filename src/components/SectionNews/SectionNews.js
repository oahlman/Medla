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

import { NamedLink } from '..';
import { ensureCurrentUser } from '../../util/data';
import wpdNews from './images/wpdNews.jpg';
import css from './SectionNews.module.css';
import ExternalLink from '../ExternalLink/ExternalLink';
import { GoogleLogo } from '../../containers/AuthenticationPage/socialLoginLogos';
import { wrapLongWord } from '../../util/richText';


const SectionNews = props => {

  const { rootClassName, className, currentUser, currentUserCompanyListing } = props;
  const linkNotifications = <NamedLink name="NotificationSettingsPage">
  <FormattedMessage id="SectionNews.textLinkBevakningar" />
</NamedLink>

const user = ensureCurrentUser(currentUser);
const companyListing = currentUserCompanyListing && currentUserCompanyListing[0];
const companyPage = companyListing ? "CompanyPageVariant" : "ListingBasePage";
const companyParams = companyListing ? { slug: companyListing.attributes.title.replace(/\s+/g, '-').toLowerCase(), id: companyListing.id.uuid, variant: LISTING_PAGE_PENDING_APPROVAL_VARIANT } : "";

const linkCompanySearch = <NamedLink name="SearchPage"  to={{
  search:
  's?address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=company&sort=meta_rating',
}}
>
  <FormattedMessage id="SectionNews.textLinkForetagare" />
</NamedLink>

const linkToNews = <NamedLink name="tomasliden"  to={{

}}
>
  <FormattedMessage id="SectionNews.newsLink" />
</NamedLink>

const linkToNewsasdsaddsa = <NamedLink className={css.linkStyle} name="SearchPage"
name={companyPage}
params={companyParams}
>
  <FormattedMessage id="SectionNews.textLinkBeskrivForetag" />
</NamedLink>



  const classes = classNames(rootClassName || css.root, className);
  return (
    
    <div className={classes}>
      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
          <div className={css.title}>
        <FormattedMessage id="SectionNews.titleLineOne" />

      </div>
            <FormattedMessage id="SectionNews.part1Title" />
          </h2>
          <p >
            <FormattedMessage id="SectionNews.part1Text" />
          </p>
          
          <a href="https://www.medla.app/tomasliden"><FormattedMessage id="SectionNews.linkToNews" /></a>
      
        </div>
        
        <div className={css.step}>
         
         <a >
         <a href="https://www.medla.app/tomasliden"><img id="News" className={css.newsImage} src={wpdNews} alt="News"/></a>
         
           </a> 

        </div>

     
      </div>


    </div>
  );
};

SectionNews.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionNews.propTypes = {
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
const SectionNewsExport = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SectionNews);


export default SectionNewsExport;
