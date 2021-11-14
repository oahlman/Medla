import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { Button, ExternalLink } from '../../components';
import { ensureCurrentUser } from '../../util/data';

import css from './PreviewAccessBanner.module.css';

// Due to the layout structure, do not render the banner on the following pages
const disabledPages = ['SearchPage'];

const PreviewAccessBanner = props => {
  const {
    rootClassName,
    className,
    authScopes,
    currentUser,
    onLogout,
    currentPage,
  } = props;
  const classes = classNames(rootClassName || css.root, className);
  const user = ensureCurrentUser(currentUser);

  const { firstName, lastName } = user.attributes.profile;

  return (
    <div className={classes}>
      <p className={css.text}>
        <FormattedMessage id="PreviewAccessBanner.message" values={{ firstName, lastName }} />
      </p>
        <ExternalLink className={css.button} href="mailto:info@peerdigital.se">
                    <FormattedMessage id="PreviewAccessBanner.contact" />
                  </ExternalLink>
    </div>
  );
};

PreviewAccessBanner.defaultProps = {
  rootClassName: null,
  className: null,
  currentUser: null,
  authScopes: [],
  currentPage: null,
};

const { array, bool, func, string } = PropTypes;

PreviewAccessBanner.propTypes = {
  rootClassName: string,
  className: string,
  authScopes: array,
};

export default PreviewAccessBanner;
