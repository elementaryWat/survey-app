import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import survey from './survey';
import sContract from './sContract';

const reducer = combineReducers({
    survey,
    sContract
});

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const composedEnhancers = composeWithDevTools(...[middlewareEnhancer]);

    const store = createStore(reducer, composedEnhancers);

    return store;
}
