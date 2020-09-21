import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

class Landing extends Component  {
 /* if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }*/
render(){
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'></h1>
          <p className='lead'>
          
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

}

export default (Landing);
