import React from 'react'
import {manageIco} from 'SVG';

export default function ModalTokenList() {
    return (
        <section className="modal modal--tokenList">
        <div className="modal__inner">
             <div className="modal__inner-header">
                  <h5 className="h5 h5--thin">Select a Token</h5>
                  <button type="button" className="modal__inner-header-close"></button>
             </div>
             <div className="modal__inner-body">
                  <div className="tokenList">
                       <div className="tokenList__search">
                            <input
                                 type="text"
                                 className="input"
                                 placeholder="Search name or paste address"
                            />
                       </div>
                       <div className="tokenList__body">
                            <div className="tokenList__item">
                                 <div className="tokenList__item-ico">
                                      <img src="images/coins/eth.png" alt="" />
                                 </div>
                                 <div className="tokenList__item-content">
                                      <div className="tokenList__item-content-title">
                                           <span className="title2">ETH</span>
                                           <small className="para">2.906</small>
                                      </div>
                                      <p className="tokenList__item-content-para">Ether</p>
                                 </div>
                            </div>
                            <div className="tokenList__item import">
                                 <div className="tokenList__item-ico">
                                      <img src="images/coins/eth.png" alt="" />
                                 </div>
                                 <div className="tokenList__item-content">
                                      <div className="tokenList__item-content-title">
                                           <span className="title2">ETH</span>
                                           <small className="para"> 2.906 </small>
                                      </div>
                                      <p className="tokenList__item-content-para">
                                           Ether
                                           <span className="tokenList__item-content-para-ico">
                                                <img src="images/coins/eth.png" alt="" />
                                           </span>
                                      </p>
                                 </div>
                                 <div className="tokenList__item-button">
                                      <button className="button button--text">Import</button>
                                 </div>
                            </div>
                       </div>
                       <div className="tokenList__footer">
                            <button className="button button--text button--large">
                                 {manageIco}
                                 Manage
                            </button>
                       </div>
                  </div>
             </div>
        </div>
   </section>
    )
}
