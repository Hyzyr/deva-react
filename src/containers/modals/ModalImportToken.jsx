import React, { useState, useEffect } from 'react';
import { imgFolder } from 'Global';
import { getTokenById } from 'moduls/tokenModuls';
import { connect } from 'react-redux';
import Loader from 'components/LoaderSpinner';

function ModalImportToken(props) {
     const [token, setToken] = useState(null);

     // after component first mounted
     // get fulkl token info from tokenModul
     // and update page state
     useEffect(() => {
          getTokenById(props.tokenId).then((response) => {
               console.log(response);
               // userTokenList.current = response;
               setToken(response);
          });
     }, []);

     return token === null ? (
          <div className="modal__inner-body">
               <Loader />
          </div>
     ) : (
          <div className="modal__inner-body">
               <div className="importToken">
                    <div className="importToken__data">
                         <div className="importToken__data-ico">
                              <img src={imgFolder + token.image} alt="eth" />
                         </div>
                         <div className="importToken__data-content">
                              <div className="importToken__data-content-title">
                                   <span className="title2">{token.titleShort}</span>
                                   <span className="para">{token.title}</span>
                              </div>
                              <div className="importToken__data-content-code">{token.code}</div>
                              <div className="importToken__data-content-caption">
                                   <span>{token.founders}</span>
                                   <div className="importToken__data-content-caption-ico">
                                        <img src={imgFolder + token.image} alt="eth" />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="importToken__warning">
                         <div className="importToken__warning-ico">
                              <img src={imgFolder + 'icons/warning.svg'} alt="warning" />
                         </div>
                         <h5 className="importToken__warning-title h5 h5--thin">
                              Trade at your own risk!
                         </h5>
                         <p className="importToken__warning-para para">
                              Anyone can create a token, including creating fake versions of
                              existing tokens that claim to represent projects. If you purchase this
                              token, you may not be able to sell it back
                         </p>
                    </div>
                    <div className="importToken___footer">
                         <button
                              className="button button--primary"
                              onClick={() => props.changeModal(null)}
                         >
                              Import
                         </button>
                    </div>
               </div>
          </div>
     );
}

const mapDispatchToProps = (dispatch) => ({
     changeModal: (modal, modalProps = null) =>
          dispatch({ type: 'CHANGE_MODAL', modal: modal, modalProps: modalProps }),
});

// connect porps for this page from state store
export default connect(null, mapDispatchToProps)(ModalImportToken);
