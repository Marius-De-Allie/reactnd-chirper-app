// ACTION CREATOR TYPE VARIABLE DECLARATION
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});