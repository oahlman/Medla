import React, { Component, useState } from 'react';
import { array, arrayOf, bool, func, shape, string, oneOf } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import config from '../../config';
import moment from 'moment';
import routeConfiguration from '../../routeConfiguration';
import { findOptionsForSelectFilter } from '../../util/search';
import { LISTING_STATE_PENDING_APPROVAL, LISTING_STATE_CLOSED, propTypes, LISTING_STATE_PUBLISHED } from '../../util/types';
import { types as sdkTypes } from '../../util/sdkLoader';
import {
  LISTING_PAGE_DRAFT_VARIANT,
  LISTING_PAGE_PENDING_APPROVAL_VARIANT,
  LISTING_PAGE_PARAM_TYPE_DRAFT,
  LISTING_PAGE_PARAM_TYPE_EDIT,
  createSlug,
} from '../../util/urlHelpers';
import { formatMoney } from '../../util/currency';
import { createResourceLocatorString, findRouteByRouteName } from '../../util/routes';
import {
  ensureListing,
  ensureOwnListing,
  ensureUser,
  userCompanyNameAsString,
} from '../../util/data';
import { richText } from '../../util/richText';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { manageDisableScrolling, isScrollingDisabled } from '../../ducks/UI.duck';
import { initializeCardPaymentData } from '../../ducks/stripe.duck.js';
import {
  Page,
  NamedLink,
  NamedRedirect,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  BookingPanel,
  ContactCardForCompany,
  Collapsible,
  Modal,
  Button,
  ContactLinkJob,
  ContactCardForJob,
  ExternalLink,
  MenuLabel,
  CollapsibleProjects,
  InlineTextButton,
} from '../../components';
import Convert from '../../components/Translate/Convert';

import { EnquiryForm } from '../../forms';
import { TopbarContainer, NotFoundPage } from '../../containers';

import { sendEnquiry, fetchTransactionLineItems, setInitialValues, closeListing, openListing } from './CompanyPage.duck';
import ActionBarMaybe from '../ListingPage/ActionBarMaybe';
import SectionImages from './SectionImages';
import SectionAvatar from './SectionAvatar';
import SectionHeading from './SectionHeading';
import SectionDescriptionMaybe from './SectionDescriptionMaybe';
import SectionServicesMaybe from './SectionServicesMaybe';
import SectionRulesMaybe from './SectionRulesMaybe';
import SectionMapMaybe from './SectionMapMaybe';
import { IoFlagOutline, IoLanguageOutline } from "react-icons/io5";



import css from './CompanyPage.module.css';
import { MdNavigation } from 'react-icons/md';

const MIN_LENGTH_FOR_LONG_WORDS_IN_TITLE = 16;

const { UUID } = sdkTypes;

const priceData = (price, intl) => {
  if (price && price.currency === config.currency) {
    const formattedPrice = formatMoney(intl, price);
    return { formattedPrice, priceTitle: formattedPrice };
  } else if (price) {
    return {
      formattedPrice: `(${price.currency})`,
      priceTitle: `Unsupported currency (${price.currency})`,
    };
  }
  return {};
};

const categoryLabel = (categories, key) => {
  const cat = categories.find(c => c.key === key);
  return cat ? cat.label : key;
};

