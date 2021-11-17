import React from 'react';
import { connect } from 'react-redux';
import Header from './containers/header/Header';
import Swap from 'containers/swap/Swap';
import ModalWallet from 'containers/modals/ModalWallet';
import ModalWrapper from 'containers/modals/ModalWrapper';
import ModalTransactions from 'containers/modals/ModalTransactions';
import ModalImportToken from 'containers/modals/ModalImportToken';
import ModalManageToken from 'containers/modals/ModalManageToken';

function App(props) {
     return (
          <div className="App">
               <Header />
               {props.nav === 'SWAP' ? <Swap /> : ''}
               {props.modal === 'CONNECT_WALLET' ? (
                    <ModalWrapper title={'Connect to Wallet'}>
                         <ModalWallet />
                    </ModalWrapper>
               ) : (
                    ''
               )}
               {props.modal === 'SWAP_SETTINGS' ? (
                    <ModalWrapper title={'Transaction Settings'}>
                         <ModalTransactions />
                    </ModalWrapper>
               ) : (
                    ''
               )}
               {props.modal === 'SELECT_TOKEN' ? (
                    <ModalWrapper title={'Manage'} >
                         <ModalManageToken /> 
                    </ModalWrapper>
               ) : (
                    ''
               )}
          </div>
     );
}

const mapStateToProps = (state) => ({
     nav: state.app.navState,
     modal: state.app.modalCurrent,
});

const mapDispatchToProps = (dispatch) => ({
     navTo: (nav) => dispatch({ type: 'NAV_TO', nav: nav }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(App);
