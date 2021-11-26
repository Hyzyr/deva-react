import React, { useState } from 'react';
import { connect } from 'react-redux';
import PoolLiquidity from './PoolLiquidity';
import PoolCreatePair from './PoolCreatePair';
import ModalWrapper from 'containers/modals/ModalWrapper';
import ModalTransactions from 'containers/modals/ModalTransactions';
import ModalTokenList from 'containers/modals/modalTokenList/ModalTokenList';
import ModalLoading from 'containers/modals/ModalLoading';
import ModalImportToken from 'containers/modals/ModalImportToken';
import ModalManageToken from 'containers/modals/modalManageToken/ModalManageToken';
import ModalConfirmSwap from 'containers/modals/ModalConfirmSwap';
import ModalConfirmSwapExact from 'containers/modals/ModalConfirmSwapExact';
import ModalMessage from 'containers/modals/ModalMessage';
import { getUserTokens } from 'moduls/usersModul';
import PoolAddLiquidity from './PoolAddLiquidity';

function Pool(props) {
     const [tab, setTab] = useState('LIQUIDITY');
     
     return (
          <>
               {tab === 'LIQUIDITY' ? (
                    <PoolLiquidity createPairFunc={() => setTab('CREATE_PAIR')} addLiqFunc={() => setTab('ADD_LIQUIDITY')} />
               ) : tab === 'CREATE_PAIR' ? (
                    <PoolCreatePair backFunc={() => setTab('LIQUIDITY')} />
               ) : tab === 'ADD_LIQUIDITY' ? 
                    <PoolAddLiquidity/>
                :(
                    'unknown tab'
               )}

               {/******** popup Modals ********/}
               {props.modal === 'SWAP_SETTINGS' ? (
                    <ModalWrapper title={'Transaction Settings'}>
                         <ModalTransactions />
                    </ModalWrapper>
               ) : (
                    ''
               )}
               {props.modal === 'SELECT_TOKEN' ? (
                    <ModalWrapper title={'Select a Token'} addClass={'modal--tokenList'}>
                         <ModalTokenList
                              {...props.modalProps}
                              swapCoins={props.swapCoins}
                              commonTitle={'Common bases'}
                              commonArr={getUserTokens}
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
     swapCoins: (from, to) => dispatch({ type: 'CHANGE_CREATE_PAIR', fromToken: from, toToken: to }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(Pool);
