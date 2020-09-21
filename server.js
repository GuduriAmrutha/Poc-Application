const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const users = require('./routes/api/users');
//const post =require('./routes/api/post');
//const profiles =require('./routes/api/profiles');

const app =express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

//connect to MONGODB

mongoose.connect(db).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/',(req,res)=> res.send('Hello'));

//use routes

app.use('/api/users',users);
//app.use('/api/post',post);
//app.use('/api/profiles',profiles);

const port = process.env.PORT || 5000;
app.listen(port ,() => console.log('SERVER RUNNING ON PORT ${port}'));