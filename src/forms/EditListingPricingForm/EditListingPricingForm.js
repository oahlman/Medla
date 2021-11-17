import React, { useState } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { ensureListing } from '../../util/data';

import { maxLength, required, composeValidators } from '../../util/validators';
import { Form, Button, SecondaryButton, FieldTextInput, Collapsible } from '../../components';

import css from './EditListingPricingForm.module.css';

const TITLE_MAX_LENGTH = 60;

const EditListingPricingFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        categories,
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
        getOwnListing,
        listing,
      } = formRenderProps;

      const offerTitleMessage = intl.formatMessage({ id: 'EditListingOfferForm.offer' });
      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titlePlaceholder',
      });
      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titleRequired',
      });
      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );

      const offer1Message = intl.formatMessage({
        id: 'EditListingOffer1Form.offer',
      });
      const offer2Message = intl.formatMessage({
        id: 'EditListingOffer2Form.offer',
      });
      const offer3Message = intl.formatMessage({
        id: 'EditListingOffer3Form.offer',
      });
      const offer4Message = intl.formatMessage({
        id: 'EditListingOffer4Form.offer',
      });
      const offer5Message = intl.formatMessage({
        id: 'EditListingOffer5Form.offer',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionPlaceholder',
      });
      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionRequired',
      });

      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
        </p>
      ) : null;

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
        </p>
      ) : null;
      const currentListing = ensureListing(listing);

      const { publicData } = currentListing.attributes;

      const offer2 = publicData.offer2 == undefined ? false : true;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;
      const initialValues = { offer2 };

      const hasData = publicData.offer2;

      const [isOpen, setIsOpen] = useState(false);
      const [isOpen1, setIsOpen1] = useState(false);
      const [isOpen2, setIsOpen2] = useState(offer2);
      const [isOpen3, setIsOpen3] = useState(false);
      const [isOpen4, setIsOpen4] = useState(false);
      const buttonText = isOpen ? 'Stäng' : 'Lägg till tjänst';

      return (
        <div>
          <Form
            className={classes}
            onSubmit={handleSubmit}
            initialValues={{
              offer2: publicData.offer2,
            }}
            initialValues={initialValues}
          >
            {errorMessageCreateListingDraft}
            {errorMessageUpdateListing}
            {errorMessageShowListing}

            <FieldTextInput
              id="offerHeading1"
              name="offerHeading1"
              className={css.title}
              type="text"
              label={offerTitleMessage}
              placeholder={titlePlaceholderMessage}
              maxLength={TITLE_MAX_LENGTH}
              validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
              autoFocus
            />
            <FieldTextInput
              id="offer1"
              name="offer1"
              className={css.description}
              type="textarea"
              label={offer1Message}
              placeholder={descriptionPlaceholderMessage}
              validate={composeValidators(required(descriptionRequiredMessage))}
            />
            <SecondaryButton className={css.toggle} onClick={() => setIsOpen1(!isOpen1)}>
              {'Lägg till fler tjänster '}
            </SecondaryButton>
            {isOpen1 ? (
              <div>
                <div className={css.addBox}>
                  <FieldTextInput
                    id="offerHeading2"
                    name="offerHeading2"
                    className={css.title}
                    type="text"
                    label={offerTitleMessage}
                    placeholder={titlePlaceholderMessage}
                    maxLength={TITLE_MAX_LENGTH}
                    validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
                    autoFocus
                  />
                </div>

                <FieldTextInput
                  initialValues={initialValues}
                  id="offer2"
                  name="offer2"
                  className={css.description}
                  type="textarea"
                  label={offer2Message}
                  placeholder={descriptionPlaceholderMessage}
                  validate={composeValidators(required(descriptionRequiredMessage))}
                />
                <SecondaryButton className={css.addService} onClick={() => setIsOpen2(!isOpen2)}>
                  {buttonText} {''}
                </SecondaryButton>
              </div>
            ) : null}
            {isOpen2 ? (
              <div>
                <FieldTextInput
                  id="offerHeading3"
                  name="offerHeading3"
                  className={css.title}
                  type="text"
                  label={offerTitleMessage}
                  placeholder={titlePlaceholderMessage}
                  maxLength={TITLE_MAX_LENGTH}
                  validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
                  autoFocus
                />
                <FieldTextInput
                  id="offer3"
                  name="offer3"
                  className={css.description}
                  type="textarea"
                  label={offer3Message}
                  placeholder={descriptionPlaceholderMessage}
                  validate={composeValidators(required(descriptionRequiredMessage))}
                />
                <SecondaryButton
                  className={css.addService}
                  label="knapp5"
                  onClick={() => setIsOpen3(!isOpen3)}
                >
                  {buttonText}
                </SecondaryButton>
              </div>
            ) : null}
            {isOpen3 ? (
              <div>
                <FieldTextInput
                  id="offerHeading4"
                  name="offerHeading4"
                  className={css.title}
                  type="text"
                  label={offerTitleMessage}
                  placeholder={titlePlaceholderMessage}
                  maxLength={TITLE_MAX_LENGTH}
                  validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
                  autoFocus
                />
                <FieldTextInput
                  id="offer4"
                  name="offer4"
                  className={css.description}
                  type="textarea"
                  label={offer4Message}
                  placeholder={descriptionPlaceholderMessage}
                  validate={composeValidators(required(descriptionRequiredMessage))}
                />
                <SecondaryButton
                  className={css.addService}
                  label="knapp5"
                  onClick={() => setIsOpen4(!isOpen4)}
                >
                  {buttonText}
                </SecondaryButton>
              </div>
            ) : null}
            <div>
              {isOpen4 ? (
                <div>
                  <FieldTextInput
                    id="offerHeading5"
                    name="offerHeading5"
                    className={css.title}
                    type="text"
                    label={offerTitleMessage}
                    placeholder={titlePlaceholderMessage}
                    maxLength={TITLE_MAX_LENGTH}
                    validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
                    autoFocus
                  />
                  <FieldTextInput
                    id="offer5"
                    name="offer5"
                    className={css.description}
                    type="textarea"
                    label={offer5Message}
                    placeholder={descriptionPlaceholderMessage}
                    validate={composeValidators(required(descriptionRequiredMessage))}
                  />
                </div>
              ) : null}
            </div>
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
        </div>
      );
    }}
  />
);

EditListingPricingFormComponent.defaultProps = { className: null, fetchErrors: null };

EditListingPricingFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};

export default compose(injectIntl)(EditListingPricingFormComponent);
