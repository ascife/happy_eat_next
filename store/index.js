import {createStore, applyMiddleware} from 'redux';
import {rootReducers} from './reducers';
import {loadState, saveState} from './localstorage';
import thunk from 'redux-thunk';

//state localstorage
const persistedState = loadState();

const store = createStore(
  rootReducers,
  persistedState,
  applyMiddleware(thunk)
)

store.subscribe(()=> {
  saveState({
    persistedReducer: 
    store.getState()
    .persistedReducer
  })
})

export {store};