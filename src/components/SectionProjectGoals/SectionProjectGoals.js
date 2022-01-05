import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectGoals.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";

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
          <h2>
            <FormattedMessage id="SectionProjectGoals.part1Title" />
          </h2>
          </div>
          <div className={css.iconPos}>
          <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <h2>
            <FormattedMessage id="SectionProjectGoals.part1Text" />
          </h2>
          </div>
        </div>



        <div className={css.step}>
        <div className={css.iconPos}>
          <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <h2> <FormattedMessage id="SectionProjectGoals.part3Text"  />
          </h2>
          </div>
        <div className={css.iconPos}>
        <IoCheckmarkOutline className={css.icon}></IoCheckmarkOutline>
          <h2>
            <FormattedMessage id="SectionProjectGoals.part3Title" />
          </h2>
          </div>

         
        </div>
      </div>


    </div>
  );
};


export default SectionProjectGoals;
