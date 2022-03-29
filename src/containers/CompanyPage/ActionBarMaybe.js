import React from 'react';
import { bool, oneOfType, object, func, shape, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import {
  LISTING_STATE_PENDING_APPROVAL,
  LISTING_STATE_CLOSED,
  LISTING_STATE_DRAFT,
  propTypes,
} from '../../util/types';
import { 
  NamedLink, 
  InlineTextButton,  
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem 
} from '../../components';
import EditIcon from './EditIcon';

import css from './CompanyPage.module.css';

export const ActionBarMaybe = props => {
  const { isOwnListing, listing, editParams, actionsInProgressListingId, onToggleMenu, onCloseListing, onOpenListing } = props;
  const state = listing.attributes.state;
  const isPendingApproval = state === LISTING_STATE_PENDING_APPROVAL;
  const isClosed = state === LISTING_STATE_CLOSED;
  const isDraft = state === LISTING_STATE_DRAFT;
  const MENU_CONTENT_OFFSET = -12;

  if (isOwnListing) {
    let ownListingTextTranslationId = 'ListingPage.ownCompany';
    let ownListingOpenCloseText = 'CompanyPage.closeListing';
    let ownListingOpenClose = (<InlineTextButton
      className={css.editListingLink}
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
        if (!actionsInProgressListingId) {
          onToggleMenu(null);
          onCloseListing(listing.id);
        }
      }}
    >
      <EditIcon className={css.editIcon} />
      <FormattedMessage id={ownListingOpenCloseText} />
    </InlineTextButton>);

    if (isPendingApproval) {
      ownListingTextTranslationId = 'ListingPage.ownCompanyPendingApproval';
    } else if (isClosed) {
      ownListingTextTranslationId = 'ListingPage.ownClosedCompany';
      ownListingOpenCloseText = 'CompanyPage.openListing';
      ownListingOpenClose = (<InlineTextButton
        className={css.editListingLink}
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          if (!actionsInProgressListingId) {
            onOpenListing(listing.id);
          }
        }}
      >
        <EditIcon className={css.editIcon} />
        <FormattedMessage id={ownListingOpenCloseText} />
      </InlineTextButton>);
    } else if (isDraft) {
      ownListingTextTranslationId = 'ListingPage.ownLCompanyDraft';
    }

    const message = isDraft ? 'ListingPage.finishCompany' : 'ListingPage.editCompany';

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
        {ownListingOpenClose}
      </div>
    );
  } else if (isClosed) {
    return (
      <div className={css.actionBar}>
        <p className={css.closedListingText}>
          <FormattedMessage id="CompanyPage.closedListing" />
        </p>
      </div>
    );
  }
  return null;
};

ActionBarMaybe.propTypes = {
  isOwnListing: bool.isRequired,
  listing: oneOfType([propTypes.listing, propTypes.ownListing]).isRequired,
  editParams: object.isRequired,
  actionsInProgressListingId: shape({ uuid: string.isRequired }),
  onCloseListing: func.isRequired,
  onOpenListing: func.isRequired,
  onToggleMenu: func.isRequired,
};

ActionBarMaybe.displayName = 'ActionBarMaybe';

export default ActionBarMaybe;
