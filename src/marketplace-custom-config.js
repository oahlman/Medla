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
  {
    id: 'category',
    label: <FormattedMessage id="Marketplace.config.key.labelIndustries"/>,
    type: 'SelectSingleFilter',
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
        { key: 'anlaggning', label:<FormattedMessage id="Marketplace.config.key.labelFieldWork"/>},
        { key: 'bygg', label:<FormattedMessage id="Marketplace.config.key.labelConstruction"/>},
        { key: 'transport', label:<FormattedMessage id="Marketplace.config.key.labelTransportation"/>},
        { key: 'mat', label:<FormattedMessage id="Marketplace.config.key.labelFood"/>},
        { key: 'boende', label:<FormattedMessage id="Marketplace.config.key.labelStays"/>},
      ],
    },
  },
  {
    id: 'anlaggning',
    label: <FormattedMessage id="Marketplace.config.key.labelFieldWork"/>,
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_anlaggning'],
    config: {
      options: [
        { key: 'grav', label: <FormattedMessage id="Marketplace.config.key.labelGrav"/> },
        { key: 'skog', label: <FormattedMessage id="Marketplace.config.key.labelSkog"/> },
        { key: 'sprangning', label: <FormattedMessage id="Marketplace.config.key.labelSprangning"/> },
        { key: 'betong', label: <FormattedMessage id="Marketplace.config.key.labelBetong"/> },
      ],
    },
  },
  {
    id: 'boende',
    label: <FormattedMessage id="Marketplace.config.key.labelStays"/>,
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_boende'],
    config: {
      options: [
        { key: 'hus', label: <FormattedMessage id="Marketplace.config.key.labelHus"/> },
        { key: 'lagenhet', label: <FormattedMessage id="Marketplace.config.key.labelLagenhet"/> },
        { key: 'rum', label: <FormattedMessage id="Marketplace.config.key.labelRum"/> },
      ],
    },
  },
  {
    id: 'bygg',
    label: <FormattedMessage id="Marketplace.config.key.labelConstruction"/>,
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_bygg'],
    config: {
      options: [
        // Since specific labels for these subcategories are not provided, I'll use placeholders for now
        { key: 'underkategori1', label: 'Underkategori1' },
        { key: 'underkategori2', label: 'Underkategori2' },
        { key: 'underkategori3', label: 'Underkategori3' },
        { key: 'underkategori4', label: 'Underkategori4' },
      ],
    },
  },
  {
    id: 'mat',
    label: <FormattedMessage id="Marketplace.config.key.labelFood"/>,
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_mat'],
    config: {
      options: [
        { key: 'matbutik', label: <FormattedMessage id="Marketplace.config.key.labelMatbutik"/> },
        { key: 'cafe', label: <FormattedMessage id="Marketplace.config.key.labelCafe"/> },
        { key: 'restaurang', label: <FormattedMessage id="Marketplace.config.key.labelRestaurang"/> },
      ],
    },
  },
  {
    id: 'transport',
    label: <FormattedMessage id="Marketplace.config.key.labelTransportation"/>,
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_transport'],
    config: {
      options: [
        { key: 'lastbil', label: <FormattedMessage id="Marketplace.config.key.labelLastbil"/> },
        { key: 'taxi', label: <FormattedMessage id="Marketplace.config.key.labelTaxi"/> },
      ],
    },
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
