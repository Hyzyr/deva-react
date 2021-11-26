import React from 'react';
import { imgFolder } from 'Global';
import { connect } from 'react-redux';

import Header from './header/Header';
import Pool from './pool/Pool';
import Swap from './swap/Swap';
import FlyingMessage from 'components/nav/flyingMessage/FlyingMessage';
import ModalWrapper from './modals/ModalWrapper';
import ModalTransactions from './modals/ModalTransactions';
import ModalWallet from './modals/modalWallet/ModalWallet';

export const navTypes = {
     swap: 'SWAP',
     pool: 'POOL',
     deg: 'DEG',
     vote: 'VOTE',
};
function Home(props) {
     return (
          <div className="App">
               <Header />
               {/* flying message */}
               {props.notification !== null && props.notification !== undefined ? (
                    <FlyingMessage />
               ) : (
                    ''
               )}
               {/* flying message end */}

               {/******** navigation tabs ********/}
               {props.nav === navTypes.swap ? <Swap /> : ''}
               {props.nav === navTypes.pool ? <Pool /> : ''}
               {/******** navigation tabs end ********/}

               {/******** popup Modals ********/}
               {props.modal === 'CONNECT_WALLET' ? (
                    <ModalWrapper title={'Connect to Wallet'}>
                         <ModalWallet />
                    </ModalWrapper>
               ) : (
                    ''
               )}
               {/******** popup Modals ********/}
          </div>
     );
}

const mapStateToProps = (state) => ({
     nav: state.app.navState,
     modal: state.app.modalCurrent,
     modalProps: state.app.modalProps,
});

const mapDispatchToProps = (dispatch) => ({
     navTo: (nav) => dispatch({ type: 'NAV_TO', nav: nav }),
     changeModal: (modal, modalProps = null) =>
          dispatch({ type: 'CHANGE_MODAL', modal: modal, modalProps: modalProps }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
