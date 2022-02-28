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
import { medlaCities } from '../../cities-config';
import { filters } from '../../marketplace-custom-config';
import image from '../../assets/background-1440.jpg'
import placeholderImg from '../../assets/placeholder.jpg';
import komatsuImg from '../../assets/komatsu.jpg';
import davaImg from '../../assets/dava.jpg';
import vakinImg from '../../assets/vakin.jpg';
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
  PrimaryButton,
} from '../../components';
import { TopbarContainer, NotFoundPage } from '../../containers';
import config from '../../config';

import css from './CityPage.module.css';

const MAX_MOBILE_SCREEN_WIDTH = 768;

export class CityPageComponent extends Component {
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
    const ensuredCurrentUser = ensureCurrentUser(currentUser);
    const isMobileLayout = viewport.width < MAX_MOBILE_SCREEN_WIDTH;
    const panelWidth = 62.5;
    // Render hints for responsive image
    const renderSizes = [
      `(max-width: 767px) 100vw`,
      `(max-width: 1920px) ${panelWidth / 2}vw`,
      `${panelWidth / 3}vw`,
    ].join(', ');

    const medlaCity = medlaCities.findIndex(id => id.Områdes_ID === projectId);
    const currentProject = medlaCity;
    const projectData = medlaCities[currentProject];

    const userAttributes = currentUser && currentUser.attributes;
    const userSubscriptions = userAttributes && currentUser.attributes.profile.publicData.amenities;
    const userIsSubscribed = userSubscriptions && userSubscriptions.includes(projectData.id);

    let projectDetailsLink = null
    if (typeof document !== 'undefined') {
      projectDetailsLink = document.getElementById("projectDetails");
    };

    const jobs = listings.filter(listing => listing.attributes.publicData.listingCategory !== 'company');
    const companies = listings.filter(listing => listing.attributes.publicData.listingCategory === 'company');

    const jobSection = (
    <div className={css.jobSection}>
      <div className={css.sectionHeading}>
        <h3 className={css.subtitle}>Nya jobb</h3>
        <span>Vill du ta in lokala offerter?
          <NamedLink className={css.helperLink} name="NewListingPage" >
            <span> Annonsera ett jobb</span>
          </NamedLink>
        </span>
      </div>
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
        <NamedLink
          className={css.button}
          name="SearchPage"
          to={{
            search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_listingCategory=job`,
          }}>
          Se alla jobb
        </NamedLink>
    </div>);


    const companySection = (
    <div className={css.companySection}>
      <div className={css.sectionHeading}>
        <h3 className={css.subtitle}>Lokala företag</h3>
        <span>Vill du synas här?
          <NamedLink className={css.helperLink} name="SignupPage" >
            <span> Registrera ditt företag</span>
          </NamedLink>
        </span>
      </div>
      <div className={css.companyCards}>
        {queryListingsError ? queryError : null}
        {companies.slice(0, 3).map(c => (
          <CompanyCard
            className={css.companyCard}
            key={c.id.uuid}
            listing={c}
            renderSizes={renderSizes}
          />
        ))}
      </div>
        <NamedLink
          className={css.button}
          name="SearchPage"
          to={{
            search: `?address=${projectData.Projektnamn}&bounds=${projectData.ne},${projectData.sw}&pub_listingCategory=company&sort=meta_rating`,
          }}>
        Se alla företag
        </NamedLink>
    </div>);

    let postJobMaybe = null;
    let findCompanyMaybe = null;

    const greenProject1 = (
      <div className={css.greenProject}>
        <img className={css.projectImage} src={komatsuImg} alt="KF One" />
        <p className={css.projectTitle}>KF One</p>
        <p className={css.projectOwner}>Komatsu Forest</p>
        <p className={css.greenTarget}>Koldioxidneutral produktion 2022</p>
      </div>);

    const greenProject2 = (
      <div className={css.greenProject}>
        <img className={css.projectImage} src={davaImg} alt="Dåva Kraftvärmeverk" />
        <p className={css.projectTitle}>Dåva Kraftvärmeverk</p>
        <p className={css.projectOwner}>Umeå Energi</p>
        <p className={css.greenTarget}>Klimatneutral verksamhet 2040</p>
      </div>);

    const greenProject3 = (
      <div className={css.greenProject}>
        <img className={css.projectImage} src={vakinImg} alt="Vakin Umeå" />
        <p className={css.projectTitle}>Vakin Umeå</p>
        <p className={css.projectOwner}>Vakin</p>
        <p className={css.greenTarget}>Klimatneutral verksamhet 2040</p>
      </div>);

    const projectSection = (
    <div className={css.projectSection}>
      <div className={css.sectionHeading}>
      <h3 className={css.subtitle}>Gröna projekt</h3>
      <span>Vill du etablera dig här?
        <ExternalLink className={css.helperLink} href="https://www.umea.se/kommunochpolitik/organisation/forvaltningarverksamheter/stadsledningskontor/naringsliv" >
          <span> Kontakta Näringsliv</span>
        </ExternalLink>
      </span>
      </div>           
      <div className={css.greenProjects}>
        {greenProject1}
        {greenProject2}
        {greenProject3}
      </div>
    </div>);

    const projectPageMedla = (
      <div>
        <div className={css.staticPageWrapper}>
          <div className={css.contentWrapper}>
            <div className={css.coverSection}>
              <div className={css.coverInfo}>
                <h3 className={css.welcomeTitle}>Välkommen till</h3>
                <h1 className={css.cityTitle} >{projectData.Projektnamn}</h1>
                <p>{projectData.about}</p>
              </div>
              <img className={css.coverImage} src={projectData.image ? projectData.image : placeholderImg} alt={`Bild från projektet ${projectData.Projektnamn}.`} />
            </div>

            <div className={css.contentMain}>
              {companySection}
              {jobSection}
              {projectSection}
            </div>
          </div>
        </div>
        {postJobMaybe}
        {findCompanyMaybe}
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
        id: 'CityPage.schemaTitle',
      },
      {
        name: projectData.Projektnamn,
        siteTitle: config.siteTitle,
      }
    );

    return (
      <Page
        scrollingDisabled={scrollingDisabled}
        title={schemaTitle}
        schema={{
          '@context': 'http://schema.org',
          '@type': 'CityPage',
          name: schemaTitle,
        }}
      >
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="CityPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>{content}</LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </Page>
    );
  }
}

CityPageComponent.defaultProps = {
  currentUser: null,
  projectId: null,
  user: null,
  userShowError: null,
  queryListingsError: null,
};

const { string, bool, arrayOf, number, shape } = PropTypes;

CityPageComponent.propTypes = {
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

const CityPage = compose(
  connect(mapStateToProps),
  withViewport,
  injectIntl
)(CityPageComponent);

export default CityPage;
