
const initialState = {
    navState : 'SWAP',
    modalCurrent : null,
}

const appReducer = ( state = initialState, action )=>{
    
    switch (action.type) {
        case 'NAV_TO':
            return {
                ...state, 
                navState: action.nav,
            }
        case 'CHANGE_MODAL':
            return {
                ...state, 
                prevModal: state.modal,
                modalCurrent: action.modal,
            }
    }
    
    return state;
}

export default appReducer;
