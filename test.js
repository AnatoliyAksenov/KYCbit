var Web3 = require('web3');
var Promise = require('bluebird');
var web3 = new Web3();
var rpc_url = process.env.rpc_url;
var address = process.env.contract_address;


console.log(rpc_url);
console.log(address);

var provider = new web3.providers.HttpProvider(rpc_url);
console.log("%j", provider);
web3.setProvider(provider);

var kycbit = {};


console.log("%j",web3.isConnected());     