export class CompanyPageComponent extends Component {
  constructor(props) {
    super(props);
    const { enquiryModalOpenForListingId, params } = props;
    this.state = {
      pageClassNames: [],
      imageCarouselOpen: false,
      viewOriginal: true,
      enquiryModalOpen: enquiryModalOpenForListingId === params.id,
      listingMenuOpen: null,
      listingOpen: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onContactUser = this.onContactUser.bind(this);
    this.onSubmitEnquiry = this.onSubmitEnquiry.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
  }

  handleSubmit(values) {
    const {
      history,
      getListing,
      params,
      callSetInitialValues,
      onInitializeCardPaymentData,
    } = this.props;
    const listingId = new UUID(params.id);
    const listing = getListing(listingId);

    const { bookingDates, ...bookingData } = values;
    const now = moment();
    const today = now.startOf('day').toDate();
    const tomorrow = now
      .startOf('day')
      .add(1, 'days')
      .toDate();

    const initialValues = {
      listing,
      bookingData,
      bookingDates: {
        bookingStart: today,
        bookingEnd: tomorrow,
      },
      confirmPaymentError: null,
    };

    const saveToSessionStorage = !this.props.currentUser;

    const routes = routeConfiguration();
    // Customize checkout page state with current listing and selected bookingDates
    const { setInitialValues } = findRouteByRouteName('CheckoutPage', routes);

    callSetInitialValues(setInitialValues, initialValues, saveToSessionStorage);

    // Clear previous Stripe errors from store if there is any
    onInitializeCardPaymentData();

    // Redirect to CheckoutPage
    history.push(
      createResourceLocatorString(
        'CheckoutPage',
        routes,
        { id: listing.id.uuid, slug: createSlug(listing.attributes.title) },
        {}
      )
    );
  }

  onToggleMenu(listing) {
    this.setState({ listingMenuOpen: listing });
  }

  onContactUser() {
    const { currentUser, history, callSetInitialValues, params, location } = this.props;

    if (!currentUser) {
      const state = { from: `${location.pathname}${location.search}${location.hash}` };

      // We need to log in before showing the modal, but first we need to ensure
      // that modal does open when user is redirected back to this listingpage
      callSetInitialValues(setInitialValues, { enquiryModalOpenForListingId: params.id });

      // signup and return back to listingPage.
      history.push(createResourceLocatorString('SignupPage', routeConfiguration(), {}, {}), state);
    } else {
      this.setState({ enquiryModalOpen: true });
    }
  }

  onSubmitEnquiry(values) {
    const { history, params, onSendEnquiry } = this.props;
    const routes = routeConfiguration();
    const listingId = new UUID(params.id);
    const { message } = values;

    onSendEnquiry(listingId, message.trim())
      .then(txId => {
        this.setState({ enquiryModalOpen: false });

        // Redirect to OrderDetailsPage
        history.push(
          createResourceLocatorString('OrderDetailsPage', routes, { id: txId.uuid }, {})
        );
      })
      .catch(() => {
        // Ignore, error handling in duck file
      });
  }

  render() {
    const {
      unitType,
      isAuthenticated,
      currentUser,
      getListing,
      getOwnListing,
      intl,
      onManageDisableScrolling,
      params: rawParams,
      location,
      scrollingDisabled,
      showListingError,
      reviews,
      fetchReviewsError,
      sendEnquiryInProgress,
      sendEnquiryError,
      timeSlots,
      fetchTimeSlotsError,
      filterConfig,
      onFetchTransactionLineItems,
      lineItems,
      fetchLineItemsInProgress,
      fetchLineItemsError,
      onContactUser,
      closingListing,
      closingListingError,
      onCloseListing,
      onOpenListing,
      openingListing,
      openingListingError,
    } = this.props;

    const listingId = new UUID(rawParams.id);
    const isPendingApprovalVariant = rawParams.variant === LISTING_PAGE_PENDING_APPROVAL_VARIANT;
    const isDraftVariant = rawParams.variant === LISTING_PAGE_DRAFT_VARIANT;
    const currentListing =
      isPendingApprovalVariant || isDraftVariant
        ? ensureOwnListing(getOwnListing(listingId))
        : ensureListing(getListing(listingId));

    const listingSlug = rawParams.slug || createSlug(currentListing.attributes.title || '');
    const params = { slug: listingSlug, ...rawParams };

    const { state } = currentListing.attributes;
    const isClosed = state === LISTING_STATE_CLOSED;

    const listingType = isDraftVariant
      ? LISTING_PAGE_PARAM_TYPE_DRAFT
      : LISTING_PAGE_PARAM_TYPE_EDIT;
    const listingTab = isDraftVariant ? 'photos' : 'description';
    const isApproved =
      currentListing.id && currentListing.attributes.state !== LISTING_STATE_PENDING_APPROVAL;

    const pendingIsApproved = isPendingApprovalVariant && isApproved;

    // If a /pending-approval URL is shared, the UI requires
    // authentication and attempts to fetch the listing from own
    // listings. This will fail with 403 Forbidden if the author is
    // another user. We use this information to try to fetch the
    // public listing.
    const pendingOtherUsersListing =
      (isPendingApprovalVariant || isDraftVariant) &&
      showListingError &&
      showListingError.status === 403;
    const shouldShowPublicCompanyPage = pendingIsApproved || pendingOtherUsersListing;

    if (shouldShowPublicCompanyPage) {
      return <NamedRedirect name="CompanyPage" params={params} search={location.search} />;
    }

    const listingMenuOpen = this.state.listingMenuOpen;
    const closingErrorListingId = !!closingListingError && closingListingError.listingId;
    const openingErrorListingId = !!openingListingError && openingListingError.listingId;

    const {
      description = '',
      geolocation = null,
      price = '',
      title = '',
      publicData,
    } = currentListing.attributes;
    const languageLoaded = typeof navigator !== 'undefined' ? navigator.language : null;
    const foreignLanguage = languageLoaded && languageLoaded !== 'sv' ? true : false;

    const offerHeading1 = publicData.offerHeading1;
    const offerHeading2 = publicData.offerHeading2;
    const offerHeading3 = publicData.offerHeading3;
    const offerHeading4 = publicData.offerHeading4;
    const offerHeading5 = publicData.offerHeading5;

    const offer1 = publicData.offer1;
    const offer2 = publicData.offer2;
    const offer3 = publicData.offer3;
    const offer4 = publicData.offer4;
    const offer5 = publicData.offer5;

    let descriptionTranslated = '';

    let offerHeading1Translated = '';
    let offerHeading2Translated = '';
    let offerHeading3Translated = '';
    let offerHeading4Translated = '';
    let offerHeading5Translated = '';

    let offer1Translated = '';
    let offer2Translated = '';
    let offer3Translated = '';
    let offer4Translated = '';
    let offer5Translated = '';

    const viewOriginal = this.state.viewOriginal;

    const listingAddress = currentListing.attributes.publicData.location && currentListing.attributes.publicData.location.address ? currentListing.attributes.publicData.location.address : null;
    const companyAddress = currentListing.attributes.publicData && currentListing.attributes.publicData.companyAdress ? currentListing.attributes.publicData.companyAdress : null;
    const address = listingAddress !== null ? listingAddress : companyAddress;
    const displayAddress = address !== null ? address : <FormattedMessage id="ListingCard.NoAddress" />;
  

    const translateButtonMaybe = foreignLanguage ? (
        <div><IoLanguageOutline />
        <InlineTextButton
          onClick={() => {
            this.setState({
              viewOriginal: !viewOriginal,
            });
          }
          }
        >{this.state.viewOriginal ? 'Translate' : 'View Original'}</InlineTextButton>
      </div>) : null;

    if (foreignLanguage) {
      descriptionTranslated = <Convert text={description} />;

      offerHeading1Translated = <Convert text={publicData.offerHeading1} />;
      offerHeading2Translated = <Convert text={publicData.offerHeading2} />;
      offerHeading3Translated = <Convert text={publicData.offerHeading3} />;
      offerHeading4Translated = <Convert text={publicData.offerHeading4} />;
      offerHeading5Translated = <Convert text={publicData.offerHeading5} />;

      offer1Translated = <Convert text={publicData.offer1} />;
      offer2Translated = <Convert text={publicData.offer2} />;
      offer3Translated = <Convert text={publicData.offer3} />;
      offer4Translated = <Convert text={publicData.offer4} />;
      offer5Translated = <Convert text={publicData.offer5} />;
    }

    if (foreignLanguage && viewOriginal) {
      descriptionTranslated = description;

      offerHeading1Translated = offerHeading1;
      offerHeading2Translated = offerHeading2;
      offerHeading3Translated = offerHeading3;
      offerHeading4Translated = offerHeading4;
      offerHeading5Translated = offerHeading5;

      offer1Translated = offer1;
      offer2Translated = offer2;
      offer3Translated = offer3;
      offer4Translated = offer4;
      offer5Translated = offer5;
    }

    const openCloseText = this.state.listingOpen;
    const listingClosed = currentListing.attributes.state === LISTING_STATE_CLOSED;
    const listingPublished = currentListing.attributes.state === LISTING_STATE_PUBLISHED;
    const initialText = listingClosed ? 'Open' : 'Close';

    const richTitle = (
      <span>
        {richText(title, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_TITLE,
          longWordClass: css.longWord,
        })}
      </span>
    );

    const bookingTitle = (
      <FormattedMessage id="ListingPage.bookingTitle" values={{ title: richTitle }} />
    );
    const bookingSubTitle = intl.formatMessage({ id: 'ListingPage.bookingSubTitle' });

    const topbar = <TopbarContainer />;

    if (showListingError && showListingError.status === 404) {
      // 404 listing not found

      return <NotFoundPage />;
    } else if (showListingError) {
      // Other error in fetching listing

      const errorTitle = intl.formatMessage({
        id: 'ListingPage.errorLoadingListingTitle',
      });

      return (
        <Page title={errorTitle} scrollingDisabled={scrollingDisabled}>
          <LayoutSingleColumn className={css.pageRoot}>
            <LayoutWrapperTopbar>{topbar}</LayoutWrapperTopbar>
            <LayoutWrapperMain>
              <p className={css.errorText}>
                <FormattedMessage id="ListingPage.errorLoadingListingMessage" />
              </p>
            </LayoutWrapperMain>
            <LayoutWrapperFooter>
              <Footer />
            </LayoutWrapperFooter>
          </LayoutSingleColumn>
        </Page>
      );
    } else if (!currentListing.id && !publicData.listingCategory) {
      // Still loading the listing

      const loadingTitle = intl.formatMessage({
        id: 'ListingPage.loadingListingTitle',
      });

      return (
        <Page title={loadingTitle} scrollingDisabled={scrollingDisabled}>
          <LayoutSingleColumn className={css.pageRoot}>
            <LayoutWrapperTopbar>{topbar}</LayoutWrapperTopbar>
            <LayoutWrapperMain>
              <p className={css.loadingText}>
                <FormattedMessage id="ListingPage.loadingListingMessage" />
              </p>
            </LayoutWrapperMain>
            <LayoutWrapperFooter>
              <Footer />
            </LayoutWrapperFooter>
          </LayoutSingleColumn>
        </Page>
      );
    }

    const handleViewPhotosClick = e => {
      // Stop event from bubbling up to prevent image click handler
      // trying to open the carousel as well.
      e.stopPropagation();
      this.setState({
        imageCarouselOpen: true,
      });
    };

    const authorAvailable = currentListing && currentListing.author;
    const userAndListingAuthorAvailable = !!(currentUser && authorAvailable);
    const isOwnListing =
      userAndListingAuthorAvailable && currentListing.author.id.uuid === currentUser.id.uuid;
    const showContactUser = authorAvailable && (!currentUser || (currentUser && !isOwnListing));

    const currentAuthor = authorAvailable ? currentListing.author : null;
    const ensuredAuthor = ensureUser(currentAuthor);



    // When user is banned or deleted the listing is also deleted.
    // Because listing can be never showed with banned or deleted user we don't have to provide
    // banned or deleted display names for the function
    const authorDisplayName = userCompanyNameAsString(ensuredAuthor, '');

    const { formattedPrice, priceTitle } = priceData(price, intl);

    const handleBookingSubmit = values => {
      const isCurrentlyClosed = currentListing.attributes.state === LISTING_STATE_CLOSED;
      if (isOwnListing || isCurrentlyClosed) {
        window.scrollTo(0, 0);
      } else {
        this.handleSubmit(values);
      }
    };

    const listingImages = (listing, variantName) =>
      (listing.images || [])
        .map(image => {
          const variants = image.attributes.variants;
          const variant = variants ? variants[variantName] : null;

          // deprecated
          // for backwards combatility only
          const sizes = image.attributes.sizes;
          const size = sizes ? sizes.find(i => i.name === variantName) : null;

          return variant || size;
        })
        .filter(variant => variant != null);

    const facebookImages = listingImages(currentListing, 'facebook');
    const twitterImages = listingImages(currentListing, 'twitter');
    const schemaImages = JSON.stringify(facebookImages.map(img => img.url));
    const siteTitle = config.siteTitle;
    const schemaTitle = intl.formatMessage(
      { id: 'ListingPage.schemaTitle' },
      { title, price: formattedPrice, siteTitle }
    );

    const amenityOptions = findOptionsForSelectFilter('amenities', filterConfig);
    const categoryOptions = findOptionsForSelectFilter('category', filterConfig);

    const category =
      publicData && publicData.category ? (
        <span>
          {categoryLabel(categoryOptions, publicData.category)}
          <span className={css.separator}>•</span>
        </span>
      ) : null;

    const bookingPanelSection = (
      <BookingPanel
        className={css.hidden}
        listing={currentListing}
        isOwnListing={isOwnListing}
        unitType={unitType}
        onSubmit={handleBookingSubmit}
        title={bookingTitle}
        subTitle={bookingSubTitle}
        authorDisplayName={authorDisplayName}
        onManageDisableScrolling={onManageDisableScrolling}
        timeSlots={timeSlots}
        fetchTimeSlotsError={fetchTimeSlotsError}
        onFetchTransactionLineItems={onFetchTransactionLineItems}
        lineItems={lineItems}
        fetchLineItemsInProgress={fetchLineItemsInProgress}
        fetchLineItemsError={fetchLineItemsError}
      />

    );


    const contactJob = (
      <ContactCardForJob listing={currentListing}
      />
    );



    const contactLinkJobListings = (
      <ContactLinkJob listing={currentListing} />
    );




    const ContactCardForJobListings = contactJob;
    const ContactLinkForJob = contactLinkJobListings;
    const SectionBookingPanel = null;

    return (
      <Page
        title={schemaTitle}
        scrollingDisabled={scrollingDisabled}
        author={authorDisplayName}
        contentType="website"
        description={description}
        facebookImages={facebookImages}
        twitterImages={twitterImages}
        schema={{
          '@context': 'http://schema.org',
          '@type': 'ItemPage',
          description: description,
          name: schemaTitle,
          image: schemaImages,
        }}
      >
        <LayoutSingleColumn className={css.pageRoot}>
          <LayoutWrapperTopbar>{topbar}</LayoutWrapperTopbar>
          <LayoutWrapperMain>
            <div>
              <SectionImages
                title={title}
                listing={currentListing}
                isOwnListing={isOwnListing}
                editParams={{
                  id: listingId.uuid,
                  slug: listingSlug,
                  type: listingType,
                  tab: listingTab,
                }}
                imageCarouselOpen={this.state.imageCarouselOpen}
                onImageCarouselClose={() => this.setState({ imageCarouselOpen: false })}
                handleViewPhotosClick={handleViewPhotosClick}
                onManageDisableScrolling={onManageDisableScrolling}

                key={listingId.uuid}
                isMenuOpen={!!listingMenuOpen && listingMenuOpen.id.uuid === listingId.uuid}
                actionsInProgressListingId={openingListing || closingListing}
                onToggleMenu={this.onToggleMenu}
                onCloseListing={onCloseListing}
                onOpenListing={onOpenListing}
                hasOpeningError={openingErrorListingId.uuid === listingId.uuid}
                hasClosingError={closingErrorListingId.uuid === listingId.uuid}
              />
              <div className={css.contentContainer}>
                <div className={css.avatarContainer}>
                  <SectionAvatar className={css.avatar} user={currentAuthor} params={params} />
                </div>
                <div className={css.mainContent}>
                  <SectionHeading
                    priceTitle={priceTitle}
                    formattedPrice={formattedPrice}
                    richTitle={richTitle}
                    category={category}
                    
                  />
                  <div className={css.address}>
                    {displayAddress}
                  </div>
                  
                  <div id="contactCompanyButton" className={css.mapMobile}>
                    {ContactLinkForJob}
                  </div>
                  <div className={css.viewOriginal}>
                    {translateButtonMaybe}
                  </div>
                  <SectionDescriptionMaybe description={foreignLanguage && descriptionTranslated !== '' ? descriptionTranslated : description} />
                  <h2 className={publicData.offerHeading1 ? css.serviceTitle : css.hidden}>
                    <FormattedMessage id="CompanyPage.serviceTitle" />
                  </h2>
                  <div className={css.servicesContainer}>
                  <div className={publicData.offerHeading1 ? css.blank : css.hidden}>
                    <CollapsibleProjects
                      label={foreignLanguage && offerHeading1Translated !== '' ? offerHeading1Translated : offerHeading1}>
                      <SectionServicesMaybe

                        description={foreignLanguage && offer1Translated !== '' ? offer1Translated : offer1}
                      />
                    </CollapsibleProjects>
                  </div>


                  <div className={publicData.offerHeading2 ? css.blank : css.hidden}>
                    <CollapsibleProjects
                      label={foreignLanguage && offerHeading2Translated !== '' ? offerHeading2Translated : offerHeading2}>
                      <SectionServicesMaybe
                        description={foreignLanguage && offer2Translated !== '' ? offer2Translated : offer2}
                      />
                    </CollapsibleProjects>
                  </div>

                  <div className={publicData.offerHeading3 ? css.blank : css.hidden}>
                    <CollapsibleProjects
                      label={foreignLanguage && offerHeading3Translated !== '' ? offerHeading3Translated : offerHeading3}>
                      <SectionServicesMaybe

                        description={foreignLanguage && offer3Translated !== '' ? offer3Translated : offer3}
                      />
                    </CollapsibleProjects>
                  </div>



                  <div className={publicData.offerHeading4 ? css.blank : css.hidden}>
                    <CollapsibleProjects
                      label={foreignLanguage && offerHeading4Translated !== '' ? offerHeading4Translated : offerHeading4}>
                      <SectionServicesMaybe
                        description={foreignLanguage && offer4Translated !== '' ? offer4Translated : offer4}
                      />
                    </CollapsibleProjects>
                  </div>

                  <div className={publicData.offerHeading5 ? css.blank : css.hidden}>
                    <CollapsibleProjects
                      label={foreignLanguage && offerHeading5Translated !== '' ? offerHeading5Translated : offerHeading5}>
                      <SectionServicesMaybe
                        description={foreignLanguage && offer5Translated !== '' ? offer5Translated : offer5}
                      />
                    </CollapsibleProjects>
                  </div>
                  </div>
                  <div className={publicData.category ? css.categoryTags : css.hidden}>
                    <SectionRulesMaybe options={categoryOptions} publicData={publicData} />
                  </div>

                  <div className={css.mapMobile}>

                    <SectionMapMaybe
                      geolocation={geolocation}
                      publicData={publicData}
                      listingId={currentListing.id}
                    />
                    <div className={css.reportContainerMobile}>
                      <IoFlagOutline className={css.iconFlag}></IoFlagOutline>  <ExternalLink href={`mailto:info@medla.app?subject=Rapportera%20f%C3%B6retag: ${currentListing.id.uuid}`} >
                        <div className={css.reportFont}><FormattedMessage id="CompanyPage.reportCompany" /></div>
                      </ExternalLink>

                    </div>

                  </div>

                </div>


                <div className={css.contactCardCompany}>


                  <div className={css.bookingPanel}>

                    {SectionBookingPanel}





                    <Modal
                      id="ListingPage.enquiry"
                      contentClassName={css.enquiryModalContent}
                      isOpen={isAuthenticated && this.state.enquiryModalOpen}
                      onClose={() => this.setState({ enquiryModalOpen: false })}
                      onManageDisableScrolling={onManageDisableScrolling}
                    >
                      <EnquiryForm
                        className={css.enquiryForm}
                        submitButtonWrapperClassName={css.enquirySubmitButtonWrapper}
                        listingTitle={title}
                        authorDisplayName={authorDisplayName}
                        sendEnquiryError={sendEnquiryError}
                        onSubmit={this.onSubmitEnquiry}
                        inProgress={sendEnquiryInProgress}
                      />
                    </Modal>
                  </div>
                  <div className={css.mapDesktop}>

                    <SectionMapMaybe
                      geolocation={geolocation}
                      publicData={publicData}
                      listingId={currentListing.id}
                    />
                  </div>

                  <SectionHeading
                    showContactUser={showContactUser}
                    onContactUser={this.onContactUser} >
                  </SectionHeading>

                  <div id="contactCompanyButton" className={css.showContact}>
                    {ContactCardForJobListings}
                  </div>
                  <div className={css.reportContainer}>

                    <IoFlagOutline className={css.iconFlag}></IoFlagOutline>  <ExternalLink href={`mailto:info@medla.app?subject=Rapportera%20f%C3%B6retag: ${currentListing.id.uuid}`} >
                      <div className={css.reportFont}><FormattedMessage id="CompanyPage.reportCompany" /></div>

                    </ExternalLink>

                  </div>

                </div>

              </div>



            </div>

          </LayoutWrapperMain>
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </Page>
    );
  }
}

CompanyPageComponent.defaultProps = {
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
  closingListing: null,
  closingListingError: null,
  openingListing: null,
  openingListingError: null,
};

CompanyPageComponent.propTypes = {
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
  closingListing: shape({ uuid: string.isRequired }),
  closingListingError: shape({
    listingId: propTypes.uuid.isRequired,
    error: propTypes.error.isRequired,
  }),
  onCloseListing: func.isRequired,
  onOpenListing: func.isRequired,
  openingListing: shape({ uuid: string.isRequired }),
  openingListingError: shape({
    listingId: propTypes.uuid.isRequired,
    error: propTypes.error.isRequired,
  }),
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
    openingListing,
    openingListingError,
    closingListing,
    closingListingError,
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
    openingListing,
    openingListingError,
    closingListing,
    closingListingError,
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
  onCloseListing: listingId => dispatch(closeListing(listingId)),
  onOpenListing: listingId => dispatch(openListing(listingId)),
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const CompanyPage = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(CompanyPageComponent);

export default CompanyPage;
