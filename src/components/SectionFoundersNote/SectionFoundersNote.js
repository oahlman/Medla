import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionFoundersNote.module.css';
import imagesvenskvind from '../../assets/Svensk-vind-logo.png';
      <img className={css.imageSvenskVind} src={imagesvenskvind} alt="Medla in macbook" />


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
          Trots att elektrifieringen och klimatomställningen blir allt viktigare frågor så har projekteringen bara blivit svårare, att andelen vindkraftsprojekt som fick veto <a target="_blank" href='https://www.regeringen.se/49e6a7/contentassets/8b16a30f6de3468ab6fa640ebb23851f/en-rattssaker-vindkraftsprovning-sou-202153#page=192'>ökade från 8% till 40% mellan 2016-2020</a> är talande. 
          <br></br><br></br>
          Lokal förankring och samverkan är viktiga pusselbitar för lyckade energiprojekt. Arbetstillfällen bidrar till detta, och tack vare era projekt kan fler av dem skapas lokalt (<a target="_blank" href='https://www.irena.org/benefits/Local-Value-Creation'>upp till 200% fler än idag</a>) om vi jobbar tillsammans — med alla aktörer i kedjan. 
          <br></br><br></br>
          <b>Utmaningen för många projektörer är att:</b>
          <ol>
            <li>Hinna bygga relationer och samarbeten med alla aktörer (kommunen, näringslivet, byggentreprenaden, intresseorganisationer) som kan underlätta valet av lokala leverantörer och öka samhällsnyttan av projektet.</li>
            <br></br>
            <li>Påvisa nyttan som skapas lokalt och regionalt i samband med en projektetablering.</li>
          </ol>
          <br></br>
          <b>Därför byggde vi Medla</b> — för att hjälpa er lyfta och stärka samhällsnyttan som era energiprojekt låser upp, och effektivisera arbetet — från samråd till driftsättning och vidare till nästa projekt. 
          <br></br><br></br>
          Sedan 2019 har vi byggt digitala lösningar som hjälpt Sveriges största projektörer och över 700 lokala verksamheter att bygga bättre energiprojekt och starkare lokalsamhällen — och det är bara början. Vi hoppas ni vill göra oss sällskap på resan.
          <br></br><br></br>
           <strong>
          Oskar och Adam
          </strong>
          <br></br>
          Initiativtagare till Medla</p>
         
          </div>
        </div>



      </div>


    </div>
  );
};


export default SectionFoundersNote;
