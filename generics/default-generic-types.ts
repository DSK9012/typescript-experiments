// Array
// Infers the type
const arr1=[]; // never[]
const arr2=['string', 0]; // (string | number)[]
// Explicitly defining the type using generic
const arr3:string[]=[]; 
const arr4:number[]=[]; 
const arr5:Array<string>=[];
arr5.push('string');
arr5[0].split(' ');


// Promise
// Infers the type
const promise1=new Promise((resolve, reject)=>{  // Promise<unknown>
  setTimeout(()=>{
    resolve('string');
  },2000);
});
// Explicitly defining the type using generic
const promise2:Promise<number>=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(1);
  },2000);
});

