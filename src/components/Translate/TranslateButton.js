import React, { useState } from 'react';
import Button from '../Button/Button';
import css from './TranslateButton.module.css';

function TranslateButton(props) {
    const [translated, setTranslated] = useState(false);

    console.log('props.foreignLanguage', props.foreignLanguage);
  
    const buttonText = translated ? 'View original' : 'Translate';
    
  
    return (
      <div className={css.collapsible}>  
      <a className={translated ? css.questionCardOpen : css.questionCard} onClick={() => setTranslated(!translated)}> 
         <span className={css.titleText}>{props.label }</span>
          
      <div className={translated ? css.buttonCloseText : css.buttonOpenText}>
        {buttonText}
        </div >
        </a>
  
     {translated && <div className={translated ? css.contentshow : css.content}> {props.children}</div>}
  
      </div>
    );
  }
  
  export default TranslateButton;