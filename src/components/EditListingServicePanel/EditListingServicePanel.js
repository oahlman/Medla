import React, { useState } from 'react';
import { bool, func, object, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
import { findOptionsForSelectFilter } from '../../util/search';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ListingLink } from '..';
import { EditListingServiceForm} from '../../forms';
import config from '../../config';
import { Button, SecondaryButton, Form } from '..';

import css from './EditListingServicePanel.module.css';

const EditListingServicePanel = props => {
  const {
    className,
    rootClassName,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
    updated,
    invalid,
    saveActionMsg,
    handleSubmit,
    onReset,
  } = props;
  const submitReady = (updated && pristine) || ready;
  const submitInProgress = updateInProgress;

  function clearFields1() {
    document.getElementById('offer1').value = null;
    document.getElementById('listingService1').value = null;
  }

  function clearFields() {
    document.getElementById('offer1').value = null;
    document.getElementById('listingService1').value = null;
  }

  const submitDisabled = invalid || disabled || submitInProgress;
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;
  const hasData1 = publicData.offer1;
  const hasData2 = publicData.offer2;
  const hasData3 = publicData.offer3;
  const hasData4 = publicData.offer4;
  const hasData5 = publicData.offer5;

  const { description, title } = currentListing.attributes;

  const [isOpen1, setIsOpen1] = useState(hasData1 ? true : false);
  const [isOpen2, setIsOpen2] = useState(hasData2 ? true : false);
  const [isOpen3, setIsOpen3] = useState(hasData3 ? true : false);
  const [isOpen4, setIsOpen4] = useState(hasData4 ? true : false);
  const [isOpen5, setIsOpen5] = useState(hasData5 ? true : false);
  const buttonText3 = 'Lägg till tjänst';

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingServicePanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingDescriptionPanel.createListingTitle" />
  );
  const categoryOptions = findOptionsForSelectFilter('category', config.custom.filters);

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <div className={css.serviceCard}>
        <EditListingServiceForm
          offerHeading="offerHeading1"
          offer="offer1"
          initialValues={{
            offer1: publicData.offer1,
            offer2: publicData.offer2,
            offer3: publicData.offer3,
            offer4: publicData.offer4,
            offer5: publicData.offer5,

            offerHeading1: publicData.offerHeading1,
            offerHeading2: publicData.offerHeading2,
            offerHeading3: publicData.offerHeading3,
            offerHeading4: publicData.offerHeading4,
            offerHeading5: publicData.offerHeading5,


          }}
          saveActionMsg={submitButtonText}
          onSubmit={values => {
            const { offer1, offerHeading1, offer2, offerHeading2, offer3, offerHeading3, offer4, offerHeading4, offer5, offerHeading5 } = values;
            const updateValues = {
              publicData: {
                offer1,
                offerHeading1,
                offer2,
                offerHeading2,
                offer3,
                offerHeading3,
                offer4,
                offerHeading4,
                offer5,
                offerHeading5,
              },
            };
            onSubmit(updateValues);
          }}
          onChange={onChange}
          disabled={disabled}
          ready={ready}
          updated={panelUpdated}
          updateInProgress={updateInProgress}
          fetchErrors={errors}
          categories={categoryOptions}
        />
      </div>

    </div>
  );
};

EditListingServicePanel.defaultProps = {
  className: null,
  rootClassName: null,
  errors: null,
  listing: null,
};

EditListingServicePanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,

  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingServicePanel;
