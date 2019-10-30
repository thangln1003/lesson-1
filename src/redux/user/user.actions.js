
import constant from './constant';

const { SET_CURRENT_USER } = constant;

// This function returns an object
export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});