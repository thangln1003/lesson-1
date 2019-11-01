
import UserActionTypes from './user.types';

const { SET_CURRENT_USER } = UserActionTypes;

// This function returns an object
export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});