import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionTimelineCompany.module.css';
import phoneCompany1 from '../../assets/phone-company1.png';


const SectionTimelineCompany = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>

<h1><FormattedMessage id="SectionTimelineCompany.titleLineOne" /></h1>

      <div className={css.container}>





      <div className={css.steps}>

        <div className={css.step}>
     
        <div className={css.containerPhone}>
        <img className={css.imagePhone} src={phoneCompany1} alt="Company onboarding Medla" />
        </div>
        
          <p className={css.cardText}>
          <b><FormattedMessage id="SectionTimelineCompany.part1Title" /></b>
            <FormattedMessage id="SectionTimelineCompany.part1Text" />
          </p>
        </div>

        <div className={css.step}>
     
     <div className={css.containerPhone}>
     <img className={css.imagePhone} src={phoneCompany1} alt="Company onboarding Medla" />
     </div>
     
       <p className={css.cardText}>
       <b><FormattedMessage id="SectionTimelineCompany.part2Title" /></b>
         <FormattedMessage id="SectionTimelineCompany.part2Text" />
       </p>
     </div>

     <div className={css.step}>
     
     <div className={css.containerPhone}>
     <img className={css.imagePhone} src={phoneCompany1} alt="Company onboarding Medla" />
     </div>
     
       <p className={css.cardText}>
       <b> <FormattedMessage id="SectionTimelineCompany.part3Title" /></b>
         <FormattedMessage id="SectionTimelineCompany.part3Text" />
       </p>
     </div>




      </div>

      </div>
    </div>
  );
};


export default SectionTimelineCompany;
