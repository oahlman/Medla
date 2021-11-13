import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { NamedLink } from '../../components';
import { ResLogo, JamtkraftLogo, WpdLogo, VattenfallLogo, KabekoLogo } from './logos';
import { projects } from '../../containers/ProjectPage/ProjectConfig';

import css from './SectionProjects.module.css';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const bjornberget = projects[projects.findIndex(id => id.id === 'bjornberget')];
const stollsaterberget = projects[projects.findIndex(id => id.id === 'stollsaterberget')];
const hocksjon = projects[projects.findIndex(id => id.id === 'hocksjon')];
const gronhult = projects[projects.findIndex(id => id.id === 'gronhult')];
const blaklidenfabodberget = projects[projects.findIndex(id => id.id === 'blaklidenfabodberget')];
const kabeko = projects[projects.findIndex(id => id.id === 'kabeko')];

const locationLink = (title, subtitle, status, link, logo) => {

  let projectStatusText = null
if (status === 'pending') {
  projectStatusText = css.pending;
  status = 'Söker tillstånd';
} else if (status === 'planning') {
  projectStatusText = css.planning;
  status = 'Planerad byggstart';
} else if (status === 'building') {
  projectStatusText = css.building;
  status = 'Under byggnation';
} else if (status === 'running') {
  projectStatusText = css.running;
  status = 'I drift';
}

  const projectTitle = <span className={css.projectTitleText}>{title}</span>;
  const projectSubtitle = <span className={css.projectSubtitleText}>{subtitle}</span>;
  const projectStatus = <span className={projectStatusText}>{status}</span>;
  return (
    <NamedLink name={title} params={{id: link}} className={css.location}>
      <div className={css.card}>
      <div className={css.imageContainer}>
      <div className={css.projectStatus}>
        <FormattedMessage
          id="SectionProjects.projectStatus"
          values={{ status: projectStatus }}
        />
        </div>
        <div className={css.logoContainer}>
        <div className={css.logo}>
        {logo}
        </div>
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
        </div>
      </div>
    </NamedLink>
  );
};

const SectionProjects = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjects.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          bjornberget.name,
          bjornberget.stats.region,
          bjornberget.stats.currentStatus,
          bjornberget.id,
          ResLogo,
          '?address=Björnberget%2C%20820%2046%20Ramsjö%2C%20Sverige&bounds=63.96074168%2C17.70965133%2C60.28740006%2C13.58712057'
        )}

        {locationLink(
          stollsaterberget.name,
          stollsaterberget.stats.region,
          stollsaterberget.stats.currentStatus,
          stollsaterberget.id,
          WpdLogo,
          '?address=Stöllsäterberget%2C%20Värmlands%20län%2C%20Sverige&bounds=61.50822595%2C14.52980007%2C59.61018271%2C12.50567518'
        )}
        {locationLink(
          hocksjon.name,
          hocksjon.stats.region,
          hocksjon.stats.currentStatus,
          hocksjon.id,
          JamtkraftLogo,
          '?address=Hocksjön%2C%20880%2040%20Ramsele%2C%20Sverige&bounds=64.33484208%2C17.27594777%2C62.50539696%2C15.13267783'
        )}
      </div>
      <div className={css.locations}>
        {locationLink(
          gronhult.name,
          gronhult.stats.region,
          gronhult.stats.currentStatus,
          gronhult.id,
          VattenfallLogo,
          '?address=Hocksjön%2C%20880%2040%20Ramsele%2C%20Sverige&bounds=64.33484208%2C17.27594777%2C62.50539696%2C15.13267783'
        )}
        {locationLink(
          blaklidenfabodberget.name,
          blaklidenfabodberget.stats.region,
          blaklidenfabodberget.stats.currentStatus,
          blaklidenfabodberget.id,
          VattenfallLogo,
          '?address=Hocksjön%2C%20880%2040%20Ramsele%2C%20Sverige&bounds=64.33484208%2C17.27594777%2C62.50539696%2C15.13267783'
        )}
        {locationLink(
          kabeko.name,
          kabeko.stats.region,
          kabeko.stats.currentStatus,
          kabeko.id,
          KabekoLogo,
          '?address=Hocksjön%2C%20880%2040%20Ramsele%2C%20Sverige&bounds=64.33484208%2C17.27594777%2C62.50539696%2C15.13267783'
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
