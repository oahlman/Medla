import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectGoals.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";
import {
  NamedLink,
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
      <NamedLink name='SignupPage' className={css.heroButton}>
                <FormattedMessage id="ConnectCompanyPage.connectProjectOwner" />
              </NamedLink>
      </div>    
    </div>
  );
};


export default SectionProjectGoals;
