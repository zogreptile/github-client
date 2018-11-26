import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initStore = {
  query: '',
  totalUsers: 0,
  users: [],
  isDataFetching: false,
  userInfo: {},
  repos: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initStore,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

export default store;
