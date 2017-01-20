
var Web3 = require('web3');
var Promise = require('bluebird');
var web3 = new Web3();
var rpc_url = process.env.rpc_url;
var address = process.env.contract_address;


web3.setProvider(new web3.providers.HttpProvider(rpc_url));

var kycbit = {};

if(web3.isConnected()){
console.log("start contract");        
        var abi = [{"constant":true,"inputs":[{"name":"_hash1","type":"bytes32"}],"name":"PartiesList","outputs":[{"name":"result","type":"address[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"inc","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint16"},{"name":"","type":"uint256"}],"name":"result","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"name":"Hash3","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"admin","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"name":"Hash1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash1","type":"bytes32"},{"name":"_hash2","type":"bytes32"},{"name":"_hash3","type":"bytes32"},{"name":"_token","type":"bytes32"}],"name":"AddHash","outputs":[{"name":"_result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"perm","type":"uint8"}],"name":"UpdateParty","outputs":[{"name":"_result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash1","type":"bytes32"},{"name":"_hash2","type":"bytes32"},{"name":"_hash3","type":"bytes32"},{"name":"_token","type":"bytes32"}],"name":"Request","outputs":[{"name":"hres1","type":"bool"},{"name":"hres2","type":"bool"},{"name":"hres3","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"name":"Hash2","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash1","type":"bytes32"},{"name":"_hash2","type":"bytes32"},{"name":"_hash3","type":"bytes32"},{"name":"_token","type":"bytes32"}],"name":"RequestC","outputs":[{"name":"hres1","type":"bool"},{"name":"hres2","type":"bool"},{"name":"hres3","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"parties","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_token","type":"bytes32"},{"indexed":false,"name":"_result","type":"bool[3]"}],"name":"Answer","type":"event"}];
        //var coinbase = web3.eth.coinbase;

        kycbit = web3.eth.contract(abi).at(address);
        
        web3.eth.defaultAccount = web3.eth.accounts[0];

} else {
    
    kycbit.error = "Error created contract";
    console.log('Connection error.');
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

module.exports.waitAnswer = function(tranaction){
    return new Promise(function(resolve, reject){
        if(!!kycbit){
            //console.log("%j", kycbit);
            
            var event = kycbit.Answer(/*{tx: tranaction},*/ function(err, res){
                console.log('event recieved: %j', res);
                event.stopWatching();
                resolve(res);
            });//{tx: tranaction}

            // watch for changes
            //event.watch(function(error, result){
            // if (!error)
            //    reject(new Error(error));
            //    
            //  resolve(result);    
            //});
        

        } else {
            reject( new Error("Contract not found."));
        }    
    });
    
}
