import React, { useState, useRef } from 'react';
import Button from '../Button/Button';
import css from './CollapsibleProjects.module.css';
import {
NamedLink 
} from '../NamedLink/NamedLink';
import { FormattedMessage } from '../../util/reactIntl';
import { IoChevronDownOutline, IoCloseOutline } from "react-icons/io5";


function CollapsibleProjects(props) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonText = isOpen ? <IoCloseOutline className={css.iconExpanderClose} /> : <IoChevronDownOutline className={css.iconExpanderOpen} /> ;

  const parentRef = useRef ();
  
  return (
    <div className={css.CollapsibleProjects}>  
    <a className={isOpen ? css.questionCardOpen : css.questionCard} onClick={() => setIsOpen(!isOpen)}> 
       <span className={css.titleText}>{props.label }</span>
        
    <div className={isOpen ? css.buttonCloseText : css.buttonOpenText}>
      {buttonText}
      </div >
      </a>

<div className={css.contentParent} ref={parentRef} style={isOpen ? {
  height: parentRef.current.scrollHeight + 'px'
} : {
  height: '0px',


}}> 
 <div className={css.contentshow }> {props.children}</div>
 </div>
    </div>
  );
}

export default CollapsibleProjects;
