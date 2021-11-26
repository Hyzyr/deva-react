import React from 'react';
import { imgFolder } from 'Global';

export default function ManageTokenToken() {
     return (
          <>
               <div className="tokenManage__input">
                    <input type="text" name="token" className="input" placeholder="0x000" />
               </div>
               <div className="tokenManage__listTitle">
                    <span className="title2">3 Custom Token</span>
                    <button className="button button--text">Clear All</button>
               </div>
               <div className="tokenManage__list tokenManage__list--custom">
                    <div className="tokenManage__token">
                         <div className="tokenManage__token-ico">
                              <img src={imgFolder + "coins/eth.png"} alt="eth" />
                         </div>
                         <div className="tokenManage__token-content">
                              <div className="title2">BUSD</div>
                         </div>
                         <div className="tokenManage__token-buttons">
                              <div className="button button--text">
                                   <img src={imgFolder + "icons/bin.svg"} alt="bin" />
                              </div>
                              <div className="button button--text">
                                   <img src={imgFolder + "icons/out.svg"} alt="out" />
                              </div>
                         </div>
                    </div> 
                    <div className="tokenManage__token">
                         <div className="tokenManage__token-ico">
                              <img src={imgFolder + "coins/eth.png"} alt="eth" />
                         </div>
                         <div className="tokenManage__token-content">
                              <div className="title2">BUSD</div>
                         </div>
                         <div className="tokenManage__token-buttons">
                              <div className="button button--text">
                                   <img src={imgFolder + "icons/bin.svg"} alt="bin" />
                              </div>
                              <div className="button button--text">
                                   <img src={imgFolder + "icons/out.svg"} alt="out" />
                              </div>
                         </div>
                    </div> 
                    <div className="tokenManage__token">
                         <div className="tokenManage__token-ico">
                              <img src={imgFolder + "coins/eth.png"} alt="eth" />
                         </div>
                         <div className="tokenManage__token-content">
                              <div className="title2">BUSD</div>
                         </div>
                         <div className="tokenManage__token-buttons">
                              <div className="button button--text">
                                   <img src={imgFolder + "icons/bin.svg"} alt="bin" />
                              </div>
                              <div className="button button--text">
                                   <img src={imgFolder + "icons/out.svg"} alt="out" />
                              </div>
                         </div>
                    </div> 
               </div>
          </>
     );
}
