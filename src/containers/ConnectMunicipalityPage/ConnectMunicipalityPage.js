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
  SectionTimelineMunicipality,
  SectionProjectContact,
  SectionWhatIsMedlaDescription,
  SectionHeroProjectSales,
  SectionProjectFAQ,
  SectionMunicipalityFAQ,
  SectionWhatIsMedlaMunicipality,
  SectionWhatIsMedlaDescriptionMunicipality,
  SectionMunicipalityGoals,
  SectionFoundersNoteMunicipality,
  ImageGalleryMunicipality,
} from '../../components';

import StaticPage from '../StaticPage/StaticPage';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import imagephone from '../../assets/Medla-phones.png';
import imagemacbook from '../../assets/Medla-macbook.png';
import imagesvenskvind from '../../assets/Svensk-vind-logo.png';
import imageSvenskVindProfile from '../../assets/Svensk-vind-profile.jpg';
import offshoreWind from '../../assets/offshore-wind.jpg'



import css from './ConnectMunicipalityPage.module.css';


const ConnectMunicipalityPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="Anslut kommun"
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
                <FormattedMessage id="ConnectMunicipalityPage.headline" ></FormattedMessage>
              </h1>
              <p className={css.bannerContent}>
                <FormattedMessage id="ConnectMunicipalityPage.newservice" ></FormattedMessage>
              </p>
              <ExternalLink href="mailto:info@medla.app?subject=F%C3%B6rfr%C3%A5gan%3A%20Anslut%20kommun%20till%20Medla" className={css.heroButton}>
                <FormattedMessage id="ConnectMunicipalityPage.connectProject" />
              </ExternalLink>
            </div>
            <div className={css.imageWrapper}>
              <img className={css.image} src={imagemacbook} alt="Medla in macbook" />
            </div>
          </div>
        </div>

         
          <container className={css.sectionContent} >
            <div className={css.sections}>
            <SectionTimelineMunicipality className={css.subSection} />
          <div className={css.sectionProcessMaybeColor}>
          <SectionWhatIsMedlaMunicipality className={css.whatIsMedla} />
            <div> 
            <ImageGalleryMunicipality  className={css.gallery}/>
            <SectionWhatIsMedlaDescriptionMunicipality className={css.whatIsMedlaDescription}  /> 
            <SectionProjectFunctions  className={css.functions} />
            </div>
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

export default ConnectMunicipalityPage;