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
            59% av projekt får avslag
          </h2>
          <p>
          <strong>Tillståndsprocesser är allt för långdragna och blir ofta avslagna.</strong> https://svenskvindenergi.org/pressmeddelanden/stor-investeringsvilja-i-vindkraft-men-59-procent-av-verken-avslas<br></br>
          </p>
        </div>



        <div className={css.step}>
          <h2 className={css.stepTitle}>
          11% minskat klimatengagemang
          </h2>
          <p>
          <strong>Lokalt motstånd allt tuffare.</strong> https://www.kantarsifo.se/sites/default/files/reports/documents/energibarometern_q2_2020.pdf<br></br>
          </p>
        </div>
      </div>
      <div className={css.title}>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
          Fossifritt 2045
          </h2>
          <p>
          <strong>Svensk energiproduktion ska vara fossilfri till 2045</strong> https://fossilfrittsverige.se/<br></br>
          </p>
        </div>



        <div className={css.step}>
          <h2 className={css.stepTitle}>
            25 % lokal sysselsättning
          </h2>
          <p>
          <strong>Det räcker inte med att bygga hållbar energiproduktion</strong> http://www.svenskvindenergi.org/wp-content/blogs.dir/11/files/2011/05/Vind_2_2012.pdf Projektet och organisationen förväntas också vara socialt hållbara.
          </p>
        </div>
      </div>

    </div>

  );
};


export default SectionProjectChallenges;
