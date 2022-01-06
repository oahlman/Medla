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
} from '../../components';

import StaticPage from '../StaticPage/StaticPage';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import imagephone from '../../assets/Medla-phones.png';
import imagemacbook from '../../assets/Medla-macbook.png';
import imagesvenskvind from '../../assets/Medla-svenskvind.png';


import css from './NewProjectUserPage.module.css';


const NewProjectUserPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="Nytt för projektör"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'Introduktionssida för projektörer',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>

        <container className={css.sectionContent} >
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

          </div  >
          <div className={css.imagePhoneContainer}>
          <img className={css.imagePhone} src={imagephone} alt="Medla in phones" />
          </div>
          <div className={css.imageMacbookContainer}>
          <img className={css.imageMacbook} src={imagemacbook} alt="Medla in macbook" />
          </div>
          </div>
          <SectionProjectChallenges ></SectionProjectChallenges>
          <SectionProjectDeal></SectionProjectDeal>
          <SectionWhatIsMedla ></SectionWhatIsMedla>
          <ImageGallery />
          <SectionProjectGoals></SectionProjectGoals>
          <SectionQuote ></SectionQuote>
          <SectionProjectFunctions  ></SectionProjectFunctions>
          <SectionTimeline ></SectionTimeline>



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