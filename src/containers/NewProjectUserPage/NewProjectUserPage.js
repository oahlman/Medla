import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
  SectionProjectTransfer,
  SectionWhyMedla,
  SectionProjectChallenges,
  SectionProjectGoals,
  SectionQuote,
  SectionFoundersNote,
  ImageGallery,
  SectionWhatIsMedla,
  SectionHowItWorksProjects,
  SectionProjectDeal,
  SectionProjectFunctions,
  SectionTimeline,
  SectionProjectContact,
  SectionWhatIsMedlaDescription,
  SectionHeroProjectSales,
  SectionProjectFAQ,
} from '../../components';

import StaticPage from '../StaticPage/StaticPage';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import imagephone from '../../assets/Medla-phones.png';
import imagemacbook from '../../assets/Medla-macbook.png';



import css from './NewProjectUserPage.module.css';


const NewProjectUserPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="Anslut projekt"
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
                <FormattedMessage id="NewProjectUserPage.headline" ></FormattedMessage>
              </h1>
              <p className={css.bannerContent}>
                <FormattedMessage id="NewProjectUserPage.newservice" ></FormattedMessage>
              </p>
              <ExternalLink href="https://www.peerdigital.se/anslut-projekt" className={css.heroButtonTop}>
                <FormattedMessage id="NewProjectUserPage.connectProject" />
              </ExternalLink>
            </div>
            <div className={css.imageWrapper}>
              <img className={css.image} src={imagemacbook} alt="Medla in macbook" />
            </div>
          </div>
        </div>

         
          <container className={css.sectionContent} >
            <div className={css.sections}>
            <SectionHowItWorksProjects />
          <div className={css.sectionProcessMaybeColor}>
          <SectionWhatIsMedla className={css.whatIsMedla} />
            <div> 
            <SectionWhatIsMedlaDescription className={css.whatIsMedlaDescription}  /> 
            <SectionProjectFunctions  className={css.functions} />
            </div>
          </div>
          <SectionProjectFAQ />

          <SectionProjectGoals className={css.sectionProcessMaybeColorGrey} />
          <div className={css.contactContainer}>
            <div className={css.contactTextContainer}>
          </div>
          <div className={css.imageContainer}>
          <div className={css.imageContact}></div>
          </div>
          </div>
          </div>

      <div className={css.sectionProcessEndCurve}>
      <div className={css.buttonAlign}>
      
      <div className={css.titleCTA}>
        <FormattedMessage id="SectionProjectGoals.titleLineTwoCTA" />

      </div>
              <ExternalLink className={css.heroButtonTop} href="mailto:info@medla.app?subject=Komma%20ig%C3%A5ng%20med%20Medla">
              <FormattedMessage id="ConnectCompanyPage.connectProjectOwner" />
                  </ExternalLink>
      </div>  
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

export default NewProjectUserPage;