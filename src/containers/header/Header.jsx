import React from 'react';
import { connect } from 'react-redux';
import Button from 'components/Button';
import NavButton from 'components/nav/NavButton';
import Nav from 'components/nav/Nav';
import {imgFolder} from 'Global';

const Header = (props) => {
     return (
          <header className="header">
               <div className="auto__container">
                    <div className="header__inner">
                         <div className="header__inner-logo">
                              <img src={ imgFolder + 'deva-logo.svg'} alt="logo" />
                         </div>
                         <Nav addClass = "header__inner-nav">
                              <NavButton active={props.nav === 'SWAP' } clickFunc={()=> props.navTo('SWAP')} >Swap</NavButton>
                              <NavButton active={props.nav === 'POOL' } clickFunc={()=> props.navTo('POOL')} >Pool</NavButton>
                              <NavButton active={props.nav === 'DEG'  } clickFunc={()=> props.navTo('DEG') } >DeG </NavButton>
                              <NavButton active={props.nav === 'VOTE' } clickFunc={()=> props.navTo('VOTE')} >Vote</NavButton>
                         </Nav>
                         <div className="nav"></div>
                         <div className="header__inner-buttons">
                              <Button size="lg" primary={true}>
                                   0 DeV
                              </Button>
                              <Button size="lg" clickFunc={()=> props.changeModal('CONNECT_WALLET') } >Connect to a wallet</Button>
                              <Button size="lg" icon={true}>
                                   <img src={ imgFolder + 'icons/sun.svg'} alt="light" />
                              </Button>
                         </div>
                         <Button size="lg" icon={true} addStyle="burger">
                              <img src={ imgFolder + 'icons/dot-more.svg'} alt="more" />
                         </Button>
                    </div>
               </div>
          </header>
     );
};

const mapStateToProps = (state) => ({
     nav: state.app.navState,
});

const mapDispatchToProps = (dispatch) => ({
     navTo:   (nav) => dispatch({ type: 'NAV_TO', nav : nav }),
     changeModal:   (modal) => dispatch({ type: 'CHANGE_MODAL', modal : modal }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(Header);
