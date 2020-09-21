const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
//load usermodel

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/Login');

const User = require('../../models/User');

router.get('/test',(req,res) => res.json({msg: "User Works"})
);
router.post('/register',(req,res) =>{
    const{ errors, isValid }= validateRegisterInput(req.body);
   //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }
    User.findOne({name: req.body.name})
    .then(user => {
        if(user){
            errors.name = 'name already exits';
            return res.status(400).json(errors);
            //return res.status(400).json({name :'name already exits'});

        }
         const newUser = new User({
                name:req.body.name,
                password:req.body.password
            });
            bcrypt.genSalt(10, (err,salt) =>{
                bcrypt.hash(newUser.password,salt,(err,hash) =>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                })
            })
        
    
        })
    });


    router.post('/login', (req,res) => {

        const{ errors, isValid }= validateLoginInput(req.body);
   //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }
    

      //  const name = req.body.name;
        const password = req.body.password;

        User.findOne({name:req.body.name}).then(user => {
            if(!user){
                errors.name = 'User not found';
                return res.status(400).json(errors);
               
               // return res.status(404).json({name :'User not found'});
            }
           bcrypt.compare(password, user.password).then(isMatch => {
                if(isMatch){
                    res.json({msg: 'Success'});
                }else{
                return res.status(400).json({password: 'Password incorrect'});
                }
            })
         /*   try{
                bcrypt.compare(req.body.password,user.password)
            }catch{
                res.status(500).send()
            }*/
        })
    });


module.exports = router;