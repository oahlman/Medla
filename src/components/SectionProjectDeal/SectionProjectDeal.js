import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectDeal.module.css';
import imagesvenskvind from '../../assets/Medla-svenskvind.png';
import {
  ExternalLink,
} from '../../components';


const SectionProjectDeal = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={css.sectionProcessMaybe}>
    <div className={css.deal}> 
    <div className={css.textWrapper} >
     <h2 className={css.headingTextDeal}>Medlemsförmån</h2>
      <h4 className={css.textDeal}>5000 kr rabatt på anslutningsavgiften. Rabatten läggs på automatiskt vid beställning. <ExternalLink className={css.linkStyle} href="https://www.peerdigital.se/anslut-projekt"> Kom igång </ExternalLink></h4>
      </div>
      <div>
      <img className={css.imageSvenskVind} src={imagesvenskvind} alt="Medla in macbook" />
      </div> 
      </div>
    </div>
  );
};


export default SectionProjectDeal;
