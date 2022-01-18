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
import imagesvenskvind from '../../assets/Svensk-vind-logo.png';
import imageSvenskVindProfile from '../../assets/Svensk-vind-profile.jpg';
import offshoreWind from '../../assets/offshore-wind.jpg'



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
              <ExternalLink href="https://www.peerdigital.se/anslut-projekt" className={css.heroButton}>
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
            <SectionTimeline className={css.subSection} />
          <div className={css.sectionProcessMaybeColor}>
          <SectionWhatIsMedla className={css.whatIsMedla} />
            <div> 
            <ImageGallery  className={css.gallery}/>
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
          <SectionFoundersNote className={css.sectionProcessMaybe}/>
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