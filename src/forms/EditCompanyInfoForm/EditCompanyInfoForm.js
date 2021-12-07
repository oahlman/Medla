import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import {
  autocompleteSearchRequired,
  autocompletePlaceSelected,
  composeValidators,
} from '../../util/validators';
import { Form, LocationAutocompleteInputField, Button, FieldTextInput } from '../../components';
import * as validators from '../../util/validators';


import css from './EditCompanyInfoForm.module.css';

const identity = v => v;

export const EditCompanyInfoFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        values,
      } = formRenderProps;

      const titleRequiredMessage = intl.formatMessage({ id: 'EditListingLocationForm.address' });
      const addressPlaceholderMessage = intl.formatMessage({
        id: 'EditListingLocationForm.addressPlaceholder',
      });
      const addressRequiredMessage = intl.formatMessage({
        id: 'EditListingLocationForm.addressRequired',
      });
      const addressNotRecognizedMessage = intl.formatMessage({
        id: 'EditListingLocationForm.addressNotRecognized',
      });

      const optionalText = intl.formatMessage({
        id: 'EditListingLocationForm.optionalText',
      });

      const buildingMessage = intl.formatMessage(
        { id: 'EditListingLocationForm.building' },
        { optionalText: optionalText }
      );
      const buildingPlaceholderMessage = intl.formatMessage({
        id: 'EditListingLocationForm.buildingPlaceholder',
      });

          //phone
          const usernameRequiredMessage = intl.formatMessage({
            id: 'SignupForm.usernameRequired',
          });
          const phonePlaceholder = intl.formatMessage({
            id: 'ContactDetailsForm.phonePlaceholder',
          });
          const phoneLabel = intl.formatMessage({ id: 'ContactDetailsForm.phoneLabel' });
          const phoneInvalidMessage = intl.formatMessage({
            id: 'SignupForm.phoneInvalid',
          });
    
          const contactPhoneMessage = intl.formatMessage({
            id: 'EditCompanyDescriptionForm.contactPhone',
          }
          );

          const organizationNumber = intl.formatMessage({
            id: 'EditCompanyDescriptionForm.organizationNumber',
          }
          );

          const organizationPlaceholder = intl.formatMessage({
            id: 'EditCompanyDescriptionForm.organizationPlaceholder',
          }
          );
          const phoneValid = validators.swedenMobileFormatValid(phoneInvalidMessage);
  
    
          const contactInformationMessage = intl.formatMessage({
            id: 'EditListingDescriptionForm.contactPlaceholder',
          });

            const usernameInvalidMessage = intl.formatMessage({
        id: 'SignupForm.usernameInvalid',
           });
          const usernameRequired = validators.required(usernameRequiredMessage);
          const usernameValid = validators.usernameFormatValid(usernameInvalidMessage);

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingLocationForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingLocationForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}
          <LocationAutocompleteInputField
            className={css.locationAddress}
            inputClassName={css.locationAutocompleteInput}
            iconClassName={css.locationAutocompleteInputIcon}
            predictionsClassName={css.predictionsRoot}
            validClassName={css.validLocation}
            autoFocus
            name="location"
            label={titleRequiredMessage}
            placeholder={addressPlaceholderMessage}
            useDefaultPredictions={false}
            format={identity}
            valueFromForm={values.location}
            validate={composeValidators(
              autocompleteSearchRequired(addressRequiredMessage),
              autocompletePlaceSelected(addressNotRecognizedMessage)
            )}
          />


          <FieldTextInput
            id="contactNumber"
            name="contactNumber"
            className={css.contactDetails}
            type="textarea"
            label={contactPhoneMessage}
            placeholder={contactInformationMessage}
            validate={validators.composeValidators(usernameRequired, usernameValid)}
            />    

          <FieldTextInput
            id="organizationNumber"
            name="organizationNumber"
            className={css.contactDetails}
            type="textarea"
            label={organizationNumber}
            placeholder={organizationPlaceholder}
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

EditCompanyInfoFormComponent.defaultProps = {
  selectedPlace: null,
  fetchErrors: null,
};

EditCompanyInfoFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

export default compose(injectIntl)(EditCompanyInfoFormComponent);
