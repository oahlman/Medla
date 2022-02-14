import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { ensureCurrentUser, ensureUser } from '../../util/data';
import { withViewport } from '../../util/contextHelpers';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { medlaProjects, externalProjects } from '../../projects-config';
import { filters } from '../../marketplace-custom-config';
import image from '../../assets/background-1440.jpg'
import placeholderImg from '../../assets/placeholder.jpg';
import {
  Page,
  UserNav,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  AvatarLarge,
  NamedLink,
  ListingCard,
  CompanyCard,
  ButtonTabNavHorizontal,
  ExternalLink,
  IconCheckmark,
  IconArrowHead,
} from '../../components';
import { TopbarContainer, NotFoundPage } from '../../containers';
import config from '../../config';

import css from './ProjectPage.module.css';

const MAX_MOBILE_SCREEN_WIDTH = 768;

export class ProjectPageComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      scrollingDisabled,
      currentUser,
      projectId,
      user,
      userShowError,
      queryListingsError,
      listings,
      viewport,
      intl,
    } = this.props;
    const isMobileLayout = viewport.width < MAX_MOBILE_SCREEN_WIDTH;
    const panelWidth = 62.5;
    // Render hints for responsive image
    const renderSizes = [
      `(max-width: 767px) 100vw`,
      `(max-width: 1920px) ${panelWidth / 2}vw`,
      `${panelWidth / 3}vw`,
    ].join(', ');

    const medlaProject = medlaProjects.findIndex(id => id.Områdes_ID === projectId);
    const externalProject = externalProjects.findIndex(id => id.Områdes_ID === projectId);
    const currentProject = medlaProject < 0 ? externalProject : medlaProject;
    const projectData = currentProject === medlaProject ? medlaProjects[currentProject] : externalProjects[currentProject];

    let projectDetailsLink = null
    if (typeof document !== 'undefined') {
      projectDetailsLink = document.getElementById("projectDetails");
    };

    const jobs = listings.filter(listing => listing.attributes.publicData.listingCategory !== 'company');

    const jobSection = (<div className={css.jobSection}>
      <div className={css.listingCards}>
        {queryListingsError ? queryError : null}
        {queryListingsError ? queryError : null}
        {jobs.slice(0, 3).map(l => (
          <ListingCard
            className={css.listingCard}
            key={l.id.uuid}
            listing={l}
            renderSizes={renderSizes}
          />
        ))}
      </div>
      <div className={css.searchLink}>
          <NamedLink className={css.helperLink}
            name="SearchPage"
            to={{
              search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_listingCategory=job`,
            }}>
            <span>Se alla jobb</span>
          </NamedLink>
        </div>
    </div>);

    const projectPageMedla = (
      <div>
        <div className={css.staticPageWrapper}>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              {jobSection}
            </div>
          </div>
        </div>
      </div>
    );

    let content;

    if (userShowError && userShowError.status === 404) {
      return <NotFoundPage />;
    } else if (userShowError || queryListingsError) {
      content = (
        <p className={css.error}>
          <FormattedMessage id="ProfilePage.loadingDataFailed" />
        </p>
      );
    } else {
      content = projectPageMedla;
    }

    const schemaTitle = intl.formatMessage(
      {
        id: 'ProjectPage.schemaTitle',
      },
      {
        name: `embed/${projectData.Projektnamn}`,
        siteTitle: config.siteTitle,
      }
    );

    return (
        <LayoutWrapperMain>{content}</LayoutWrapperMain>
    );
  }
}

ProjectPageComponent.defaultProps = {
  currentUser: null,
  projectId: null,
  user: null,
  userShowError: null,
  queryListingsError: null,
};

const { string, bool, arrayOf, number, shape } = PropTypes;

ProjectPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  currentUser: propTypes.currentUser,
  projectId: string.isRequired,
  user: propTypes.user,
  userShowError: propTypes.error,
  queryListingsError: propTypes.error,
  listings: arrayOf(propTypes.listing).isRequired,

  // form withViewport
  viewport: shape({
    width: number.isRequired,
    height: number.isRequired,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUser } = state.user;
  const {
    userId,
    userShowError,
    queryListingsError,
    userListingRefs,
  } = state.ProjectPage;
  const userMatches = getMarketplaceEntities(state, [{ type: 'user', id: userId }]);
  const user = userMatches.length === 1 ? userMatches[0] : null;
  const listings = getMarketplaceEntities(state, userListingRefs);
  return {
    scrollingDisabled: isScrollingDisabled(state),
    currentUser,
    user,
    userShowError,
    queryListingsError,
    listings,
  };
};

const ProjectPage = compose(
  connect(mapStateToProps),
  withViewport,
  injectIntl
)(ProjectPageComponent);

export default ProjectPage;
