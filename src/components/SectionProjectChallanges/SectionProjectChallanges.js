import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectChallenges.module.css';

const SectionProjectChallenges = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjectChallenges.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectChallenges.part1Title" />
          </h2>
          <p>
          <strong>59% av projekt får avslag</strong> Tillståndsprocesser är allt för långdragna och blir ofta avslagna. https://svenskvindenergi.org/pressmeddelanden/stor-investeringsvilja-i-vindkraft-men-59-procent-av-verken-avslas<br></br>
          <strong>11% minskat klimatengagemang</strong> Lokalt motstånd allt tuffare. https://www.kantarsifo.se/sites/default/files/reports/documents/energibarometern_q2_2020.pdf<br></br>
          </p>
        </div>



        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectChallenges.part3Title" />
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


export default SectionProjectChallenges;
