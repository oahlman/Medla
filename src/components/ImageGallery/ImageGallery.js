import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { ResponsiveImage, IconSpinner } from '../../components';
import { propTypes } from '../../util/types';

import css from './ImageGallery.module.css';

import firstImage from './images/searchPage.png';
import secondImage from './images/projectPage.png';
import thirdImage from './images/chatPage.png';


const KEY_CODE_LEFT_ARROW = 37;
const KEY_CODE_RIGHT_ARROW = 39;

class ImageGallery extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp);
  }

  render() {
    const { rootClassName, className, images, intl } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    window.onload = function(){
      const buttonLeft = document.getElementById('slideLeft');
      const buttonRight = document.getElementById('slideRight');
      const firstImage = document.getElementById('firstImage');
      const secondImage = document.getElementById('secondImage');
      const thirdImage = document.getElementById('thirdImage');
      firstImage.style.opacity = "1";
      firstImage.style.boxShadow = "0 0 50px 0 rgba(0, 0, 0, 0.1";
      secondImage.style.opacity = "0.5";
      thirdImage.style.opacity = "0.5";
      console.log(window.innerWidth);
      buttonLeft.onclick = function () {
        if (window.innerWidth < 1024) {
          document.getElementById('galleryContainer').scrollLeft += window.innerWidth * 0.7 + 20;
        } else {
          document.getElementById('galleryContainer').scrollLeft += 900 + 40;
        }
        if (firstImage.style.opacity == "1") {
          firstImage.style.opacity = "0.5";
          secondImage.style.opacity = "1";
          secondImage.style.boxShadow = "0 0 50px 0 rgba(0, 0, 0, 0.1";
          thirdImage.style.opacity = "0.5";
        } else if (secondImage.style.opacity == "1") {
          firstImage.style.opacity = "0.5";
          secondImage.style.opacity = "0.5";
          thirdImage.style.opacity = "1";
          thirdImage.style.boxShadow = "0 0 50px 0 rgba(0, 0, 0, 0.1";
        } else if (thirdImage.style.opacity == "1") {
          firstImage.style.opacity = "0.5";
          secondImage.style.opacity = "0.5";
          thirdImage.style.opacity = "1";
          thirdImage.style.boxShadow = "0 0 50px 0 rgba(0, 0, 0, 0.1";
        } else {
          firstImage.style.opacity = "initial";
          secondImage.style.opacity = "initial";
          thirdImage.style.opacity = "initial";
        }
      };
      buttonRight.onclick = function () {
        if (window.innerWidth < 1024) {
          document.getElementById('galleryContainer').scrollLeft -= window.innerWidth * 0.7 + 20;
        } else {
          document.getElementById('galleryContainer').scrollLeft -= 900 + 40;
        }        if (secondImage.style.opacity == "1") {
          firstImage.style.opacity = "1";
          secondImage.style.opacity = "0.5";
          thirdImage.style.opacity = "0.5";
        } else if (thirdImage.style.opacity == "1") {
          firstImage.style.opacity = "0.5";
          secondImage.style.opacity = "1";
          thirdImage.style.opacity = "0.5";
        } else if (firstImage.style.opacity == "1") {
          firstImage.style.opacity = "1";
          secondImage.style.opacity = "0.5";
          thirdImage.style.opacity = "0.5";
        } else {
          firstImage.style.opacity = "initial";
          secondImage.style.opacity = "initial";
          thirdImage.style.opacity = "initial";
        }
    };
    };


    return (
      <div className={classes}>
      <div id="galleryContainer" className={css.galleryContainer}>
        <div className={css.imageContainer}>
        <img id="firstImage" className={css.image} src={firstImage} alt="search"/>
        <h3>Söksida</h3>
        <span>Text som beskriver fördelarna med söksidan.</span>
        </div>
        <div className={css.imageContainer}>
        <img id="secondImage" className={css.image} src={secondImage} alt="project"/>
        <h3>Projektsida</h3>
        <span>Text som beskriver fördelarna med projektsidor.</span>
        </div>
        <div className={css.imageContainer}>
        <img id="thirdImage" className={css.image} src={thirdImage} alt="chat"/>
        <h3>Chatt</h3>
        <span>Text som beskriver fördelarna med chatten.</span>
        </div>
      <button id="slideRight" className={css.scrollRight}>←</button>
      <button id="slideLeft" className={css.scrollLeft}>→</button>
      </div>
      </div>
    );
  }
}

ImageGallery.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string, arrayOf } = PropTypes;

ImageGallery.propTypes = {
  rootClassName: string,
  className: string,
  images: arrayOf(propTypes.image).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

export default injectIntl(ImageGallery);
