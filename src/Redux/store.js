import {createStore, combineReducers, applyMiddleware} from 'redux';
import dataReducer from './dataReducer';
import queryReducer from "./queryReducer";
import thunk from 'redux-thunk';  // redux middleware for async actions and api calls

const middleware = [thunk];

const allReducers = combineReducers({results: dataReducer, queries: queryReducer}); // like a root reducer
// sometimes would have this in another filr or folder especially hen there are many reducers to combine.
// its just good practice to have a root reducer or to use redux's combine reducer which I did here.

const initialState = {     
    results: [],
    queries: [],
};

const store = createStore(allReducers, initialState, applyMiddleware(...middleware));

export default store;

