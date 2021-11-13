import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { isPasswordRecoveryEmailNotFoundError } from '../../util/errors';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import {
  Page,
  InlineTextButton,
  IconKeys,
  LayoutSingleColumn,
  LayoutWrapperMain,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { PasswordRecoveryForm } from '../../forms';
import { TopbarContainer } from '../../containers';

import {
  recoverPassword,
  retypePasswordRecoveryEmail,
  clearPasswordRecoveryError,
} from './PasswordRecoveryPage.duck';
import css from './PasswordRecoveryPage.module.css';

export const PasswordRecoveryPageComponent = props => {
  const {
    scrollingDisabled,
    initialEmail,
    submittedEmail,
    recoveryError,
    recoveryInProgress,
    passwordRequested,
    onChange,
    onSubmitEmail,
    onRetypeEmail,
    intl,
  } = props;

  const title = intl.formatMessage({
    id: 'PasswordRecoveryPage.title',
  });


  const resendEmailLink = (
    <InlineTextButton rootClassName={css.helperLink} onClick={() => onSubmitEmail(submittedEmail)}>
      <FormattedMessage id="PasswordRecoveryPage.resendEmailLinkText" />
    </InlineTextButton>
  );

  const fixEmailLink = (
    <InlineTextButton rootClassName={css.helperLink} onClick={onRetypeEmail}>
      <FormattedMessage id="PasswordRecoveryPage.fixEmailLinkText" />
    </InlineTextButton>
  );

  const resendPhoneLink = (
    <InlineTextButton rootClassName={css.helperLink} onClick={() => onSubmitEmail(submittedEmail)}>
      <FormattedMessage id="PasswordRecoveryPage.resendPhoneLinkText" />
    </InlineTextButton>
  );

  const fixPhoneLink = (
    <InlineTextButton rootClassName={css.helperLink} onClick={onRetypeEmail}>
      <FormattedMessage id="PasswordRecoveryPage.fixPhoneLinkText" />
    </InlineTextButton>
  );

  const handleSubmitEmail = values => {
    const email = values.email;
    const isEmail = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(email);
    const emailParams = email;
    const phoneParams = `phone+${email}@medla.app`;
    const params = isEmail ? emailParams : phoneParams;
    onSubmitEmail(params);
    console.log('email', email, 'isEmail', isEmail);
  };

  const isPhoneNumber = (initialEmail && initialEmail.includes("phone+")) || (submittedEmail && submittedEmail.includes("phone+")) ? true : false;
  const initialPhoneNumber = initialEmail === null ? null : initialEmail.replace(/phone\+|@medla.app/g, "");
  const initialContactDetails = isPhoneNumber ? initialPhoneNumber : initialEmail;

  const submittedPhoneNumber = submittedEmail === null ? null : submittedEmail.replace(/phone\+|@medla.app/g, "");
  const submittedContactDetails = isPhoneNumber ? submittedPhoneNumber : submittedEmail;

  const submitEmailContent = (
    <div className={css.submitEmailContent}>
      <IconKeys className={css.modalIcon} />
      <h1 className={css.modalTitle}>
        <FormattedMessage id="PasswordRecoveryPage.forgotPasswordTitle" />
      </h1>
      <p className={css.modalMessage}>
        <FormattedMessage id="PasswordRecoveryPage.forgotPasswordMessage" />
      </p>
      <PasswordRecoveryForm
        inProgress={recoveryInProgress}
        onChange={onChange}
        onSubmit={handleSubmitEmail}
        initialValues={{ email: initialContactDetails }}
        recoveryError={recoveryError}
      />
    </div>
  );

  const submittedEmailText = passwordRequested ? (
    <span className={css.email}>{initialContactDetails}</span>
  ) : (
    <span className={css.email}>{submittedContactDetails}</span>
  );

  const emailSubmittedContent = (
    <div className={css.emailSubmittedContent}>
      <IconKeys className={css.modalIcon} />
      <h1 className={css.modalTitle}>
        <FormattedMessage id="PasswordRecoveryPage.emailSubmittedTitle" />
      </h1>
      <p className={css.modalMessage}>
        <FormattedMessage
          id="PasswordRecoveryPage.emailSubmittedMessage"
          values={{ submittedEmailText }}
        />
      </p>
      <div className={css.bottomWrapper}>
        <p className={css.helperText}>
          {recoveryInProgress ? (
            <FormattedMessage id="PasswordRecoveryPage.resendingEmailInfo" />
          ) : (
            <FormattedMessage
              id="PasswordRecoveryPage.resendEmailInfo"
              values={{ resendEmailLink }}
            />
          )}
        </p>
        <p className={css.helperText}>
          <FormattedMessage id="PasswordRecoveryPage.fixEmailInfo" values={{ fixEmailLink }} />
        </p>
      </div>
    </div>
  );

  const phoneSubmittedContent = (
    <div className={css.emailSubmittedContent}>
      <IconKeys className={css.modalIcon} />
      <h1 className={css.modalTitle}>
        <FormattedMessage id="PasswordRecoveryPage.phoneSubmittedTitle" />
      </h1>
      <p className={css.modalMessage}>
        <FormattedMessage
          id="PasswordRecoveryPage.phoneSubmittedMessage"
          values={{ submittedEmailText }}
        />
      </p>
      <div className={css.bottomWrapper}>
        <p className={css.helperText}>
          {recoveryInProgress ? (
            <FormattedMessage id="PasswordRecoveryPage.resendingPhoneInfo" />
          ) : (
            <FormattedMessage
              id="PasswordRecoveryPage.resendPhoneInfo"
              values={{ resendPhoneLink }}
            />
          )}
        </p>
        <p className={css.helperText}>
          <FormattedMessage id="PasswordRecoveryPage.fixPhoneInfo" values={{ fixPhoneLink }} />
        </p>
      </div>
    </div>
  );

  const genericErrorContent = (
    <div className={css.genericErrorContent}>
      <IconKeys className={css.modalIcon} />
      <h1 className={css.modalTitle}>
        <FormattedMessage id="PasswordRecoveryPage.actionFailedTitle" />
      </h1>
      <p className={css.modalMessage}>
        <FormattedMessage id="PasswordRecoveryPage.actionFailedMessage" />
      </p>
    </div>
  );

  let content;
  if (isPasswordRecoveryEmailNotFoundError(recoveryError)) {
    content = submitEmailContent;
  } else if (recoveryError) {
    content = genericErrorContent;
  } else if (submittedEmail || passwordRequested) {
    content = isPhoneNumber ? phoneSubmittedContent : emailSubmittedContent;
  } else {
    content = submitEmailContent;
  }

  return (
    <Page title={title} scrollingDisabled={scrollingDisabled}>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain className={css.layoutWrapperMain}>
          <div className={css.root}>{content}</div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

PasswordRecoveryPageComponent.defaultProps = {
  sendVerificationEmailError: null,
  initialEmail: null,
  submittedEmail: null,
  recoveryError: null,
};

const { bool, func, string } = PropTypes;

PasswordRecoveryPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  initialEmail: string,
  submittedEmail: string,
  recoveryError: propTypes.error,
  recoveryInProgress: bool.isRequired,
  passwordRequested: bool.isRequired,
  onChange: func.isRequired,
  onSubmitEmail: func.isRequired,
  onRetypeEmail: func.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const {
    initialEmail,
    submittedEmail,
    recoveryError,
    recoveryInProgress,
    passwordRequested,
  } = state.PasswordRecoveryPage;
  return {
    scrollingDisabled: isScrollingDisabled(state),
    initialEmail,
    submittedEmail,
    recoveryError,
    recoveryInProgress,
    passwordRequested,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: () => dispatch(clearPasswordRecoveryError()),
  onSubmitEmail: email => dispatch(recoverPassword(email)),
  onRetypeEmail: () => dispatch(retypePasswordRecoveryEmail()),
});

const PasswordRecoveryPage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(PasswordRecoveryPageComponent);

export default PasswordRecoveryPage;
