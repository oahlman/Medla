import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectContact.module.css';
import Button, { SecondaryButton } from '../Button/Button'
import ExternalLink from '../ExternalLink/ExternalLink';

const SectionProjectContact = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjectContact.titleLineOne" />

      </div>


        <ExternalLink className={css.button} href="https://peerdigital.se/anslut-projekt">

        <FormattedMessage id="NewProjectUserPage.connectProject" />

        </ExternalLink>

      </div>

    </div>
  );
};


export default SectionProjectContact;
