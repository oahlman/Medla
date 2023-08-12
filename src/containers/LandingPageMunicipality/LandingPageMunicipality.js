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


const LandingPageMunicipalityComponent = ({ isAuthenticated, currentUser }) => {
    console.log('currentUser:', currentUser); // Log the whole currentUser object
  
    const city = currentUser?.attributes?.metadata?.city; // Safely access city using optional chaining
    console.log('city:', city); // Log the city value
  
    let iframeSrc;
    if (city === 'umea') {
      iframeSrc = "https://lookerstudio.google.com/embed/reporting/94d763d1-fcc2-4bfb-8509-5f89892ebcaf/page/5EF5C";
    } else if (city === 'stockholm') {
      iframeSrc = "https://lookerstudio.google.com/embed/reporting/94d763d1-fcc2-4bfb-8509-5f89892ebcaf/page/p_d1qeitru8c";
    }
  
 
  

  return (
    <Page className={css.root}>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          {isAuthenticated && (
            <div>
              
              <div className={css.pageCentering}>
              <SectionProfileProgress />
                
                  <div className={css.iframeContainer}>
                    <div className={css.watermarkCover}></div>
                    <iframe src="https://lookerstudio.google.com/embed/reporting/94d763d1-fcc2-4bfb-8509-5f89892ebcaf/page/5EF5C" frameborder="0" allowfullscreen></iframe>
                  </div>
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
    const currentUser = state.Auth.currentUser; // Make sure this line is correct
  
    return {
      isAuthenticated,
      currentUser,
    };
  };
  
export default connect(mapStateToProps)(LandingPageMunicipalityComponent);
