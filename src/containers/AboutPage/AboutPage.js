import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  SectionFoundersNote,
} from '../../components';

import css from './AboutPage.module.css';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Medla',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Om Medla</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Medlas mål är att låsa upp lokala krafter som accelererar omställningen till fossilfria samhällen.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Vad är Medla?
              </h2>

              <p>
                Medla är en digital tjänst för lokal jobbförmedling i gröna industriprojekt.
                Med Medla kan företag och enskilda firmor enkelt visa upp sin verksamheter,
                hitta relevanta jobbmöjligheter och påbörja affärsrelationer med aktörer i energisektorn.
                För projektägare gör Medla det möjligt att nå ut till det lokala näringslivet och effektivisera planering,
                bygge och underhåll av sina projekt.
              </p>

              <h2>
              Bakgrund
              </h2>

                <p>
                Medla bygger på forskning i informatik, digitalisering och landsbygdsutveckling, samt på användarpiloter i vindkraftbranschen. 
                Medla och tillhörande tjänster tillhandahålls och utvecklas av Peer Digital Sweden AB med tillsammans med en referensgrupp av 
                experter inom svenskt näringsliv och grön industri. 
                </p>

              <p>
                <h2>Våra mål</h2>
                1. <strong>Underlätta</strong> utbyggnaden av fossilfri industri i Sverige.
                <br></br>
                2. <strong>Tillgängliggöra</strong> projekt så att lokala företag och samhällen kan dra nytta av investeringar i deras närhet.
                <br></br>
                3. <strong>Stärka förankring</strong> mellan projektaktörer och lokala intressenter.

              </p>

              <h2>Kontakt</h2>
              <p>
              Har du frågor eller funderingar så når du oss på {''}
                <ExternalLink href="mailto:info@medla.app">info@medla.app</ExternalLink>.
              </p>
              <div className={css.divider}></div>
              <SectionFoundersNote />
              <div className={css.divider}></div>
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

export default AboutPage;
