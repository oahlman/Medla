/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */
import React from 'react';
import {FormattedMessage} from '../src/util/reactIntl'

export const filters = [
  {
   
    id: 'listingCategory',
    label: 'Kategori',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_listingCategory'],
    config: {
      options: [{ key: 'job', label: <FormattedMessage id="Marketplace.config.key.labelJobs"/> }, { key: 'company', label: <FormattedMessage id="Marketplace.config.key.labelCompanies"/> }],
    },
  },
    {
      id: 'generalAmenities',
      label: <FormattedMessage id="Marketplace.config.key.generalHeading"/>,
      type: 'SelectMultipleFilter',
      group: 'secondary',
      queryParamNames: ['pub_general_amenities'],
      config: {
        options: [
          {
            key: 'uppvarmning',
            label: 'Uppvärmning',
          },
          {
            key: 'hoghastighetsinternet',
            label: 'Höghastighetsinternet',
          },
          {
            key: 'parkering',
            label: 'Parkering',
          },
          {
            key: 'rullstolsanpassat',
            label: 'Rullstolsanpassat',
          },
        ],
      },
    },
    {
      id: 'bathroomAmenities',
      label: <FormattedMessage id="Marketplace.config.key.bathroomLaundryHeading"/>,
      type: 'SelectMultipleFilter',
      group: 'secondary',
      queryParamNames: ['pub_bathroom_laundry_amenities'],
      config: {
        options: [
          {
            key: 'dusch',
            label: 'Dusch',
          },
          {
            key: 'wc',
            label: 'WC',
          },
          {
            key: 'badkar',
            label: 'Badkar',
          },
          {
            key: 'bastu',
            label: 'Bastu',
          },
          {
            key: 'tvattmaskin',
            label: 'Tvättmaskin',
          },
          {
            key: 'torktumlare',
            label: 'Torktumlare',
          },
          {
            key: 'torkskap',
            label: 'Torkskåp',
          },
        ],
      },
    },
    {
      id: 'kitchenAmenities',
      label: <FormattedMessage id="Marketplace.config.key.kitchenHeading"/>,
      type: 'SelectMultipleFilter',
      group: 'secondary',
      queryParamNames: ['pub_kitchen_amenities'],
      config: {
        options: [
          {
            key: 'kyl',
            label: 'Kyl',
          },
          {
            key: 'frys',
            label: 'Frys',
          },
          {
            key: 'ugn',
            label: 'Ugn',
          },
          {
            key: 'spis',
            label: 'Spis',
          },
          {
            key: 'mikrovagsugn',
            label: 'Mikrovågsugn',
          },
          {
            key: 'diskmaskin',
            label: 'Diskmaskin',
          },
        ],
      },
    },
    {
      id: 'extraAmenities',
      label: <FormattedMessage id="Marketplace.config.key.extraHeading"/>,
      type: 'SelectMultipleFilter',
      group: 'secondary',
      queryParamNames: ['pub_extra_amenities'],
      config: {
        options: [
          {
            key: 'tv',
            label: 'TV',
          },
          {
            key: 'garage',
            label: 'Garage',
          },
          {
            key: 'motorvarmare',
            label: 'Motorvärmare',
          },
          {
            key: 'elbilsladdare',
            label: 'Elbilsladdare',
          },
          {
            key: 'eldstad',
            label: 'Eldstad',
          },
          {
            key: 'ved',
            label: 'Ved',
          },
        ],
      },
    },  
  {
    id: 'category',
    label: <FormattedMessage id="Marketplace.config.key.labelIndustries"/>,
    type: 'SelectMultipleFilter',
    group: 'primary',
    queryParamNames: ['pub_category'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_any',
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'anlaggning', label: <FormattedMessage id="Marketplace.config.key.industry1"/> },
        { key: 'bemanning', label: <FormattedMessage id="Marketplace.config.key.industry2"/> },
        { key: 'betong', label: <FormattedMessage id="Marketplace.config.key.industry3"/> },
        { key: 'bygg', label: <FormattedMessage id="Marketplace.config.key.industry4"/> },
        { key: 'driftochunderhall', label: <FormattedMessage id="Marketplace.config.key.industry5"/> },
        { key: 'el', label: <FormattedMessage id="Marketplace.config.key.industry6"/> },
        { key: 'fordon', label: <FormattedMessage id="Marketplace.config.key.industry7"/> },
        { key: 'itochtelecom', label: <FormattedMessage id="Marketplace.config.key.industry8"/> },
        { key: 'kostlogi', label: <FormattedMessage id="Marketplace.config.key.industry9"/> },
        { key: 'maskinreparation', label: <FormattedMessage id="Marketplace.config.key.industry10"/> },
        { key: 'media', label: <FormattedMessage id="Marketplace.config.key.industry11"/> },
        { key: 'projektering', label: <FormattedMessage id="Marketplace.config.key.industry12"/> },
        { key: 'servicetjanster', label: <FormattedMessage id="Marketplace.config.key.industry13"/> },
        { key: 'skogsmaskintjanster', label: <FormattedMessage id="Marketplace.config.key.industry14"/> },
        { key: 'sprangning', label: <FormattedMessage id="Marketplace.config.key.industry15"/> },
        { key: 'svets', label: <FormattedMessage id="Marketplace.config.key.industry16"/> },
        { key: 'transport', label: <FormattedMessage id="Marketplace.config.key.industry17"/> },
        { key: 'tillverkning', label: <FormattedMessage id="Marketplace.config.key.industry18"/> },
        { key: 'utbildning', label: <FormattedMessage id="Marketplace.config.key.industry19"/> },
        { key: 'ovrigt', label: <FormattedMessage id="Marketplace.config.key.industry20"/> },
      ],
    },
  },
  {
    id: 'keyword',
    label: <FormattedMessage id="Marketplace.config.key.labelKeywordSearch"/>,
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'meta_rating', label: <FormattedMessage id="Marketplace.config.key.labelSortRating"/> }, 
    { key: 'createdAt', label: <FormattedMessage id="Marketplace.config.key.labelSortNewest"/> }, 
    { key: '-createdAt', label: <FormattedMessage id="Marketplace.config.key.labelSortOldest"/> }, 

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: <FormattedMessage id="Marketplace.config.key.labelSortRelevance"/>, label: <FormattedMessage id="Marketplace.config.key.labelSortRelevanceLong"/> },
  ],
};
