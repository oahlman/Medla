import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
import IconLogo from './IconLogo';
import IconLogoNegative from './IconLogoNegative';
import css from './Logo.module.css';
import DesktopLogo from './DesktopLogo';
import DesktopLogoNegative from './DesktopLogoNegative';

const Logo = props => {
  const { className, format, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);
  const desktopClasses = classNames(css.logoDesktop, className);


  if (format === 'desktop') {
    return <DesktopLogo className={desktopClasses} {...rest} />;
  }

  if (format === 'desktopNegative') {
    return <DesktopLogoNegative className={desktopClasses} {...rest} />;
  }

  if (format === 'mobileNegative') {
    return <IconLogoNegative className={mobileClasses} {...rest} />;
  }

  return <IconLogo className={mobileClasses} {...rest} />;
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;