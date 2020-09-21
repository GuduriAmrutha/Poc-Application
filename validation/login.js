const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.password = !isEmpty(data.password) ? data.password : '';
   
    if(!Validator.isLength(data.name, {min: 8,max: 20})){
        errors.name = 'Name must be between 8 and 20 characters';
    }

    if(Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'password field is required';
    }
    return{
        errors,
        isValid:isEmpty(errors)
    };
};