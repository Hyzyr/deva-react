import RadioButtons from 'components/radioButtons/RadioButtons';
import React, { useState } from 'react';
import Tooltip from 'components/Tooltip';
export default function ModalTransactions() {
     const defaultTollerance = [
          {
               id: 0,
               value: '0.1%',
          },
          {
               id: 1,
               value: '0.5%',
          },
          {
               id: 2,
               value: '1.0%',
          },
     ];
     const [tollerance, setTollerance] = useState(defaultTollerance[1]);

     return (
          <div className="modal__inner-body">
               <div className="transaction">
                    <div className="transaction__tolerance">
                         <p className="transaction__tolerance-para para">
                              Slippage tolerance
                              <Tooltip
                                   addClass={'right'}
                                   text={
                                        'Your transaction will revert if the price changes ' +
                                        'unfavorably by more than this percentage.'
                                   }
                              />
                         </p>
                         <div className="transaction__tolerance-row">
                              <RadioButtons
                                   buttons={defaultTollerance}
                                   selected={tollerance}
                                   setSelected={setTollerance}
                              />
                              <input
                                   type="text"
                                   value={tollerance.value}
                                   className="input input--small"
                                   disabled
                              />
                         </div>
                    </div>
                    <div className="transaction__deadline">
                         <p className="transaction__deadline-para para">
                              Transaction deadline
                              <Tooltip
                                   addClass={'right'}
                                   text={
                                        'Your transaction will revert if it is pending for more than this long'
                                   }
                              />
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
                              <label htmlFor="minutes">Minutes</label>
                         </div>
                    </div>
                    <div className="transaction__interface">
                         <h6 className="transaction__interface-header h6 h6--thin">
                              Interface Settings
                         </h6>
                         <div className="transaction__interface-row">
                              <p className="transaction__interface-row-para">
                                   Transaction deadline
                                   <Tooltip
                                        addClass={'right'}
                                        text={
                                             'By passes confirmation modals and allows high ' +
                                             'slippage trades. Use at your own risk'
                                        }
                                   />
                              </p>
                              <div className="switch">
                                   <input
                                        type="checkbox"
                                        name="deadline"
                                        defaultChecked="checked"
                                   />
                                   <label></label>
                              </div>
                         </div>
                         <div className="transaction__interface-row">
                              <p className="transaction__interface-row-para">
                                   Disable Multihops
                                   <Tooltip
                                        addClass={'right'}
                                        text={'Restricts swaps to direct pairt only'}
                                   />
                              </p>
                              <div className="switch">
                                   <input
                                        type="checkbox"
                                        name="multihops"
                                        defaultChecked="checked"
                                   />
                                   <label></label>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
