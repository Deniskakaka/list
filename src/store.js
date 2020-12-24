import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/main.reducer'; 


const reducer = combineReducers({
	main: mainReducer
});

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;