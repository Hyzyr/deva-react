import React from 'react';
import { connect } from 'react-redux';

function ModalWrapper(props) {
     return (
          <section className={`modal ${props.addClass ?? ''}`}>
               <div className="modal__inner">
                    <div className="modal__inner-header">
                         {props.back ? (
                              <button type="button" className="modal__inner-header-back"
                                onClick = {()=> props.changeModal(props.modal) } 
                              ></button>
                         ) : (
                              ''
                         )}
                         <h5 className="h5 h5--thin">{props.title}</h5>
                         <button
                              type="button"
                              className="modal__inner-header-close"
                              onClick={props.changeModal}
                         ></button>
                    </div>
                    {props.children}
               </div>
          </section>
     );
}

const mapStateToProps = (state) => ({
    prevModal: state.app.modalPrev,
});

const mapDispatchToProps = (dispatch) => ({
     changeModal: (modal) => dispatch({ type: 'CHANGE_MODAL', modal: null }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
