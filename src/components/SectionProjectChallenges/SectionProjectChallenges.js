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
            Fossifritt 2045
          </h2>
          <p className={css.stepSubtitle}>Svensk energiproduktion ska vara fossilfri till 2045.</p>
          <p className={css.note}><a className={css.note} href="https://fossilfrittsverige.se">Fossilfritt Sverige</a></p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            40% får veto
          </h2>
          <p className={css.stepSubtitle}>Andelen ansökta vindkraftprojekt som fick kommunalt veto ökade från 8% till 40% mellan 2016–2020.</p>
          <p className={css.note}><a className={css.note} href="https://www.regeringen.se/49e6a7/contentassets/8b16a30f6de3468ab6fa640ebb23851f/en-rattssaker-vindkraftsprovning-sou-202153#page=192">Regeringen</a></p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            25% lokal sysselsättning
          </h2>
          <p className={css.stepSubtitle}>Cirka 1 av 4 jobb i energiprojekt landar lokalt</p>
          <p className={css.note}><a className={css.note} href="http://www.svenskvindenergi.org/wp-content/blogs.dir/11/files/2011/05/Vind_2_2012.pdf">Svensk Vindenergi</a></p>
        </div>
      </div>

      <div className={css.conclusion}>
          <p className={css.conclusionSubtitle}>Samverkan med lokalt och regionalt näringsliv kan bidra till en starkare lokalförankring, effektivare projektering och en snabbare energiomställning.</p>
          <p className={css.note}><a className={css.note}>Interna studier</a></p>
        </div>

    </div>

  );
};


export default SectionProjectChallenges;
