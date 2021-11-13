import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionPricingMaybe = props => {
  const { options, publicData } = props;
  if (!publicData) {
    return null;
  }

  const selectedOptions = publicData && publicData.offer1 ? publicData.offer1 : [];
  return (
    <div className={css.sectionPricingMaybe}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.offer1" />
      </h2>
      <PropertyGroup
        id="ListingPage.offer1"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );
};

export default SectionPricingMaybe;
