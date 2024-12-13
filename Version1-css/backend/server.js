const express = require('express');
const { readdirSync } = require('fs');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const ConnectDB = require('./Config/db');

ConnectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({limit:'10mb'}));

app.use('/HTML', express.static(path.join(__dirname, '../frontend/HTML')));
app.use('/CSS', express.static(path.join(__dirname, '../frontend/CSS')));
app.use('/JS', express.static(path.join(__dirname, '../frontend/JS')));

// Serve the index.html file
const serveHtml = (fileName) => (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/HTML', fileName));
};

app.get('/index', serveHtml('index.html'));

readdirSync('./Routes').map((r)=>app.use('/api',require('./Routes/'+r)))

app.listen(5000 , ()=>{
    console.log('Server is running on port localhost:5000');
});