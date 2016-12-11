
var Web3 = require('web3');
var web3 = new Web3();
var rpc_url = process.env.rpc_url;
var address = process.env.contract_address;

web3.setProvider(new web3.providers.HttpProvider(rpc_url));

var kycbit = {};

if(web3.isConnected()){
        
        var abi = [{"constant":true,"inputs":[{"name":"_hash","type":"address"}],"name":"AddressQuery","outputs":[{"name":"_address","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_BIK","type":"string"},{"name":"_hash","type":"address"},{"name":"_intID","type":"string"}],"name":"CustomerInsert","outputs":[{"name":"result","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"varex","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"HashToBIK","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"address"}],"name":"IntIDQuery","outputs":[{"name":"_intID","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"HashToIntID","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"HashToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"address"}],"name":"BIKQuery","outputs":[{"name":"BIK","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isins","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"bananax","outputs":[{"name":"","type":"bytes8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"test","outputs":[{"name":"_BIK","type":"string"},{"name":"IntID","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor","payable":true},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"Insert","type":"event"}];

        var coinbase = web3.eth.coinbase;

        kycbit = web3.eth.contract(abi).at(address);
        
        web3.eth.defaultAccount = web3.eth.accounts[0];
} else {
    kycbit.error = "Error created contract";
}        

module.exports.address = function(){
    return JSON.stringify(kycbit);
}

module.exports.test = function(){
    if(!!kycbit){        
                
        var result = kycbit.test.call();
                
        return result;
        
    } else {
        return "Contract not found.";
    }
}

module.exports.CustomerInsert = function(hash){
    if(!!kycbit){

       var result = kycbit.CustomerInsert.sendTransaction('BIK1234567', hash, 'ID1234567');

	return result;
	
    } else {
	return "Contract not found.";
    }
} 

module.exports.BIKQuery = function(){
    if(!!kycbit){

        var result = kycbit.HashToBIK('0xa18fdc5ca4dab088722bcaf62a31255dca032f76');

        return result;

    } else {
        return "Contract not found.";
    }
}


