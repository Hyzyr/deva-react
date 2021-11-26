import React from 'react';

export default function RadioButtons(props) {
     return (
          <>
               {props.buttons.map((button) => (
                    <button
                         type="button"
                         className={`buttonTag ${props.selected.id === button.id ? 'selected' : ''}`}
                         key={button.value}
                         onClick={() => {
                              props.setSelected(button);
                         }}
                    >
                         {button.value}
                    </button>
               ))}
          </>
     );
}
