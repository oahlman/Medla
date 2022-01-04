import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectChallanges.module.css';

const SectionProjectChallanges = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjectChallanges.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectChallanges.part1Title" />
          </h2>
          <p> 
          <strong>Tillstånd </strong> Tillståndsprocesser är allt för långdragna och blir ofta avslagna.<br></br>
          <strong>Förankring </strong> Lokalt motstånd allt tuffare
          </p>
        </div>



        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectChallanges.part3Title" />
          </h2>
          <p>
          <strong>Fosilfritt 2045 </strong> Energibranschen ska bara fossifri 2045<br></br>
          <strong>Hållbarhet </strong> Det räcker inte med att bygga hållbar energiproduktion, projektet och organisationen förväntas också vara socialt hållbara.
       
          </p>
        </div>
      </div>


    </div>
  );
};


export default SectionProjectChallanges;
