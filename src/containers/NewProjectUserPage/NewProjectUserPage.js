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
  ImageGallery,
  SectionWhatIsMedla,
  SectionProjectDeal,
  SectionProjectFunctions,
  SectionTimeline,
  SectionProjectContact,
  SectionWhatIsMedlaDescription,
  SectionHeroProjectSales,
} from '../../components';

import StaticPage from '../StaticPage/StaticPage';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import imagephone from '../../assets/Medla-phones.png';
import imagemacbook from '../../assets/Medla-macbook.png';
import imagesvenskvind from '../../assets/Svensk-vind-logo.png';


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

        <div className={css.heroContainer}>
        <div className={css.heroContent} >
      
            <div className={css.sectionText}>
                  <div className={css.bannerLeft}>
                <h1 className={css.bannerContent}>
                   <FormattedMessage id="NewProjectUserPage.headline" ></FormattedMessage>
                </h1>
               <p className={css.bannerContent}>
                   <FormattedMessage id="NewProjectUserPage.newservice" ></FormattedMessage>
          </p>

            <ExternalLink href="https://www.peerdigital.se/anslut-projekt" className={css.heroButton}>
          <FormattedMessage id="NewProjectUserPage.connectProject" />
        </ExternalLink>

          <div className={css.quoteContainer}>
            <div className={css.quoteFont}><i>“Elektrifieringen erbjuder enorma möjligheter för en levande landsbygd, genom att lokala jobb skapas där behovet är som störst.</i> <strong>Medla underlättar denna utveckling."</strong></div>
            <div >
            <img className={css.imageSvenskVind} src={imagesvenskvind} alt="Medla in phones" />
            </div>
            </div>
    
         
          </div  >

          </div>
          </div>

          <div className={css.imageMacbookContainer}>
          <img className={css.imageMacbook} src={imagemacbook} alt="Medla in macbook" />
          </div>
          </div>
         
          <container className={css.sectionContent} >
            <div className={css.sections}>
            <SectionTimeline className={css.subSection} />
          <SectionProjectChallenges className={css.sectionProcessMaybe} />
          <div className={css.sectionProcessMaybeColor}>
          <SectionWhatIsMedla className={css.whatIsMedla} />
          <div className={css.sectionGallery}>
            <div>
            <SectionWhatIsMedlaDescription className={css.whatIsMedlaDescription}  /> 
            </div>
            <div> 
            <ImageGallery  className={css.gallery}/>
            <SectionProjectFunctions  className={css.functions} />

            </div>
          </div>

         
          </div>

          <SectionProjectGoals className={css.sectionProcessMaybe} />



          <SectionProjectContact className={css.lastSectionProcessMaybeColor} />
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