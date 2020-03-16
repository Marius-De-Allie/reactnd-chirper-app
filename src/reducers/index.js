import { combineReducers } from 'redux';
import usersReducer from './users';
import tweetsReducer from './tweets';
import authedUserReducer from './authedUser';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  users: usersReducer,
  tweets: tweetsReducer,
  authedUser: authedUserReducer,
  loadingBar: loadingBarReducer
});

