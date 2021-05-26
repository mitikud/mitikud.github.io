window.onload = function() {
    document.getElementById('newAccount').onclick = creatNewAccount;
}

function Account(name, deposit) {
    var accountName = name;
    var deposit = deposit;

    var newAccount = {
    
        'getAccountName' : function(){
        return accountName;
    },

        'getDeposite': function(){
            return deposit;
        },

        'setAccountName' : function(name){
            accountName = name;
        },

        'setDeposit' : function (deposit) {
            deposit = deposit;
        }
        };
        return newAccount;
}

var list = new Array();

function creatNewAccount() {
    var acountName =  document.getElementById("accountName").nodeValue;
    var deposit = document.getElementById("deposit").nodeValue;
    var newAcct = Account(accountName, deposit);
    list.push(newAcct);
    var result = "";
    for(acct in list){
        result += "Account Name : " + acct.getAccountName() + ", Deposit : " + acct.getDeposite() + "\n";
    }
    document.getElementById("txtArea").nodeValue = result;
}