import React from 'react';

export default function NavButton(props) {
     return (
          <button type="button" className={`nav__link ${props.active ? 'active' : ''}`} onClick={props.clickFunc}>
               { props.children }
          </button>
     );
}
