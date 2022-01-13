import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionWhatIsMedla.module.css';

const SectionWhatIsMedla = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionWhatIsMedla.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedla.part1Title" />
          </div>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionWhatIsMedla.part1Text" />
          </p>
        </div>
      </div>


    </div>
  );
};


export default SectionWhatIsMedla;
