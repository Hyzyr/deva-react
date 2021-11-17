import React from 'react';

export default function ModalTransactions() {
     return (
          <div className="modal__inner-body">
               <div className="transaction">
                    <div className="transaction__tolerance">
                         <p className="transaction__tolerance-para para">
                              Slippage tolerance
                              <span className="tooltip__outer right">
                                   <img src="images/icons/help.svg" alt="" />
                                   <span className="tooltip">
                                        <span className="tooltip__inner">
                                             Your transaction will revert if the price changes
                                             unfavorably by more than this percentage
                                        </span>
                                   </span>
                              </span>
                         </p>
                         <div className="transaction__tolerance-row">
                              <button type="button" className="buttonTag">
                                   0.1%
                              </button>
                              <button type="button" className="buttonTag selected">
                                   0.5%
                              </button>
                              <button type="button" className="buttonTag">
                                   1.0%
                              </button>
                              <input
                                   type="text"
                                   value="0.5%"
                                   className="input input--small"
                                   disabled
                              />
                         </div>
                    </div>
                    <div className="transaction__deadline">
                         <p className="transaction__deadline-para para">
                              Transaction deadline
                              <span className="tooltip__outer right">
                                   <img src="images/icons/help.svg" alt="" />
                                   <span className="tooltip">
                                        <span className="tooltip__inner">
                                             Your transaction will revert if it is pending for more
                                             than this long
                                        </span>
                                   </span>
                              </span>
                         </p>
                         <div className="transaction__deadline-row">
                              <input
                                   type="text"
                                   // value="20"
                                   placeholder="20"
                                   className="input input--small"
                                   id="minutes"
                                   // onChange = {()=>{}}
                              />
                              <label for="minutes">Minutes</label>
                         </div>
                    </div>
                    <div className="transaction__interface">
                         <h6 className="transaction__interface-header h6 h6--thin">
                              Interface Settings
                         </h6>
                         <div className="transaction__interface-row">
                              <p className="transaction__interface-row-para">
                                   Transaction deadline
                                   <span className="tooltip__outer right">
                                        <img src="images/icons/help.svg" alt="" />
                                        <span className="tooltip">
                                             <span className="tooltip__inner">
                                                  Your transaction will revert if it is pending for
                                                  more than this long
                                             </span>
                                        </span>
                                   </span>
                              </p>
                              <div className="switch">
                                   <input type="checkbox" name="deadline" />
                                   <label></label>
                              </div>
                         </div>
                         <div className="transaction__interface-row">
                              <p className="transaction__interface-row-para">
                                   Disable Multihops
                                   <span className="tooltip__outer right">
                                        <img src="images/icons/help.svg" alt="" />
                                        <span className="tooltip">
                                             <span className="tooltip__inner">
                                                  Restricts swaps to direct pairt only
                                             </span>
                                        </span>
                                   </span>
                              </p>
                              <div className="switch">
                                   <input type="checkbox" name="multihops" />
                                   <label></label>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
