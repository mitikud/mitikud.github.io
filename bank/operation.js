var account ={
	name:"",
	number:0,
	balance:0
};

var balance = 0;
exports.deposit = function (req,res,vals) {
    result=parseInt(vals.first)+parseInt(vals.second)
};
exports.withdraw = function (req,res,vals) {
    result=parseInt(vals.first)-parseInt(vals.second)
};
exports.balance = function (req,res,vals) {
    result=parseInt(vals.first)*parseInt(vals.second)
};
exports.division = function (req,res,vals) {
    result=(parseInt(vals.first))/(parseInt(vals.second))
};