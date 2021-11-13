import React from 'react';
import { bool, oneOfType, object } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import {
  LISTING_STATE_PENDING_APPROVAL,
  LISTING_STATE_CLOSED,
  LISTING_STATE_DRAFT,
  propTypes,
} from '../../util/types';
import { NamedLink } from '../../components';
import EditIcon from './EditIcon';

import css from './CompanyPage.module.css';

export const JobActionBarMaybe = props => {
  const { isOwnListing, listing, editParams } = props;
  const state = listing.attributes.state;
  const isPendingApproval = state === LISTING_STATE_PENDING_APPROVAL;
  const isClosed = state === LISTING_STATE_CLOSED;
  const isDraft = state === LISTING_STATE_DRAFT;

  if (isOwnListing) {
    let ownListingTextTranslationId = 'ListingPage.ownJob';

    if (isPendingApproval) {
      ownListingTextTranslationId = 'ListingPage.ownJobPendingApproval';
    } else if (isClosed) {
      ownListingTextTranslationId = 'ListingPage.ownClosedJob';
    } else if (isDraft) {
      ownListingTextTranslationId = 'ListingPage.ownJobDraft';
    }

    const message = isDraft ? 'ListingPage.finishJob' : 'ListingPage.editJob';

    const ownListingTextClasses = classNames(css.ownListingText, {
      [css.ownListingTextPendingApproval]: isPendingApproval,
    });

    return (
      <div className={css.actionBar}>
        <p className={ownListingTextClasses}>
          <FormattedMessage id={ownListingTextTranslationId} />
        </p>
        <NamedLink className={css.editListingLink} name="EditListingPage" params={editParams}>
          <EditIcon className={css.editIcon} />
          <FormattedMessage id={message} />
        </NamedLink>
      </div>
    );
  } else if (isClosed) {
    return (
      <div className={css.actionBar}>
        <p className={css.closedListingText}>
          <FormattedMessage id="ListingPage.closedListing" />
        </p>
      </div>
    );
  }
  return null;
};

JobActionBarMaybe.propTypes = {
  isOwnListing: bool.isRequired,
  listing: oneOfType([propTypes.listing, propTypes.ownListing]).isRequired,
  editParams: object.isRequired,
};

JobActionBarMaybe.displayName = 'JobActionBarMaybe';

export default JobActionBarMaybe;
