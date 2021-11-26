import Tooltip from 'components/Tooltip';
import { imgFolder } from 'Global';
import React from 'react';
import { connect } from 'react-redux';

function ModalConfirmSwap(props) {
     return (
          <div className="confirmSwap">
               <div className="confirmSwap__header">
                    <div className="confirmSwap__header-row">
                         <span className="title2">From</span>
                         <div className="confirmSwap__header-row-token">
                              <span className="title2">0.22 ETH</span>
                              <span className="avatar">
                                   <img src={imgFolder + 'coins/eth.png'} alt="eth" />
                              </span>
                         </div>
                    </div>
                    <div className="confirmSwap__header-row">
                         <span className="title2">To</span>
                         <div className="confirmSwap__header-row-token">
                              <span className="title2">9.74 INCH</span>
                              <span className="avatar">
                                   <img src={imgFolder + 'coins/dg.svg'} alt="dg" />
                              </span>
                         </div>
                    </div>
                    <div className="confirmSwap__header-para">
                         Output is estimated. If the price changes by more than 0.5% your
                         transaction will revert.
                    </div>
               </div>
               <div className="confirmSwap__body">
                    <div className="confirmSwap__body-row">
                         <span className="para">Price</span>
                         <span className="para">
                              0.0021672 ETH per 1INCH
                              <img src={imgFolder + 'icons/swap.svg'} alt="swap" />
                         </span>
                    </div>
                    <div className="confirmSwap__body-row">
                         <p className="para">
                              Minimum received
                              <Tooltip
                                   addClass={'right'}
                                   text={
                                        'Your transation will revert if there is a large, ' +
                                        'unfavorable price movement before it is confirmed'
                                   }
                              />
                         </p>
                         <p className="para">9.74 1INCH</p>
                    </div>
                    <div className="confirmSwap__body-row">
                         <p className="para">
                              Price Impact
                              <Tooltip
                                   addClass={'right'}
                                   text={
                                        'The difference between the market price and estimated price due to trade size'
                                   }
                              />
                         </p>
                         <p className="para">&lt; 0.01%</p>
                    </div>
                    <div className="confirmSwap__body-row">
                         <p className="para">
                              Liquidity Provider Fee
                              <Tooltip
                                   addClass={'right'}
                                   text={
                                        'A portion of each trade (0.30%) goes to liquidity ' +
                                        'providers as a protocol incentive'
                                   }
                              />
                         </p>
                         <p className="para">0.000066 ETH</p>
                    </div>
               </div>
               <div className="confirmSwap__footer">
                    <button className="button button--primary button--lg" onClick={
                        ()=> props.changeModal('SWAP_CONFIRM_EXACT')
                    }
                    >Confirm</button>
               </div>
          </div>
     );
}

const mapStateToProps = (state) => ({
    swapData: state.app.swap,
    fromToken: state.app.swap.fromToken,
    toToken: state.app.swap.toToken,
});

const mapDispatchToProps = (dispatch) => ({
    changeModal: (modal, modalProps = null) => 
        dispatch({ type: 'CHANGE_MODAL', modal: modal, modalProps: modalProps }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirmSwap);