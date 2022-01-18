import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectContact.module.css';
import Button, { SecondaryButton } from '../Button/Button'
import ExternalLink from '../ExternalLink/ExternalLink';
import imagesvenskvind from '../../assets/Svensk-vind-logo.png';


const SectionProjectContact = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>

      <div className={css.title}>
        <FormattedMessage id="SectionProjectContact.titleLineOne" />
      </div>
      <div className={css.subTitle}>
        <FormattedMessage id="SectionProjectContact.textLineOne" />
      </div>
        <ExternalLink className={css.button} href="https://peerdigital.se/bestall-projekt"> 
        <FormattedMessage id="NewProjectUserPage.connectProjectOffer" />
        </ExternalLink>
   
        
        <p className={css.disclaimerSvenskVindDesktop}>*Erbjudandet är tidbegränsat och gäller för upp till två projekt per organisation. Medlemskap kontrolleras vid lagd beställning.</p>
        <img className={css.imageSvenskVindDesktop} src={imagesvenskvind} alt="Svensk vind" />

      </div>

    </div>
  );
};


export default SectionProjectContact;
