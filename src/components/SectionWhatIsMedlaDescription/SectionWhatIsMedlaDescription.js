import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import macbook from '../../assets/macbook-jobs.png';
import iphone from '../../assets/iphone.png';
import macbookFrame from '../../assets/macbook.png';
import notification from '../../assets/text-notification.mov';
import chat from '../../assets/chat.mov';
import answerJob from '../../assets/answer-job.mov';
import portalImg from '../../assets/portal.png';
import searchImg from '../../assets/search.png';
import jobImg from '../../assets/jobs.png';
import dashboardImg from '../../assets/dashboard.png';

import css from './SectionWhatIsMedlaDescription.module.css';

const SectionWhatIsMedlaDescription = props => {

  /*<div className={css.step}>
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
        </div>*/

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.features}>
      <div className={css.feature}>
        <div className={css.featureText}>
          <div className={css.featureTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Title1" />
          </div>
          <p className={css.featureDescription}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Text1" />
          </p>
          </div>
        <div className={css.featureImageRight}>
          <img className={css.image} src={portalImg} alt="Company onboarding Medla" />
        </div>
        </div>
        
        <div className={css.feature}>
        <div className={css.featureText}>
          <div className={css.featureTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Title2" />
          </div>
          <p className={css.featureDescription}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Text2" />
          </p>
          </div>
        <div className={css.featureImageLeft}>
          <img className={css.image} src={jobImg} alt="Company onboarding Medla" />
        </div>
        </div>

        <div className={css.feature}>
        <div className={css.featureText}>
          <div className={css.featureTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Title3" />
          </div>
          <p className={css.featureDescription}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Text3" />
          </p>
          </div>
        <div className={css.featureImageRight}>
        <img className={css.image} src={searchImg} alt="Company onboarding Medla" />
        </div>
        </div>

        <div className={css.feature}>
        <div className={css.featureText}>
          <div className={css.featureTitle}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Title4" />
          </div>
          <p className={css.featureDescription}>
            <FormattedMessage id="SectionWhatIsMedlaDescription.Text4" />
          </p>
          </div>
        <div className={css.featureImageLeft}>
          <img className={css.image} src={dashboardImg} alt="Company onboarding Medla" />
        </div>
        </div>
        
      </div>


    </div>
  );
};


export default SectionWhatIsMedlaDescription;
