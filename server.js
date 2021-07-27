const express = require('express');
const path = require('path');
const app = express();

const homerun = require('./routes/home');
const userrun = require('./routes/user');



app.use(express.static(path.join(__dirname, 'public')));

app.get('/user', userrun);

app.use('/' , homerun);


app.listen(3000);