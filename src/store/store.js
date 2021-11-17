import { createStore, combineReducers } from 'redux';
import userReducer from 'store/reducers/userReducer';
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
     user: userReducer,
     app: appReducer,
});

export const store = createStore(rootReducer);
