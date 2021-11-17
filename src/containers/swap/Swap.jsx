import React, {useState} from 'react';
import { connect } from 'react-redux';
import SelectCoins from 'components/select/SelectCoins';
import {imgFolder} from 'Global';
import GradientInput from 'components/GradientInput';

function Swap(props) {
    const coins = [
        {
            id: 'ETH',
            title: 'ETH',
            image: 'coins/eth.png',
          },
          {
            id: 'BTC',
            title: 'BTC',
            image: 'coins/eth.png',
          },
          {
            id: 'WAX',
            title: 'WAX',
            image: 'coins/eth.png',
          },
          {
            id: 'BNB',
            title: 'BNB',
            image: 'coins/eth.png',
          },
          {
            id: 'USD',
            title: 'USD', 
            image: 'coins/eth.png',
          }
    ];
    const [currency1, setCurrency1] = useState(coins[0].id)

     return (
          <section className="swap">
               <div className="auto__containerSm">
                    <div className="swap__inner">
                         <div className="swap__inner-header">
                              <h3 className="h3 h3--thin">Swap</h3>
                              <button type="button" className="settings" onClick={()=> props.changeModal('SWAP_SETTINGS') } >
                                   <img src={ imgFolder + 'icons/settings.svg'} alt="" />
                              </button>
                         </div>
                         <div className="swap__inner-body">
                              <div className="swap__inner-body-row">
                                   <div className="swap__inner-body-row-balance">
                                        <p className="para para--semibold">From</p>
                                        <GradientInput active={false} />
                                        <span className="caption">Balance: 0.0</span>
                                   </div>
                                   <div className="swap__inner-body-row-content">
                                        <button type="button" className="button button--text">
                                             Max
                                        </button>
                                        <SelectCoins coins = { coins } selected = { currency1 } setCurrency = { setCurrency1 } />
                                   </div>
                              </div>
                              <div className="swap__inner-body-rowButton">
                                   <button type="button">
                                        <img src={ imgFolder + 'icons/swap.svg'} alt="swap" />
                                   </button>
                              </div>
                              <div className="swap__inner-body-row">
                                   <div className="swap__inner-body-row-balance">
                                        <p className="para para--semibold">To</p>
                                        <GradientInput active={false} />
                                        <span className="caption">Balance: 0.0</span>
                                   </div>
                                   <div className="swap__inner-body-row-button">
                                        <div className="button button--primary" onClick={()=> props.changeModal('SELECT_TOKEN') }>
                                             Select a Token
                                        </div>
                                   </div>
                              </div>
                              <div className="swap__inner-body-button">
                                   <button type="button" className="button button--large" disabled>
                                        Enter an Amount
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

const mapStateToProps = (state) => ({
     nav: state.app.navState,
});

const mapDispatchToProps = (dispatch) => ({
     navTo: (nav) => dispatch({ type: 'NAV_TO', nav: nav }),
     changeModal:   (modal) => dispatch({ type: 'CHANGE_MODAL', modal : modal }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(Swap);
