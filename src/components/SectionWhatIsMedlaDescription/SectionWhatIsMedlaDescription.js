import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionWhatIsMedlaDescription.module.css';

const SectionWhatIsMedlaDescription = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>


      <div className={css.steps}>
        <div className={css.step}>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Title1" />
          </h3>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Text1" />
          </p>
        </div>
        <div className={css.step}>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Title2" />
          </h3>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Text2" />
          </p>
        </div>
        <div className={css.step}>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Title3" />
          </h3>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Text3" />
          </p>
        </div>
        <div className={css.step}>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Title4" />
          </h3>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Text4" />
          </p>
        </div>
      </div>


    </div>
  );
};


export default SectionWhatIsMedlaDescription;
