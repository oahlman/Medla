import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectFAQ.module.css';
import { IoCheckmarkOutline } from "react-icons/io5";
import {
  CollapsibleProjects
} from '../../components';



const SectionProjectFAQ = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
      <FormattedMessage  id="SectionProjectFAQ.titleLineOne" />
        
      </div>

      <div className={css.steps}>
        <div className={css.step}>

          <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title1"/>}>
    <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text1" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title2"/>}>
     <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text2" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title3"/>}>
     <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text3" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title4"/>}>
        <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text4" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title9"/>}>
        <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text9" />
          </p>
          </CollapsibleProjects>
        </div>


        <div className={css.step}>

        <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title5"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text5" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title6"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text6" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title7"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text7" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title8"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text8" />
          </p>
          </CollapsibleProjects>

          <CollapsibleProjects label={<FormattedMessage id="SectionProjectFAQ.Title10"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionProjectFAQ.Text10" />
          </p>
          </CollapsibleProjects>
        </div>
        
      </div>


    </div>
  );
};


export default SectionProjectFAQ;
