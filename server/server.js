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
app.get('/resume', (req,res) => {
	console.log('contact made');
	const file = __dirname + `/JimTisdaleResume.docx`;
	console.log(__dirname +'/JimTisdaleResume.docx');
	res.download("C:/Users/Jim/Desktop/Projects In Development/Portfolio/server/JimTisdaleResume.docx");
})



app.listen(PORT, function() {
	console.log(`app listening on port ${PORT}`);
});