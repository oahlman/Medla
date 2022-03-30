import React from 'react';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import PropTypes from 'prop-types';
import { ResponsiveImage, Modal, ImageCarousel } from '../../components';
import ActionBarMaybe from './ActionBarMaybe';

import css from './CompanyPage.module.css';

const SectionImages = props => {
  const {
    title,
    listing,
    isOwnListing,
    editParams,
    handleViewPhotosClick,
    imageCarouselOpen,
    onImageCarouselClose,
    onManageDisableScrolling,
    hasClosingError,
    hasOpeningError,
    history,
    intl,
    isMenuOpen,
    actionsInProgressListingId,
    onCloseListing,
    onOpenListing,
    onToggleMenu,
    openingListing,
    closingListing,
    openingErrorListingId,
    closingErrorListingId,
  } = props;

  const hasImages = listing.images && listing.images.length > 0;
  const firstImage = hasImages ? listing.images[0] : null;

  // Action bar is wrapped with a div that prevents the click events
  // to the parent that would otherwise open the image carousel
  const actionBar = listing.id ? (
    <div onClick={e => e.stopPropagation()}>
      <ActionBarMaybe 
        isOwnListing={isOwnListing} 
        listing={listing} 
        editParams={editParams}
        className={css.listingCard}
        key={listing.id.uuid}
        listing={listing}
        onCloseListing={onCloseListing}
        onOpenListing={onOpenListing}
        isMenuOpen={isMenuOpen}
        actionsInProgressListingId={actionsInProgressListingId}
        onToggleMenu={onToggleMenu}
        hasOpeningError={hasOpeningError}
        hasClosingError={hasClosingError} />
    </div>
  ) : null;

  const viewPhotosButton = hasImages ? (
    <button className={css.viewPhotos} onClick={handleViewPhotosClick}>
      <FormattedMessage
        id="ListingPage.viewImagesButton"
        values={{ count: listing.images.length }}
      />
    </button>
  ) : null;

  return (
    <div className={css.sectionImages}>
      <div className={css.threeToTwoWrapper}>
        <div className={css.aspectWrapper} onClick={handleViewPhotosClick}>
          {actionBar}
          <ResponsiveImage
            rootClassName={css.rootForImage}
            alt={title}
            image={firstImage}
            variants={[
              'landscape-crop',
              'landscape-crop2x',
              'landscape-crop4x',
              'landscape-crop6x',
            ]}
          />
          {viewPhotosButton}
        </div>
      </div>
      <Modal
        id="ListingPage.imageCarousel"
        scrollLayerClassName={css.carouselModalScrollLayer}
        containerClassName={css.carouselModalContainer}
        lightCloseButton
        isOpen={imageCarouselOpen}
        onClose={onImageCarouselClose}
        usePortal
        onManageDisableScrolling={onManageDisableScrolling}
      >
        <ImageCarousel images={listing.images} />
      </Modal>
    </div>
  );
};

SectionImages.defaultProps = {
  className: null,
  rootClassName: null,
  actionsInProgressListingId: null,
};

const { bool, func, shape, string } = PropTypes;

SectionImages.propTypes = {
  className: string,
  rootClassName: string,
  hasClosingError: bool.isRequired,
  hasOpeningError: bool.isRequired,
  intl: intlShape.isRequired,
  isMenuOpen: bool.isRequired,
  actionsInProgressListingId: shape({ uuid: string.isRequired }),
  onCloseListing: func.isRequired,
  onOpenListing: func.isRequired,
  onToggleMenu: func.isRequired,
};

export default SectionImages;
