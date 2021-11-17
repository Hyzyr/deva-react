import React from 'react';
import { imageFolder } 'Global';

export default function ModalWallet() {
     return (
          <>
               <div className="modal__inner-body">
                    <ul className="selectList">
                         <li className="selectList__item">
                              <div className="selectList__item-wrap">
                                   <div className="selectList__item-title title2">
                                        WalletConnect
                                   </div>
                                   <div className="selectList__item-ico">
                                        <img src="images/coins/eth.png" alt="avatar" />
                                   </div>
                              </div>
                         </li>
                         <li className="selectList__item selected">
                              <div className="selectList__item-wrap">
                                   <div className="selectList__item-title title2">DeGe Wallet</div>
                                   <div className="selectList__item-ico">
                                        <img src="images/coins/eth.png" alt="avatar" />
                                   </div>
                              </div>
                         </li>
                         <li className="selectList__item">
                              <div className="selectList__item-wrap">
                                   <div className="selectList__item-title title2">
                                        Coinbase Wallet
                                   </div>
                                   <div className="selectList__item-ico">
                                        <img src="images/coins/eth.png" alt="avatar" />
                                   </div>
                              </div>
                         </li>
                         <li className="selectList__item">
                              <div className="selectList__item-wrap">
                                   <div className="selectList__item-title title2">Portis</div>
                                   <div className="selectList__item-ico">
                                        <img src="images/coins/eth.png" alt="avatar" />
                                   </div>
                              </div>
                         </li>
                    </ul>
               </div>
               <div className="modal__inner-footer">
                    <p className="para">
                         <span>New to Ethereum?</span>
                         <a href="#" className="link">
                              Learn more about wallets
                         </a>
                    </p>
               </div>
          </>
     );
}
