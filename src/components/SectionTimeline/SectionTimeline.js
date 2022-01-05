import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionTimeline.module.css';

const SectionTimeline = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>

    <div className={css.title}>
        <FormattedMessage id="SectionTimeline.titleLineOne" />

      </div>
      <div className={css.container}>
      

      <div className={css.statusBar}>
      <div className={css.statusCirclePlanning}></div>
      <div className={css.statusLine1}></div>
      <div className={css.statusCircleBuilding}></div>
      <div className={css.statusLine2}></div>
      <div className={css.statusCircleRunning}></div>
      <div className={css.statusCard}></div>
      </div>

    

      <div className={css.steps}>
        <div className={css.step}>
        <div className={css.statusArrowPlanning}></div>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionTimeline.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionTimeline.part1Text" />
          </p>
        </div>



        <div className={css.step}>
        <div className={css.statusArrowBuilding}></div>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionTimeline.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionTimeline.part2Text"  />
          </p>
        </div>
        <div className={css.step}>
        <div className={css.statusArrowRunning}></div>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionTimeline.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionTimeline.part3Text"  />
          </p>
        </div>
      </div>

      </div>
    </div>
  );
};


export default SectionTimeline;
