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
          <div className={css.iconPos}>
        <IoChatbubblesOutline className={css.icon}></IoChatbubblesOutline>
          <h4 className={css.text}> <FormattedMessage id="SectionProjectFunctions.chat" /></h4>
          </div>
          <div className={css.iconPos}>
          <IoAnalyticsOutline className={css.icon}></IoAnalyticsOutline>
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.data" />
          </h4>
          </div>
          <div className={css.iconPos}>
          <IoApertureOutline className={css.icon}></IoApertureOutline>
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.seo" />
          </h4>
          </div>
          <div className={css.iconPos}>
        <IoPersonOutline className={css.icon}></IoPersonOutline>
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.companyprofiles" />
          </h4>
          </div>
          <div className={css.iconPos}>
          <IoNotificationsOutline className={css.icon}></IoNotificationsOutline>
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.notifications" />
          </h4>
          </div>
        </div>

        <div className={css.step}>
        <div className={css.iconPos}>
        <IoLanguageOutline className={css.icon}></IoLanguageOutline>
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.language" />
          </h4>
          </div>
          <div className={css.iconPos}>
          <IoPhonePortraitOutline className={css.icon}></IoPhonePortraitOutline>
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.phone" />
          </h4>
          </div>
        <div className={css.iconPos}>
        <IoSearchOutline className={css.icon}></IoSearchOutline>
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.search" />
          </h4>
          </div>
          <div className={css.iconPos}>
          <IoLocationOutline className={css.icon}></IoLocationOutline>
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.location" />
          </h4>
          </div>
          <div className={css.iconPos}>
        <IoGitNetworkOutline className={css.icon}></IoGitNetworkOutline>
          <h4 className={css.text}>
            <FormattedMessage id="SectionProjectFunctions.jobs" />
          </h4>
          </div>
        </div>

      </div>


    </div>
  );
};


export default SectionProjectFunctions;
