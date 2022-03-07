import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm, FormSpy } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
import config from '../../config';
import { Button, FieldCheckboxGroup, FieldRadioButton, Form } from '../../components';

import css from './EditListingFeaturesForm.module.css';

const EditListingFeaturesFormComponent = props => (
  <FinalForm
      {...props}
      render={fieldRenderProps => {
      const {
        disabled,
        ready,
        rootClassName,
        className,
        name,
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        filterConfig,
        onChange,
        invalid,
        submitting,
        required,
        id,
      } = fieldRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      const otherProjectLabel = <FormattedMessage id="Marketplace.config.key.labelOther" />;
      const options = findOptionsForSelectFilter('amenities', filterConfig);
      const showAsRequired = pristine && required;
      return (

        <Form className={classes} onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
        }}>
          {errorMessage}
          {errorMessageShowListing}
          <FormSpy onChange={onChange} />
          <FieldRadioButton
            id='bjornetjarnsberget'
            name='amenities'
            label="Björnetjärnsberget"
            value="bjornetjarnsberget"
            showAsRequired={showAsRequired}
          />
          <FieldRadioButton
            id='han'
            name='amenities'
            label="Hån"
            value="han"
            showAsRequired={showAsRequired}
          />
          <FieldRadioButton
            id='bjornberget'
            name='amenities'
            label="Björnberget"
            value="bjornberget"
            showAsRequired={showAsRequired}
          />
           <FieldRadioButton
            id='bleka'
            name='amenities'
            label="Bleka"
            value="bleka"
            showAsRequired={showAsRequired}
          />
          <FieldRadioButton
            id='hocksjon'
            name='amenities'
            label="Hocksjön"
            value="hocksjon"
            showAsRequired={showAsRequired}
          />
          <FieldRadioButton
            id='kabeko'
            name='amenities'
            label="Kabeko"
            value="kabeko"
            showAsRequired={showAsRequired}
          />
          <FieldRadioButton
            id='stollsaterberget'
            name='amenities'
            label="Stöllsäterberget"
            value="stollsaterberget"
            showAsRequired={showAsRequired}
          />
          <FieldRadioButton
            id='stormossen'
            name='amenities'
            label="Stormossen"
            value="Stormossen"
            showAsRequired={showAsRequired}
          />
          <FieldRadioButton
            id='other'
            name='amenities'
            label={otherProjectLabel}
            value="other"
            showAsRequired={showAsRequired}
          />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  filterConfig: propTypes.filterConfig,
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;

export default EditListingFeaturesForm;
