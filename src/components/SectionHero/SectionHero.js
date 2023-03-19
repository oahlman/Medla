import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink, SecondaryButton } from '../../components';
import OpenAIHelper from '../OpenAiHelper/openAiHelper';

import css from './SectionHero.module.css';

const SectionHero = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <OpenAIHelper prompt={'Gör lokala affärer.'}/>
        </h2>
        <div className={css.steps}>
          <div className={css.step}>
            <NamedLink
              name="SearchPage"
              to={{
                search:
                  'address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=company&sort=meta_rating',
              }}
              className={css.heroButton}
            >
              <FormattedMessage id="SectionHero.browseButtonPrimary" />
            </NamedLink>
          </div>

          <div className={css.step}>
            <NamedLink
              name="SearchJobsPage"
              to={{
                search:
                  'address=Sverige&bounds=69.0599269995724%2C24.1933684832876%2C55.280224001785%2C10.8383668128319&pub_listingCategory=job',
              }}
              className={css.secondaryButton}
            >
              <FormattedMessage id="SectionHero.browseButtonSecondary" />
            </NamedLink>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
