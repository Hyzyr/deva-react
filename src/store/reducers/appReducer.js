import {navTypes} from "containers/Home";

const initialState = {
     navState: navTypes.pool,
     modalCurrent: null,
     prevModal: null,
     swap: {
          fromToken: 1, // default token to show in swap page
          toToken: null,
     },
     createPair: {
          fromToken: 1, // default token to show in swap page
          toToken: null,
     },
};

const appReducer = (state = initialState, action) => {
     switch (action.type) {
          case 'NAV_TO':
               return {
                    ...state,
                    navState: action.nav,
               };
          case 'SWAP_TO_TOKEN':
               return {
                    ...state,
                    navState: action.token,
               };
          case 'CHANGE_SWAP_COINS':
               return {
                    ...state,
                    swap: {
                         fromToken: action.fromToken,
                         toToken: action.toToken,
                    },
               };
          case 'CHANGE_CREATE_PAIR':
               return {
                    ...state,
                    createPair: {
                         fromToken: action.fromToken,
                         toToken: action.toToken,
                    },
               };
          case 'CHANGE_MODAL':
               return {
                    ...state,
                    prevModal: state.modalCurrent,
                    modalCurrent: action.modal,
                    modalProps: action.modalProps,
               };
          default:
               break;
     }

     return state;
};

export default appReducer;
