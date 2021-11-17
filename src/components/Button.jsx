import React from 'react';

export default function Button(props) {
     let className = 'button';
     className += props.primary ? ' button--primary' : '';
     className += props.icon ? ' button--icon' : '';
     className += props.size === 'lg' ? ' button--large' : '';
     className += props.addStyle ? ' ' + props.addStyle :  '';

     return (
          <button type="button" className={className} onClick={props.clickFunc}>
               {props.children}
          </button>
     );
}
