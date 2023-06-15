import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditStayLocationForm } from '../../forms';

import css from './EditStayLocationPanel.module.css';

class EditStayLocationPanel extends Component {
  constructor(props) {
    super(props);

    this.getInitialValues = this.getInitialValues.bind(this);

    this.state = {
      initialValues: this.getInitialValues(),
    };
  }

  getInitialValues() {
    const { listing } = this.props;
    const currentListing = ensureOwnListing(listing);
    const { title, publicData, geolocation } = currentListing.attributes;

    const { category, listingCategory, contactNumber } = publicData || {};
    const locationFieldsPresent = publicData && publicData.location && publicData.location.address && geolocation;
    const location = publicData && publicData.location ? publicData.location : {};
    const { address } = location;

    return {
      title,
      category,
      contactNumber,
      listingCategory,
      location: locationFieldsPresent
        ? {
            search: address,
            selectedPlace: { address, origin: geolocation },
          }
        : null,
    };
  }

  render() {
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
      categoryOptions,
    } = this.props;

    const classes = classNames(rootClassName || css.root, className);
    const currentListing = ensureOwnListing(listing);

    const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
    const panelTitle = isPublished ? (
      <FormattedMessage
        id="EditStayLocationPanel.title"
        values={{ listingTitle: <ListingLink listing={listing} /> }}
      />
    ) : (
      <FormattedMessage id="EditStayLocationPanel.createListingTitle" />
    );

    return (
      <div className={classes}>
        <h1 className={css.title}>{panelTitle}</h1>
        <EditStayLocationForm
          className={css.form}
          initialValues={this.state.initialValues}
          saveActionMsg={submitButtonText}
          onSubmit={values => {
            const { title, category, contactNumber, location } = values;
            const {
              selectedPlace: { address, origin },
            } = location;
            const locationName = address.split(',')[0].trim(); // Get the location name up to the first comma
            const updateValues = {
              title: title || locationName, // Use locationName as title if title is not set
              publicData: {
                category,
                listingCategory: currentListing.attributes.publicData.listingCategory,
                contactNumber,
                location: { address },
              },
              geolocation: origin,
            };

            this.setState({
              initialValues: {
                title,
                category,
                contactNumber,
                location: { search: address, selectedPlace: { address, origin } },
              },
            });

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
    );
  }
}

const { func, object, string, bool } = PropTypes;

EditStayLocationPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditStayLocationPanel.propTypes = {
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
  categoryOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default EditStayLocationPanel;
