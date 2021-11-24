import React, { useState } from 'react';
import Button from '../Button/Button';
import css from './TopBarSearchModal.module.css';
import {
NamedLink 
} from '../NamedLink/NamedLink';
import { FormattedMessage } from '../../util/reactIntl';


function TopBarSearchModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonText = isOpen ? 'Stäng sökning' : 'Starta sökning';
  

  return (
    <div className={css.TopBarSearchModal}>  
    <a className={isOpen ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen(!isOpen)}> 
       <span className={css.titleText}>{props.label }</span>
        
    <div className={isOpen ? css.buttonCloseText : css.buttonOpenText}>
      {buttonText}
      </div >
      </a>

   {isOpen && <div className={isOpen ? css.contentshow : css.content}> {props.children}</div>}

    </div>
  );
}

export default TopBarSearchModal;
