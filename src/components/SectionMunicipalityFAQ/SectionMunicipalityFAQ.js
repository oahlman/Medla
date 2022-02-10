import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionMunicipalityFAQ.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";
import {
  CollapsibleProjects
} from '..';



const SectionMunicipalityFAQ = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
      <FormattedMessage  id="SectionMunicipalityFAQ.titleLineOne" />
        
      </div>

      <div className={css.steps}>
        <div className={css.step}>

          <CollapsibleProjects label={<FormattedMessage id="SectionMunicipalityFAQ.Title1"/>}>
    <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionMunicipalityFAQ.Text1" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionMunicipalityFAQ.Title2"/>}>
     <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionMunicipalityFAQ.Text2" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionMunicipalityFAQ.Title3"/>}>
     <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionMunicipalityFAQ.Text3" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionMunicipalityFAQ.Title4"/>}>
        <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionMunicipalityFAQ.Text4" />
          </p>
          </CollapsibleProjects>


        </div>


        <div className={css.step}>

        <CollapsibleProjects label={<FormattedMessage id="SectionMunicipalityFAQ.Title5"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionMunicipalityFAQ.Text5" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionMunicipalityFAQ.Title6"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionMunicipalityFAQ.Text6" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionMunicipalityFAQ.Title7"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionMunicipalityFAQ.Text7" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionMunicipalityFAQ.Title8"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionMunicipalityFAQ.Text8" />
          </p>
          </CollapsibleProjects>

 

  
        </div>
        
      </div>


    </div>
  );
};


export default SectionMunicipalityFAQ;
