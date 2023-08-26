import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm, Field } from 'react-final-form';
import classNames from 'classnames';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import { Form, LocationAutocompleteInput, FieldTextInput, Button } from '../../components';
import { MdSearch } from 'react-icons/md';

import css from './TopbarSearchForm.module.css';

const identity = v => v;

class TopbarSearchFormComponent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.searchInput = null;
  }

  onSubmit(values) {
    const { location, keyword } = values;
    if (location.selectedPlace) {
      this.props.onSubmit({ location, keyword });
      if (this.searchInput) {
        this.searchInput.blur();
      }
    }
  }

  render() {
    return (
      <FinalForm
        {...this.props}
        onSubmit={this.onSubmit}
        render={formRenderProps => {
          const { rootClassName, className, desktopInputRoot, intl, isMobile, handleSubmit } = formRenderProps;

          const classes = classNames(rootClassName, className);
          const desktopInputRootClass = desktopInputRoot || css.desktopInputRoot;
          const keywordPlaceholder = intl.formatMessage({ id: 'TopbarSearchForm.keywordPlaceholder' });

          return (
            <Form
              className={classes}
              onSubmit={handleSubmit}
              enforcePagePreloadFor="SearchPage"
            >
              <div className={css.searchBar}>
                <Field
                  name="location"
                  format={identity}
                  render={({ input, meta }) => {
                    const { onChange, ...restInput } = input;
                    const locationInput = { ...restInput, onChange };

                    return (
                      <div className={css.searchBarWrapper}>
                        <h3 className={css.mobileHeading}><FormattedMessage id="TopbarSearchForm.mobileHeading1" /></h3>
                        <LocationAutocompleteInput
                          className={isMobile ? css.mobileInputRoot : desktopInputRootClass}
                          iconClassName={isMobile ? css.mobileIcon : css.desktopIcon}
                          inputClassName={isMobile ? css.mobileInput : css.desktopInput}
                          predictionsClassName={isMobile ? css.mobilePredictions : css.desktopPredictions}
                          predictionsAttributionClassName={isMobile ? css.mobilePredictionsAttribution : null}
                          placeholder={intl.formatMessage({ id: 'TopbarSearchForm.locationPlaceholder' })}
                          closeOnBlur={!isMobile}
                          inputRef={node => { this.searchInput = node; }}
                          input={locationInput}
                          meta={meta}
                        />

                        <hr className={css.hr1} />
                        <hr className={css.hr2} />

                        <h3 className={css.mobileHeading}><FormattedMessage id="TopbarSearchForm.mobileHeading2" /></h3>
                        <FieldTextInput
                          id="keyword"
                          name="keyword"
                          type="text"
                          className={isMobile ? css.mobileInputRoot : desktopInputRootClass}
                          inputClassName={isMobile ? css.mobileInput : css.desktopInput}
                          placeholder={keywordPlaceholder}
                        />
                        <hr className={css.hr3} />

                        <span className={css.divider2nd}>
                          <button className={css.submitButton} type="submit">
                            <MdSearch className={css.icon} />
                          </button>
                        </span>
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
