import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './CompanyPage.module.css';

const SectionRulesMaybe = props => {
  const { options, publicData } = props;
  if (!publicData) {
    return null;
  }

  const selectedOptions = publicData && publicData.category ? publicData.category : [];
  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.rulesTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.category"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );
};

export default SectionRulesMaybe;
