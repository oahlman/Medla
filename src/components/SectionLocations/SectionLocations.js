import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import arjang from './images/arjang.jpg';
import avesta from './images/avesta.jpg';
import gallivare from './images/gallivare.jpg';
import hofors from './images/hofors.jpg';
import ljusdal from './images/ljusdal.jpg';
import sandviken from './images/sandviken.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (location, region, image, searchQuery) => {
  const locationName = <span className={css.locationName}>{location}</span>;
  const regionName = <span className={css.regionName}>{region}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={location} className={css.locationImage} />
        </div>
      </div>
      <div className={css.textContainer}>
      <div className={css.locationTitle}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: locationName }}
        />
      </div>
      <div className={css.locationSubtitle}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: regionName }}
        />
      </div>
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Avesta',
          'Gävleborgs län',
          avesta,
          'address=Avesta&bounds=60.70848539%2C16.86920029%2C59.62704493%2C15.28974871&pub_listingCategory=company'
        )}
        {locationLink(
          'Gällivare',
          'Norrbottens län',
          gallivare,
          'address=Gällivare&bounds=69.33701906,25.08883256,64.71116182,16.22061112&pub_listingCategory=company'
        )}
        {locationLink(
          'Hofors',
          'Gävleborgs län',
          hofors,
          'address=Hofors&bounds=61.09750184%2C17.13902433%2C59.96552243%2C15.46719667&pub_listingCategory=company'
        )}
      </div>
      <div className={css.locations}>
        {locationLink(
          'Ljusdal',
          'Gävleborgs län',
          ljusdal,
          'address=Ljusdal&bounds=63.03626025,18.0991935,60.59913922,14.2480015&pub_listingCategory=company'
        )}
        {locationLink(
          'Sandviken',
          'Gävleborgs län',
          sandviken,
          'address=Sandviken&bounds=60.95459392%2C17.1740284%2C60.37694908%2C16.3174206&pub_listingCategory=company'
        )}
        {locationLink(
          'Årjäng',
          'Värmlands län',
          arjang,
          'address=Årjäng&bounds=60.36228154%2C13.5496365%2C58.42383193%2C10.7828885&pub_listingCategory=company'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
