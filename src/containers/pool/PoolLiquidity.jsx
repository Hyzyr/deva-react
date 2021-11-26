import React from 'react';
import { imgFolder } from 'Global';

function PoolLiquidity(props) {
     return (
          <section className="liquidity">
               <div className="auto__containerMd">
                    <div className="liquidity__inner">
                         <div className="liquidity__inner-header">
                              <div className="liquidity__inner-header-title">
                                   <h3 className="h3 h3--thin">Your Liquidity</h3>
                                   <div className="liquidity__inner-header-title-buttons">
                                        <button
                                             className="button button--lg"
                                             onClick={props.createPairFunc}
                                        >
                                             Create a Pair
                                        </button>
                                        <button
                                             className="button button--primary button--lg"
                                             onClick={props.addLiqFunc}
                                        >
                                             Add Liquidity
                                        </button>
                                   </div>
                              </div>
                              <div className="liquidity__inner-header-subtitle">
                                   <p>Liquidity provider rewards</p>
                                   <span className="tooltip__outer bottom--right">
                                        <img src="images/icons/help.svg" alt="" />
                                        <span className="tooltip">
                                             <span className="tooltip__inner">
                                                  A portion of each trade (0.30%) goes to liquidity
                                                  providers as a protocol incentive
                                             </span>
                                        </span>
                                   </span>
                              </div>
                         </div>
                         <div className="liquidity__inner-nodata">
                              <div className="liquidity__inner-nodata-ico">
                                   <img src={imgFolder + 'icons/empty_bin.svg'} alt="" />
                              </div>
                              <p className="liquidity__inner-nodata-icoText para">
                                   No liquidity found.
                              </p>
                              <p className="liquidity__inner-nodata-link">
                                   Don't see a pool you joined?
                                   <a href="#" className="link link--blue">
                                        Import it.
                                   </a>
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default PoolLiquidity;
