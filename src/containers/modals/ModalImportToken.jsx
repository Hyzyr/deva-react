import React from 'react'

export default function ModalImportToken() {
    return (
        <section className="modal modal--importToken">
        <div className="modal__inner">
             <div className="modal__inner-header">
                  <button type="button" className="modal__inner-header-back"></button>
                  <h5 className="h5 h5--thin">Select a Token</h5>
                  <button type="button" className="modal__inner-header-close"></button>
             </div>
             <div className="modal__inner-body">
                  <div className="importToken">
                       <div className="importToken__data">
                            <div className="importToken__data-ico">
                                 <img src="images/coins/eth.png" alt="eth" />
                            </div>
                            <div className="importToken__data-content">
                                 <div className="importToken__data-content-title">
                                      <span className="title2">BNB</span>
                                      <span className="para">Binance Coin</span>
                                 </div>
                                 <div className="importToken__data-content-code">
                                      0xB8c77482e45F1F44dE1745F52C74426C631bDD52
                                 </div>
                                 <div className="importToken__data-content-caption">
                                      <span>Via Synthetix</span>
                                      <div className="importToken__data-content-caption-ico">
                                           <img src="images/coins/eth.png" alt="eth" />
                                      </div>
                                 </div>
                            </div>
                       </div>
                       <div className="importToken__warning">
                            <div className="importToken__warning-ico">
                                 <img src="images/icons/warning.svg" alt="warning" />
                            </div>
                            <h5 className="importToken__warning-title h5 h5--thin">
                                 Trade at your own risk!
                            </h5>
                            <p className="importToken__warning-para para">
                                 Anyone can create a token, including creating fake versions
                                 of existing tokens that claim to represent projects. If you
                                 purchase this token, you may not be able to sell it back
                            </p>
                       </div>
                       <div className="importToken___footer">
                            <button className="button button--primary">Import</button>
                       </div>
                  </div>
             </div>
        </div>
   </section>
    )
}
