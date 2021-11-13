import React, { useState } from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { isTooManyEmailVerificationRequestsError } from '../../util/errors';
import { FieldCheckbox, IconEmailAttention, InlineTextButton, NamedLink } from '..';
import { ensureCurrentUser } from '../../util/data';

import css from './ModalMissingAccountsInformation.module.css';
import IconCheckmark from '../IconCheckmark/IconCheckmark';

const AccountReminder = props => {
  const {
    className,
    currentUser,

    listing,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    onResendVerificationEmail,
    Form,
    image,
  } = props;

  const user = ensureCurrentUser(currentUser);

  const email = user.id ? <span className={css.email}>{user.attributes.email}</span> : '';

  const profileImageId = user.profileImage ? user.profileImage.id : null;
  const profileImage = image || { imageId: profileImageId };

  const hasProfileImage = profileImage && user.profileImage.id;

  const hasImage = user;
  const [confirmed, setState] = useState(hasImage ? true : false);
  const resendErrorTranslationId = isTooManyEmailVerificationRequestsError(
    sendVerificationEmailError
  );
  console.log()
    ? 'ModalMissingInformation.resendFailedTooManyRequests'
    : 'ModalMissingInformation.resendFailed';
  const resendErrorMessage = sendVerificationEmailError ? (
    <p className={css.error}>
      <FormattedMessage id={resendErrorTranslationId} />
    </p>
  ) : null;
  console.log(
    'hasImage',
    hasImage,
    'confirmed',
    confirmed,
    'hasProfileImageAccount',
    hasProfileImage
  );

  return (
    <div className={className}>
      <p className={css.modalTitle}>
        <FormattedMessage id="ModalMissingInformation.improveProfile" />
      </p>
      <IconCheckmark
        className={hasImage ? css.hidden : css.hiddenbuttonAddSecondary}
      ></IconCheckmark>

      <IconEmailAttention
        className={hasImage ? css.hiddenbuttonAddSecondary : css.hidden}
      ></IconEmailAttention>
      <p className={css.modalMessage}>
        <FormattedMessage id="ModalMissingInformation.profileImageStatus" />
      </p>

      {resendErrorMessage}

      <div className={css.bottomWrapper}></div>
    </div>
  );
};

export default AccountReminder;
