import React, { Component } from 'react';
import { array, arrayOf, bool, func, shape, string, oneOf } from 'prop-types';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { LINE_ITEM_DAY, LINE_ITEM_NIGHT, propTypes } from '../../util/types';
import { ensureListing, ensureUser } from '../../util/data';
import { richText } from '../../util/richText';
import { createSlug } from '../../util/urlHelpers';
import config from '../../config';
import { NamedLink, ResponsiveImage, AvatarLarge } from '../../components';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { manageDisableScrolling, isScrollingDisabled } from '../../ducks/UI.duck';
import {
  LISTING_PAGE_DRAFT_VARIANT,
  LISTING_PAGE_PENDING_APPROVAL_VARIANT,
} from '../../util/urlHelpers';
import { findOptionsForSelectFilter } from '../../util/search';
import { PropertyGroup } from '..';



import css from './CompanyCard.module.css';

const MIN_LENGTH_FOR_LONG_WORDS = 10;

class ListingImage extends Component {
  render() {
    return <ResponsiveImage {...this.props} />;
  }
}
const LazyImage = lazyLoadWithDimensions(ListingImage, { loadAfterInitialRendering: 3000 });

export const CompanyCardComponent = props => {



  const { className, rootClassName, intl, listing, renderSizes, setActiveListing, rawParams, option, publicData,  filterConfig, label, twoColumns } = props;
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const id = currentListing.id.uuid;
  const { title = '', price, description = '', } = currentListing.attributes;
  const slug = createSlug(title);
  const author = ensureUser(listing.author);
  const listingAddress = currentListing.attributes.publicData.location && currentListing.attributes.publicData.location.address ? currentListing.attributes.publicData.location.address : null;
  const companyAddress = currentListing.attributes.publicData && currentListing.attributes.publicData.companyAdress ? currentListing.attributes.publicData.companyAdress : null;
  const address = listingAddress !== null ? listingAddress : companyAddress;
  const displayAddress = address !== null ? address : <FormattedMessage id="ListingCard.NoAddress" />;
  const categories = currentListing.attributes.publicData.category ? currentListing.attributes.publicData.category : [];

  const tagsMaybe = categories && categories.length < 3 ? categories : categories.slice (0,3);
  let extraTags =  categories && categories.length > 3 ? `+${categories.length - 3}`: [];
  const firstImage =
   currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null;
  const categoryOptions = findOptionsForSelectFilter('category', filterConfig);
  let propertyGroupTags =(
      <PropertyGroup
       id="CompanyCard.category"
       options={categoryOptions}
       publicData={publicData}
       selectedOptions = {tagsMaybe}
  />
      );
  const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const descriptionTrimmed = description && description.trim();
  const descriptionPreview = description && descriptionTrimmed.length > 400 ? `${descriptionTrimmed.substring(0, 400).trim()}…` : descriptionTrimmed;

  const unitTranslationKey = isNightly
    ? 'ListingCard.perNight'
    : isDaily
    ? 'ListingCard.perDay'
    : 'ListingCard.perUnit';

  return (
    <NamedLink className={classes} name="CompanyPage" params={{ id, slug }}>
      <div
        className={css.threeToTwoWrapper}
        onMouseEnter={() => setActiveListing(currentListing.id)}
        onMouseLeave={() => setActiveListing(null)}
      >
        <div className={css.aspectWrapper}>
        <AvatarLarge
            className={css.avatar}
            disableProfileLink={true}
            user={currentListing.author}
            renderSizes={renderSizes}
          />
          <div className={css.info}>
          <div className={css.mainInfo}>
            <div className={css.title}>
              {richText(title, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
                longWordClass: css.longWord,
              })}
            </div>
            <div className={css.address}>
              {richText(displayAddress, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
                longWordClass: css.longWord,
              })}
            </div>
          </div>
          <div className={css.description}>
              {descriptionPreview}
                 </div>

                 <div className={css.containerTags}>
              {propertyGroupTags}
              <span className={categories.length > 3 ? css.extraTags : css.hidden} >
                 {extraTags}
              </span>
                 </div>
        </div>
          <LazyImage
            rootClassName={css.rootForImage}
            alt={title}
            image={firstImage}
            variants={['landscape-crop', 'landscape-crop2x']}
            sizes={renderSizes}
          />
        </div>
      </div>
    </NamedLink>
  );
};

