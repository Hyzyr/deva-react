import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SelectCoins from 'components/select/SelectCoins';
import { imgFolder } from 'Global';
import GradientInput from 'components/GradientInput';
import Loader from 'components/LoaderSpinner';
import { getUserTokens } from 'moduls/usersModul';
import { swapIco } from 'assets/SVG';
import ModalWrapper from 'containers/modals/ModalWrapper';
import ModalTransactions from 'containers/modals/ModalTransactions';
import ModalTokenList from 'containers/modals/modalTokenList/ModalTokenList';
import ModalLoading from 'containers/modals/ModalLoading';
import ModalImportToken from 'containers/modals/ModalImportToken';
import ModalManageToken from 'containers/modals/modalManageToken/ModalManageToken';
import ModalConfirmSwap from 'containers/modals/ModalConfirmSwap';
import ModalConfirmSwapExact from 'containers/modals/ModalConfirmSwapExact';
import ModalMessage from 'containers/modals/ModalMessage';

function Swap(props) {
     const [coins, setCoins] = useState(null);
     const [inputFromValue, setInputFromValue] = useState('');
     const [inputToValue, setInputToValue] = useState('');
     // getUserTokens

     // after component first mounted
     // get coins List from userModul
     // and update page state
     useEffect(() => {
          getUserTokens().then((response) => {
               setCoins(response);
          });
     }, []);

     const modalTokenItemFunc = (id, forImport) => {
          
     };
     const validForAnalytics = () => {
          return (
               inputFromValue !== '' &&
               inputFromValue !== null &&
               inputToValue !== '' &&
               inputToValue !== null &&
               props.fromToken !== null &&
               props.toToken !== null
          );
     };
     return (
          <>
               <section className="swap">
                    <div className="auto__containerSm">
                         <div className="swap__inner">
                              <div className="swap__inner-header">
                                   <h3 className="h3 h3--thin">Swap</h3>
                                   <button
                                        type="button"
                                        className="settings"
                                        onClick={() => props.changeModal('SWAP_SETTINGS')}
                                   >
                                        <img src={imgFolder + 'icons/settings.svg'} alt="" />
                                   </button>
                              </div>
                              {coins !== null ? (
                                   <div className="swap__inner-body">
                                        <div className="swap__inner-body-row">
                                             <div className="swap__inner-body-row-balance">
                                                  <p className="para para--semibold">From</p>
                                                  <GradientInput
                                                       value={inputFromValue}
                                                       setValue={setInputFromValue}
                                                       active={false}
                                                  />
                                                  <span className="caption">Balance: 0.0</span>
                                             </div>
                                             <div className="swap__inner-body-row-content">
                                                  <button
                                                       type="button"
                                                       className="button button--text"
                                                  >
                                                       Max
                                                  </button>
                                                  {props.fromToken !== null ? (
                                                       <SelectCoins
                                                            coins={coins}
                                                            selected={props.fromToken}
                                                            setCurrency={(id) => {
                                                                 props.swapCoins(id, props.toToken);
                                                            }}
                                                       />
                                                  ) : (
                                                       ''
                                                  )}
                                             </div>
                                        </div>
                                        <div className="swap__inner-body-rowButton">
                                             <button type="button">
                                                  <img
                                                       src={imgFolder + 'icons/swap.svg'}
                                                       alt="swap"
                                                  />
                                             </button>
                                        </div>
                                        <div className="swap__inner-body-row">
                                             <div className="swap__inner-body-row-balance">
                                                  <p className="para para--semibold">To</p>
                                                  <GradientInput
                                                       value={inputToValue}
                                                       setValue={setInputToValue}
                                                       active={false}
                                                  />
                                                  <span className="caption">Balance: 0.0</span>
                                             </div>

                                             {props.toToken !== null ? (
                                                  <div className="swap__inner-body-row-content">
                                                       <button
                                                            type="button"
                                                            className="button button--text"
                                                       >
                                                            Max
                                                       </button>
                                                       <SelectCoins
                                                            coins={coins}
                                                            selected={props.toToken}
                                                            setCurrency={(id) => {
                                                                 props.swapCoins(
                                                                      props.fromToken,
                                                                      id
                                                                 );
                                                            }}
                                                       />
                                                  </div>
                                             ) : (
                                                  <div className="swap__inner-body-row-button">
                                                       <div
                                                            className="button button--primary"
                                                            onClick={() =>
                                                                 props.changeModal('SELECT_TOKEN', {
                                                                      swapFrom: false,
                                                                      swapTo: true,
                                                                      swapCoins: props.swapCoins,
                                                                 })
                                                            }
                                                       >
                                                            Select a Token
                                                       </div>
                                                  </div>
                                             )}
                                        </div>
                                        {validForAnalytics() ? (
                                             <div className="swap__inner-body-analytics">
                                                  <div className="swap__inner-body-analytics-row">
                                                       <span className="para">Price</span>
                                                       <span className="para">
                                                            0.0021672 ETH per 1INCH
                                                            {swapIco}
                                                       </span>
                                                  </div>
                                                  <div className="swap__inner-body-analytics-buttons">
                                                       <button className="button button--sm button--text">
                                                            View Pair Analytics
                                                       </button>
                                                  </div>
                                             </div>
                                        ) : (
                                             ''
                                        )}
                                        <div className="swap__inner-body-button">
                                             <button
                                                  type="button"
                                                  className="button button--large button--primary"
                                                  disabled={!validForAnalytics()}
                                                  onClick={() => props.changeModal('SWAP_CONFIRM')}
                                             >
                                                  {validForAnalytics() ? 'Swap' : 'Enter an Amount'}
                                             </button>
                                        </div>
                                   </div>
                              ) : (
                                   <Loader />
                              )}
                         </div>
                    </div>
               </section>

               {/******** popup Modals ********/}
               {props.modal === 'SWAP_SETTINGS' ? (
                    <ModalWrapper title={'Transaction Settings'}>
                         <ModalTransactions />
                    </ModalWrapper>
               ) : (
                    ''
               )}
               {props.modal === 'SWAP_CONFIRM' ? (
                    <ModalWrapper title={'Confirm Swap'} addClass={'modal--confirmSwap'}>
                         <ModalConfirmSwap />
                    </ModalWrapper>
               ) : (
                    ''
               )}
               {props.modal === 'SWAP_CONFIRM_EXACT' ? (
                    <ModalWrapper title={'Confirm Swap'} back={true}>
                         <ModalConfirmSwapExact />
                    </ModalWrapper>
               ) : (
                    ''
               )}
               {props.modal === 'SELECT_TOKEN' ? (
                    <ModalWrapper title={'Select a Token'} addClass={'modal--tokenList'}>
                         <ModalTokenList {...props.modalProps} 
                         swapCoins = { props.swapCoins }
                         />
                    </ModalWrapper>
               ) : (
                    ''
               )}

               {props.modal === 'MANAGE_SELECT_TOKEN' ? (
                    <ModalWrapper back={true} title={'Manage'}>
                         <ModalManageToken />
                    </ModalWrapper>
               ) : (
                    ''
               )}
               {props.modal === 'IMPORT_TOKEN' ? (
                    <ModalWrapper
                         title={'Import Token'}
                         addClass={'modal--importToken'}
                         back={true}
                    >
                         <ModalImportToken {...props.modalProps} />
                    </ModalWrapper>
               ) : (
                    ''
               )}

               {props.modal === 'MESSAGE' ? (
                    <ModalWrapper addClassName={'modal--message'}>
                         <ModalMessage addClass={'message--submitted'} {...props.modalProps} />
                    </ModalWrapper>
               ) : (
                    ''
               )}

               {props.modal === 'LOADING' ? (
                    <ModalWrapper
                         disableClose={true}
                         addClassName={'modal--loading'}
                         title={'Wait a minute please ...'}
                    >
                         <ModalLoading />
                    </ModalWrapper>
               ) : (
                    ''
               )}
               {/******** popup Modals end ********/}
          </>
     );
}

const mapStateToProps = (state) => ({
     nav: state.app.navState,
     swapData: state.app.swap,
     fromToken: state.app.swap.fromToken,
     toToken: state.app.swap.toToken,
     modal: state.app.modalCurrent,
     modalProps: state.app.modalProps,
});

const mapDispatchToProps = (dispatch) => ({
     navTo: (nav) => dispatch({ type: 'NAV_TO', nav: nav }),
     changeModal: (modal, modalProps = null) =>
          dispatch({ type: 'CHANGE_MODAL', modal: modal, modalProps: modalProps }),
     swapCoins: (from, to) => dispatch({ type: 'CHANGE_SWAP_COINS', fromToken: from, toToken: to }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(Swap);
