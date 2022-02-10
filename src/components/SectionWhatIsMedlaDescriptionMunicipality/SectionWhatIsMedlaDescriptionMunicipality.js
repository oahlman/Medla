import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionWhatIsMedlaDescriptionMunicipality.module.css';

const SectionWhatIsMedlaDescriptionMunicipality = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescriptionMunicipality.Title1" />
          </div>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescriptionMunicipality.Text1" />
          </p>
        </div>
        <div className={css.step}>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescriptionMunicipality.Title2" />
          </h3>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescriptionMunicipality.Text2" />
          </p>
        </div>
        <div className={css.step}>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescriptionMunicipality.Title3" />
          </h3>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescriptionMunicipality.Text3" />
          </p>
        </div>
        <div className={css.step}>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescriptionMunicipality.Title4" />
          </h3>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescriptionMunicipality.Text4" />
          </p>
        </div>
      </div>


    </div>
  );
};


export default SectionWhatIsMedlaDescriptionMunicipality;
