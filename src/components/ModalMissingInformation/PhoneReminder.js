import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { isTooManyEmailVerificationRequestsError } from '../../util/errors';
import { IconEmailAttention, InlineTextButton, NamedLink } from '../../components';

import css from './ModalMissingInformation.module.css';

const PhoneReminder = props => {
  const {
    className,
    user,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    onResendVerificationEmail,
  } = props;

  const phoneNumber = user.id ? <span className={css.email}>{user.attributes.email.replace(/phone\+|@medla.app/g, "")}</span> : '';

  const resendEmailLink = (
    <InlineTextButton rootClassName={css.helperLink} onClick={onResendVerificationEmail}>
      <FormattedMessage id="ModalMissingInformation.resendTextMessageLinkText" />
    </InlineTextButton>
  );

  const fixEmailLink = (
    <NamedLink className={css.helperLink} name="ContactDetailsPage">
      <FormattedMessage id="ModalMissingInformation.fixEmailLinkText" />
    </NamedLink>
  );

  const resendErrorTranslationId = isTooManyEmailVerificationRequestsError(
    sendVerificationEmailError
  )
    ? 'ModalMissingInformation.resendFailedTooManyPhoneRequests'
    : 'ModalMissingInformation.resendFailed';
  const resendErrorMessage = sendVerificationEmailError ? (
    <p className={css.error}>
      <FormattedMessage id={resendErrorTranslationId} />
    </p>
  ) : null;

  return (
    <div className={className}>
      <IconEmailAttention className={css.modalIcon} />
      <p className={css.modalTitle}>
        <FormattedMessage id="ModalMissingInformation.verifyPhoneNumberTitle" />
      </p>
      <p className={css.modalMessage}>
        <FormattedMessage id="ModalMissingInformation.verifyPhoneNumberText" />
      </p>
      <p className={css.modalMessage}>
        <FormattedMessage id="ModalMissingInformation.checkTextMessages" values={{ phoneNumber }} />
      </p>
      {resendErrorMessage}

      <div className={css.bottomWrapper}>
        <p className={css.helperText}>
          {sendVerificationEmailInProgress ? (
            <FormattedMessage id="ModalMissingInformation.sendingEmail" />
          ) : (
            <FormattedMessage
              id="ModalMissingInformation.resendTextMessage"
              values={{ resendEmailLink }}
            />
          )}
        </p>
        <p className={css.helperText}>
          <FormattedMessage id="ModalMissingInformation.fixPhoneNumber" values={{ fixEmailLink }} />
        </p>
      </div>
    </div>
  );
};

export default PhoneReminder;
