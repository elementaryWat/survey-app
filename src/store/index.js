import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import survey from './survey';

const reducer = combineReducers({
    survey,
});

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const composedEnhancers = composeWithDevTools(...[middlewareEnhancer]);

    const store = createStore(reducer, composedEnhancers);

    return store;
}
