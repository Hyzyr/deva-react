import React from 'react';
import { connect } from 'react-redux';
import { submittedIco } from 'assets/SVG';

function ModalConfirmSwapExact(props) {
     return (
          <div className="modal__inner-body">
               <div className="exactSwap">
                    <div className="exactSwap__header">
                         <div className="exactSwap__header-amount">
                              <h4 className="h4 h4--thin">0.022 ETH</h4>
                              <p className="para">$39.67</p>
                         </div>
                         <div className="exactSwap__header-nav nav">
                              <div className="nav__link active">Detais</div>
                              <div className="nav__link">Data</div>
                         </div>
                    </div>
                    <div className="exactSwap__tabs">
                         <div className="exactSwap__tab">
                              <div className="exactSwap__tab-row">
                                   <p className="para">
                                        Gas fee
                                        <button className="button button--text button--sm">
                                             Badge
                                        </button>
                                   </p>
                                   <p className="para">0.000066 ETH</p>
                              </div>
                              <div className="exactSwap__tab-subrow">
                                   <span></span>
                                   <small>$0.12</small>
                              </div>
                              <div className="exactSwap__tab-row">
                                   <p className="title2">Total</p>
                                   <p className="title2">0.022066 ETH</p>
                              </div>
                              <div className="exactSwap__tab-subrow">
                                   <small>(Amount + gas fee)</small>
                                   <small>$39.78</small>
                              </div>
                         </div>
                         <div className="exactSwap__tab"></div>
                    </div>
                    <div className="exactSwap__footer">
                         <button
                              className="button button--text button--lg"
                              onClick={() => props.changeModal(null)}
                         >
                              Reject
                         </button>
                         <button
                              className="button button--primary button--lg"
                              onClick={() => props.changeModal('MESSAGE', {
                                  addClass : 'message--submitted',
                                  title5 : 'Transaction Submitted',
                                  ico: submittedIco,
                                  button: 'View on Etherscan',
                                  buttonFunc: ()=>{
                                      console.log('message from message modal button')
                                  }

                              })}
                         >
                              Confirm
                         </button>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirmSwapExact);
