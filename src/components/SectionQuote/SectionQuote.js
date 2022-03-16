import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionQuote.module.css';

const SectionQuote = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.steps}>
        <div className={css.step}>
        <div>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionQuote.part1Title" />
          </h2>
          <i >
            <FormattedMessage id="SectionQuote.part1Text" />
          </i>
         
          </div>
          <div className={css.containerNameAndLogo}>
          <strong className={css.fontName}>
            Förnamn Efternamn - Svensk Vindenergi
          </strong>
          <img className={css.imageSvenskVind} src={null} alt="Medla och Svensk vind" />
          </div>
        </div>



      </div>


    </div>
  );
};


export default SectionQuote;
