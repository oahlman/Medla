import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { ensureListing, ensureUser } from '../../util/data';
import config from '../../config';

import css from './SearchMapPriceLabel.module.css';

class SearchMapPriceLabel extends Component {
  shouldComponentUpdate(nextProps) {
    const currentListing = ensureListing(this.props.listing);
    const nextListing = ensureListing(nextProps.listing);
    const isSameListing = currentListing.id.uuid === nextListing.id.uuid;
    const hasSameAuthor = currentListing.author.id.uuid === nextListing.author.id.uuid;
    const hasSameActiveStatus = this.props.isActive === nextProps.isActive;
    const hasSameRefreshToken =
      this.props.mapComponentRefreshToken === nextProps.mapComponentRefreshToken;

    return !(isSameListing && hasSameAuthor && hasSameActiveStatus && hasSameRefreshToken);
  }

  render() {
    const { className, rootClassName, intl, listing, onListingClicked, isActive } = this.props;
    const currentListing = ensureListing(listing);
    const author = ensureUser(listing.author);
    const authorName = author.attributes.profile.displayName;
    const listingTitle = listing.attributes.title.trim();
    const trimmedTitle = listingTitle.length > 20 ? `${listingTitle.substring(0, 20).trim()}…` : listingTitle;

    const classes = classNames(rootClassName || css.root, className);
    const priceLabelClasses = classNames(css.priceLabel, { [css.priceLabelActive]: isActive });
    const caretClasses = classNames(css.caret, { [css.caretActive]: isActive });

    return (
      <button className={classes} onClick={() => onListingClicked(currentListing)}>
        <div className={css.caretShadow} />
        <div className={priceLabelClasses}>{trimmedTitle}</div>
        <div className={caretClasses} />
      </button>
    );
  }
}

SearchMapPriceLabel.defaultProps = {
  className: null,
  rootClassName: null,
};

const { func, string } = PropTypes;

SearchMapPriceLabel.propTypes = {
  className: string,
  rootClassName: string,
  listing: propTypes.listing.isRequired,
  onListingClicked: func.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

export default injectIntl(SearchMapPriceLabel);
