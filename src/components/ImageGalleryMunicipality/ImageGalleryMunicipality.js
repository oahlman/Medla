import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { ResponsiveImage, IconSpinner } from '../../components';
import { propTypes } from '../../util/types';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import css from './ImageGalleryMunicipality.module.css';

import firstImage from './images/searchPage.jpg';
import secondImage from './images/projectPage.jpg';
import thirdImage from './images/chatPage.jpg';


const KEY_CODE_LEFT_ARROW = 37;
const KEY_CODE_RIGHT_ARROW = 39;

class ImageGalleryMunicipality extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rootClassName, className, images, intl } = this.props;
    const classes = classNames(rootClassName || css.root, className);
    if (typeof window !== "undefined") {window.onload = function(){
        const buttonLeft = typeof document !== "undefined" ? document.getElementById('slideLeft') : null;
        const buttonRight = typeof document !== "undefined" ? document.getElementById('slideRight') : null;
        const firstImage = typeof document !== "undefined" ? document.getElementById('firstImage') : null;
        const secondImage = typeof document !== "undefined" ? document.getElementById('secondImage') : null;
        const thirdImage = typeof document !== "undefined" ? document.getElementById('thirdImage') : null;
        const firstDescription = typeof document !== "undefined" ? document.getElementById('firstText') : null;
        const secondDescription = typeof document !== "undefined" ? document.getElementById('secondText') : null;
        const thirdDescription = typeof document !== "undefined" ? document.getElementById('thirdText') : null;
        const firstHeading = typeof document !== "undefined" ? document.getElementById('firstHeading') : null;
        const secondHeading = typeof document !== "undefined" ? document.getElementById('secondHeading') : null;
        const thirdHeading = typeof document !== "undefined" ? document.getElementById('thirdHeading') : null;
        firstImage.style.opacity = "1";
        firstDescription.style.opacity = "1";
        firstHeading.style.opacity = "1";
        firstImage.style.boxShadow = "0 0 50px 0 rgba(0, 0, 0, 0.1";
        secondImage.style.opacity = "0.5";
        secondDescription.style.opacity = "0.5";
        secondHeading.style.opacity = "0.5";
        thirdImage.style.opacity = "0.5";
        thirdDescription.style.opacity = "0.5";
        thirdHeading.style.opacity = "0.5";
        buttonLeft.onclick = function () {
          if (typeof window !== "undefined" && window.innerWidth < 1024) {
            document.getElementById('galleryContainer').scrollLeft += window.innerWidth * 0.8 + 10;
          } else {
            document.getElementById('galleryContainer').scrollLeft += 640;
          }
          if (firstImage.style.opacity == "1") {
            firstImage.style.opacity = "0.5";
            firstDescription.style.opacity = "0.5";
            firstHeading.style.opacity = "0.5";
            secondImage.style.opacity = "1";
            secondImage.style.boxShadow = "0 0 50px 0 rgba(0, 0, 0, 0.1";
            secondDescription.style.opacity = "1";
            secondHeading.style.opacity = "1";
            thirdImage.style.opacity = "0.5";
            thirdDescription.style.opacity = "0.5";
            thirdHeading.style.opacity = "0.5";
          } else if (secondImage.style.opacity == "1") {
            firstImage.style.opacity = "0.5";
            firstDescription.style.opacity = "0.5";
            firstHeading.style.opacity = "0.5";
            secondImage.style.opacity = "0.5";
            secondDescription.style.opacity = "0.5";
            secondHeading.style.opacity = "0.5";
            thirdImage.style.opacity = "1";
            thirdImage.style.boxShadow = "0 0 50px 0 rgba(0, 0, 0, 0.1";
            thirdDescription.style.opacity = "1";
            thirdHeading.style.opacity = "1";
          } else if (thirdImage.style.opacity == "1") {
            firstImage.style.opacity = "0.5";
            firstDescription.style.opacity = "0.5";
            firstHeading.style.opacity = "0.5";
            secondImage.style.opacity = "0.5";
            secondDescription.style.opacity = "0.5";
            secondHeading.style.opacity = "0.5";
            thirdImage.style.opacity = "1";
            thirdImage.style.boxShadow = "0 0 50px 0 rgba(0, 0, 0, 0.1";
            thirdDescription.style.opacity = "1";
            thirdHeading.style.opacity = "1";
          } else {
            firstImage.style.opacity = "initial";
            firstDescription.style.opacity = "initial";
            firstHeading.style.opacity = "initial";
            secondImage.style.opacity = "initial";
            secondDescription.style.opacity = "initial";
            secondHeading.style.opacity = "initial";
            thirdImage.style.opacity = "initial";
            thirdDescription.style.opacity = "initial";
            thirdHeading.style.opacity = "initial";
          }
          buttonRight.onclick = function () {
            if (typeof window !== "undefined" && window.innerWidth < 1024) {
              document.getElementById('galleryContainer').scrollLeft -= window.innerWidth * 0.8 + 20;
            } else {
              document.getElementById('galleryContainer').scrollLeft -= 640;
            }        if (secondImage.style.opacity == "1") {
              firstImage.style.opacity = "1";
              firstDescription.style.opacity = "1";
              firstHeading.style.opacity = "1";
              secondImage.style.opacity = "0.5";
              secondDescription.style.opacity = "0.5";
              secondHeading.style.opacity = "0.5";
              thirdImage.style.opacity = "0.5";
              thirdDescription.style.opacity = "0.5";
              thirdHeading.style.opacity = "0.5";
            } else if (thirdImage.style.opacity == "1") {
              firstImage.style.opacity = "0.5";
              firstDescription.style.opacity = "0.5";
              firstHeading.style.opacity = "0.5";
              secondImage.style.opacity = "1";
              secondDescription.style.opacity = "1";
              secondHeading.style.opacity = "1";
              thirdImage.style.opacity = "0.5";
              thirdDescription.style.opacity = "0.5";
              thirdHeading.style.opacity = "0.5";
            } else if (firstImage.style.opacity == "1") {
              firstImage.style.opacity = "1";
              firstDescription.style.opacity = "1";
              firstHeading.style.opacity = "1";
              secondImage.style.opacity = "0.5";
              secondDescription.style.opacity = "0.5";
              secondHeading.style.opacity = "0.5";
              thirdImage.style.opacity = "0.5";
              thirdDescription.style.opacity = "0.5";
              thirdHeading.style.opacity = "0.5";
            } else {
              firstImage.style.opacity = "initial";
              firstDescription.style.opacity = "initial";
              firstHeading.style.opacity = "initial";
              secondImage.style.opacity = "initial";
              secondDescription.style.opacity = "initial";
              secondHeading.style.opacity = "initial";
              thirdImage.style.opacity = "initial";
              thirdDescription.style.opacity = "initial";
              thirdHeading.style.opacity = "initial";
            }
        };
        };
        };}


    return (
      <div className={classes}>
      <div className={css.navigation}>
        <button id="slideRight" className={css.scrollRight}><IoChevronBackOutline className={css.icon} /></button>
        <button id="slideLeft" className={css.scrollLeft}><IoChevronForwardOutline className={css.icon} /></button>
      </div>
      <div id="galleryContainer" className={css.galleryContainer}>
        <div className={css.imageContainer}>
        <img id="firstImage" className={css.image} src={firstImage} alt="search"/>
        <h3 id="firstHeading" className={css.imageHeading}>Söksida</h3>
        <span id="firstText">Låt projektörer nå ert näringsliv med smarta sökfunktioner.</span>
        </div>
        <div className={css.imageContainer}>
        <img id="secondImage" className={css.image} src={secondImage} alt="project"/>
        <h3 id="secondHeading" className={css.imageHeading}>Kommunsida</h3>
        <span id="secondText">Dynamisk kommunsida för näringslivets synlighet och lokala affärer.</span>
        </div>
        <div className={css.imageContainer}>
        <img id="thirdImage" className={css.image} src={thirdImage} alt="chat"/>
        <h3 id="thirdHeading" className={css.imageHeading}>Chatt</h3>
        <span id="thirdText">Leverantörer och beställare kan chatta och översätta dialogen till valfritt språk.</span>
        </div>
      </div>
      </div>
    );
  }
}

ImageGalleryMunicipality.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string, arrayOf } = PropTypes;

ImageGalleryMunicipality.propTypes = {
  rootClassName: string,
  className: string,
  images: arrayOf(propTypes.image).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

export default injectIntl(ImageGalleryMunicipality);
