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
          Trots att elektifieringen och klimatomställningen blir allt viktigare (2045) så har projekteringen bara blivit svårare (40%).
          <br></br><br></br>
          Lokal förankring och samverkan är viktiga pusselbitar för lyckade energiprojekt. Arbetstillfällen bidrar till detta, och tack vare era projekt kan fler av dem skapas lokalt (73%) — om vi jobbar tillsammans, med alla aktörer i kedjan.
          <br></br>
          Utmaningen för många projektörer är att:
          <ol>
            <li>Ha tid att bygga de relationer och sammarbeten med alla aktörer (kommun, näringsliv, föreningar, entreprenad, lokalmedia) som kan underlätta valet av lokala leverantörer och maximera samhällsnyttan av projektet.</li>
            <li>Påvisa nyttan som skapas lokalt och regionalt i samband med en projektetablering</li>
          </ol>
          Därför byggde vi Medla — för att hjälpa er lyfta och stärka samhällsnyttan som era energiprojekt låser upp, och effektivisera arbetet — från samråd till driftsättning och vidare till nästa projekt. 
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
