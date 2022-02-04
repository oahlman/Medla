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
          <p className={css.stepSubtitle}>Sveriges mål om noll nettoutsläpp 2045 kräver en ökad utbyggnad av fossilfri elproduktion. I nuvarande takt missar vi målet.</p>
          <p className={css.note}><a target="_blank" className={css.note} href="https://www.sverigesmiljomal.se/etappmalen/utslapp-av-vaxthusgaser-till-ar-2045/">Naturvårdsverket</a></p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            40% får veto
          </h2>
          <p className={css.stepSubtitle}>Kommuner kan säga nej till lokala vindkraftprojekt. Andelen ansökta projekt som fick kommunalt veto ökade från 8% till 40% mellan 2016–2020.</p>
          <p className={css.note}><a target="_blank" className={css.note} href="https://www.regeringen.se/49e6a7/contentassets/8b16a30f6de3468ab6fa640ebb23851f/en-rattssaker-vindkraftsprovning-sou-202153#page=192">Regeringen</a></p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            25% lokala jobb
          </h2>
          <p className={css.stepSubtitle}>I studerade vindkraftprojekt har 25% av jobben utförts av lokala eller regionala aktörer. Lokala leverantörer skulle kunna stå för upp till 73% av jobben.</p>
          <p className={css.note}><a target="_blank" className={css.note} href="https://www.svenskvindenergi.org/wp-content/blogs.dir/11/files/2011/05/Vind_2_2012.pdf#page=3">Svensk Vindenergi</a> &‌ <a target="_blank" className={css.note} href="https://www.irena.org/benefits/Local-Value-Creation">IRENA</a></p>
        </div>
      </div>

      <div className={css.conclusion}>
          <p className={css.conclusionSubtitle}>Samverkan med lokalt och regionalt näringsliv kan bidra till en starkare lokalförankring, effektivare projektering och en snabbare grön omställning.</p>
          <p className={css.note}><a className={css.note}>Interna studier</a></p>
        </div>

    </div>

  );
};


export default SectionProjectChallenges;
