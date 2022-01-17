import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectFunctions.module.css';
import { IoColorPaletteOutline, IoGitNetworkOutline, IoPersonOutline, IoNotificationsOutline, IoSearchOutline, IoChatbubblesOutline, IoLanguageOutline, IoPhonePortraitOutline, IoCodeSlashOutline, IoAnalyticsOutline, IoApertureOutline, IoLocationOutline } from "react-icons/io5";

const SectionProjectFunctions = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>
       
        <div className={css.step}>
          <h4 className={css.text}> <FormattedMessage id="SectionProjectFunctions.chat" /></h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.data" />
          </h4>
        <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.seo" />
          </h4>
         
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.companyprofiles" />
          </h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.notifications" />
          </h4>
        


      
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.language" />
          </h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.phone" />
          </h4>
       
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.search" />
          </h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.location" />
          </h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.jobs" />
          </h4>
        </div>


        
      </div>


    </div>
  );
};


export default SectionProjectFunctions;
