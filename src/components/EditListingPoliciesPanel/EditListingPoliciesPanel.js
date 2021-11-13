import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { findOptionsForSelectFilter } from '../../util/search';
import { ListingLink } from '../../components';
import { EditCompanyCompetencyForm } from '../../forms'
import config from '../../config';

import css from './EditListingPoliciesPanel.module.css';

const EditListingPoliciesPanel = props => {
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
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;
  const isJob = publicData.listingCategory !== 'company';
  const listingCategory = isJob ? 'job' : 'company';

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingPoliciesPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingPoliciesPanel.createListingTitle" />
  );

  const categoryOptions = findOptionsForSelectFilter('category', config.custom.filters);

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditCompanyCompetencyForm
        className={css.form}
        initialValues={{ category: publicData.category }}
        saveActionMsg={submitButtonText}
        onSubmit={values => {
          const { category } = values;
          const updateValues = {
            publicData: { 
              category, 
              listingCategory: listingCategory,
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
  );
};

const { func, object, string, bool } = PropTypes;

EditListingPoliciesPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingPoliciesPanel.propTypes = {
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

export default EditListingPoliciesPanel;
