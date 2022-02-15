import React, { Component } from 'react';
import { array, string, func, oneOf } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { LINE_ITEM_DAY, LINE_ITEM_NIGHT, propTypes } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { ensureListing, ensureUser } from '../../util/data';
import { richText } from '../../util/richText';
import { createSlug } from '../../util/urlHelpers';
import config from '../../config';
import { NamedLink, ResponsiveImage } from '../../components';
import { findOptionsForSelectFilter } from '../../util/search';
import { MdCategory, MdLocationPin } from 'react-icons/md';
import { PropertyGroup } from '..';




import css from './ListingCard.module.css';

const MIN_LENGTH_FOR_LONG_WORDS = 10;

class ListingImage extends Component {
  render() {
    return <ResponsiveImage {...this.props} />;
  }
}
const LazyImage = lazyLoadWithDimensions(ListingImage, { loadAfterInitialRendering: 3000 });

export const ListingCardComponent = props => {
  const { className, rootClassName, intl, listing, renderSizes, setActiveListing, filterConfig, projectUrl, format } = props;
  console.log('projectUrl', projectUrl);
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const id = currentListing.id.uuid;
  const { title = '', publicData, description } = currentListing.attributes;
  const slug = createSlug(title);
  const author = ensureUser(listing.author);
  const authorName = author.attributes.profile.displayName;
  const firstImage =
    currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null;

    const descriptionTrimmed = description && description.trim();
    const descriptionPreview = description && descriptionTrimmed.length > 200 ? `${descriptionTrimmed.substring(0, 200).trim()}…` : descriptionTrimmed;


  const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const categoryLabel = (categories, key) => {
    const cat = categories.find(c => c.key === key);
    return cat ? cat.label : key;
  };

  const projectLabel = (amenities, key) => {
    const ame = amenities.find(a => a.key === key);
    return ame ? ame.label : key;
  };

  const amenities = findOptionsForSelectFilter('amenities', filterConfig);
  const category = findOptionsForSelectFilter('category', filterConfig);

  const unitTranslationKey = isNightly
    ? 'ListingCard.perNight'
    : isDaily
    ? 'ListingCard.perDay'
    : 'ListingCard.perUnit';


  const projectCurrent  = projectLabel(amenities, publicData.amenities)
  const jobCategory = categoryLabel(category, publicData.category)
  const projectOnCard = projectCurrent ? projectCurrent : <FormattedMessage id="ListingCard.NoProjekt" />;
  const isEmbedded = format === 'embed';

  const categories = currentListing.attributes.publicData.category ? currentListing.attributes.publicData.category : [];

  const tagsMaybe = categories && categories.length < 2 ? categories : categories.slice (0,2);
  let extraTags =  categories && categories.length > 2 ? `+${categories.length - 2}`: [];
  const categoryOptions = findOptionsForSelectFilter('category', filterConfig);
  let propertyGroupTags =(
      <PropertyGroup
       id="CompanyCard.category"
       options={categoryOptions}
       publicData={publicData}
       selectedOptions = {tagsMaybe}
  />
  );

  const user = author.attributes ;

  return (
    <NamedLink className={classes} name="ListingPage" params={{ id, slug }}>
      <div
        className={css.threeToTwoWrapper}
        onMouseEnter={() => setActiveListing(currentListing.id)}
        onMouseLeave={() => setActiveListing(null)}
        >

        <div className={isEmbedded ? css.aspectWrapperEmbed : css.aspectWrapper}>

         <div className={isEmbedded ? css.containerTopHalfEmbed : css.containerTopHalf}>

         <div className={css.authorContainer}>
            <div className={css.author}>
            {authorName}
            </div>
            </div>

          <div className={css.info}>

              <div className={css.mainInfo}>


               <div className={isEmbedded ? css.titleEmbed : css.title}>
               {richText(title, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
                  longWordClass: css.longWord,
                 })}
                 </div>


               <div className={css.projectAndCategory} >
               <MdLocationPin className={css.icon} ></MdLocationPin>

                  <div className={css.project}>
                {richText(projectOnCard, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
                longWordClass: css.longWord,
                })}
               </div>
 
             </div>
            </div>

            </div>

            </div>

                   <div className={css.description}>

                   {richText(descriptionPreview, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
                longWordClass: css.longWord,
                })}

                  </div>

                  <div className={css.containerTags}>
              {propertyGroupTags}
              <span className={categories.length > 2 ? css.extraTags : css.hidden} >
                 {extraTags}
              </span>
                 </div>


        </div>
      </div>
    </NamedLink>
  );
};

ListingCardComponent.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
  filterConfig: config.custom.filters,
  setActiveListing: () => null,
  format: 'default',
};

ListingCardComponent.propTypes = {
  className: string,
  rootClassName: string,
  intl: intlShape.isRequired,
  listing: propTypes.listing.isRequired,
  filterConfig: array,
  format: oneOf(['default', 'embed']),

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func,
};

export default injectIntl(ListingCardComponent);
