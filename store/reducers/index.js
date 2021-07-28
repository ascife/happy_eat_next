import {combineReducers} from 'redux';
import productReducer from './product';
import persistReducer from './persist';

const rootReducers = combineReducers({
  productReducer,
  persistReducer
})

export {rootReducers};