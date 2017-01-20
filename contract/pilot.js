var pilotContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"_hash1","type":"bytes32"}],"name":"PartiesList","outputs":[{"name":"result","type":"address[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"inc","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint16"},{"name":"","type":"uint256"}],"name":"result","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"name":"Hash3","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"admin","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"name":"Hash1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash1","type":"bytes32"},{"name":"_hash2","type":"bytes32"},{"name":"_hash3","type":"bytes32"},{"name":"_token","type":"bytes32"}],"name":"AddHash","outputs":[{"name":"_result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"perm","type":"uint8"}],"name":"UpdateParty","outputs":[{"name":"_result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash1","type":"bytes32"},{"name":"_hash2","type":"bytes32"},{"name":"_hash3","type":"bytes32"},{"name":"_token","type":"bytes32"}],"name":"Request","outputs":[{"name":"hres1","type":"bool"},{"name":"hres2","type":"bool"},{"name":"hres3","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"name":"Hash2","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_hash1","type":"bytes32"},{"name":"_hash2","type":"bytes32"},{"name":"_hash3","type":"bytes32"},{"name":"_token","type":"bytes32"}],"name":"RequestC","outputs":[{"name":"hres1","type":"bool"},{"name":"hres2","type":"bool"},{"name":"hres3","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"parties","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_token","type":"bytes32"},{"indexed":false,"name":"_result","type":"bool[3]"}],"name":"Answer","type":"event"}]);
var pilot = pilotContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x606060405234610000575b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b6111118061005c6000396000f300606060405236156100c3576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806320251f92146100d5578063371303c0146101595780634e646ca31461017c5780635225f830146101be57806363a846f81461022c578063704e7f36146102795780638da5cb5b146102e7578063964b42d114610336578063d987e7e914610396578063dca777a4146103ed578063df5be47114610463578063efba6ae3146104d1578063fb2c5e5014610547575b34610000576100d35b610000565b565b005b34610000576100f46004808035600019169060200190919050506105b1565b6040518080602001828103825283818151815260200191508051906020019060200280838360008314610146575b80518252602083111561014657602082019150602081019050602083039250610122565b5050509050019250505060405180910390f35b346100005761016661066a565b6040518082815260200191505060405180910390f35b34610000576101a4600480803561ffff16906020019091908035906020019091905050610670565b604051808215151515815260200191505060405180910390f35b34610000576101ea600480803560001916906020019091908035600019169060200190919050506106a6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b346100005761025d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106e8565b604051808260ff1660ff16815260200191505060405180910390f35b34610000576102a560048080356000191690602001909190803560001916906020019091905050610708565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34610000576102f461074a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b346100005761037c600480803560001916906020019091908035600019169060200190919080356000191690602001909190803560001916906020019091905050610770565b604051808215151515815260200191505060405180910390f35b34610000576103d3600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803560ff16906020019091905050610a9a565b604051808215151515815260200191505060405180910390f35b3461000057610433600480803560001916906020019091908035600019169060200190919080356000191690602001909190803560001916906020019091905050610b5b565b60405180841515151581526020018315151515815260200182151515158152602001935050505060405180910390f35b346100005761048f60048080356000191690602001909190803560001916906020019091905050610e7e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3461000057610517600480803560001916906020019091908035600019169060200190919080356000191690602001909190803560001916906020019091905050610ec0565b60405180841515151581526020018315151515815260200182151515158152602001935050505060405180910390f35b346100005761056f600480803560001916906020019091908035906020019091905050611099565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b602060405190810160405280600081525060076000836000191660001916815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561065d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610613575b505050505090505b919050565b60015481565b600560205281600052604060002081600381101561000057602091828204019190065b915091509054906101000a900460ff1681565b60046020528160005260406000206020528060005260406000206000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915054906101000a900460ff1681565b60026020528160005260406000206020528060005260406000206000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006000600090506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660ff16148061082557506002600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660ff16145b156108335760009150610a91565b6000602060ff1614156108495760009150610a91565b6000602060ff1614151561098457336002600088600019166000191681526020019081526020016000206000856000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600760008760001916600019168152602001908152602001600020805480600101828181548183558181151161092c5781836000526020600020918201910161092b91905b8082111561092757600081600090555060010161090f565b5090565b5b505050916000526020600020900160005b33909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600190505b6000602060ff16141515610a0a57336003600087600019166000191681526020019081526020016000206000856000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600190505b6000602060ff16141515610a9057336004600086600019166000191681526020019081526020016000206000856000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600190505b5b50949350505050565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610afc5760009050610b55565b81600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055505b92915050565b6000600060006000600073ffffffffffffffffffffffffffffffffffffffff16600260008a600019166000191681526020019081526020016000206000876000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610bf65760019350610bfb565b600093505b600073ffffffffffffffffffffffffffffffffffffffff166003600089600019166000191681526020019081526020016000206000876000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610c8e5760019250610c93565b600092505b600073ffffffffffffffffffffffffffffffffffffffff166004600088600019166000191681526020019081526020016000206000876000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d265760019150610d2b565b600091505b83816000600381101561000057602091828204019190065b6101000a81548160ff02191690831515021790555082816001600381101561000057602091828204019190065b6101000a81548160ff02191690831515021790555081816002600381101561000057602091828204019190065b6101000a81548160ff0219169083151502179055507fadf7a95a3103ed6db74ffc5390527291657c746290c19538f360ef6faf909310338983604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183600019166000191681526020018260038015610e63576020028201916000905b82829054906101000a900460ff16151581526020019060010190602082600001049283019260010382029150808411610e2d5790505b5050935050505060405180910390a15b509450945094915050565b60036020528160005260406000206020528060005260406000206000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060006000600073ffffffffffffffffffffffffffffffffffffffff166002600089600019166000191681526020019081526020016000206000866000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610f595760019250610f5e565b600092505b600073ffffffffffffffffffffffffffffffffffffffff166003600088600019166000191681526020019081526020016000206000866000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ff15760019150610ff6565b600091505b600073ffffffffffffffffffffffffffffffffffffffff166004600087600019166000191681526020019081526020016000206000866000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611089576001905061108e565b600090505b5b9450945094915050565b600760205281600052604060002081815481101561000057906000526020600020900160005b915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820758bee1f6976e46eb17bcdac8fd3aa68e0ce5cd45c80b5a6311840a0772a98f60029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })