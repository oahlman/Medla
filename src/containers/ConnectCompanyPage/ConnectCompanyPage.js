import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  SectionConnectCompanyFunctions,
  SectionMunicipalityFAQ,
  SectionMunicipalityGoals,
  SectionFoundersNoteMunicipality,
  SectionTimelineCompany,
} from '../../components';

import StaticPage from '../StaticPage/StaticPage';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import macbookjobs from '../../assets/macbook-jobs.png';
import css from './ConnectCompanyPage.module.css';


const ConnectCompanyPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="Registrera Företag"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'Introduktionssida för projektörer',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn className={css.overflow} >
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
        <div className={css.hero}>
          <div className={css.row}>
            <div className={css.text}>
              <h1 className={css.bannerContent}>
                <FormattedMessage id="ConnectCompanyPage.headline" ></FormattedMessage>
              </h1>
              <p className={css.bannerContent}>
                <FormattedMessage id="ConnectCompanyPage.newservice" ></FormattedMessage>
              </p>
              <ExternalLink href="mailto:info@medla.app?subject=F%C3%B6rfr%C3%A5gan%3A%20Anslut%20kommun%20till%20Medla" className={css.heroButton}>
                <FormattedMessage id="ConnectCompanyPage.connectProject" />
              </ExternalLink>
            </div>
            <div className={css.imageWrapper}>
              <img className={css.image} src={macbookjobs} alt="Medla in macbook" />
            </div>
          </div>
        </div>

         
          <container className={css.sectionContent} >
            <div className={css.sections}>

            <div className={css.bransch}>
              
            <h1 className={css.headingBransch}><FormattedMessage id="ConnectCompanyPage.bransch" /></h1>
            <SectionConnectCompanyFunctions  className={css.functions} />
            </div>

            <SectionTimelineCompany></SectionTimelineCompany>
          <div className={css.sectionProcessMaybeColor}>
          </div>
          <SectionMunicipalityFAQ />

          <SectionMunicipalityGoals className={css.sectionProcessMaybeColorGrey} />
          <div className={css.contactContainer}>
            <div className={css.contactTextContainer}>
          </div>
          <div className={css.imageContainer}>
          <div className={css.imageContact}></div>
          </div>
          </div>
          <SectionFoundersNoteMunicipality className={css.sectionProcessMaybe}/>
          </div>



          </container>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default ConnectCompanyPage;