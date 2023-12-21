import React from 'react';
import { oneOfType, object } from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
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
  MenuItem,
  IconSpinner,
 } from '../../components';
import EditIcon from './EditIcon';
import MenuIcon from '../../components/ManageListingCard/MenuIcon';

import css from './CompanyPage.module.css';

export const ActionBarMaybe = props => {
  const { 
    isOwnListing, 
    listing, 
    editParams,
    hasClosingError,
    hasOpeningError,
    history,
    intl,
    isMenuOpen,
    actionsInProgressListingId,
    onCloseListing,
    onOpenListing,
    onToggleMenu,
   } = props;
  const state = listing.attributes.state;
  const isPendingApproval = state === LISTING_STATE_PENDING_APPROVAL;
  const isClosed = state === LISTING_STATE_CLOSED;
  const isDraft = state === LISTING_STATE_DRAFT;
  const isPrivateListing = listing?.attributes?.publicData?.profileType === "privatePerson";

  if (isOwnListing) {
    let ownListingTextTranslationId = 'ListingPage.ownCompany';

    if (isPendingApproval) {
      ownListingTextTranslationId = isPrivateListing ? 'ListingPage.ownListingPendingApproval' : 'ListingPage.ownCompanyPendingApproval';
    } else if (isClosed) {
      ownListingTextTranslationId = isPrivateListing ? 'ListingPage.ownClosedListing' : 'ListingPage.ownClosedCompany';
    } else if (isDraft) {
      ownListingTextTranslationId = isPrivateListing ? 'ListingPage.ownListingDraft' : 'ListingPage.ownCompanyDraft';
    }

    const finishMessage = isPrivateListing ? 'ListingPage.finishListing' : 'ListingPage.finishCompany';
    const openMessage = isPrivateListing ? 'ListingPage.openListing' : 'ListingPage.openCompany';
    const editMessage = isPrivateListing ?'ListingPage.editListing' :  'ListingPage.editCompany';
    const closeMessage = isPrivateListing ? 'ListingPage.closeListing' : 'ListingPage.closeCompany';
    const message = isDraft ? finishMessage : editMessage;

    const ownListingTextClasses = classNames(css.ownListingText, {
      [css.ownListingTextPendingApproval]: isPendingApproval,
    });
    const currentListing = ensureOwnListing(listing);
    const { history, location } = props;
    const { pathname, search, state } = location;
    const MENU_CONTENT_OFFSET = -12;

    const menuItemClasses = classNames(css.menuItem, {
      [css.menuItemDisabled]: !!actionsInProgressListingId,
    });

    return (
      <div className={isClosed ? css.actionBarListingClosed : css.actionBar}>
        <p className={actionsInProgressListingId ? '...' : ownListingTextClasses}>
          <FormattedMessage id={ownListingTextTranslationId} />
        </p>
        <Menu
              className={classNames(css.menu, [css.cardIsOpen])}
              contentPlacementOffset={MENU_CONTENT_OFFSET}
              contentPosition="left"
              useArrow={false}
              onToggleActive={isOpen => {
                const listingOpen = isOpen ? currentListing : null;
                onToggleMenu(listingOpen);
              }}
              isOpen={isMenuOpen}
            >
              <MenuLabel className={css.menuLabel} isOpenClassName={css.listingMenuIsOpen}>
                <div className={css.iconWrapper}>
                  <MenuIcon className={css.menuIcon} isActive={isMenuOpen} />
                  <FormattedMessage id="CompanyPage.manageOptions" />
                </div>
              </MenuLabel>
              <MenuContent rootClassName={css.menuContent}>
              <MenuItem key="edit-listing">
                <NamedLink className={css.menuItemEdit} name="EditListingPage" params={editParams}>
                  <FormattedMessage id={message} />
                </NamedLink>
                </MenuItem>
                <MenuItem key="close-listing">
                  <InlineTextButton
                    rootClassName={menuItemClasses}
                    onClick={event => {
                      event.preventDefault();
                      event.stopPropagation();
                      if (isClosed && !actionsInProgressListingId) {
                        onToggleMenu(null);
                        onOpenListing(currentListing.id)
                        .then(window.location.reload());
                      }
                      else if (!actionsInProgressListingId) {
                        onToggleMenu(null);
                        onCloseListing(currentListing.id.uuid)
                        .then(window.location.reload());
                      }
                    }}
                  >
                    <FormattedMessage id={isClosed ? openMessage : closeMessage} />
                  </InlineTextButton>
                </MenuItem>
              </MenuContent>
            </Menu>
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

ActionBarMaybe.defaultProps = {
  className: null,
  rootClassName: null,
  actionsInProgressListingId: null,
  renderSizes: null,
};

const { bool, func, shape, string } = PropTypes;

ActionBarMaybe.propTypes = {
  isOwnListing: bool.isRequired,
  listing: oneOfType([propTypes.listing, propTypes.ownListing]).isRequired,
  editParams: object.isRequired,
  className: string,
  rootClassName: string,
  hasClosingError: bool.isRequired,
  hasOpeningError: bool.isRequired,
  intl: intlShape.isRequired,
  listing: propTypes.ownListing.isRequired,
  isMenuOpen: bool.isRequired,
  actionsInProgressListingId: shape({ uuid: string.isRequired }),
  onCloseListing: func.isRequired,
  onOpenListing: func.isRequired,
  onToggleMenu: func.isRequired,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

ActionBarMaybe.displayName = 'ActionBarMaybe';

export default compose(
  withRouter,
  injectIntl
)(ActionBarMaybe);
