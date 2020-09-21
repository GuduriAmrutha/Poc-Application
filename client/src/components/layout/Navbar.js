import React,{ Component} from 'react';
//import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
//import { logout } from '../../actions/auth';

class Navbar extends Component {
 
/*  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
*/
  
render(){
  return (
    <nav className="navbar bg-dark">
      <div className="container">
      <h1>
      <Link to="/">
          <i className="fas fa-code" /> Poc-App
        </Link>
        </h1>
      
    <ul className="navbar-nav ml-auto">
      <li classname="nav-item">
        <Link className="nav-link" to="/register">Signup</Link>
        </li>
        <li classname="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
        </li>
        
    </ul>
    </div>
    </nav>
  );

  }
}




export default Navbar;
