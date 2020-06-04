import {createStore, applyMiddleware} from 'redux';
import RootState from './Store'
//import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk';
/*para produccion */

const store = createStore(RootState, applyMiddleware(thunk));

// const store = createStore(RootState, composeWithDevTools(
//     applyMiddleware(thunk)
// ));


export default store;