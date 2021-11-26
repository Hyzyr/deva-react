import React from 'react';

function ModalMessage(props) {
     return (
          //   <section className="modal ">
          <div className={'message ' + (props.addClass ?? '')}>
               <div className="message__ico">{props.ico ?? ''}</div>
               <h5 className="h5 h5--thin">{props.title5 ?? ''}</h5>
               {props.button !== undefined ? (
                    <button className="button button--sm button--text"
                    onClick = {
                        props.buttonFunc !== undefined ? props.buttonFunc : ()=>{}
                    }
                    >{props.button}</button>
               ) : (
                    ''
               )}
               {/* additional data */}
               {props.children}
          </div>
     );
}

export default ModalMessage;
