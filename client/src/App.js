import React from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser} from './actions/authActions';

import {Provider} from 'react-redux';
//import {createStore, applyMiddleware } from 'redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Welcome from './Welcome';
//import logo from './logo.svg';
import './App.css';

//check for token
if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  //decode token and get user data
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and is Authenticated
  store.dispatch(setCurrentUser(decoded));

}


//const store = createStore(()=> [],{}, applyMiddleware());

function App() {
  return (
    <Provider store={ store }>
    <Router>
    <div className="App">
      <h1>My react App</h1>
 
    <Route exact path="/" component={Landing} />
    <div className="container">
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/Welcome" component={Welcome}/>
     

    </div>
    <Landing/>
     </div>
     </Router>
     </Provider>
  );
}

export default App;
