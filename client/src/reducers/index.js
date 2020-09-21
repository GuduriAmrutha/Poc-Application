
 
import { combineReducers } from 'redux';

//import alert from './alert';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
 // alert,
  auth : authReducer,
 errors : errorReducer
});
