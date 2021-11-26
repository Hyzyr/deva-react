import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PasswordInput from 'components/PasswordInput';
import ModalQr from 'containers/modals/ModalQr';
import ModalWrapper from '../modals/ModalWrapper';
import { qrIco } from 'assets/SVG';
import { useNavigate } from 'react-router-dom';
import ModalLoading from 'containers/modals/ModalLoading';
import { getUserData } from 'moduls/usersModul';

function Welcome(props) {
     const [password, setPassword] = useState(null);
     const navigate = useNavigate();

     // turn all modal off when first mounted
     useEffect(() => {
          props.changeModal(null);
     }, []);

     // onClick for Unlock button
     // load user from userModul
     // update app state*(redux)
     // userSigned in as true
     const signupAndRedirect = () => {
          props.changeModal('LOADING');

          getUserData().then((response) => {
               props.setSignIn(true);
               props.setUserData({ ...response });
               props.changeModal(null);
               navigate('/');
          });
     };

     return (
          <div className="App">
               <section className="welcome">
                    <div className="auto__containerSm">
                         <div className="welcome__inner">
                              <div className="welcome__inner-header">
                                   <h3 className="h3 h3--thin">Welcome Back!</h3>
                                   <h6 className="h6 h6--thin">The decentralized web awaits</h6>
                              </div>
                              <div className="welcome__inner-body">
                                   <div className="welcome__inner-body-row">
                                        <PasswordInput name="password" getValue={setPassword} />

                                        <button
                                             type="button"
                                             className="button button--icon"
                                             onClick={() => props.changeModal('SCAN_QR')}
                                        >
                                             {qrIco}
                                        </button>
                                   </div>
                                   <div className="welcome__inner-body-button">
                                        <button
                                             className="button button--large button--primary"
                                             type="button"
                                             disabled={password === null || password === ''}
                                             onClick={signupAndRedirect}
                                        >
                                             Unlock
                                        </button>
                                   </div>
                              </div>

                              <div className="welcome__inner-footer">
                                   <p className="para">
                                        <span>New to Ethereum?</span>
                                        <a href="#" className="link">
                                             Learn more about wallets
                                        </a>
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               {props.modal === 'LOADING' ? (
                    <ModalWrapper
                         disableClose={true}
                         addClassName={'modal--loading'}
                         title={'Verifying ...'}
                    >
                         <ModalLoading />
                    </ModalWrapper>
               ) : (
                    ''
               )}

               {props.modal === 'SCAN_QR' ? (
                    <ModalWrapper
                         addClassName={'modal--qrcode'}
                         title={
                              <>
                                   Scan QR code with a <br />
                                   DeGe compatible walle{' '}
                              </>
                         }
                    >
                         <ModalQr />
                    </ModalWrapper>
               ) : (
                    ''
               )}
          </div>
     );
}

const mapStateToProps = (state) => ({
     modal: state.app.modalCurrent,
});

const mapDispatchToProps = (dispatch) => ({
     changeModal: (modal) => dispatch({ type: 'CHANGE_MODAL', modal: modal }),
     setSignIn: (status) => dispatch({ type: 'USER_SIGNED_IN', status: status }),
     setUserData: (data) => dispatch({ type: 'USER_DATA', data: data }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
