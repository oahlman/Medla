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
  SectionHowItWorks,
  SectionSignUpProcess,
  SecondaryButton,
  Button,
} from '../../components';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';
import imagephone from '../../assets/Medla-phones.png';
import imagemacbook from '../../assets/Medla-macbook.png';



import css from './NewUserPage.module.css';


const NewUserPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="Ny användare"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'Description of this page',
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
                <div>
          <h1 className={css.bannerContent}>
             <FormattedMessage id="NewUserPage.headline" ></FormattedMessage>
          </h1>
          <p className={css.bannerContent}>
             <FormattedMessage id="NewUserPage.newservice" ></FormattedMessage>
          </p>
          
            <NamedLink  className={css.heroButton} name="LoginPage" >

            <p></p><FormattedMessage id="NewUserPage.button" ></FormattedMessage>
            </NamedLink>

          </div  >
          
          
          <div className={css.imagePhoneContainer}>

          <img className={css.imagePhone} src={imagephone} alt="Medla in phones" />
          </div>

          <div className={css.imageMacbookContainer}>
          <img className={css.imageMacbook} src={imagemacbook} alt="Medla in macbook" />
          </div>
         
          </div>
          
          </container>
          
          <SectionSignUpProcess className={css.sectionProcessMaybe}></SectionSignUpProcess>
          <div>
       
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default NewUserPage;