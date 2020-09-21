
/*import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
//import setCurrentUser from 'CurrentUser';
import {
 
  GET_ERRORS,
  SET_CURRENT_USER,
} from './types';

import { decode } from 'jsonwebtoken';
//import { decode } from 'jsonwebtoken';

// Load User
/*export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
*/


// Login User

/*
export const loginUser = (userData) =>  dispatch => {
  axios
  .post('/api/users/login',userData)
  .then(res =>{
    const { token } = res.data;
   localStorage.setItem('jwtToken',token);
    //set token to auth header
    setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
  })
 .catch(err =>
     dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }
    )
    );

}
  export const setCurrentUser = decoded =>{
    return{
      type:SET_CURRENT_USER,
      payload:decoded
    };
  };
  
 */

  
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import axios from 'axios';
export const loginUser = (userData) => dispatch => {
    axios.post('/api/users/login', userData)
    .then(res => {
        // Save to localstorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));

    })
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};

// set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}
