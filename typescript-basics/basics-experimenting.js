var a = []; //  any[]
var b = []; //  never[]
var c = []; // never[]
var d = [1, 2]; // number[]
var e = [1, 2]; // number[]
var f = [1, 2]; // number[]
var g = [1, 'string']; // (number | string)[]
var h = [1, 'string']; // (string | number)[]
var i = [1, 'string']; // ()[]
var arr = ['string', 1];
var arr1 = ['string', 1];
var arr2 = ['string', 1];
var PRIMARY_ADMIN = "PRIMARY_ADMIN";
var ADMIN = "ADMIN";
var BUYER = "BUYER";
var user = {
    role: PRIMARY_ADMIN
};
var Role;
(function (Role) {
    Role["PRIMARY_ADMIN"] = "PRIMARY_ADMIN";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["BUYER"] = 1] = "BUYER";
})(Role || (Role = {}));
;
var role = Role.ADMIN;
var user1 = {
    role: Role.ADMIN
};
var any = [];
any = [];
any = 'string';
any = 10;
any = { a: 1 };
any = false;
var u1 = 'string';
console.log(u1);
var l1 = {
    role: 'admin'
};
var z = 1;
var x = ['string', 1000];
x.push(1);
x.push(10);
x.push(100);
console.log(x);
x = ['s', 9];
console.log(x);
x[1] = 2;
console.log(x);
