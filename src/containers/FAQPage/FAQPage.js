import React, { useState } from 'react';
import { StaticPage, TopbarContainer } from '..';
import { FormattedMessage } from '../../util/reactIntl';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  CollapsibleProjects,
} from '../../components';

import css from './FAQPage.module.css';

const FAQPage = () => {
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

        


        </div>


        <div className={css.step}>

        <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title5"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text5" />
          </p>
          </CollapsibleProjects>
      {/* 
          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title6"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text6" />
          </p>
          </CollapsibleProjects>
        */}
       {/*    <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title7"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text7" />
          </p>
          </CollapsibleProjects>
      */}
          <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title8"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text8" />
          </p>
          </CollapsibleProjects>

         {/*  <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title9"/>}>
          <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text9" />
          </p>
          </CollapsibleProjects>
          */}
        <CollapsibleProjects label={<FormattedMessage id="SectionCompanyFAQ.Title10"/>}>
        <p className={css.stepSubtitle}>
            <FormattedMessage id="SectionCompanyFAQ.Text10" />
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
