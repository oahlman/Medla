import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm, Field } from 'react-final-form';
import classNames from 'classnames';
import { intlShape, injectIntl } from '../../util/reactIntl';
import { Form, LocationAutocompleteInput, FieldTextInput, FieldSelectSwitch, Button, SelectSingleFilter, TopBarSearchModal, FieldBoolean } from '../../components';
import { MdSearch } from 'react-icons/md';
import { NamedLink } from '../../components';

import css from './TopbarSearchForm.module.css';


const identity = v => v;

class TopbarSearchFormComponent extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.searchInput = null;
  }

  

  onChange(location) {
    if (location.selectedPlace) {
      // Note that we use `onSubmit` instead of the conventional
      // `handleSubmit` prop for submitting. We want to autosubmit
      // when a place is selected, and don't require any extra
      // validations for the form.
      this.props.onSubmit({ location });
      // blur search input to hide software keyboard
      if (this.searchInput) {
        this.searchInput.blur();
      }
    }
  }

  render() {
    return (
      
      <FinalForm
      
        {...this.props}
        render={formRenderProps => {
          const { rootClassName, className, desktopInputRoot, intl, isMobile, handleSubmit } = formRenderProps;

          const classes = classNames(rootClassName, className);
          const desktopInputRootClass = desktopInputRoot || css.desktopInputRoot;
          
      

          // Allow form submit only when the place has changed
          const preventFormSubmit = e => e.preventDefault();

          return (
            <Form
            
              className={classes}
              onSubmit={handleSubmit}
              enforcePagePreloadFor="SearchPage"
              
              
            ><div className={css.searchBar}>


              <Field
                name="location"
                format={identity}
                render={({ input, meta }) => {
                  const { onSubmit, ...restInput } = input;

                  // Merge the standard onChange function with custom behaviur. A better solution would
                  // be to use the FormSpy component from Final Form and pass this.onChange to the
                  // onChange prop but that breaks due to insufficient subscription handling.
                  // See: https://github.com/final-form/react-final-form/issues/159
                  const searchOnChange = value => {
                    onSubmit(value);
                    this.onSubmit(value);
                  };

                  
                  const searchInput = { ...restInput, onSubmit: searchOnChange };

                  const searchBar = (

                    <div className={css.searchBarWrapper}> 
                    <h1 className={css.mobileHeadingTop} >Smart sök</h1>
                          <div className={css.searchBarContainer}> 
                    <h3 className={css.mobileHeading} >Välj plats</h3>
                    <LocationAutocompleteInput
                      className={isMobile ? css.mobileInputRoot : desktopInputRootClass}
                      iconClassName={isMobile ? css.mobileIcon : css.desktopIcon}
                      inputClassName={isMobile ? css.mobileInput : css.desktopInput}
                      predictionsClassName={
                        isMobile ? css.mobilePredictions : css.desktopPredictions
                      }
                      predictionsAttributionClassName={
                        isMobile ? css.mobilePredictionsAttribution : null
                      }
                      placeholder={intl.formatMessage({ id: 'TopbarSearchForm.placeholder' })}
                      closeOnBlur={!isMobile}
                      inputRef={node => {
                        this.searchInput = node;
                      }}
                      input={searchInput}
                      meta={meta}
                    />
      
                
                        <hr className={css.hr1}></hr>
                        <hr className={css.hr2}></hr>              
      
      
                         <h3 className={css.mobileHeading} >Välj kategori</h3>
                        <FieldSelectSwitch className={isMobile ? css.mobileInputRoot : desktopInputRootClass}
                          inputClassName={isMobile ? css.mobileInput : css.desktopInput}
                          id="category" name="category" type= 'radio'>
                           <option value="company">Företag</option>
                             <option value="job">Jobb</option>
                                </FieldSelectSwitch>
      
              
                                  <hr className={css.hr3}></hr>
              
                              <span className={css.divider2nd}>
                           <button
                             className={css.submitButton}
                             type="submit"
                          ><MdSearch className={css.icon}></MdSearch > 
                        </button>
                          </span>                   
               </div>
               </div>
           
      
        );
      
                  return (

                <div className={css.searchBarWrapper}> 
                    <div className={css.displaySmall}>
                    <TopBarSearchModal>
                      {searchBar}
                     </TopBarSearchModal>
                   </div>

                     <div className={css.displayWide}> 
                     {searchBar} 
                      </div>
                       </div>
                    );
                  }}
                />
          
              
              
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

const { func, string, bool } = PropTypes;

TopbarSearchFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  desktopInputRoot: null,
  isMobile: false,
};

TopbarSearchFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  desktopInputRoot: string,
  onSubmit: func.isRequired,
  isMobile: bool,

  // from injectIntl
  intl: intlShape.isRequired,
};

const TopbarSearchForm = injectIntl(TopbarSearchFormComponent);

export default TopbarSearchForm;
