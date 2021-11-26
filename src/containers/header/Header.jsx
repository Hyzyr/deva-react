import React from 'react';
import { connect } from 'react-redux';
import Button from 'components/Button';
import NavButton from 'components/nav/NavButton';
import Nav from 'components/nav/Nav';
import { imgFolder } from 'Global';
import { navTypes } from 'containers/Home';

const Header = (props) => {
     return (
          <header className="header">
               <div className="auto__container">
                    <div className="header__inner">
                         <div className="header__inner-logo">
                              <img src={imgFolder + 'deva-logo.svg'} alt="logo" />
                         </div>
                         <Nav addClass="header__inner-nav">
                              <NavButton
                                   active={props.nav === navTypes.swap}
                                   clickFunc={() => {
                                        props.changeModal(null);
                                        props.navTo(navTypes.swap);
                                   }}
                              >
                                   Swap
                              </NavButton>
                              <NavButton
                                   active={props.nav === navTypes.pool}
                                   clickFunc={() => {
                                        props.changeModal(null);
                                        props.navTo(navTypes.pool);
                                   }}
                              >
                                   Pool
                              </NavButton>
                              <NavButton
                                   active={props.nav === navTypes.deg}
                                   clickFunc={() => {
                                        props.changeModal(null);
                                        props.navTo(navTypes.deg);
                                   }}
                              >
                                   DeG{' '}
                              </NavButton>
                              <NavButton
                                   active={props.nav === navTypes.vote}
                                   clickFunc={() => {
                                        props.changeModal(null);
                                        props.navTo(navTypes.vote);
                                   }}
                              >
                                   Vote
                              </NavButton>
                         </Nav>

                         <div className="header__inner-buttons">
                              <Button size="lg" primary={true}>
                                   {props.user ? Math.ceil(props.userData.dev) : 0} DeV
                              </Button>
                              {props.user ? <Button size="lg">{props.userData.eth}</Button> : ''}

                              {props.user ? (
                                   <Button size="lg">{props.userData.id}</Button>
                              ) : (
                                   <Button
                                        size="lg"
                                        clickFunc={() => props.changeModal('CONNECT_WALLET')}
                                   >
                                        Connect to a wallet
                                   </Button>
                              )}
                              <Button size="lg" icon={true}>
                                   <img src={imgFolder + 'icons/sun.svg'} alt="light" />
                              </Button>
                         </div>
                         <Button size="lg" icon={true} addStyle="burger">
                              <img src={imgFolder + 'icons/dot-more.svg'} alt="more" />
                         </Button>
                    </div>
               </div>
          </header>
     );
};

const mapStateToProps = (state) => ({
     nav: state.app.navState,
     user: state.user.status,
     userData: state.user.data,
});

const mapDispatchToProps = (dispatch) => ({
     navTo: (nav) => dispatch({ type: 'NAV_TO', nav: nav }),
     changeModal: (modal) => dispatch({ type: 'CHANGE_MODAL', modal: modal }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(Header);
