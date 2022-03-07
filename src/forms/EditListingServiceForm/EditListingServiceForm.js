import React, { useState } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { ensureListing } from '../../util/data';
import { ensureOwnListing } from '../../util/data';


import { maxLength, required, composeValidators } from '../../util/validators';
import { Form, Button, SecondaryButton, FieldTextInput, Collapsible } from '../../components';

import css from './EditListingServiceForm.module.css';

const TITLE_MAX_LENGTH = 60;

const EditListingServiceFormComponent = props => (
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
        offerHeading,
        offer,
        values,
      } = formRenderProps;

      function clearFields() {
        document.getElementById('offer2').value = null;
        document.getElementById('offerHeading2').value = null;
      }

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




      const { offer1, offerHeading1 } = values || {}
      const { offer2, offerHeading2 } = values || {}
      const { offer3, offerHeading3 } = values || {}
      const { offer4, offerHeading4 } = values || {}
      const { offer5, offerHeading5 } = values || {}




      const [isOpen1, setIsOpen1] = useState(offer1 || offerHeading1 ? true : false);
      const [isOpen2, setIsOpen2] = useState(offer2 || offerHeading2 ? true : false);
      const [isOpen3, setIsOpen3] = useState(offer3 || offerHeading3 ? true : false);
      const [isOpen4, setIsOpen4] = useState(offer4 || offerHeading4 ? true : false);
      const [isOpen5, setIsOpen5] = useState(offer5 || offerHeading5 ? true : false);

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      const buttonText = <FormattedMessage id="EditListingDescriptionForm.addServiceLabel" />;
      const saveService = <FormattedMessage id="EditListingDescriptionForm.saveServiceLabel" />;

      return (
        <div className={css.serviceCard}>
          <Form className={classes} id='offer' onSubmit={handleSubmit}>
            {errorMessageCreateListingDraft}
            {errorMessageUpdateListing}
            {errorMessageShowListing}

            <div className={css.serviceAdded}>
            <FieldTextInput
              id= 'offerHeading1'
              name= 'offerHeading1'
              className={css.title}
              type="text"
              label={offerTitleMessage}
              placeholder={titlePlaceholderMessage}
              maxLength={TITLE_MAX_LENGTH}
              validate={maxLength60Message}
              autoFocus
            />
            <FieldTextInput
              id= 'offer1'
              name= 'offer1'
              className={css.description}
              type="textarea"
              label={offer1Message}
              placeholder={descriptionPlaceholderMessage}
            />
                <SecondaryButton
              className={isOpen2 ? css.hidden : css.buttonAddSecondary}
               type="submit"
                  onClick={() => setIsOpen2(!isOpen2)}
               >
               {buttonText}{' '}
              </SecondaryButton>
              </div>

      {isOpen2 ? (
        <div className={css.serviceAdded}>
            <FieldTextInput
              id= 'offerHeading2'
              name= 'offerHeading2'
              className={css.title}
              type="text"
              label={offerTitleMessage}
              placeholder={titlePlaceholderMessage}
              maxLength={TITLE_MAX_LENGTH}
              validate={maxLength60Message}
              autoFocus
            />
            <FieldTextInput
              id= 'offer2'
              name= 'offer2'
              className={css.description}
              type="textarea"
              label={offer1Message}
              placeholder={descriptionPlaceholderMessage}
            />


             <SecondaryButton
            className={isOpen2 && !isOpen3 ? css.buttonAddSecondary : css.hidden}
            type="submit"
            onClick={() => setIsOpen3(!isOpen3)}
               >
             {buttonText}{' '}
            </SecondaryButton>


            </div>
            ) : null}


            {isOpen3 ? (
              <div className={css.serviceAdded}>
            <FieldTextInput
              id= 'offerHeading3'
              name= 'offerHeading3'
              className={css.title}
              type="text"
              label={offerTitleMessage}
              placeholder={titlePlaceholderMessage}
              maxLength={TITLE_MAX_LENGTH}
              validate={maxLength60Message}
              autoFocus
            />
            <FieldTextInput
              id= 'offer3'
              name= 'offer3'
              className={css.description}
              type="textarea"
              label={offer1Message}
              placeholder={descriptionPlaceholderMessage}
            />
              <SecondaryButton
             className={isOpen3 && !isOpen4 ? css.buttonAddSecondary : css.hidden}
             type="submit"
               onClick={() => setIsOpen4(!isOpen4)}
               >
                {buttonText}{' '}
              </SecondaryButton>
              </div>
              ) : null}


             {isOpen4 ? (
              <div className={css.serviceAdded}>
            <FieldTextInput
              id= 'offerHeading4'
              name= 'offerHeading4'
              className={css.title}
              type="text"
              label={offerTitleMessage}
              placeholder={titlePlaceholderMessage}
              maxLength={TITLE_MAX_LENGTH}
              validate={maxLength60Message}
              autoFocus
            />
            <FieldTextInput
              id= 'offer4'
              name= 'offer4'
              className={css.description}
              type="textarea"
              label={offer1Message}
              placeholder={descriptionPlaceholderMessage}
            />

            <SecondaryButton
            className={isOpen4 && !isOpen5 ? css.buttonAddSecondary : css.hidden}
            type="submit"
            onClick={() => setIsOpen5(!isOpen5)}
            >
             {buttonText}{' '}
      </SecondaryButton>
      </div>
              ) : null}

            {isOpen5 ? (
              <div className={css.serviceAdded}>
            <FieldTextInput
              id= 'offerHeading5'
              name= 'offerHeading5'
              className={css.title}
              type="text"
              label={offerTitleMessage}
              placeholder={titlePlaceholderMessage}
              maxLength={TITLE_MAX_LENGTH}
              validate={maxLength60Message}
              autoFocus
            />
            <FieldTextInput
              id= 'offer5'
              name= 'offer5'
              className={css.description}
              type="textarea"
              label={offer1Message}
              placeholder={descriptionPlaceholderMessage}
            />
            </div>
              ) : null}


            <div className={css.tip}>
              {' '}
              <p className={css.tip}>
                <FormattedMessage id="EditListingServiceForm.addServiceTip" />
              </p>
            </div>
            <Button
              className={css.buttonAdd}
              type="submit"
              inProgress={submitInProgress}
              disabled={submitDisabled}
              ready={submitReady}
            >
              {saveService}
            </Button>
          </Form>
        </div>
      );
    }}
  />
);

EditListingServiceFormComponent.defaultProps = {
  className: null,
  fetchErrors: null,
  offerheading: 'offerHeading1',
  offer: 'offer1',
};

EditListingServiceFormComponent.propTypes = {
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
  offerHeading: string.isRequired,
  offer: string.isRequired,
};

export default compose(injectIntl)(EditListingServiceFormComponent);
