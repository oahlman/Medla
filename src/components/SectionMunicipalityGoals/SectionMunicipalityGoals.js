import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionMunicipalityGoals.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";

const SectionMunicipalityGoals = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionMunicipalityGoals.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.iconPos}>
        <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div>
            <FormattedMessage id="SectionMunicipalityGoals.part1Title" />
          </div>
          </div>
          <div className={css.iconPos}>
          <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div>
            <FormattedMessage id="SectionMunicipalityGoals.part1Text" />
          </div>
          </div>
        </div>



        <div className={css.step}>
        <div className={css.iconPos}>
          <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div> <FormattedMessage id="SectionMunicipalityGoals.part3Text"  />
          </div>
          </div>
        <div className={css.iconPos}>
        <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <div>
            <FormattedMessage id="SectionMunicipalityGoals.part3Title" />
          </div>
          </div>

         
        </div>
      </div>


    </div>
  );
};


export default SectionMunicipalityGoals;
