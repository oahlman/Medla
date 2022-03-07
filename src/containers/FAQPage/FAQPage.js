import React, { useState } from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import { FormattedMessage } from '../../util/reactIntl';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
  CollapsibleProjects,

} from '../../components';

import css from './FAQPage.module.css';

const FAQPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);

    const buttonText1 = isOpen1 ? 'Stäng' : 'Läs svar ';
    const buttonText2 = isOpen2 ? 'Stäng' : 'Läs svar ';
    const buttonText3 = isOpen3 ? 'Stäng' : 'Läs svar ';
    const buttonText4 = isOpen4 ? 'Stäng' : 'Läs svar ';
    const buttonText5 = isOpen5 ? 'Stäng' : 'Läs svar ';
    const buttonText6 = isOpen6 ? 'Stäng' : 'Läs svar ';
    const buttonText7 = isOpen7 ? 'Stäng' : 'Läs svar ';
    const buttonText8 = isOpen8 ? 'Stäng' : 'Läs svar ';
    const buttonText9 = isOpen9 ? 'Stäng' : 'Läs svar ';



  // prettier-ignore
  return (
    <StaticPage
      title="FAQ"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FAQPage',
        description: 'FAQ',
        name: 'FAQ',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}> <FormattedMessage id="Footer.toFAQPage"/>
</h1>
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

          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title10"/>}>
        <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text10" />
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

          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title9"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text9" />
          </p>
          </CollapsibleProjects>
 

  
        </div>
        
      </div>

          
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
