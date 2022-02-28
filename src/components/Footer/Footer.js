import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { twitterPageURL, LISTING_PAGE_PENDING_APPROVAL_VARIANT } from '../../util/urlHelpers';
import config from '../../config';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';
import { ensureCurrentUser } from '../../util/data';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendVerificationEmail, hasCurrentUserErrors } from '../../ducks/user.duck';
import { logout, authenticationInProgress } from '../../ducks/Auth.duck';






import css from './Footer.module.css';

const Footer = props => {
  const { rootClassName, className, intl, currentPage, currentUser, currentUserCompanyListing } = props;
  const classes = classNames(rootClassName || css.root, className);



  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  const user = ensureCurrentUser(currentUser);
  const companyListing = currentUserCompanyListing && currentUserCompanyListing[0];
  const companyPage = companyListing ? "CompanyPageVariant" : "ListingBasePage";
  const companyParams = companyListing ? { slug: companyListing.attributes.title.replace(/\s+/g, '-').toLowerCase(), id: companyListing.id.uuid, variant: LISTING_PAGE_PENDING_APPROVAL_VARIANT } : "";

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}></div>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo format="desktop" className={css.logo} />
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationDescription}>
                  <FormattedMessage id="Footer.organizationDescription" />
                </p>
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>

            <div className={css.infoLinks}>
              <ul className={css.list}>

                <li className={css.listItem}>
                  <NamedLink name="AboutPage" className={css.link}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="FAQPage" className={css.link}>
                    <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                <ExternalLink className={css.link} href="mailto:info@medla.app">
                    <FormattedMessage id="Footer.toHelpPage" />
                  </ExternalLink>
                </li>


                <li className={css.listItem}>


                  <NamedLink
                   name="NewProjectUserPage"

                    className={css.connectCompanyLink}
                  >
                    <FormattedMessage id="Footer.searchConnectCompany" />
                  </NamedLink>
                </li>



              </ul>
            </div>
            <div className={css.searches}>
              <ul className={css.list}>

              <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li>


                <li className={css.listItem}>
                  <NamedLink name={companyPage}
                  params={companyParams}  className={css.link}>
                    <FormattedMessage id="Footer.improveProfile" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                      '?address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=job',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchJob" />
                  </NamedLink>
                </li>


                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                      '?address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=company&sort=meta_rating',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchCompanies" />
                  </NamedLink>
                </li>



              </ul>
            </div>

            <div className={css.searchesExtra}>


              <ul className={css.list}>



              </ul>
            </div>
            <div className={css.extraLinks}>
              <div className={css.someLinks}></div>
              <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                <li>
                    <NamedLink name="SiteMapPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.sitemap" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  // Topbar needs isAuthenticated
  const { isAuthenticated, logoutError, authScopes } = state.Auth;
  // Topbar needs user info.
  const {
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
    currentUserCompanyListing,
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
    currentUserCompanyListing,
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


const FooterExport = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Footer);

export default FooterExport;