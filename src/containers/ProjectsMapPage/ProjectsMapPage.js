import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { TopbarContainer } from '../../containers';
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
} from '../../components';
import config from '../../config';
import { medlaProjects, externalProjects } from '../../projects-config'

import css from './ProjectsMapPage.module.css';

const ProjectsMapPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [
    {
      text: intl.formatMessage({ id: 'SiteMapPage.projectsTabTitle' }),
      selected: true,
      linkProps: {
        name: 'ProjectsMapPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'SiteMapPage.pagesTabTitle' }),
      selected: false,
      linkProps: {
        name: 'SiteMapPage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'ProjectsMapPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };

  const projectLink = (
    <div className={css.projectsList}>
      {externalProjects.filter(p => p.Projektnamn.length > 0).map(p => (
        <div>
        <NamedLink
          name={`/${p.Projektnamn
            .replace(/\W/g, "-")}`}
        >{p.Projektnamn}
        </NamedLink>
        </div>
      ))}
    </div>);
  
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="ProjectsMapPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="ProjectsMapPage.heading" />
            </h1>
            {projectLink}
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

const { bool } = PropTypes;

ProjectsMapPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const ProjectsMapPage = compose(
  connect(mapStateToProps),
  injectIntl
)(ProjectsMapPageComponent);

export default ProjectsMapPage;
