import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectFAQ.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";

const SectionProjectFAQ = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjectFAQ.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
        <div className={css.stepTitle}>
            <FormattedMessage id="SectionProjectFAQ.Title1" />
          </div>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text1" />
          </p>
          <div className={css.stepTitle}>
            <FormattedMessage id="SectionProjectFAQ.Title2" />
          </div>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text2" />
          </p>
          <div className={css.stepTitle}>
            <FormattedMessage id="SectionProjectFAQ.Title3" />
          </div>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text3" />
          </p>
          <div className={css.stepTitle}>
            <FormattedMessage id="SectionProjectFAQ.Title4" />
          </div>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text4" />
          </p>
        </div>


        <div className={css.step}>
          <div className={css.stepTitle}>
            <FormattedMessage id="SectionProjectFAQ.Title5" />
          </div>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text5" />
          </p>
          <div className={css.stepTitle}>
            <FormattedMessage id="SectionProjectFAQ.Title6" />
          </div>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text6" />
          </p>
         <div className={css.stepTitle}>
            <FormattedMessage id="SectionProjectFAQ.Title7" />
          </div>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text7" />
          </p>
        </div>
        
      </div>


    </div>
  );
};


export default SectionProjectFAQ;
