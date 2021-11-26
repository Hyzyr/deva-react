import React, { useState, useEffect } from 'react';
import { imgFolder } from 'Global';
import SelectCoins from 'components/select/SelectCoins';
import GradientInput from 'components/GradientInput';
import { getUserTokens } from 'moduls/usersModul';
import Loader from 'components/LoaderSpinner';
import { plusIco } from 'assets/SVG';
import { swapIco } from 'assets/SVG';
import { connect } from 'react-redux';

function PoolCreatePair(props) {
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
     console.log(props.createPair)
     return (
          <section className="swap">
               <div className="auto__containerSm">
                    <div className="swap__inner">
                         <div className="swap__inner-header">
                              <button
                                   type="button"
                                   className="swap__inner-header-back"
                                   onClick={props.backFunc}
                              >
                                   {'<'}
                              </button>
                              <h5 className="h5 h5--thin">Add Liquidity</h5>
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
                                   <div className="swap__inner-body-note">
                                        <div className="swap__inner-body-note-title title1">
                                             You are the first liquidity provider
                                        </div>
                                        <div className="swap__inner-body-note-para para">
                                             The ratio of tokens you add will set the price. Once
                                             you are ok with the rate click supply to review.
                                        </div>
                                   </div>
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
                                             <button type="button" className="button button--text">
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
                                             <img src={imgFolder + 'icons/plus.svg'} alt="swap" />
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
                                                            props.swapCoins(props.fromToken, id);
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
     );
}

const mapStateToProps = (state) => ({
    nav: state.app.navState,
    createPair: state.app.createPair,
    fromToken: state.app.createPair.fromToken,
    toToken: state.app.createPair.toToken,
    modal: state.app.modalCurrent,
    modalProps: state.app.modalProps,
});

const mapDispatchToProps = (dispatch) => ({
    navTo: (nav) => dispatch({ type: 'NAV_TO', nav: nav }),
    changeModal: (modal, modalProps = null) =>
         dispatch({ type: 'CHANGE_MODAL', modal: modal, modalProps: modalProps }),
    swapCoins: (from, to) => dispatch({ type: 'CHANGE_CREATE_PAIR', fromToken: from, toToken: to }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(PoolCreatePair);

