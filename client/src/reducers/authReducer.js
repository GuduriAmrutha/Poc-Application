import isEmpty from '../validation/is-empty';
import {
 // REGISTER_SUCCESS,
  //REGISTER_FAIL,
  SET_CURRENT_USER 
  //LOGIN_FAIL,
  //LOGOUT,
  //ACCOUNT_DELETED
} from '../actions/types';

const initialState = {
 // token: localStorage.getItem('token'),
  isAuthenticated: false,
  //loading: true,
  user: {}
};

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_CURRENT_USER:
      return{
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
}
