import React, { useState, useEffect, useRef } from 'react';
import { manageIco } from 'assets/SVG';
import { getUserTokens } from 'moduls/usersModul';
import ModalTokenListItem from './ModalTokenListItem';
import { searchToken as searchTokenApi } from 'moduls/tokenModuls';
import { connect } from 'react-redux';
import Loader from 'components/LoaderSpinner';
import ModalTokenListCommon from './ModalTokenListCommon';

function ModalTokenList(props) {
     const [tokenList, setTokenList] = useState(null);
     const [forImport, setForImport] = useState(false);
     var userTokenList = useRef(null);
     console.log(props);
     // search field typed function
     const searchToken = (text) => {
          if (text === '') {
               setTokenList(userTokenList.current);
               setForImport(false);
          } else {
               setTokenList(null); // to see loading page

               searchTokenApi(text).then((response) => {
                    setTokenList(response);
                    setForImport(true);
               });
          }
     };

     // after component first mounted
     // get token List from userModul
     // and update page state
     useEffect(() => {
          getUserTokens().then((response) => {
               userTokenList.current = response;
               setTokenList(response);
          });
     }, []);

     // onClicked a function set selected in store
     // and close the modals
     const itemSelected = (id) => {
          // props.swapCoins(from, to) is came from swap.jsx or where ModalTokenList called
          // props.swapFrom || props.swapTo is came from swap.jsx or where ModalTokenList called
          // used to check for which we are choosing
          // props.fromToken ||  props.toToken comes from redux store
          // here we set redux store from token and to token ids  to use them in parrent component
          // if not for import
          if (!forImport) {
               if (props.swapFrom) {
                    props.swapCoins(id, props.toToken);
               } else if (props.swapTo) {
                    props.swapCoins(props.fromToken, id);
               }
               props.changeModal(null);
          }
     };

     return (
          <div className="modal__inner-body">
               <div className="tokenList">
                    <div className="tokenList__search">
                         <input
                              type="text"
                              className="input"
                              placeholder="Search name or paste address"
                              onChange={(e) => searchToken(e.target.value)}
                         />
                    </div>
                    {props.commonArr !== null && props.commonArr !== undefined ? (
                         <ModalTokenListCommon title={props.commonTitle} commonArr={props.commonArr} />
                    ) : (
                         ''
                    )}
                    <div className="tokenList__body">
                         {tokenList !== null && !forImport ? (
                              tokenList.map((token) => {
                                   return (
                                        <ModalTokenListItem
                                             key={`userTokens-${token.id}`}
                                             image={token.image}
                                             title={token.titleShort}
                                             para={token.amount}
                                             subtitle={token.title}
                                             clickFunc={() => {
                                                  itemSelected(token.id);
                                             }}
                                        />
                                   );
                              })
                         ) : tokenList !== null && forImport ? (
                              tokenList.map((token) => (
                                   <ModalTokenListItem
                                        key={`searchTokens-${token.id}`}
                                        id={token.id}
                                        forImport={forImport}
                                        image={token.image}
                                        title={token.titleShort}
                                        para={token.amount}
                                        subtitle={token.title}
                                        cImage={token.image}
                                        importToken={(id) => {
                                             props.changeModal('IMPORT_TOKEN', { tokenId: id });
                                        }}
                                   />
                              ))
                         ) : (
                              <Loader />
                         )}
                    </div>
                    <div className="tokenList__footer">
                         <button
                              className="button button--text button--large"
                              onClick={() => {
                                   props.changeModal('MANAGE_SELECT_TOKEN');
                              }}
                         >
                              {manageIco}
                              Manage
                         </button>
                    </div>
               </div>
          </div>
     );
}

const mapStateToProps = (state) => ({
     swapdata: state.app.swap,
     fromToken: state.app.swap.fromToken,
     toToken: state.app.swap.toToken,
});

const mapDispatchToProps = (dispatch) => ({
     changeModal: (modal, modalProps = null) =>
          dispatch({ type: 'CHANGE_MODAL', modal: modal, modalProps: modalProps }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(ModalTokenList);
