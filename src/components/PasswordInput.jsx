import React from 'react';
import { eyeIco } from 'assets/SVG';

const PasswordInput = React.forwardRef((props, ref) => {
     const [visible, setVisible] = React.useState(false);
     const setValue = (e) => {
          if ('getValue' in props) {
               props.getValue(e.target.value);
          }
     };
     return (
          <div className={`input__outer ${visible ? 'visible' : ''}`}>
               <input
                    type={visible ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Password"
                    className="input"
                    name={props.name}
                    onChange={setValue}
                    ref={ref}
               />
               <button type="button" className="input__button" onClick={() => setVisible(!visible)}>
                    {eyeIco}
               </button>
          </div>
     );
});

export default PasswordInput;
