import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { NamedLink } from '../../components';
import { HybritLogo, AriseLogo, CloudberryLogo, ResLogo, JamtkraftLogo, WpdLogo, VattenfallLogo, KabekoLogo } from './logos';
import { projects } from '../../containers/ProjectPage/ProjectConfig';

import css from './SectionProjects.module.css';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const hybrit = projects[projects.findIndex(id => id.id === 'hybrit')];
const stormossen = projects[projects.findIndex(id => id.id === 'stormossen')];
const bleka = projects[projects.findIndex(id => id.id === 'bleka')];
const kolvallen = projects[projects.findIndex(id => id.id === 'kolvallen')];
const skaftasen = projects[projects.findIndex(id => id.id === 'skaftasen')];
const bjornetjarnsberget = projects[projects.findIndex(id => id.id === 'bjornetjarnsberget')];
const han = projects[projects.findIndex(id => id.id === 'han')];
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
        )}
        {locationLink(
          bjornetjarnsberget.name,
          bjornetjarnsberget.stats.region,
          bjornetjarnsberget.stats.currentStatus,
          bjornetjarnsberget.id,
          CloudberryLogo,
        )}
        {locationLink(
          blaklidenfabodberget.name,
          blaklidenfabodberget.stats.region,
          blaklidenfabodberget.stats.currentStatus,
          blaklidenfabodberget.id,
          VattenfallLogo,
        )}
      </div>
      <div className={css.locations}>
      {locationLink(
          bleka.name,
          bleka.stats.region,
          bleka.stats.currentStatus,
          bleka.id,
          WpdLogo,
        )}
      {locationLink(
          gronhult.name,
          gronhult.stats.region,
          gronhult.stats.currentStatus,
          gronhult.id,
          VattenfallLogo,
        )}
      {locationLink(
          hocksjon.name,
          hocksjon.stats.region,
          hocksjon.stats.currentStatus,
          hocksjon.id,
          JamtkraftLogo,
        )}
      </div>
      <div className={css.locations}>
      {locationLink(
          han.name,
          han.stats.region,
          han.stats.currentStatus,
          han.id,
          CloudberryLogo,
        )}
      {locationLink(
          hybrit.name,
          hybrit.stats.region,
          hybrit.stats.currentStatus,
          hybrit.id,
          HybritLogo,
        )}
      {locationLink(
          kabeko.name,
          kabeko.stats.region,
          kabeko.stats.currentStatus,
          kabeko.id,
          KabekoLogo,
        )}
      </div>
      <div className={css.locations}>
      {locationLink(
          kolvallen.name,
          kolvallen.stats.region,
          kolvallen.stats.currentStatus,
          kolvallen.id,
          AriseLogo,
        )}
      {locationLink(
          skaftasen.name,
          skaftasen.stats.region,
          skaftasen.stats.currentStatus,
          skaftasen.id,
          AriseLogo,
        )}
      {locationLink(
          stollsaterberget.name,
          stollsaterberget.stats.region,
          stollsaterberget.stats.currentStatus,
          stollsaterberget.id,
          WpdLogo,
        )}
      </div>
      <div className={css.locationsOneOfThree}>
      {locationLink(
          stormossen.name,
          stormossen.stats.region,
          stormossen.stats.currentStatus,
          stormossen.id,
          WpdLogo,
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
