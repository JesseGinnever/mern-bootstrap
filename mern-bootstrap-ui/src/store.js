import { createStore } from 'redux';
import rootReducer from  './Reducers';
export default(initialState) => {
    return createStore(rootReducer, initialState);
}