import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getWalletsList } from 'moduls/walletsModul';
import ModalWalletDetail from './ModalWalletDetail';
import Loader from 'components/LoaderSpinner';

function ModalWallet(props) {
     const navigate = useNavigate();
     const [walletList, setWalletList] = useState(null);
     const [selectedWallet, setSelectedWallet] = useState(null);

     // after component first mounted
     // get wallet List from walletsModul
     // and update page state
     useEffect(() => {
          getWalletsList().then((response) => {
               setWalletList(response);
          });
     }, []);

     // on wallet selected change page to sign in
     useEffect( () => {
          if (selectedWallet !== null) {
               props.changeModal('LOADING');
               setTimeout(()=>navigate('/signin'), 1000);
          }
     }, [selectedWallet]);

     return (
          <>
               <div className="modal__inner-body">
                    {walletList ? (
                         walletList.map((wallet) => (
                              <ModalWalletDetail
                                   key={wallet.id}
                                   wallet={{
                                        ...wallet,
                                        selected: selectedWallet && selectedWallet.id === wallet.id,
                                   }}
                                   setSelected={setSelectedWallet}
                              />
                         ))
                    ) : (
                         <Loader />
                    )}
               </div>
               <div className="modal__inner-footer">
                    <p className="para">
                         <span>New to Ethereum?</span>
                         <a href="#" className="link">
                              Learn more about wallets
                         </a>
                    </p>
               </div>
          </>
     );
}

const mapStateToProps = (state) => ({
     modal: state.app.modalCurrent,
});

const mapDispatchToProps = (dispatch) => ({
     changeModal: (modal) => dispatch({ type: 'CHANGE_MODAL', modal: modal }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(ModalWallet);
