import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionFoundersNoteMunicipality.module.css';


const SectionFoundersNoteMunicipality = props => {

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
          <b>Därför byggde vi Medla</b> — för att lyfta och stärka det lokala näringslivet, samtidigt som vi skapar synergier mellan lokalsamhällen och projekt som söker lokal arbetskraft. 
          <br></br><br></br>
          Sedan 2019 har vi byggt digitala lösningar som hjälpt Sveriges största projektörer, ett antal kommuner och över 700 lokala verksamheter att bygga bättre projektetableringar och starkare lokalsamhällen — och det är bara början. Vi hoppas ni vill göra oss sällskap på resan.
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


export default SectionFoundersNoteMunicipality;
