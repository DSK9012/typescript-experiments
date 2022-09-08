let a=[]; //  any[]
const b=[]; //  never[]
var c=[]; // never[]

let d=[1,2]; // number[]
const e=[1,2]; // number[]
var f=[1,2]; // number[]

let g=[1,'string']; // (number | string)[]
const h=[1,'string']; // (string | number)[]
var i=[1,'string']; // ()[]

let arr:[string, number]=['string',1];
const arr1:[string, number]=['string',1];
var arr2:[string, number]=['string',1];

interface user{
  role: "PRIMARY_ADMIN" | "ADMIN"
}

const PRIMARY_ADMIN="PRIMARY_ADMIN";
const ADMIN="ADMIN";
const BUYER="BUYER";
const user={
  role:PRIMARY_ADMIN
};

enum Role { PRIMARY_ADMIN="PRIMARY_ADMIN", ADMIN=1, BUYER=1 };
var role=Role.ADMIN;
const user1={
  role:Role.ADMIN
};

let any:any=[];
any=[];
any='string';
any=10;
any={a:1};
any=false;

const u1:string | number='string';
console.log(u1);
// u1='string';

interface l1{
  role: 'admin' | 'buyer' | true | {a:1} | [];
}

const l1:l1={
  role:'admin'
}

let z=1;

type a=[string, number];
type t=any;
let x:a=['string', 1000];
x.push(1);
x.push(10);
x.push(100);
console.log(x);
x=['s', 9]
console.log(x);
x[1]=2;
console.log(x);

function printResult1(){ // undefined
  while(true){}
  // throw 'ee';
  // return undefined;
}
console.log(printResult1())
function printResult2(){ // undefined
  return;
}
function printResult3(){ // null
  return null;
}
function printResult4():null{ // void
  return null;
}

function addAndHandle(n1:number,n2:number, cb:(num:number)=>void){
  cb(n1+n2);
}

addAndHandle(1, 2, (num)=>{ 
  return num;
});

let userInput:unknown;
let userName:string;

userInput=1;
userInput='string';

userName=userInput as string;