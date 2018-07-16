'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {PORT} = require('../env/config');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', ()=> {
	console.log('sending html');

})



app.listen(PORT, function() {
	console.log(`app listening on port ${PORT}`);
});