import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectGoals.module.css';

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
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectGoals.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionProjectGoals.part1Text" />
          </p>
        </div>



        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectGoals.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionProjectGoals.part3Text"  />
          </p>
        </div>
      </div>


    </div>
  );
};


export default SectionProjectGoals;
