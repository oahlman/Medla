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

import css from './SiteMapPage.module.css';

const SiteMapPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [
    {
      text: intl.formatMessage({ id: 'SiteMapPage.projectsTabTitle' }),
      selected: false,
      linkProps: {
        name: 'ProjectsMapPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'SiteMapPage.pagesTabTitle' }),
      selected: true,
      linkProps: {
        name: 'SiteMapPage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'SiteMapPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };

  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="SiteMapPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="SiteMapPage.heading" />
            </h1>
            <div className={css.pagesList}>
            <div>
              <NamedLink name="LoginPage" >Logga in </NamedLink>
            </div>
            <div>
              <NamedLink name="SearchPage" >Sök företag </NamedLink>
            </div>
            <div>
              <NamedLink name="NewProjectUserPage" >Anslut projekt </NamedLink>
            </div>
            <div>
              <NamedLink name="AboutPage" >Om Medla </NamedLink>
            </div>
            <div>
              <NamedLink name="FAQPage" >Vanliga frågor </NamedLink>
            </div>
            </div>
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

SiteMapPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const SiteMapPage = compose(
  connect(mapStateToProps),
  injectIntl
)(SiteMapPageComponent);

export default SiteMapPage;
