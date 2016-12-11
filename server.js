var express = require('express');
var contract = require("./contract/index.js");


// Create a new Express application.
var app = express();

var port = process.env.port || 8080;
var address = process.env.address || '0.0.0.0';

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'Microsoft BlockchainSckool darkchain', resave: true, saveUninitialized: true }));

//public folder 
app.use('/', express.static('public/app'));

app.get('/profile',
  function(req, res){
    res.status(200).json({user: req.user});
  });

app.get('/api/list',
  function(req, res){
    res.status(200).json({list: 'list'});
  });

app.get('/eth/test',  
  function(req, res){
    var test = contract.test();
    res.status(200).json('Contract address: [' + test + "]");
  });

app.get('/eth/address',  
  function(req, res){
    var address = contract.address();
    res.status(200).json('Result: [' + address + "]");
  });

app.get('/eth/BIKQuery',
  function(req, res){
    var BIKresult = contract.BIKQuery();
    res.status(200).json('BIKQuery: [' + BIKresult + "]");
  });

app.get('/eth/CustomerInsert/:hash',
  function(req, res){
    var CustIns = contract.CustomerInsert(req.params.hash);
    res.status(200).json('CustomerInsert: [' + CustIns + "]");
  });


app.listen(port);
