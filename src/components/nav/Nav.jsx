import React from 'react';

export default function Nav(props) {
     return (
          <div className={ (props.addClass ?? '') + " nav"}>
               {props.children}
          </div>
     );
}
