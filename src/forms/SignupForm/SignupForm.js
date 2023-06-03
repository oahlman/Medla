import React, { useState } from 'react';
import { PropTypes, shape } from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import * as validators from '../../util/validators';
import { Form, PrimaryButton, FieldTextInput, LocationAutocompleteInputField, FieldRadioButton, } from '../../components';
import { propTypes } from '../../util/types';
import {
  autocompleteSearchRequired,
  autocompletePlaceSelected,
  composeValidators,
} from '../../util/validators';

import css from './SignupForm.module.css';

const identity = v => v;

const KEY_CODE_ENTER = 13;

const SignupFormComponent = props => (
  <FinalForm
    {...props}
    initialValues={{ profileType: 'company' }}
    render={fieldRenderProps => {
      const {
        rootClassName,
        className,
        formId,
        handleSubmit,
        inProgress,
        invalid,
        intl,
        values,
        onOpenTermsOfService,
      } = fieldRenderProps;

      // location
      const titleRequiredMessage = intl.formatMessage({ 
        id: 'SignupForm.address' });

      const addressPlaceholderMessage = intl.formatMessage({
        id: 'SignupForm.addressPlaceholder',
      });
      const addressRequiredMessage = intl.formatMessage({
        id: 'SignupForm.addressRequired',
      });
      const addressNotRecognizedMessage = intl.formatMessage({
        id: 'SignupForm.addressNotRecognized',
      });

      // email
      const emailLabel = intl.formatMessage({
        id: 'SignupForm.emailLabel',
      });
      const emailPlaceholder = intl.formatMessage({
        id: 'SignupForm.emailPlaceholder',
      });
      const emailRequiredMessage = intl.formatMessage({
        id: 'SignupForm.emailRequired',
      });
      const emailRequired = validators.required(emailRequiredMessage);
      const emailInvalidMessage = intl.formatMessage({
        id: 'SignupForm.emailInvalid',
      });
      const emailValid = validators.emailFormatValid(emailInvalidMessage);

      // password
      const passwordLabel = intl.formatMessage({
        id: 'SignupForm.passwordLabel',
      });
      const passwordPlaceholder = intl.formatMessage({
        id: 'SignupForm.passwordPlaceholder',
      });
      const passwordRequiredMessage = intl.formatMessage({
        id: 'SignupForm.passwordRequired',
      });
      const passwordMinLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooShort',
        },
        {
          minLength: validators.PASSWORD_MIN_LENGTH,
        }
      );
      const passwordMaxLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooLong',
        },
        {
          maxLength: validators.PASSWORD_MAX_LENGTH,
        }
      );
      const passwordMinLength = validators.minLength(
        passwordMinLengthMessage,
        validators.PASSWORD_MIN_LENGTH
      );
      const passwordMaxLength = validators.maxLength(
        passwordMaxLengthMessage,
        validators.PASSWORD_MAX_LENGTH
      );
      const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);
      const passwordValidators = validators.composeValidators(
        passwordRequired,
        passwordMinLength,
        passwordMaxLength
      );

      // companyNameLabel
      const companyNameLabel = intl.formatMessage({
        id: 'SignupForm.companyNameLabel',
      });

      // privatePersonLabel
      const privatePersonLabel = intl.formatMessage({
        id: 'SignupForm.privatePersonLabel',
      });

      // profileTypeLabel
      const profileTypeLabel = intl.formatMessage({
        id: 'SignupForm.profileTypeLabel',
      });

      // companyName
      const companyLabel = intl.formatMessage({
        id: 'SignupForm.companyLabel',
      });
      const companyPlaceholder = intl.formatMessage({
        id: 'SignupForm.companyPlaceholder',
      });
      const companyRequiredMessage = intl.formatMessage({
        id: 'SignupForm.companyRequired',
      });
      const companyRequired = validators.required(companyRequiredMessage);

      // phone number
      const phoneLabel = intl.formatMessage({
        id: 'SignupForm.phoneLabel',
      });
      const phonePlaceholder = intl.formatMessage({
        id: 'SignupForm.phonePlaceholder',
      });
      const phoneRequiredMessage = intl.formatMessage({
        id: 'SignupForm.phoneRequired',
      });
      const phoneInvalidMessage = intl.formatMessage({
        id: 'SignupForm.phoneInvalid',
      });
      const phoneRequired = validators.required(phoneRequiredMessage);
      const phoneValid = validators.swedenMobileFormatValid(phoneInvalidMessage);

      // username
      const usernameLabel = intl.formatMessage({
        id: 'SignupForm.usernameLabel',
      });
      const usernamePlaceholder = intl.formatMessage({
        id: 'SignupForm.usernamePlaceholder',
      });
      const usernameRequiredMessage = intl.formatMessage({
        id: 'SignupForm.usernameRequired',
      });
      const usernameInvalidMessage = intl.formatMessage({
        id: 'SignupForm.usernameInvalid',
      });
      const usernameRequired = validators.required(usernameRequiredMessage);
      const usernameValid = validators.usernameFormatValid(usernameInvalidMessage);

      // firstName
      const firstNameLabel = intl.formatMessage({
        id: 'SignupForm.firstNameLabel',
      });
      const firstNamePlaceholder = intl.formatMessage({
        id: 'SignupForm.firstNamePlaceholder',
      });
      const firstNameRequiredMessage = intl.formatMessage({
        id: 'SignupForm.firstNameRequired',
      });
      const firstNameRequired = validators.required(firstNameRequiredMessage);

      // lastName
      const lastNameLabel = intl.formatMessage({
        id: 'SignupForm.lastNameLabel',
      });
      const lastNamePlaceholder = intl.formatMessage({
        id: 'SignupForm.lastNamePlaceholder',
      });
      const lastNameRequiredMessage = intl.formatMessage({
        id: 'SignupForm.lastNameRequired',
      });
      const lastNameRequired = validators.required(lastNameRequiredMessage);

      const classes = classNames(rootClassName || css.root, className);
      const submitInProgress = inProgress;
      const submitDisabled = invalid || submitInProgress;

      const handleTermsKeyUp = e => {
        // Allow click action with keyboard like with normal links
        if (e.keyCode === KEY_CODE_ENTER) {
          onOpenTermsOfService();
        }
      };

      const companyRequiredConditionally = value => 
        values.profileType === 'company' ? validators.required(companyRequiredMessage)(value) : undefined;

      const firstNameRequiredConditionally = value =>
        values.profileType === 'privatePerson' ? validators.required(firstNameRequiredMessage)(value) : undefined;

      const lastNameRequiredConditionally = value =>
        values.profileType === 'privatePerson' ? validators.required(lastNameRequiredMessage)(value) : undefined;

      const termsLink = (
        <span
          className={css.termsLink}
          onClick={onOpenTermsOfService}
          role="button"
          tabIndex="0"
          onKeyUp={handleTermsKeyUp}
        >
          <FormattedMessage id="SignupForm.termsAndConditionsLinkText" />
        </span>
      );

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          <div>
          <span className={css.profileTypeTitle}>{profileTypeLabel}</span>
          <div className={css.profileType}>
          <FieldRadioButton
              id={formId ? `${formId}.profileTypeCompany` : 'profileTypeCompany'}
              name='profileType'
              label={companyLabel}
              value="company"
              showAsRequired="true"
              />
              <FieldRadioButton
              id={formId ? `${formId}.profileTypePrivatePerson` : 'profileTypePrivatePerson'}
              name='profileType'
              label={privatePersonLabel}
              value="privatePerson"
              showAsRequired="true"
              />
            </div>
            <div className={classNames(css.location, { [css.hidden]: values.profileType !== 'company' })}>
            <FieldTextInput
              type="company"
              className={css.phone}
              id={formId ? `${formId}.companyName` : 'companyName'}
              name="companyName"
              label={companyNameLabel}
              placeholder={companyPlaceholder}
              validate={values.profileType !== 'company' ? null : companyRequired}
              disabled={values.profileType !== 'company'}
            />
            </div>
            <div className={classNames(css.name, { [css.hidden]: values.profileType !== 'privatePerson' })}>
              <FieldTextInput
                className={css.firstNameRoot}
                type="text"
                id={formId ? `${formId}.fname` : 'fname'}
                name="fname"
                autoComplete="given-name"
                label={firstNameLabel}
                placeholder={firstNamePlaceholder}
                validate={values.profileType !== 'privatePerson' ? null : firstNameRequired}
              />
              <FieldTextInput
                className={css.lastNameRoot}
                type="text"
                id={formId ? `${formId}.lname` : 'lname'}
                name="lname"
                autoComplete="family-name"
                label={lastNameLabel}
                placeholder={lastNamePlaceholder}
                validate={values.profileType !== 'privatePerson' ? null : lastNameRequired}
              />
            </div>
            <div className={css.location}>
              <LocationAutocompleteInputField
                className={css.locationAddress}
                type="location"
                id={formId ? `${formId}.location` : 'location'}
                inputClassName={css.locationAutocompleteInput}
                iconClassName={css.locationAutocompleteInputIcon}
                predictionsClassName={css.predictionsRoot}
                validClassName={css.validLocation}
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
            </div>
            <div className={css.location}>
            <FieldTextInput
              type="text"
              id={formId ? `${formId}.email` : 'email'}
              name="email"
              autoComplete="off"
              label={usernameLabel}
              placeholder={usernamePlaceholder}
              validate={validators.composeValidators(usernameRequired, usernameValid)}
            />
            </div>
            <FieldTextInput
              className={css.password}
              type="password"
              id={formId ? `${formId}.password` : 'password'}
              name="password"
              autoComplete="new-password"
              label={passwordLabel}
              placeholder={passwordPlaceholder}
              validate={passwordValidators}
            />
          </div>

          <div className={css.bottomWrapper}>
            <p className={css.bottomWrapperText}>
              <span className={css.termsText}>
                <FormattedMessage
                  id="SignupForm.termsAndConditionsAcceptText"
                  values={{ termsLink }}
                />
              </span>
            </p>
            <PrimaryButton id="signupTracker" type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
              <FormattedMessage id="SignupForm.signUp" />
            </PrimaryButton>
         
          </div>
        </Form>
      );
    }}
  />
);

SignupFormComponent.defaultProps = { 
  inProgress: false,
  selectedPlace: null,
  fetchErrors: null,
 };

const { bool, func } = PropTypes;

SignupFormComponent.propTypes = {
  inProgress: bool,
  selectedPlace: propTypes.place,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),

  onOpenTermsOfService: func.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const SignupForm = compose(injectIntl)(SignupFormComponent);
SignupForm.displayName = 'SignupForm';

export default SignupForm;
