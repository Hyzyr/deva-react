const initialState = {
    text : 'hello world',
}

const userReducer = ( state = initialState, action )=>{
    if(action.type === 'ECHO') {
        console.log(state.text);
        return {
            ...state, 
            text: state.text + ' ❤',
        }
    }
    return state;
}

export default userReducer;
