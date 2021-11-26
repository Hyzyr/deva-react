import React from 'react';
import { imgFolder } from 'Global';

export default function ModalWalletDetail(props) {
     return (
          <li
               className={`selectList__item ${props.wallet.selected ? 'selected' : ''}`}
               onClick={() => props.setSelected(props.wallet)}
          >
               <div className="selectList__item-wrap">
                    <div className="selectList__item-title title2">{props.wallet.title}</div>
                    <div className="selectList__item-ico">
                         <img src={imgFolder + props.wallet.image} alt={props.wallet.id} />
                    </div>
               </div>
          </li>
     );
}
