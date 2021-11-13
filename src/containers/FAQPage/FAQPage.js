import React, { useState } from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
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
                <h3 className={css.cardText} >Varför syns mitt företag på Medla?</h3>
                <div className={isOpen1 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText1}{' '}
                </div>
                </a>

                <div className={ isOpen1 ? css.containerOpenText : css.hidden}>
                {isOpen1 ? (
                <p className={css.textFormat}> Användare som hade en profil på prototypen har också fått en på Medla, vill du ändra, eller ta bort profilen kontakta oss. För att logga in på din profil följ dessa stegLÄNK </p>
                ) : null}
                </div>
                </div>
              
              
              <div>
               <a className={isOpen2 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen2(!isOpen2)}>
                <h3 className={css.cardText} >Vem står bakom Medla?</h3>
                <div className={isOpen2 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText2}{' '}
                </div>
                </a>
                <div className={ isOpen2 ? css.containerOpenText : css.hidden}>
                {isOpen2 ? (
                <p className={css.textFormat}> Peer Digital Sweden står bakom Medla. Läs här om våra tidigare samarbeten med Energimyndigheten, Vindkraftcentrum och Umeå Universitet </p>
                ) : null}
               </div>
               </div>


               <div>
               <a className={isOpen3 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen3(!isOpen3)}>
                <h3 className={css.cardText} >Vad kostar det?</h3>
                <div className={isOpen3 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText3}{' '}
                </div>
                </a>
                <div className={ isOpen3 ? css.containerOpenText : css.hidden}>
                {isOpen3 ? (
                <p className={css.textFormat}> Medla är kostnadsfritt för företagare, projektägare betalar för att lägga upp projekt, kontakta oss eller ansök om du vill lägga upp ditt projekt. </p>
                ) : null}
                </div>
                </div>

                <div>
                <a className={isOpen4 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen4(!isOpen4)}>
                <h3 className={css.cardText} >Jag får inga notiser</h3>
                <div className={isOpen4 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText4}{' '}
                </div>
                </a>
                <div className={ isOpen4 ? css.containerOpenText : css.hidden}>
                {isOpen4 ? (
                <p className={css.textFormat}> Kolla så att du har valt bevakningar och en notismetod, kolla även så att du har tillgång till mailadressen eller telefonnummret som är angivet på företagets profil. </p>
                ) : null}
                </div> 
                </div>

                <div>
                <a className={isOpen5 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen5(!isOpen5)}>
                <h3 className={css.cardText} >Jag vill lägga upp boende, hur gör jag?</h3>
                <div className={isOpen5 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText5}{' '}
                </div>
                </a>
                <div className={ isOpen5 ? css.containerOpenText : css.hidden}>
                {isOpen5 ? (
                <p className={css.textFormat}> I dagsläget lägger du upp boenden precis som andra tjänster under Ditt Företag -> Ändra företag -> Tjänster. Vi har planer på att lägga till fler funktioner för boenden. </p>
                ) : null}
                </div>
                </div>

              
                <div>
                <a className={isOpen6 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen6(!isOpen6)}>
                <h3 className={css.cardText} >Hur bjuder jag in kollegor till Medla?</h3>
                <div className={isOpen6 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText6}{' '}
                </div>
                </a>
                <div className={ isOpen6 ? css.containerOpenText : css.hidden}>
                {isOpen6 ? (
                <p className={css.textFormat}> Just nu är det bästa lösningen att helt enkelt dela inloggninsuppgifter. Vi jobbar på en en uppdatering som gör det möjligt att bjuda in flera mailadresser till samma profil. </p>
                ) : null}
                </div>
                </div>


                <div>
                <a className={isOpen7 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen7(!isOpen7)}>
                <h3 className={css.cardText} >
                Jag hittar inte projektet nära mig, kan jag använda plattformen ändå?
                </h3>
                <div className={isOpen7 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText7}{' '}
                </div>
                </a>
                <div className={ isOpen7 ? css.containerOpenText : css.hidden}>
                {isOpen7 ? (
                <p className={css.textFormat}> Du kan ändå använda plattformen, där läggs kontinuerligt till nya projekt, snart finns där ett nära dig! </p>
                ) : null}
                </div>
                </div>


                <div>
                <a className={isOpen8 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen8(!isOpen8)}>
                <h3 className={css.cardText} >Projekt X har inte fått bygglov, varför syns de på plattformen?</h3>
                <div className={isOpen8 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText8}{' '}
                </div>
                </a>
                <div className={ isOpen8 ? css.containerOpenText : css.hidden}>
                {isOpen8 ? (
                <p className={css.textFormat}> Projektörer vill ofta finnas på Medla redan under ett tidigt skede för att kolla av vilka kompetenser de kan hitta lokalt. Projektets byggstatus syns på projektsidan. </p>
                ) : null}
                </div>
                </div>


                <div>
                <a className={isOpen9 ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen9(!isOpen9)}>
                <h3 className={css.cardText} >Vad hände med vindkraft.umigo?</h3>
                <div className={isOpen9 ? css.buttonCloseText : css.buttonOpenText}>
                {buttonText9}{' '}
                </div>
                </a>
                <div className={ isOpen9 ? css.containerOpenText : css.hidden}>
                {isOpen9 ? (
                <p className={css.textFormat}> Prototypen ligger tillsvidare kvar om du som tidigare användare vill besöka din gamla profil. </p>
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
