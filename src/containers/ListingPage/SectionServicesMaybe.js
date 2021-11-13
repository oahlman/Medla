import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './ListingPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionServicesMaybe = props => {
  const { title, description } = props;
  return description ? (
    <div className={css.sectionServices}>
      <h2 className={css.longWord}></h2>
      <p className={css.service}>
        {richText(description, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
      </p>
    </div>
  ) : null;
};

export default SectionServicesMaybe;
