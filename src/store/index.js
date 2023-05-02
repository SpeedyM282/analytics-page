import { createStore, combineReducers } from "redux";
import {menuReducer} from './reducers/menuReducer';
import {productReducer} from './reducers/productReducer';

const rootReducer = combineReducers({ menuReducer, productReducer });

const store = createStore(rootReducer);

export default store;