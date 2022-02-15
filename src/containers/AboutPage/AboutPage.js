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
              <p>Medlas mål är att låsa upp lokala krafter som accelererar omställningen till hållbar energiproduktion.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Vad är Medla?
              </h2>

              <p>
                Medla är en digital tjänst för lokal jobbförmedling i hållbara energiprojekt.
                Med Medla kan företag och enskilda firmor enkelt visa upp sin verksamheter,
                hitta relevanta jobbmöjligheter och påbörja affärsrelationer med aktörer i energisektorn.
                För projektägare gör Medla det möjligt att nå ut till det lokala näringslivet och effektivisera planering,
                bygge och underhåll av sina projekt.
              </p>

              <h2>
              Bakgrund
              </h2>

                <p>
                  Medla är sprunget ur ett mångårigt samarbete mellan Umeå Universitet och Energimyndigheten, och är en
                vidareutveckling av den forskningsprototyp som arbetades fram av universitetet, Vindkraftcentrum,
                Peer Digital och projektörer i vindkraftsektorn. Tjänsten drivs av Peer Digital med stöd av Medlas referensgrupp,
                vilken utgörs av aktörer och nyckelintressenter i förnybar energi-sektorn. Forskningsprototypen drivs vidare av Umeå Universitet.
                </p>

              <p>
                <h2>Våra mål</h2>
                1. <strong>Underlätta</strong> utbyggnaden av hållbar energiproduktion i Sverige.
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
