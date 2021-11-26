import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button/Button';
import css from './TopBarSearchModal.module.css';
import {
NamedLink 
} from '../NamedLink/NamedLink';
import { FormattedMessage } from '../../util/reactIntl';


let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function TopBarSearchModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonText = isOpen ? 'Stäng sökning' : 'Sök...';
  

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });


  return (
    <div ref={domNode} className={css.TopBarSearchModal}>  
    <a className={isOpen ? css.hidden : css.questionCard} onClick={() => setIsOpen(!isOpen)}> 
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
