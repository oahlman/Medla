import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectGoals.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";
import {
  ExternalLink,
} from '../../components';
const SectionProjectGoals = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjectGoals.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.iconPos}>
        <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div>
            <FormattedMessage id="SectionProjectGoals.part1Title" />
          </div>
          </div>
          <div className={css.iconPos}>
          <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div>
            <FormattedMessage id="SectionProjectGoals.part1Text" />
          </div>
          </div>
        </div>



        <div className={css.step}>
        <div className={css.iconPos}>
          <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div> <FormattedMessage id="SectionProjectGoals.part3Text"  />
          </div>
          </div>
        <div className={css.iconPos}>
        <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div>
            <FormattedMessage id="SectionProjectGoals.part3Title" />
          </div>
          </div>
        </div>
      </div>
      <div className={css.buttonAlign}>
      
      <div className={css.titleCTA}>
        <FormattedMessage id="SectionProjectGoals.titleLineTwoCTA" />

      </div>
              <ExternalLink className={css.heroButton} href="mailto:info@medla.app?subject=Komma%20ig%C3%A5ng%20med%20Medla">
              <FormattedMessage id="ConnectCompanyPage.connectProjectOwner" />
                  </ExternalLink>
      </div>    
    </div>
  );
};


export default SectionProjectGoals;
