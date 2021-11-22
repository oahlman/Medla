import React, { useState } from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import { FormattedMessage } from '../../util/reactIntl';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
  Collapsible,

} from '../../components';

import css from './FAQPage.module.css';

const FAQPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);

    const buttonText1 = isOpen1 ? 'Stäng' : 'Läs svar ';
    const buttonText2 = isOpen2 ? 'Stäng' : 'Läs svar ';
    const buttonText3 = isOpen3 ? 'Stäng' : 'Läs svar ';
    const buttonText4 = isOpen4 ? 'Stäng' : 'Läs svar ';
    const buttonText5 = isOpen5 ? 'Stäng' : 'Läs svar ';
    const buttonText6 = isOpen6 ? 'Stäng' : 'Läs svar ';
    const buttonText7 = isOpen7 ? 'Stäng' : 'Läs svar ';
    const buttonText8 = isOpen8 ? 'Stäng' : 'Läs svar ';
    const buttonText9 = isOpen9 ? 'Stäng' : 'Läs svar ';



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
          <h1 className={css.pageTitle}>Vanliga frågor</h1>

          <div className={css.contentWrapper}>


            <div className={css.contentMain}>
              <div>
               <a className={isOpen1 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen1(!isOpen1)}>
                <h3 className={css.cardText}>Vilka står bakom Medla?</h3>
                <div className={isOpen1 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText1}{' '}
                </div>
                </a>
                <div className={ isOpen1 ? css.containerOpenText : css.hidden}>
                {isOpen1 ? (
                <p className={css.textFormat}>Medla drivs av Peer Digital Sweden AB med stöd av en referensgrupp. Bolaget är startat av tidigare projektledare och utvecklare från Umeå Universitet. Referensgruppen består av intressenter och experter från energisektorn. Tjänsten bygger på lärdomar från ett pilotprojekt mellan Umeå Universitet, Vindkraftcentrum och Energimyndigheten för lokal samverkan i utbyggnaden av svensk vindkraft.</p>
                ) : null}
               </div>
               </div>


               <div>
               <a className={isOpen2 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen2(!isOpen2)}>
                <h3 className={css.cardText}>Är Medla gratis?</h3>
                <div className={isOpen2 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText2}{' '}
                </div>
                </a>
                <div className={ isOpen2 ? css.containerOpenText : css.hidden}>
                {isOpen2 ? (
                <p className={css.textFormat}>För företag och personer som använder tjänsten är Medla helt gratis. Projektägare betalar för att ansluta sina projekt till Medla.</p>
                ) : null}
                </div>
                </div>

                <div>
                <a className={isOpen3 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen3(!isOpen3)}>
                <h3 className={css.cardText}>Hur registrerar jag mitt företag?</h3>
                <div className={isOpen3 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText4}{' '}
                </div>
                </a>
                <div className={ isOpen3 ? css.containerOpenText : css.hidden}>
                {isOpen3 ? (
                <p className={css.textFormat}><NamedLink name="SignupPage"> <FormattedMessage id="FrequentlyAskedQuestionsPage.signupForm" /> </NamedLink> och verifiera sedan ditt konto via länken du får på mail eller sms. Om uppgifterna är korrekta kommer ditt företag att synas på Medla inom 24 timmar. Om du inte vill göra ditt företag synligt kan du lämna fältet "Företag" blankt vid registrering.</p>
                ) : null}
                </div>
                </div>

                <div>
                <a className={isOpen4 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen4(!isOpen4)}>
                <h3 className={css.cardText}>Kan jag registrera mig på Medla utan företag?</h3>
                <div className={isOpen4 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText4}{' '}
                </div>
                </a>
                <div className={ isOpen4 ? css.containerOpenText : css.hidden}>
                {isOpen4 ? (
                <p className={css.textFormat}>Absolut! Utöver företag så är andra organisationer som föreningar och kommuner är välkomna att registrera sig på Medla. Om du inte vill visa upp någon verksamhet alls kan du lämna fältet "Företag" blankt vid registrering.</p>
                ) : null}
                </div>
                </div>

                <div>
                <a className={isOpen5 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen5(!isOpen5)}>
                <h3 className={css.cardText} >Vilka projekt finns på Medla?</h3>
                <div className={isOpen5 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText5}{' '}
                </div>
                </a>
                <div className={ isOpen5 ? css.containerOpenText : css.hidden}>
                {isOpen5 ? (
                <p className={css.textFormat}>På Medla hittar du projekt inom hållbar energiproduktion. Exempelvis vindparker, vätgasanläggningar och batterifabriker. Projekten på Medla kan vara i olika faser, från prospektering till bygglovsansökan och pågående drift. Nuvarande projektstauts visas för varje projekt och uppdaterras löpande (ibland med viss fördröjning). Håll utkik, nya projekt ansluter regelbundet!</p>
                ) : null}
                </div>
                </div>


                <div>
                <a className={isOpen6 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen6(!isOpen6)}>
                <h3 className={css.cardText} >Vilka typer av jobb kan jag hitta på Medla?</h3>
                <div className={isOpen6 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText6}{' '}
                </div>
                </a>
                <div className={ isOpen6 ? css.containerOpenText : css.hidden}>
                {isOpen6 ? (
                <p className={css.textFormat}>Aktörer i anslutna projekt använder Medla för att hitta hjälp med alla typer av behov som dyker upp kring projektet. Det kan vara allt från boende och måltider till frisörer och grävmaskiner. Medla har 20 branscher som du kan söka och filtrera på. Du hittar samtliga under Filter <NamedLink name="SearchPage"> <FormattedMessage id="FrequentlyAskedQuestionsPage.searchPage" /> </NamedLink>.</p>
                ) : null}
                </div>
                </div>

                <div>
                <a className={isOpen7 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen7(!isOpen7)}>
                <h3 className={css.cardText}>Jag har kört fast, hur får jag hjälp?</h3>
                <div className={isOpen7 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText7}{' '}
                </div>
                </a>
                <div className={ isOpen7 ? css.containerOpenText : css.hidden}>
                {isOpen7 ? (
                <p className={css.textFormat}>Du kan maila oss på <ExternalLink href="mailto:support@medla.app"> <FormattedMessage id="FrequentlyAskedQuestionsPage.supportEmail" /> </ExternalLink> eller ringa oss på 073-800 92 93.</p>
                ) : null}
                </div>
                </div>

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
