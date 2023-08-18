import React from 'react';
import { connect } from 'react-redux';
import {
  Page,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  SectionProfileProgress,
} from '../../components';
import { TopbarContainer } from '../../containers';
import css from './LandingPageMunicipality.module.css';

const cityToURLMap = {
  'umea': "https://lookerstudio.google.com/embed/reporting/94d763d1-fcc2-4bfb-8509-5f89892ebcaf/page/5EF5C",
  'stockholm': "https://lookerstudio.google.com/embed/reporting/94d763d1-fcc2-4bfb-8509-5f89892ebcaf/page/p_d1qeitru8c",
  // ... Add other cities as needed
};

const LandingPageMunicipalityComponent = ({ isAuthenticated, currentUser, }) => {
  
  const city = currentUser && currentUser.attributes.profile.metadata.city;
  console.log('city:', city);

  const iframeSrc = cityToURLMap[city] || null;

  return (
    <Page className={css.root}>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          {isAuthenticated && iframeSrc && (
            <div className={css.pageCentering}>
              <SectionProfileProgress />
              
              <div className={css.iframeContainer}>
                <div className={css.watermarkCover}></div>
                <iframe src={iframeSrc} frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          )}
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const mapStateToProps = (state) => {
    const { isAuthenticated } = state.Auth;
    const currentUser = state.user.currentUser;

    return {
      isAuthenticated,
      currentUser,
    };
};
  
// Connecting component to Redux store
export default connect(mapStateToProps)(LandingPageMunicipalityComponent);
