import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { ExternalLink } from '../../components';
import oskarImg from '../../assets/oskar.jpg';
import adamImg from '../../assets/adam.jpg';
import css from './SectionFoundersNote.module.css';


const SectionFoundersNote = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>
        <div>
        <div>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionFoundersNote.part1Title" />
          </h2>
          <p>
          Trots att elektrifieringen och klimatomställningen blir allt viktigare frågor så har projekteringen bara blivit svårare, att andelen vindkraftsprojekt som fick veto <a target="_blank" rel="noopener noreferrer" href='https://www.regeringen.se/49e6a7/contentassets/8b16a30f6de3468ab6fa640ebb23851f/en-rattssaker-vindkraftsprovning-sou-202153#page=192'>ökade från 8% till 40% mellan 2016-2020</a> är talande. 
          <br></br><br></br>
          Lokal förankring och samverkan är viktiga pusselbitar för lyckade industriprojekt. Arbetstillfällen bidrar till detta, och tack vare era projekt kan fler av dem skapas lokalt (<a target="_blank" rel="noopener noreferrer" href='https://www.irena.org/benefits/Local-Value-Creation'>upp till 200% fler än idag</a>) om vi jobbar tillsammans — med alla aktörer i kedjan. 
          <br></br><br></br>
          <b>Utmaningen för många projektörer är att:</b>
          <ol>
            <li>Hinna bygga relationer och samarbeten med alla aktörer (kommunen, näringslivet, byggentreprenaden, intresseorganisationer) som kan underlätta valet av lokala leverantörer och öka samhällsnyttan av projektet.</li>
            <br></br>
            <li>Påvisa nyttan som skapas lokalt och regionalt i samband med en projektetablering.</li>
          </ol>
          <br></br>
          <b>Därför byggde vi Medla</b> — för att hjälpa er lyfta och stärka samhällsnyttan som era industriprojekt låser upp, och effektivisera arbetet — från samråd till driftsättning och vidare till nästa projekt. 
          <br></br><br></br>
          Sedan 2019 har vi byggt digitala lösningar som hjälpt Sveriges största projektörer och över 700 lokala verksamheter att bygga bättre industrier och starkare lokalsamhällen — och det är bara början. Vi hoppas ni vill göra oss sällskap på resan.
          <br></br><br></br>
           <strong>
          Oskar och Adam
          </strong>
          <br></br>
          Initiativtagare till Medla</p>
         
          </div>

          <div className={css.profiles}>
            <div className={css.profile}>
              <img className={css.profileImage} src={oskarImg} alt="Oskar Ahlman" />
              <span>Oskar Ahlman</span>
              <ExternalLink href="https://www.linkedin.com/in/oskar-ahlman/" className={null}>
                <FormattedMessage id="SectionFoundersNote.linkedIn" />
              </ExternalLink>
            </div>
            <div className={css.profile}>
              <img className={css.profileImage} src={adamImg} alt="Adam Falkenberg" />
              <span>Adam Falkenberg</span>
              <ExternalLink href="https://www.linkedin.com/in/adam-falkenberg-2a98b1130/" className={null}>
                <FormattedMessage id="SectionFoundersNote.linkedIn" />
              </ExternalLink>
            </div>
          </div>

        </div>



      </div>


    </div>
  );
};


export default SectionFoundersNote;
