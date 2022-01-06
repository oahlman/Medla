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
          <p className={css.stepSubtitle}>Tillståndsprocesser är allt för långdragna och blir ofta avslagna.</p>
          <p className={css.note}><a className={css.note} href="https://svenskvindenergi.org/pressmeddelanden/stor-investeringsvilja-i-vindkraft-men-59-procent-av-verken-avslas">Svensk Vindenergi</a></p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            Fossifritt 2045
          </h2>
          <p className={css.stepSubtitle}>Svensk energiproduktion ska vara fossilfri till 2045</p>
          <p className={css.note}><a className={css.note} href="https://fossilfrittsverige.se">Fossilfritt Sverige</a></p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            Lokalkännedom
          </h2>
          <p className={css.stepSubtitle}>Svårt att hitta, prioritera och kvalitetssäkra lokala leverantörer, även när de finns.</p>
          <p className={css.note}><a className={css.note}>Interna studier</a></p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            25% lokal sysselsättning
          </h2>
          <p className={css.stepSubtitle}>Cirka 1 av 4 jobb i energiprojekt landar lokalt</p>
          <p className={css.note}><a className={css.note} href="http://www.svenskvindenergi.org/wp-content/blogs.dir/11/files/2011/05/Vind_2_2012.pdf">Svensk Vindenergi</a></p>
        </div>
      </div>

    </div>

  );
};


export default SectionProjectChallenges;
