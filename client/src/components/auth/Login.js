import React, { Component } from 'react'
//import axois from 'axios';
import PropTypes from 'prop-types';
import nextProps from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import classnames from 'classnames';
import '../../../src/Login.css';
import HeaderPage from '../../../src/Header';
class Login extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:'',
            errors:{}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    /*componentDidMount() {
        if(this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
      }*/
    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/Welcome#/dashboard');
        }


        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
    onSubmit(e) {
        e.preventDefault();

        const userData = {
           name: this.state.name,
            password: this.state.password
        };
        if (this.state.password === 'amruthaadmin' && this.state.name === 'amruthaadmin') {
            this.setState({
                isValidForm: true
            });
            this.props.history.push('/Welcome#/dashboard');

        }
     /*   loginUser(userData).then((res) => {
            if (res) {
              this.props.history.push('/Welcome#/dashboard');
            }
          });*/
    //  this.props.loginUser(userData);
    //  this.props.history.push('/Welcome#/dashboard');

      if(this.props.loginUser(userData)){
      this.props.history.push('/Welcome#/dashboard');
      }
      /*  axois.post('/api/user/login',user)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))*/
    }
    render() {
        const {errors} =this.state; 

       // const {userData} =this.props.auth;
       return(
        <div className ="login">
            <div> <HeaderPage />
            </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                      <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text"
                             className={classnames('form-control form-control-lg',{
                                'is-invalid' : errors.name
                             })
                            }
                             placeholder="Enter your ID" name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            />  
                            {errors.name &&(
                                <div className="invalid-feedback">{errors.name}</div>
                            )

                            }
                     </div>
                        <div className="form-group">
                            <input type="password" 
                            className={classnames('form-control form-control-lg',{
                                'is-invalid' : errors.password
                             })
                            }placeholder="password" name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            
                            />  
                            {errors.password &&(
                                <div className="invalid-feedback">{errors.password}</div>
                            )

                            }
                         </div>
                         <input type="submit" className="btn btn-info btn-block mt-4" 
                       
                         />  
                         
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
    }
}
Login.propTypes = {
    loginUser : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
    
}


const mapStateToProps = (state) =>({
    auth :state.auth,
    errors: state.errors

});

export  default connect(mapStateToProps,{loginUser}) (Login);

