import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionTimelineCompany.module.css';

const SectionTimelineCompany = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>

<h1><FormattedMessage id="SectionTimelineCompany.titleLineOne" /></h1>

      <div className={css.container}>


      <div className={css.statusBar}>
      <div className={css.statusCirclePlanning}>
      <div className={css.statusArrowPlanning}></div>
      
      </div>
      <div className={css.statusLine1}></div>
      <div className={css.statusCircleBuilding}>
      <div className={css.statusArrowBuilding}></div>

      </div>
      <div className={css.statusLine2}></div>
      <div className={css.statusCircleRunning}>
      <div className={css.statusArrowRunning}></div>

      </div>
      <div className={css.statusCard}></div>
      </div>



      <div className={css.steps}>

        <div className={css.step}>
          <div className={css.opacityCurtainPlanning}>
          <h3 className={css.stepTitlePlanning}>
            <FormattedMessage id="SectionTimelineCompany.part1Title" />
          </h3>
          </div>
          <p>
            <FormattedMessage id="SectionTimelineCompany.part1Text" />
          </p>
        </div>



        <div className={css.step}>
        <div className={css.opacityCurtainBulding}>
          <h3 className={css.stepTitleBuilding}>
            <FormattedMessage id="SectionTimelineCompany.part2Title" />
          </h3>
          </div>
          <p>
            <FormattedMessage id="SectionTimelineCompany.part2Text"  />
          </p>
        </div>
        <div className={css.step}>
        <div className={css.opacityCurtainRunning}>
          <h3 className={css.stepTitleRunning}>
            <FormattedMessage id="SectionTimelineCompany.part3Title" />
          </h3>
          </div>
          <p>
            <FormattedMessage id="SectionTimelineCompany.part3Text"  />
          </p>
        </div>
      </div>

      </div>
    </div>
  );
};


export default SectionTimelineCompany;