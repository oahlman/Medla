import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { IoLanguage } from 'react-icons/io5';
import { propTypes } from '../../util/types';
import { LISTING_PAGE_PENDING_APPROVAL_VARIANT } from '../../util/urlHelpers';
import {
  Avatar,
  InlineTextButton,
  Logo,
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  NamedLink,
  IconSpinner,
} from '../../components';
import { TopbarSearchForm } from '../../forms';

import css from './TopbarDesktop.module.css';
import { ensureCurrentUser } from '../../util/data';

const TopbarDesktop = props => {
  const {
    className,
    currentUser,
    currentPage,
    rootClassName,
    currentUserHasListings,
    currentUserCompanyListing,
    notificationCount,
    intl,
    isAuthenticated,
    onLogout,
    location,
    onSearchSubmit,
    initialSearchFormValues,
    rootUrl,
  } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const authenticatedOnClientSide = mounted && isAuthenticated;
  const isAuthenticatedOrJustHydrated = isAuthenticated || !mounted;

  const classes = classNames(rootClassName || css.root, className);

  const user = ensureCurrentUser(currentUser);
  const companyListing = currentUserCompanyListing && currentUserCompanyListing[0];
  const companyPage = companyListing ? 'CompanyPageVariant' : 'ListingBasePage';
  const companyParams = companyListing
    ? {
        slug: companyListing.attributes.title.replace(/\s+/g, '-').toLowerCase(),
        id: companyListing.id.uuid,
        variant: LISTING_PAGE_PENDING_APPROVAL_VARIANT,
      }
    : '';

  const search = (
    <TopbarSearchForm
      className={css.searchLink}
      desktopInputRoot={css.topbarSearchWithLeftPadding}
      onSubmit={onSearchSubmit}
      initialValues={initialSearchFormValues}
    />
  );

  const notificationDot = notificationCount > 0 ? <div className={css.notificationDot} /> : null;

  const inboxLink = authenticatedOnClientSide ? (
    <NamedLink
      className={css.inboxLink}
      name="InboxPage"
      params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
    >
      <span className={css.inbox}>
        <FormattedMessage id="TopbarDesktop.inbox" />
        {notificationDot}
      </span>
    </NamedLink>
  ) : null;

  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  const profileMenu = authenticatedOnClientSide ? (
    <Menu>
      <MenuLabel className={css.profileMenuLabel} isOpenClassName={css.profileMenuIsOpen}>
        <div className={css.avatarContainer}>
          <Avatar className={css.avatar} user={currentUser} disableProfileLink />
        </div>
      </MenuLabel>
      <MenuContent className={css.profileMenuContent}>
        <MenuItem key="ManageListingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('ManageListingsPage'))}
            name="ManageListingsPage"
          >
            {/*   <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.yourListingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="ProfilePage">
          <NamedLink
            className={classNames(css.profileSettingsLink, currentPageClass('ProfilePage'))}
            name={companyPage}
            params={companyParams}
          >
          */}
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.companySettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="AccountSettingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('AccountSettingsPage'))}
            name="AccountSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.accountSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="logout">
          <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.logout" />
          </InlineTextButton>
        </MenuItem>
      </MenuContent>
    </Menu>
  ) : null;

  const signupLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="SignupPage" className={css.signupLink}>
      <span className={css.signup}>
        <FormattedMessage id="TopbarDesktop.signup" />
      </span>
    </NamedLink>
  );

  const loginLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LoginPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="TopbarDesktop.login" />
      </span>
    </NamedLink>
  );

  const en = '/en';
  const path = mounted ? location.pathname : '';
  const toSwedish = path.startsWith('/en/') ? path.replace('en/', '') : path;
  const toEnglish = path.startsWith('/en/') ? path : en.concat('', path);

  const languageMenu = (
    <Menu>
      <MenuLabel className={css.profileMenuLabel} isOpenClassName={css.profileMenuIsOpen}>
        <IoLanguage className={css.iconLanguage} />
      </MenuLabel>
      <MenuContent className={css.languageMenuContent}>
        <MenuItem key="Swedish">
          <a className={css.profileSettingsLink} name="Swedish" href={rootUrl.concat(toSwedish)}>
            <span className={css.menuItemBorder} />
            Svenska
          </a>
        </MenuItem>
        <MenuItem key="English">
          <a className={css.profileSettingsLink} name="English" href={rootUrl.concat(toEnglish)}>
            <span className={css.menuItemBorder} />
            English
          </a>
        </MenuItem>
      </MenuContent>
    </Menu>
  );

  return (
    <nav className={classes}>
      <NamedLink className={css.logoLink} name="LandingPage">
        <Logo
          format="desktop"
          className={css.logo}
          alt={intl.formatMessage({ id: 'TopbarDesktop.logo' })}
        />
      </NamedLink>
      {search}
      {languageMenu}

      <NamedLink
        className={classNames(css.createListingLink, currentPageClass('ProfilePage'))}
        name={companyPage}
        params={companyParams}
      >
        <span className={css.createListing}>
          <FormattedMessage id="TopbarDesktop.companySettingsLink" />
        </span>
      </NamedLink>

      {inboxLink}
      {profileMenu}
      {signupLink}
      {loginLink}
    </nav>
  );
};

const { array, bool, func, object, number, string, shape } = PropTypes;

TopbarDesktop.defaultProps = {
  rootClassName: null,
  className: null,
  currentUser: null,
  currentPage: null,
  rootUrl: null,
  location: null,
  notificationCount: 0,
  initialSearchFormValues: {},
};

TopbarDesktop.propTypes = {
  rootClassName: string,
  className: string,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentUserCompanyListing: array,
  currentPage: string,
  isAuthenticated: bool.isRequired,
  onLogout: func.isRequired,
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
  rootUrl: string.isRequired,
  notificationCount: number,
  onSearchSubmit: func.isRequired,
  initialSearchFormValues: object,
  intl: intlShape.isRequired,
};

export default TopbarDesktop;
