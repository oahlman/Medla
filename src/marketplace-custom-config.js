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

export const filters = [
  {
    id: 'listingCategory',
    label: 'Kategori',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_listingCategory'],
    config: {
      options: [{ key: 'job', label: 'Uppdrag' }, { key: 'company', label: 'Företag' }],
    },
  },

  {
    id: 'amenities',
    label: 'Projekt',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_amenities'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        {
          key: 'kolvallen',
          label: 'Kölvallen',
        },
        {
          key: 'skaftasen',
          label: 'Skaftåsen',
        },
        {
          key: 'bjornetjarnsberget',
          label: 'Björnetjärnsberget',
        },
        {
          key: 'han',
          label: 'Hån',
        },
        {
          key: 'bjornberget',
          label: 'Björnberget',
        },
        {
          key: 'blaklidenfabodberget',
          label: 'Blakliden',
        },
        {
          key: 'gronhult',
          label: 'Grönhult',
        },
        {
          key: 'hocksjon',
          label: 'Hocksjön',
        },
        {
          key: 'hybrit',
          label: 'Hybrit',
        },
        {
          key: 'klevberget',
          label: 'Klevberget',
        },
        {
          key: 'kabeko',
          label: 'Kabeko',
        },
        {
          key: 'stollsaterberget',
          label: 'Stöllsäterberget',
        },
      ],
    },
  },
  {
    id: 'category',
    label: 'Bransch',
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
        { key: 'anlaggning', label: 'Anläggning' },
        { key: 'bemanning', label: 'Bemanning' },
        { key: 'betong', label: 'Betong' },
        { key: 'bygg', label: 'Byggentreprenad' },
        { key: 'driftochunderhall', label: 'Drift och underhåll' },
        { key: 'el', label: 'El, larm och fiber' },
        { key: 'fordon', label: 'Fordon och däck' },
        { key: 'itochtelecom', label: 'IT och telecom' },
        { key: 'kostlogi', label: 'Kost och logi' },
        { key: 'maskinreparation', label: 'Maskinreparation' },
        { key: 'media', label: 'Media och PR' },
        { key: 'projektering', label: 'Projektering' },
        { key: 'servicetjanster', label: 'Servicetjänster' },
        { key: 'skogsmaskintjanster', label: 'Skogsmaskintjänster' },
        { key: 'sprangning', label: 'Sprängning' },
        { key: 'svets', label: 'Svets och metall' },
        { key: 'transport', label: 'Transport och taxi' },
        { key: 'tillverkning', label: 'Tillverkning' },
        { key: 'utbildning', label: 'Utbildning' },
        { key: 'ovrigt', label: 'Övrigt' },
      ],
    },
  },
  {
    id: 'keyword',
    label: 'Sökord',
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
    { key: 'createdAt', label: 'Nyast' },
    { key: '-createdAt', label: 'Äldst' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevans', longLabel: 'Relevans (Sökord)' },
  ],
};
