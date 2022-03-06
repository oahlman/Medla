/**
 *  TopbarMobileMenu prints the menu content for authenticated user or
 * shows login actions for those who are not authenticated.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { propTypes } from '../../util/types';
import {
  LISTING_PAGE_PENDING_APPROVAL_VARIANT,
} from '../../util/urlHelpers';
import { ensureCurrentUser } from '../../util/data';
import { AvatarLarge, InlineTextButton, NamedLink, NotificationBadge, ExternalLink } from '../../components';

import css from './TopbarMobileMenu.module.css';
import DesktopLogo from '../Logo/DesktopLogo';

const TopbarMobileMenu = props => {
  const {
    isAuthenticated,
    currentPage,
    currentUserHasListings,
    currentUserCompanyListing,
    currentUser,
    notificationCount,
    onLogout,
    location,
    disableProfileLink,
    rootUrl,
  } = props;

  const user = ensureCurrentUser(currentUser);
  const companyListing = currentUserCompanyListing && currentUserCompanyListing[0];
  const companyPage = companyListing ? "CompanyPageVariant" : "ListingBasePage";
  const companyParams = companyListing ? { slug: companyListing.attributes.title.replace(/\s+/g, '-').toLowerCase(), id: companyListing.id.uuid, variant: LISTING_PAGE_PENDING_APPROVAL_VARIANT } : "";
  
  const [isOpen, setIsOpen] = useState(false);

  const en = '/en';
  const path = location.pathname;
  const toSwedish = (path.startsWith('/en/') ? path.replace('en/', '') : path);
  const toEnglish = (path.startsWith('/en/') ? path : en.concat('', path));

  if (!isAuthenticated) {
    const signup = (
      <NamedLink name="SignupPage" className={css.signupLink}>
        <FormattedMessage id="TopbarMobileMenu.signupLink" />
      </NamedLink>

    );

    const login = (
      <NamedLink name="LoginPage" className={css.loginLink}>
        <FormattedMessage id="TopbarMobileMenu.loginLink" />
      </NamedLink>
    );

    const signupOrLogin = (
      <span className={css.authenticationLinks}>
        <FormattedMessage id="TopbarMobileMenu.signupOrLogin" values={{ signup, login }} />
      </span>
    );
    return (
      <div className={css.root}>

          <NamedLink
          name="LandingPage"
            >
          <DesktopLogo></DesktopLogo>
           </NamedLink>


        <div className={css.content}>
          <div className={css.authenticationGreeting}>
            <FormattedMessage
              id="TopbarMobileMenu.unauthorizedGreeting"
              values={{ lineBreak: <br />, signup, login }}
            />
          </div>


        <NamedLink name="AboutPage" className={css.navigationLinkMargin}>
        <FormattedMessage id="Footer.toAboutPage" />
        </NamedLink>

        <NamedLink name="FAQPage" className={css.navigationLinkDark}>
         <FormattedMessage id="Footer.toFAQPage" />
        </NamedLink>

        <ExternalLink className={css.navigationLinkDark} href="mailto:info@medla.app">
          <FormattedMessage id="Footer.toHelpPage" />
          </ExternalLink>

          <ExternalLink
            href='https://www.peerdigital.se/anslut-projekt'

           className={css.navigationLinkDark}
            >
            <FormattedMessage id="Footer.searchConnectCompany" />
           </ExternalLink>
        </div>
        <div className={css.footer}>
        <NamedLink className={css.createNewListingLink} name="SignupPage">
          <FormattedMessage id="SignupForm.signUp" />
        </NamedLink>
        </div>
      </div>
    );
  }

  const notificationCountBadge =
    notificationCount > 0 ? (
      <NotificationBadge className={css.notificationBadge} count={notificationCount} />
    ) : null;

  const displayName = user.attributes.profile.firstName;
  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  return (
    <div className={css.root}>

      <div className={css.avatarContainer}>
      <NamedLink
          className={classNames(css.navigationLink, currentPageClass('ProfileSettingsPage'))}
          name={companyPage}
          params={companyParams}
        >
       <AvatarLarge className={css.avatar} disableProfileLink={!disableProfileLink} user={currentUser}
      /> </NamedLink>

      <div className={css.content}>
      <span className={css.greeting}>
          <FormattedMessage id="TopbarMobileMenu.greeting" values={{ displayName }} />
        </span>

        <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
          <FormattedMessage id="TopbarMobileMenu.logoutLink" />
        </InlineTextButton>

        </div>

        </div>

      <div className={css.content}>

      <NamedLink
          className={classNames(css.homeLink, currentPageClass('LandingPage'))}
          name="LandingPage"
        >
          <FormattedMessage id="TopbarMobileMenu.homeLink" />
        </NamedLink>

        <InlineTextButton rootClassName={css.chooseLanguage} onClick={() => setIsOpen(!isOpen)}>
          <FormattedMessage id={ isOpen ? "TopbarMobileMenu.closeLanguage" : "TopbarMobileMenu.chooseLanguage" }/>
        </InlineTextButton>

        <div className={isOpen ? css.languageMenu : css.hidden}>
        <a className={css.languageOption} name='Swedish' href={rootUrl.concat(toSwedish)}>
            <span className={css.menuItemBorder} />
            Svenska
          </a>

          <a className={css.languageOption} name='English' href={rootUrl.concat(toEnglish)}>
            <span className={css.menuItemBorder} />
            English
          </a>
        </div>

        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('InboxPage'))}
          name="InboxPage"
          params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
        >
          <FormattedMessage id="TopbarMobileMenu.inboxLink" />
          {notificationCountBadge}
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('ManageListingsPage'))}
          name="ManageListingsPage"
        >
          <FormattedMessage id="TopbarMobileMenu.yourListingsLink" />
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('ProfileSettingsPage'))}
          name={companyPage}
          params={companyParams}
        >
          <FormattedMessage id="TopbarMobileMenu.companySettingsLink" />
        </NamedLink>
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('AccountSettingsPage'))}
          name="AccountSettingsPage"
        >
          <FormattedMessage id="TopbarMobileMenu.accountSettingsLink" />
        </NamedLink>



        <NamedLink
         className={classNames(css.navigationLinkMargin, currentPageClass ('AboutPage'))}
        name="AboutPage" >
        <FormattedMessage id="Footer.toAboutPage" />
        </NamedLink>

        <NamedLink name="FAQPage" className={css.navigationLinkDark}>
         <FormattedMessage id="Footer.toFAQPage" />
        </NamedLink>

        <ExternalLink className={css.navigationLinkDark} href="mailto:info@medla.app">
          <FormattedMessage id="Footer.toHelpPage" />
          </ExternalLink>

      </div>
      <div className={css.footer}>
        <NamedLink className={css.createNewListingLink} name="NewListingPage">
          <FormattedMessage id="TopbarMobileMenu.newListingLink" />
        </NamedLink>
        </div>

    </div>
  );
};

TopbarMobileMenu.defaultProps = { currentUser: null, notificationCount: 0, currentPage: null };

const { array, bool, func, number, string } = PropTypes;

TopbarMobileMenu.propTypes = {
  isAuthenticated: bool.isRequired,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentUserCompanyListing: array,
  currentPage: string,
  notificationCount: number,
  onLogout: func.isRequired,
  location: string.isRequired,
  rootUrl: string.isRequired,
};

export default TopbarMobileMenu;
