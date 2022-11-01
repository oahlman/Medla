import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Form as FinalForm, FormSpy } from 'react-final-form';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';
import { ensureCurrentUser } from '../../util/data';
import {
  isChangeEmailTakenError,
  isChangeEmailWrongPassword,
  isTooManyEmailVerificationRequestsError,
} from '../../util/errors';
import { FieldPhoneNumberInput, Form, PrimaryButton, FieldTextInput, NamedLink, SecondaryButton } from '../../components';

import css from './ContactDetailsForm.module.css';

const SHOW_EMAIL_SENT_TIMEOUT = 2000;
const SHOW_CODE_SENT_TIMEOUT = 10000;

class ContactDetailsFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showVerificationEmailSentMessage: false, showResetPasswordMessage: false, showVerificationCodeSentMessage: false, verificationCodeSent: false };
    this.emailSentTimeoutId = null;
    this.handleResendVerificationEmail = this.handleResendVerificationEmail.bind(this);
    this.handleResendVerificationCode = this.handleResendVerificationCode.bind(this);
    this.handleSendVerificationCode = this.handleSendVerificationCode.bind(this);
    this.handleResetPassword = this.handleResetPassword.bind(this);
    this.submittedValues = {};
  }

  componentWillUnmount() {
    window.clearTimeout(this.emailSentTimeoutId);
  }

  handleResendVerificationEmail() {
    this.setState({ showVerificationEmailSentMessage: true });

    this.props.onResendVerificationEmail().then(() => {
      // show "verification email sent" text for a bit longer.
      this.emailSentTimeoutId = window.setTimeout(() => {
        this.setState({ showVerificationEmailSentMessage: false });
      }, SHOW_EMAIL_SENT_TIMEOUT);
    });
  }

  handleResendVerificationCode() {
    this.setState({ showVerificationCodeSentMessage: true });

    this.props.onSendVerificationCode().then(() => {
      // show "verification email sent" text for a bit longer.
      this.emailSentTimeoutId = window.setTimeout(() => {
        this.setState({ showVerificationCodeSentMessage: false });
      }, SHOW_CODE_SENT_TIMEOUT);
      this.setState({ verificationCodeSent: true });
    });
  }

  handleSendVerificationCode() {
    this.setState({ showVerificationCodeSentMessage: true });

    this.props.onSendVerificationCode().then(() => {
      // show "verification email sent" text for a bit longer.
      this.emailSentTimeoutId = window.setTimeout(() => {
        this.setState({ showVerificationCodeSentMessage: false });
      }, SHOW_CODE_SENT_TIMEOUT);
      this.setState({ verificationCodeSent: true });
    });
  }

  handleResetPassword() {
    this.setState({ showResetPasswordMessage: true });
    const email = this.props.currentUser.attributes.email;
    this.props.onResetPassword(email);
  }

  render() {
    return (
      <FinalForm
        {...this.props}
        render={fieldRenderProps => {
          const {
            rootClassName,
            className,
            saveEmailError,
            savePhoneNumberError,
            currentUser,
            formId,
            handleSubmit,
            inProgress,
            intl,
            invalid,
            sendVerificationEmailError,
            sendVerificationEmailInProgress,
            resetPasswordInProgress,
            values,
          } = fieldRenderProps;
          const { email, phoneNumber, verificationCode, verificationAttempt } = values;

          const user = ensureCurrentUser(currentUser);

          if (!user.id) {
            return null;
          }

          const { email: currentEmail, emailVerified, pendingEmail, profile } = user.attributes;
          const { phoneNumberVerified, pendingPhoneNumber } = profile.privateData;

          const protectedData = profile.protectedData || {};
          const privateData = profile.privateData || {};
          const currentPhoneNumber = protectedData.phoneNumber;
          const currentVerificationCode = privateData.verificationCode;

          // has the phone number changed
          const phoneNumberChanged = currentPhoneNumber !== phoneNumber;

          // email

          // has the email changed
          const emailChanged = currentEmail !== email;

          const emailLabel = intl.formatMessage({
            id: 'ContactDetailsForm.emailLabel',
          });

          const emailPlaceholder = currentEmail || '';

          const emailRequiredMessage = intl.formatMessage({
            id: 'ContactDetailsForm.emailRequired',
          });
          const emailRequired = validators.required(emailRequiredMessage);
          const emailInvalidMessage = intl.formatMessage({
            id: 'ContactDetailsForm.emailInvalid',
          });
          const emailValid = validators.emailFormatValid(emailInvalidMessage);

          const tooManyVerificationRequests = isTooManyEmailVerificationRequestsError(
            sendVerificationEmailError
          );

          const emailTouched = this.submittedValues.email !== values.email;
          const emailTakenErrorText = isChangeEmailTakenError(saveEmailError)
            ? intl.formatMessage({ id: 'ContactDetailsForm.emailTakenError' })
            : null;

          const phoneEmailAddress = currentEmail.includes("phone+") && currentEmail.includes("@medla.app");

          let resendEmailMessage = null;
          if (tooManyVerificationRequests) {
            resendEmailMessage = (
              <span className={css.tooMany}>
                <FormattedMessage id="ContactDetailsForm.tooManyVerificationRequests" />
              </span>
            );
          } else if (
            sendVerificationEmailInProgress ||
            this.state.showVerificationEmailSentMessage
          ) {
            resendEmailMessage = (
              <span className={css.emailSent}>
                <FormattedMessage id="ContactDetailsForm.emailSent" />
              </span>
            );
          } else {
            resendEmailMessage = (
              <span
                className={css.helperLink}
                onClick={this.handleResendVerificationEmail}
                role="button"
              >
                <FormattedMessage id="ContactDetailsForm.resendEmailVerificationText" />
              </span>
            );
          }

          // Email status info: unverified, verified and pending email (aka changed unverified email)
          let emailVerifiedInfo = null;

          if (emailVerified && !pendingEmail && !emailChanged) {
            // Current email is verified and there's no pending unverified email
            emailVerifiedInfo = (
              <span className={css.emailVerified}>
                <FormattedMessage id="ContactDetailsForm.emailVerified" />
              </span>
            );
          } else if (!emailVerified && !pendingEmail) {
            // Current email is unverified. This is the email given in sign up form

            emailVerifiedInfo = (
              <span className={css.emailUnverified}>
                <FormattedMessage
                  id="ContactDetailsForm.emailUnverified"
                  values={{ resendEmailMessage }}
                />
              </span>
            );
          } else if (pendingEmail) {
            // Current email has been tried to change, but the new address is not yet verified

            const pendingEmailStyled = <span className={css.emailStyle}>{pendingEmail}</span>;
            const pendingEmailCheckInbox = (
              <span className={css.checkInbox}>
                <FormattedMessage
                  id="ContactDetailsForm.pendingEmailCheckInbox"
                  values={{ pendingEmail: pendingEmailStyled }}
                />
              </span>
            );

            emailVerifiedInfo = (
              <span className={css.pendingEmailUnverified}>
                <FormattedMessage
                  id="ContactDetailsForm.pendingEmailUnverified"
                  values={{ pendingEmailCheckInbox, resendEmailMessage }}
                />
              </span>
            );
          }

          let sendVerificationCodeMessage = null;
          if (tooManyVerificationRequests) {
            sendVerificationCodeMessage = (
              <span className={css.tooMany}>
                <FormattedMessage id="ContactDetailsForm.tooManyVerificationRequests" />
              </span>
            );
          } else if (
            this.state.showVerificationCodeSentMessage
          ) {
            sendVerificationCodeMessage = (
              <span className={css.emailSent}>
                <FormattedMessage id="ContactDetailsForm.verificationCodeSent" />
              </span>
            );
          } else {
            sendVerificationCodeMessage = (
              <span
                className={css.helperLink}
                onClick={phoneEmailAddress ? this.handleResendVerificationEmail : this.handleSendVerificationCode}
                role="button"
              >
                <FormattedMessage id={phoneEmailAddress ? "ContactDetailsForm.sendVerificationTextMessage" : "ContactDetailsForm.sendVerificationCodeText"}/>
              </span>
            );
          }

          // Email status info: unverified, verified and pending email (aka changed unverified email)
          let phoneNumberVerifiedInfo = null;

          if (phoneNumberVerified && !pendingPhoneNumber && !phoneNumberChanged) {
            // Current email is verified and there's no pending unverified email
            phoneNumberVerifiedInfo = (
              <span className={css.emailVerified}>
                <FormattedMessage id="ContactDetailsForm.phoneNumberVerified" />
              </span>
            );
          } else if (!phoneNumberVerified && !pendingPhoneNumber) {
            // Current email is unverified. This is the email given in sign up form

            phoneNumberVerifiedInfo = (
              <span className={css.emailUnverified}>
                <FormattedMessage
                  id={phoneNumberChanged ? ("ContactDetailsForm.phoneNumberVerificationInProgress") : ("ContactDetailsForm.phoneNumberUnverified")}
                  values={{ sendVerificationCodeMessage }}
                />
              </span>
            );
          } else if (pendingPhoneNumber) {
            // Current email has been tried to change, but the new address is not yet verified

            const pendingEmailStyled = <span className={css.emailStyle}>{pendingEmail}</span>;
            const pendingEmailCheckInbox = (
              <span className={css.checkInbox}>
                <FormattedMessage
                  id="ContactDetailsForm.pendingEmailCheckInbox"
                  values={{ pendingEmail: pendingEmailStyled }}
                />
              </span>
            );

            emailVerifiedInfo = (
              <span className={css.pendingEmailUnverified}>
                <FormattedMessage
                  id="ContactDetailsForm.pendingEmailUnverified"
                  values={{ pendingEmailCheckInbox, resendEmailMessage }}
                />
              </span>
            );
          }

          // phone
          
          const phonePlaceholder = intl.formatMessage({
            id: 'ContactDetailsForm.phonePlaceholder',
          });
          const phoneLabel = intl.formatMessage({ id: 'ContactDetailsForm.phoneLabel' });
          const phoneInvalidMessage = intl.formatMessage({
            id: 'SignupForm.phoneInvalid',
          });
          const phoneValid = validators.swedenMobileFormatValid(phoneInvalidMessage);

          // password
          const passwordLabel = intl.formatMessage({
            id: 'ContactDetailsForm.passwordLabel',
          });
          const passwordPlaceholder = intl.formatMessage({
            id: 'ContactDetailsForm.passwordPlaceholder',
          });
          const passwordRequiredMessage = intl.formatMessage({
            id: 'ContactDetailsForm.passwordRequired',
          });

          const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);

          const verificationCodeRequired = validators.requiredStringNoTrim(passwordRequiredMessage);

          const passwordMinLengthMessage = intl.formatMessage(
            {
              id: 'ContactDetailsForm.passwordTooShort',
            },
            {
              minLength: validators.PASSWORD_MIN_LENGTH,
            }
          );

          const passwordMinLength = validators.minLength(
            passwordMinLengthMessage,
            validators.PASSWORD_MIN_LENGTH
          );

          const verifyCodeMinLength = validators.minLength(
            passwordMinLengthMessage,
            validators.VERIFYCODE_MIN_LENGTH
          );

          const passwordValidators = emailChanged
            ? validators.composeValidators(passwordRequired, passwordMinLength)
            : null;

          const verificationCodeValidators = phoneNumberChanged
          ? validators.composeValidators(verificationCodeRequired, verifyCodeMinLength)
          : null;

          const passwordFailedMessage = intl.formatMessage({
            id: 'ContactDetailsForm.passwordFailed',
          });
          const passwordTouched = this.submittedValues.currentPassword !== values.currentPassword;
          const passwordErrorText = isChangeEmailWrongPassword(saveEmailError)
            ? passwordFailedMessage
            : null;

          const confirmEmailClasses = classNames(css.confirmChangesSection, {
            [css.confirmChangesSectionVisible]: emailChanged,
          });

          const confirmPhoneNumberClasses = classNames(css.confirmChangesSection, {
            [css.confirmChangesSectionVisible]: this.state.verificationCodeSent,
          });

          // generic error
          const isGenericEmailError = saveEmailError && !(emailTakenErrorText || passwordErrorText);
          const isGenericPhoneNumberError = savePhoneNumberError && !(passwordErrorText);

          let genericError = null;

          if (isGenericEmailError && savePhoneNumberError) {
            genericError = (
              <span className={css.error}>
                <FormattedMessage id="ContactDetailsForm.genericFailure" />
              </span>
            );
          } else if (isGenericEmailError) {
            genericError = (
              <span className={css.error}>
                <FormattedMessage id="ContactDetailsForm.genericEmailFailure" />
              </span>
            );
          } else if (savePhoneNumberError) {
            genericError = (
              <span className={css.error}>
                <FormattedMessage id="ContactDetailsForm.genericPhoneNumberFailure" />
              </span>
            );
          }

          const sendPasswordLink = (
            <span className={css.helperLink} onClick={this.handleResetPassword} role="button">
              <FormattedMessage id="ContactDetailsForm.resetPasswordLinkText" />
            </span>
          );

          const resendPasswordLink = (
            <span className={css.helperLink} onClick={this.handleResetPassword} role="button">
              <FormattedMessage id="ContactDetailsForm.resendPasswordLinkText" />
            </span>
          );

          const sendVerificationsCodeLink = (
            <span className={css.helperLink} onClick={this.handleSendVerificationCode} role="button">
              <FormattedMessage id="ContactDetailsForm.sendVerificationCodeText" />
            </span>
          );

          const resendVerificationsCodeLink = (
            <span className={css.helperLink} onClick={this.handleResendVerificationCode} role="button">
              <FormattedMessage id="ContactDetailsForm.sendPhoneVerificationText" />
            </span>
          );

          const resetPasswordLink =
            this.state.showResetPasswordMessage || resetPasswordInProgress ? (
              <>
                <FormattedMessage
                  id="ContactDetailsForm.resetPasswordLinkSent"
                  values={{
                    email: <span className={css.emailStyle}>{currentUser.attributes.email}</span>,
                  }}
                />{' '}
                {resendPasswordLink}
              </>
            ) : (
              sendPasswordLink
            );

            const sendVerificationCodeLink =
            this.state.showVerificationCodeSentMessage ? (
              <>
                <FormattedMessage
                  id="ContactDetailsForm.newPhoneVerificationCodeSent"
                  values={{
                    phoneNumber: <span className={css.emailStyle}>{values.phoneNumber}</span>,
                  }}
                />{' '}
                {resendVerificationsCodeLink}
              </>
            ) : (
              sendVerificationsCodeLink
            );

          const classes = classNames(rootClassName || css.root, className);
          const submittedOnce = Object.keys(this.submittedValues).length > 0;
          const verificationCodeMatch = isEqual(verificationCode, currentVerificationCode);
          const pristineSinceLastSubmit = submittedOnce && isEqual(values, this.submittedValues);
          const submitDisabled =
            invalid ||
            pristineSinceLastSubmit ||
            inProgress ||
            !(emailChanged || phoneNumberChanged || verificationAttempt !== undefined);

          const verificationInputSection = phoneNumberVerified ? null : (
          <div className={confirmPhoneNumberClasses}>
            <FieldTextInput
              className={css.verificationCode}
              type="one-time-code"
              textContentType="oneTimeCode"
              name="verificationAttempt"
              id={formId ? `${formId}.verificationAttempt` : 'verificationAttempt'}
              values="verificationAttempt"
              autocomplete="one-time-code"
              label="Verifieringskod"
              placeholder="Fyll i din 6-siffriga kod"
              autoFocus
              //validate={verificationCodeValidators}
            />
          </div>
          );

          return (
            <Form
              className={classes}
              onSubmit={e => {
                  this.submittedValues = values;
                  handleSubmit(e);
                }}
            >
              <div className={css.contactDetailsSection}>
                <FieldTextInput
                  type="email"
                  name="email"
                  id={formId ? `${formId}.email` : 'email'}
                  label={emailLabel}
                  placeholder={emailPlaceholder}
                  validate={validators.composeValidators(emailRequired, emailValid)}
                  customErrorText={emailTouched ? null : emailTakenErrorText}
                />
                {emailVerifiedInfo}
               
               
              </div>

              <div className={confirmEmailClasses}>
                <h3 className={css.confirmChangesTitle}>
                  <FormattedMessage id="ContactDetailsForm.confirmChangesTitle" />
                </h3>
                <p className={css.confirmChangesInfo}>
                  <FormattedMessage id="ContactDetailsForm.confirmChangesInfo" />
                  <br />
                  <FormattedMessage
                    id="ContactDetailsForm.resetPasswordInfo"
                    values={{ resetPasswordLink }}
                  />
                </p>

                <FieldTextInput
                  className={css.password}
                  type="password"
                  name="currentPassword"
                  id={formId ? `${formId}.currentPassword` : 'currentPassword'}
                  autoComplete="current-password"
                  label={passwordLabel}
                  placeholder={passwordPlaceholder}
                  validate={passwordValidators}
                  customErrorText={passwordTouched ? null : passwordErrorText}
                />
              </div>
              {verificationInputSection}
              <div className={css.bottomWrapper}>
                {genericError}
                <PrimaryButton
                  type="submit"
                  inProgress={inProgress}
                  ready={pristineSinceLastSubmit}
                  disabled={submitDisabled}
                >
                  <FormattedMessage id="ContactDetailsForm.saveChanges" />
                </PrimaryButton>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}
ContactDetailsFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  formId: null,
  saveEmailError: null,
  savePhoneNumberError: null,
  inProgress: false,
  sendVerificationEmailError: null,
  sendVerificationEmailInProgress: false,
  email: null,
  phoneNumber: null,
  resetPasswordInProgress: false,
  resetPasswordError: null,
};

const { bool, func, string } = PropTypes;

ContactDetailsFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  formId: string,
  saveEmailError: propTypes.error,
  savePhoneNumberError: propTypes.error,
  inProgress: bool,
  intl: intlShape.isRequired,
  onResendVerificationEmail: func.isRequired,
  ready: bool.isRequired,
  sendVerificationEmailError: propTypes.error,
  sendVerificationEmailInProgress: bool,
  resetPasswordInProgress: bool,
  resetPasswordError: propTypes.error,
};

const ContactDetailsForm = compose(injectIntl)(ContactDetailsFormComponent);

ContactDetailsForm.displayName = 'ContactDetailsForm';

export default ContactDetailsForm;
