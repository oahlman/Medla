import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionTimelineMunicipality.module.css';

const SectionTimelineMunicipality = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>


      <div className={css.container}>

      <div className={css.steps}>

        <div className={css.step}>
          <div className={css.opacityCurtainRunning}>
          <h3 className={css.stepTitleRunning}>
            <FormattedMessage id="SectionTimelineMunicipality.part1Title" />
          </h3>
          </div>
          <p>
            <FormattedMessage id="SectionTimelineMunicipality.part1Text" />
          </p>
        </div>



        <div className={css.step}>
        <div className={css.opacityCurtainRunning}>
          <h3 className={css.stepTitleRunning}>
            <FormattedMessage id="SectionTimelineMunicipality.part2Title" />
          </h3>
          </div>
          <p>
            <FormattedMessage id="SectionTimelineMunicipality.part2Text"  />
          </p>
        </div>
        <div className={css.step}>
        <div className={css.opacityCurtainRunning}>
          <h3 className={css.stepTitleRunning}>
            <FormattedMessage id="SectionTimelineMunicipality.part3Title" />
          </h3>
          </div>
          <p>
            <FormattedMessage id="SectionTimelineMunicipality.part3Text"  />
          </p>
        </div>
      </div>

      </div>
    </div>
  );
};


export default SectionTimelineMunicipality;
