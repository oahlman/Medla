import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { verifyPhoneNumber } from '../../ducks/user.duck';
import config from '../../config';
import { logout, authenticationInProgress } from '../../ducks/Auth.duck';

import {
  Page,
  SectionHero,
  SectionHowItWorks,
  SectionMission,
  SectionPostJob,
  SectionProjects,
  SectionLocations,
  SectionProfileProgress,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';

import facebookImage from '../../assets/medlaFaceBook-1200x630.jpg';
import twitterImage from '../../assets/medlaTwitter-600x314.jpg';
import css from './LandingPage.module.css';

export const LandingPageComponent = props => {
  const {
    history,
    intl,
    location,
    scrollingDisabled,
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
    currentListingHasImages,
    onManageDisableScrolling,
    isAuthenticated,
    onVerifyPhoneNumber,
  } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  const email = currentUser && currentUser.attributes.email;
  const emailVerified = currentUser && currentUser.attributes.emailVerified;
  const phoneNumber = currentUser && currentUser.attributes.profile.protectedData.phoneNumber;
  const phoneNumberVerified = currentUser && currentUser.attributes.profile.privateData.phoneNumberVerified;

  if (emailVerified == true && phoneNumberVerified !== true && email === `phone+${phoneNumber}@medla.app`) {
    return onVerifyPhoneNumber();
  }

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>
          <div className={!isAuthenticated ? css.heroContainer : css.hidden}>
            <SectionHero className={css.hero} history={history} location={location} />
          </div>

          <ul className={css.sections}>

          <li className={css.section}>
            <div className={isAuthenticated ? css.sectionContentFirstChild : css.hidden}>
            <SectionProfileProgress />
          </div>
            </li>

            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionProjects
                onVerifyPhoneNumber={onVerifyPhoneNumber}/>
              </div>
            </li>

            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionLocations />
              </div>
            </li>

            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionHowItWorks />
              </div>
            </li>

            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionPostJob />
              </div>
            </li>

            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionMission />
              </div>
            </li>


          </ul>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  // Topbar needs isAuthenticated
  const { isAuthenticated, logoutError, authScopes } = state.Auth;
  // Topbar needs user info.
  const {
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
    currentUserNotificationCount: notificationCount,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    onVerifyPhoneNumber,
  } = state.user;

  return {
    scrollingDisabled: isScrollingDisabled(state),
    authInProgress: authenticationInProgress(state),
    currentUser,
    currentUserHasListings,
    currentUserHasOrders,
    notificationCount,
    isAuthenticated,
    authScopes,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    onVerifyPhoneNumber,
  };
};

const mapDispatchToProps = dispatch => ({
  onVerifyPhoneNumber: () => dispatch(verifyPhoneNumber()),
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
