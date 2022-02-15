import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionConnectCompanyFunctions.module.css';
import { IoColorPaletteOutline, IoGitNetworkOutline, IoPersonOutline, IoNotificationsOutline, IoSearchOutline, IoChatbubblesOutline, IoLanguageOutline, IoPhonePortraitOutline, IoCodeSlashOutline, IoAnalyticsOutline, IoApertureOutline, IoLocationOutline } from "react-icons/io5";

const SectionConnectCompanyFunctions = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>
       
        <div className={css.step}>
          <h4 className={css.text}> <FormattedMessage id="SectionConnectCompanyFunctions.chat" /></h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.data" />
          </h4>
        <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.seo" />
          </h4>
         
          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.companyprofiles" />
          </h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.notifications" />
          </h4>
        


      
          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.language" />
          </h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.phone" />
          </h4>
       
          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.search" />
          </h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.location" />
          </h4>
          
          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.jobs" />
          </h4>

          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.helikopter" />
          </h4>
          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.media" />
          </h4>

          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.catering" />
          </h4>

          <h4 className={css.text}>
            <FormattedMessage id="SectionConnectCompanyFunctions.restaurang" />
          </h4>
        </div>


        
      </div>


    </div>
  );
};


export default SectionConnectCompanyFunctions;
