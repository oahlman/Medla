import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectChallanges.module.css';

const SectionProjectChallanges = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjectChallanges.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectChallanges.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionProjectChallanges.part1Text" />
          </p>
        </div>



        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectChallanges.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionProjectChallanges.part3Text"  />
          </p>
        </div>
      </div>


    </div>
  );
};


export default SectionProjectChallanges;
