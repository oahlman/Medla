import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionCompanyGoals.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";
import {
  NamedLink,
} from '../../components';

const SectionCompanyGoals = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionCompanyGoals.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.iconPos}>
        <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div>
            <FormattedMessage id="SectionCompanyGoals.part1Title" />
          </div>
          </div>
          <div className={css.iconPos}>
          <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div>
            <FormattedMessage id="SectionCompanyGoals.part1Text" />
          </div>
          </div>
        </div>



        <div className={css.step}>
        <div className={css.iconPos}>
          <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div> <FormattedMessage id="SectionCompanyGoals.part3Text"  />
          </div>
          </div>
        <div className={css.iconPos}>
        <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div>
            <FormattedMessage id="SectionCompanyGoals.part3Title" />
          </div>
          </div>
        </div>
      </div>
      
      <div className={css.buttonAlign}>
      <div className={css.statusLine2}></div>
      <NamedLink name='SignupPage' className={css.heroButton}>
                <FormattedMessage id="ConnectCompanyPage.connectCompany" />
              </NamedLink>
      </div>      


    </div>
  );
};


export default SectionCompanyGoals;
