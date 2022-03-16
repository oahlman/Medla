import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import phoneCompany1 from '../../assets/phone-company1.png';
import phoneCompany2 from '../../assets/phone-company2.png';
import phoneCompany3 from '../../assets/phone-company3.png';

import css from './SectionHowItWorksProjects.module.css';


const SectionHowItWorksProjects = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksProjects.part1Title" />
          </h2>
          <p >
            <FormattedMessage id="SectionHowItWorksProjects.part1Text" values={null} />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksProjects.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorksProjects.part2Text" values={null} />
          </p>

        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksProjects.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorksProjects.part3Text" values={null} />
          </p>
        </div>
      </div>
    </div>
  );
};


export default SectionHowItWorksProjects;
