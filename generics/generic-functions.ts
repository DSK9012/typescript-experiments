function merge<T, U>(obj1:T, obj2:U){
  return Object.assign(obj1, obj2);
}

const res1=merge({a:1}, {b:2});
console.log(res1.a); // 1
const res2=merge({a:1, b:3}, {c:2});
console.log(res2.b); // 3
const res3=merge({a:1, b:3},30); // It works but 30 can't be merged with first object and we can't access
const res5=merge<{a:number}, {b:string}>({a:1}, {b:'string'});  // We can mention the generic type but it is redundant

// With constraints
function mergeWithConstraints<T extends object, U extends object>(obj1:T, obj2:U) : T & U{ // Explicitly mentioning the return type
  return Object.assign(obj1, obj2);
}
const res6=mergeWithConstraints({a:1, b:3},{}); // So both parametrs here should be object type

function extractKey<T extends object, U extends keyof T>(obj:T, key:U){
  return  obj[key];
}
extractKey({a:1}, 'a');


// Arrow function syntax 
const  extractKey1=<T>(obj:T)=>{
  return  obj;
}
extractKey1({a:1});

const extractKey2=<T,>(obj:T)=>{  // You know sometimes we need to add this extra comma at the end of generic for some reason. Still need to findout the reason.
  return  obj;
}
extractKey2({a:1});
