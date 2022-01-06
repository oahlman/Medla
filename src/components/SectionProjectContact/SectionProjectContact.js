import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectContact.module.css';
import Button from '../Button/Button'
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


      <Button className={css.button}> Kontakt
        <ExternalLink href="https://peerdigital.se/anslut-projekt"></ExternalLink>

       </Button>
     
      </div>

    </div>
  );
};


export default SectionProjectContact;
