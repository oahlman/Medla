import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { NamedLink } from '../../components';
import {
  HybritLogo,
  AriseLogo,
  CloudberryLogo,
  ResLogo,
  JamtkraftLogo,
  WpdLogo,
  VattenfallLogo,
  KabekoLogo,
} from './logos';
import { medlaProjects } from '../../projects-config';

import css from './SectionProjects.module.css';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const tomasliden = medlaProjects[medlaProjects.findIndex(id => id.id === 'tomasliden')];
const velinga = medlaProjects[medlaProjects.findIndex(id => id.id === 'velinga')];

const haversine = (coords1, coords2) => {
  const toRadians = (angle) => (angle * Math.PI) / 180;
  const R = 6371e3; // Earth's radius in meters
  const lat1 = toRadians(coords1.latitude);
  const lon1 = toRadians(coords1.longitude);
  const lat2 = toRadians(coords2.latitude);
  const lon2 = toRadians(coords2.longitude);

  const deltaLat = lat2 - lat1;
  const deltaLon = lon2 - lon1;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const calculateDistance = (userCoords, projectCoords) => {
  return Math.round(haversine(userCoords, projectCoords) / 1000);
};

const getUserCoordinates = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};

const SectionProjects = (props) => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    const fetchUserCoords = async () => {
      try {
        const coords = await getUserCoordinates();
        setUserCoords({ latitude: coords.latitude, longitude: coords.longitude });
      } catch (error) {
        console.error('Error fetching user coordinates:', error);
      }
    };
    fetchUserCoords();
  }, []);

  const locationLink = (title, subtitle, link, logo, projectCoords) => {
    const projectTitle = <span className={css.projectTitleText}>{title}</span>;
    const projectSubtitle = <span className={css.projectSubtitleText}>{subtitle}</span>;
    const distance = userCoords
      ? `${calculateDistance(userCoords, projectCoords)} km`
      : <FormattedMessage id="SectionProjects.calculatingDistance" />;

    return (
      <a href={`/${link}`} className={css.location}>
        <div className={css.card}>
          <div className={css.imageContainer}>
            <div className={css.logoContainer}>
              <div className={css.logo}>{logo}</div>
            </div>
          </div>
          <div className={css.textContainer}>
            <div className={css.projectTitle}>
              <FormattedMessage
                id="SectionProjects.projectTitle"
                values={{ title: projectTitle }}
              />
            </div>
            <div className={css.projectSubtitle}>
              <FormattedMessage
                id="SectionProjects.projectSubtitle"
                values={{ subtitle: projectSubtitle }}
              />
            </div>
            <div className={css.distance}>
              <FormattedMessage
                id="SectionProjects.distance"
                values={{ distance }}
              />
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjects.title" />
      </div>
      <div className={css.locationsTwoOfThree}>
        {locationLink(
          velinga.Projektnamn,
          velinga.Kommun,
          velinga.id,
          VattenfallLogo,
          { latitude: velinga.location.lat, longitude: velinga.location.lng }
        )}
        {locationLink(
          tomasliden.Projektnamn,
          tomasliden.Kommun,
          tomasliden.id,
          WpdLogo,
          { latitude: tomasliden.location.lat, longitude: tomasliden.location.lng }
        )}
      </div>
    </div>
  );
  };
  
  SectionProjects.defaultProps = { rootClassName: null, className: null };
  
  const { string } = PropTypes;
  
  SectionProjects.propTypes = {
    rootClassName: string,
    className: string,
  };
  
  export default SectionProjects;  
