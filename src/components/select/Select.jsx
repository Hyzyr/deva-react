import React, { useState, useEffect } from 'react';
import { arrowDown } from 'assets/SVG';

export function Select(props) {
     const [open, setOpen] = useState(false);
     useEffect(() => {
          setOpen(false);
     }, [props.selected])
     return (
          <div className={`select ${open ? 'active' : ''}`}>
               <div className="select__button select__item" onClick={()=>setOpen(!open)}>{props.selected}</div>
               <div className="select__options ">{props.children}</div>
          </div>
     );
}

export function SelectItem(props) {
     return <div className="select__item" onClick = {props.clickFunc}>{props.children}</div>;
}

export function SelectSelected(props) {
     return (
          <>
               {props.children}
               <span className="arrow">{arrowDown}</span>
          </>
     );
}
