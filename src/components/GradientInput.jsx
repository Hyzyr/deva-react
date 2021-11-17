import React, { useState, useEffect } from 'react';

export default function GradientInput(props) {
     const [value, setValue] = useState('');
     const length = String(value).length > 3 ? String(value).length : 3;
     const style = { height: 80 };
     let addGradient = String(value).length > 0;

     // validation of amount input`
     const validate = (e) => {
          let value = e.target.value;

          if (
               value.match(/^[0-9]*(?:\.[0-9]*)?$/) &&
               (value.length < 10 || (value.includes('.') && value.length < 13))
          ) {
               setValue(value);
               return true;
          }
          return false;
     };

     // manipulate amount input according to value
     if (value !== null) {
          // change input width
          if (length === 0) setValue('');
          else if (length !== 0) {
               style.width = `calc(${length} * .63em)`;
          } else style.width = '';

          // change font size
          if (length >= 10) style.fontSize = '34px';
          else if (length >= 8) style.fontSize = '37px';
          else style.fontSize = '';
     }

     return (
          <input
               type="text"
               style={style}
               className={addGradient ? 'active' : ''}
               value={value}
               placeholder="0.0"
               onChange={(e) => validate(e)}
          />
     );
}
