import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionCompanyFAQ.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";
import {
  CollapsibleProjects
} from '..';



const SectionCompanyFAQ = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
      <FormattedMessage  id="SectionCompanyFAQ.titleLineOne" />
        
      </div>

      <div className={css.steps}>
        <div className={css.step}>

          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title1"/>}>
    <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text1" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title2"/>}>
     <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text2" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title3"/>}>
     <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text3" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title4"/>}>
        <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text4" />
          </p>
          </CollapsibleProjects>


        </div>


        <div className={css.step}>

        <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title5"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text5" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title6"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text6" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title7"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text7" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title8"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text8" />
          </p>
          </CollapsibleProjects>

 

  
        </div>
        
      </div>


    </div>
  );
};


export default SectionCompanyFAQ;
