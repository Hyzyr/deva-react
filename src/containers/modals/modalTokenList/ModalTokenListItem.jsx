import React from 'react';
import { imgFolder } from 'Global';

export default function ModalTokenListItem(props) {
     return (
          <div className={`tokenList__item ${props.forImport ? 'import' : ''}`} onClick = {props.clickFunc}>
               <div className="tokenList__item-ico">
                    <img src={imgFolder + props.image} alt={props.title} />
               </div>
               <div className="tokenList__item-content">
                    <div className="tokenList__item-content-title">
                         <span className="title2">{props.title}</span>
                         <small className="para">{props.para}</small>
                    </div>
                    <p className="tokenList__item-content-para">
                         {props.subtitle}
                         {props.forImport && props.cImage !== undefined ? (
                              <span className="tokenList__item-content-para-ico">
                                   <img src={imgFolder + props.cImage } alt="" />
                              </span>
                         ) : (
                              ''
                         )}
                    </p>
               </div>
               {props.forImport ? (
                    <div className="tokenList__item-button">
                         <button className="button button--text" onClick = { ()=>props.importToken(props.id) } >Import</button>
                    </div>
               ) : (
                    ''
               )}
          </div>
     );
}

<div className="tokenList__item import">
     <div className="tokenList__item-ico">
          <img src={imgFolder + 'coins/eth.png'} alt="" />
     </div>
     <div className="tokenList__item-content">
          <div className="tokenList__item-content-title">
               <span className="title2">ETH</span>
               <small className="para"> 2.906 </small>
          </div>
          <p className="tokenList__item-content-para">Ether</p>
     </div>
</div>;