CompanyCardComponent.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
  setActiveListing: () => null,
  unitType: config.bookingUnitType,
  currentUser: null,
  enquiryModalOpenForListingId: null,
  showListingError: null,
  reviews: [],
  fetchReviewsError: null,
  timeSlots: null,
  fetchTimeSlotsError: null,
  sendEnquiryError: null,
  filterConfig: config.custom.filters,
  lineItems: null,
  fetchLineItemsError: null,

};

CompanyCardComponent.propTypes = {
  className: string,
  rootClassName: string,
  intl: intlShape.isRequired,
  listing: propTypes.listing.isRequired,


    // from withRouter
    history: shape({
      push: func.isRequired,
    }).isRequired,
    location: shape({
      search: string,
    }).isRequired,

    unitType: propTypes.bookingUnitType,
    // from injectIntl
    intl: intlShape.isRequired,

    params: shape({
      id: string.isRequired,
      slug: string,
      variant: oneOf([LISTING_PAGE_DRAFT_VARIANT, LISTING_PAGE_PENDING_APPROVAL_VARIANT]),
    }).isRequired,

    isAuthenticated: bool.isRequired,
    currentUser: propTypes.currentUser,
    getListing: func.isRequired,
    getOwnListing: func.isRequired,
    onManageDisableScrolling: func.isRequired,
    scrollingDisabled: bool.isRequired,
    enquiryModalOpenForListingId: string,
    showListingError: propTypes.error,
    callSetInitialValues: func.isRequired,
    reviews: arrayOf(propTypes.review),
    fetchReviewsError: propTypes.error,
    timeSlots: arrayOf(propTypes.timeSlot),
    fetchTimeSlotsError: propTypes.error,
    sendEnquiryInProgress: bool.isRequired,
    sendEnquiryError: propTypes.error,
    onSendEnquiry: func.isRequired,
    onInitializeCardPaymentData: func.isRequired,
    filterConfig: array,
    onFetchTransactionLineItems: func.isRequired,
    lineItems: array,
    fetchLineItemsInProgress: bool.isRequired,
    fetchLineItemsError: propTypes.error,

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func,
};

const mapStateToProps = state => {
  const { isAuthenticated } = state.Auth;
  const {
    showListingError,
    reviews,
    fetchReviewsError,
    timeSlots,
    fetchTimeSlotsError,
    sendEnquiryInProgress,
    sendEnquiryError,
    lineItems,
    fetchLineItemsInProgress,
    fetchLineItemsError,
    enquiryModalOpenForListingId,
  } = state.ListingPage;
  const { currentUser } = state.user;

  const getListing = id => {
    const ref = { id, type: 'listing' };
    const listings = getMarketplaceEntities(state, [ref]);
    return listings.length === 1 ? listings[0] : null;
  };

  const getOwnListing = id => {
    const ref = { id, type: 'ownListing' };
    const listings = getMarketplaceEntities(state, [ref]);
    return listings.length === 1 ? listings[0] : null;
  };

  return {
    isAuthenticated,
    currentUser,
    getListing,
    getOwnListing,
    scrollingDisabled: isScrollingDisabled(state),
    enquiryModalOpenForListingId,
    showListingError,
    reviews,
    fetchReviewsError,
    timeSlots,
    fetchTimeSlotsError,
    lineItems,
    fetchLineItemsInProgress,
    fetchLineItemsError,
    sendEnquiryInProgress,
    sendEnquiryError,
  };
};

const mapDispatchToProps = dispatch => ({
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
  callSetInitialValues: (setInitialValues, values, saveToSessionStorage) =>
    dispatch(setInitialValues(values, saveToSessionStorage)),
  onFetchTransactionLineItems: (bookingData, listingId, isOwnListing) =>
    dispatch(fetchTransactionLineItems(bookingData, listingId, isOwnListing)),
  onSendEnquiry: (listingId, message) => dispatch(sendEnquiry(listingId, message)),
  onInitializeCardPaymentData: () => dispatch(initializeCardPaymentData()),
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const CompanyCard = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(CompanyCardComponent);


export default injectIntl(CompanyCard);
