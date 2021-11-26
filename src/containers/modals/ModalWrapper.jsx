import React from 'react';
import { connect } from 'react-redux';

function ModalWrapper(props) {
     return (
          <section className={`modal ${props.addClass ?? ''}`}>
               <div className="modal__inner">
                    <div className={`modal__inner-header ${ props.back ? 'back' : ''}`}>
                         {props.back ? (
                              <button
                                   type="button"
                                   className="modal__inner-header-back"
                                   onClick={() => props.changeModal(props.prevModal)}
                              ></button>
                         ) : (
                              ''
                         )}
                         {props.title !== undefined ? (
                              <h5 className="h5 h5--thin">{props.title}</h5>
                         ) : (
                              ''
                         )}
                         {props.disableClose ? (
                              ''
                         ) : (
                              <button
                                   type="button"
                                   className="modal__inner-header-close"
                                   onClick={() => props.changeModal(null)}
                              ></button>
                         )}
                    </div>
                    {props.children}
               </div>
          </section>
     );
}

const mapStateToProps = (state) => ({
     prevModal: state.app.prevModal,
});

const mapDispatchToProps = (dispatch) => ({
     changeModal: (modal) => dispatch({ type: 'CHANGE_MODAL', modal: modal }),
});

// connect porps for this page from state store
export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
