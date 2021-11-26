import React from 'react';
import { imgFolder } from 'Global';

export default function Tooltip(props) {
     return (
          <span className={`tooltip__outer ${props.addClass ?? ''}`}>
               <img src={imgFolder + 'icons/help.svg'} alt="help" />
               <span className="tooltip">
                    <span className="tooltip__inner">{props.text}</span>
               </span>
          </span>
     );
}
