import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from '../../util/types';
import { FormattedMessage } from '../../util/reactIntl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { LinkTabNavHorizontal } from '../../components';
import { ensureCurrentUser } from '../../util/data';

import css from './UserNav.module.css';

const UserNav = props => {
  const { className, rootClassName, selectedPageName, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  const user = ensureCurrentUser(currentUser);

  const profilePageProps = user.id
  ? { name: 'ProfilePage', params: { id: user.id.uuid } }
  : { name: 'ProfileBasePage' };

  const tabs = [
    {
      text: <FormattedMessage id="ManageListingsPage.yourListings" />,
      selected: selectedPageName === 'ManageListingsPage',
      linkProps: {
        name: 'ManageListingsPage',
      },
    },
    {
      text: <FormattedMessage id="ManageListingsPage.notificationSettings" />,
      selected: selectedPageName === 'NotificationSettingsPage',
      disabled: false,
      linkProps: {
        name: 'NotificationSettingsPage',
      },
    },
    {
      text: <FormattedMessage id="ManageListingsPage.accountSettings" />,
      selected: ACCOUNT_SETTINGS_PAGES.includes(selectedPageName),
      disabled: false,
      linkProps: {
        name: 'ContactDetailsPage',
      },
    },
  ];

  return (
    <LinkTabNavHorizontal className={classes} tabRootClassName={css.tab} tabs={tabs} skin="dark" />
  );
};

const mapStateToProps = state => {
  const { currentUser } = state.user;
  return {
    currentUser,
  };
};

UserNav.defaultProps = {
  currentUser: null,
  className: null,
  rootClassName: null,
};

const { string } = PropTypes;

UserNav.propTypes = {
  currentUser: propTypes.currentUser,
  className: string,
  rootClassName: string,
  selectedPageName: string.isRequired,
};

export default compose(connect(mapStateToProps))(UserNav);
