const initialState = {
     status: false, // user not logged in initial state
     data: {}, // no data for user initial check available data in userModul
};

const userReducer = (state = initialState, action) => {
     switch (action.type) {
          case 'USER_SIGNED_IN':
               return {
                    ...state,
                    status: action.status,
               };
          case 'USER_DATA':
               return {
                    ...state,
                    prevModal: state.modal,
                    data: action.data,
               };
          default:
               break;
     }
     return state;
};

export default userReducer;
