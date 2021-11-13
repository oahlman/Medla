import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { richText } from '../../util/richText';

import css from './CompanyPage.module.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionServicesMaybe = props => {
  const { title, description } = props;
  return description ? (
    <div className={css.sectionDescription}>
      <h2 className={css.longWord}>{title}</h2>
      <p className={css.description}>
        {richText(description, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
      </p>
    </div>
  ) : null;
};

export default SectionServicesMaybe;
