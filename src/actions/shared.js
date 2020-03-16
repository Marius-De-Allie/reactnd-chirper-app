import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading} from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis';

const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    // Call API (Async request).
    return getInitialData()
    .then(({users, tweets}) => {
      // dispatch RECEIVE_USERS action creator.
      dispatch(receiveUsers(users));
      // dispatch RECEIVE_TWEETS action creator.
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    })
  }

};

export {handleInitialData};