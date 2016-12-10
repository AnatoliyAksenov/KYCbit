
var Web3 = require('web3');
var web3 = new Web3();
var rpc_url = process.env.rpc_url;
var address = process.env.contract_address;

web3.setProvider(new web3.providers.HttpProvider(rpc_url));

var kycbit = {};

if(web3.isConnected()){
        var abi = [{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"IntIDQuery","outputs":[{"name":"_intID","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"HashToBIK","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"HashToIntID","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"AddressQuery","outputs":[{"name":"_address","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_BIK","type":"string"},{"name":"_hash","type":"bytes32"},{"name":"_intID","type":"string"}],"name":"CustomerInsert","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isins","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"BIKQuery","outputs":[{"name":"BIK","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"HashToAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor","payable":true},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"Insert","type":"event"}];
        
        var coinbase = web3.eth.coinbase;

        kycbit = web3.eth.contract(abi).at(address);
        
        web3.eth.defaultAccount = web3.eth.accounts[0];
}        

module.exports.test1 = function(){
    return JSON.stringify(kycbit);
}

module.exports.test = function(){
    if(!!kycbit){        
                
        var result = kycbit;
                
        return result;
        
    } else {
        return "Contract not found.";
    }

   
}

