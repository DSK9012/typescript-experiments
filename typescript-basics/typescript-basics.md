# **Typescript Basics**

* Core Types  

|Type|Description|Example|  
|-|-|-|
|number|All numbers, no differentiation between integers or floats.|1, 1.2, -1|
|string|All text values|'string', "string", `string`|
|boolean|Just true or false values only, no truthy or falsy values.|true, false|
|object|Any javascript object|{a:1}|
|array|Any javascript array|[1,2,3], [1,'string']|
|tuple|Its a custom type in Typescript only. Any fixed length array.|[1, 2], [1, 'string']|
|enum|Its a custom type in Typescript only. Automatically enumerated global constant identifiers|[1, 2], [1, 'string']|
|any|Its a custom type in Typescript only. Takes any value.|'string', 1, [1], {a:1}, true|

✅ - Recommended  

🟥 - Not Recommended
  

* Inference
```ts
// By default typescript implicitly infers the type of value in any assignment. ✅
const a=10; //  10
let a=10; // number

// Explicitly defining the type in assignment is redundant. We can depend on typescript inference here. 🟥
const a:number=10; // 10
let a:number=10; // number

// We can define the type explicitly when we will be assigning the value later on. ✅
let a:number; 
a=10; 
a='string'; // Throws error 
```

* Object Types 
```ts
// Typescript infers the object type here ✅
const a={ // {b:number, c:string}
  b:1,
  c:'string',
};

// Explicitly defining the object type 🟥
const a:object = { // Type is object onlu but we will get error when accessing members b or c. Because typescript doesn't know what is defined exactly in this object type. 
  b:1,
  c:'string',
};

// Here we defined the type explicitly with content. But this is redundant. 🟥
const a:{
  b:number;
  c:string;
}={
  b:1,
  c:'string',
};
```

* Array Types
```ts
let arr=[]; //  any[]
const arr=[]; //  never[]
var arr=[]; // never[]

let arr=[1,2]; // number[]
const arr=[1,2]; // number[]
var arr=[1,2]; // number[]

let arr=[1,'string']; // (string | number)[]
const arr=[1,'string']; // (string | number)[]
var arr=[1,'string']; // (string | number)[]

// Explicitly defining array types
let arr:string[]=[]; // string[] 
const arr:string[]=[]; // string[] 
var arr:string[]=[]; // string[] 

let arr:Array=[]; // Not any[], It throws error 🟥
// Here Array is default generic type in TypeScript, so we have to provide the type of data also.
let arr:Array<string>=[];
const arr:Array<string>=[];
var arr:Array<string>=[];

// Wrong approach 🟥
let arr:Array<string>; // string[]
arr.push('string'); // Throws error. Remember, In javascript we can't use variables before assignment. 

// Correct approach ✅
let arr:Array<string>=[]; // string[]
arr.push('string');
```

* Tuple Types
```ts
let arr:[string, number]=['string',1]; // [string, number]
const arr:[string, number]=['string',1]; // [string, number]
var arr:[string, number]=['string',1]; // [string, number]

// OBSERVE HERE
arr.push(1); // Though tuple creates fixed length array but its allowing pushing. It should be fixed i beleive.
arr.push(10);
arr.push(100);
console.log(arr); // ['string', 1, 1, 10, 100]
arr=['a', 0];
console.log(arr); // ['a', 0]
arr[1]=1;
console.log(arr); // ['a', 1]
arr[1]='string'; // Throws error
arr[2]=2; // Throws error
```

* Enum Types
```ts
// When we want to define any identifiers we can use enum.
enum Role { PRIMARY_ADMIN, ADMIN, BUYER }; // By default, Typescript treat PRIMARY_ADMIN as 0, ADMIN as 1 and follows.
enum Role { PRIMARY_ADMIN="PRIMARY_ADMIN", ADMIN=0, BUYER=1 }; // We can assign any value though.
enum Role { PRIMARY_ADMIN="PRIMARY_ADMIN", ADMIN=true, BUYER={a:1}, NORMAL_USER:[1] }; // Throws error. Remember, We can't use computed(booleans, objects and arrays) values in enums. 🟥

// Wrong approach 🟥
const PRIMARY_ADMIN="PRIMARY_ADMIN";
const ADMIN="ADMIN";
const BUYER="BUYER";
const user={
  role:PRIMARY_ADMIN // Here the type is inferred to string, so later it allows to assign any string value.
};
user.role="DUMMY_ROLE"; //  You see we can assign any string value since its a string type.

// Correct approach ✅ - Observe the type here
const user=Role.ADMIN; // Type is Role.ADMIN
let user=Role.ADMIN; // Type is Role
var user=Role.ADMIN; // Type is Role
const user={
  role:Role.ADMIN //  Type is Role
};
```

* Any Type
```ts
// Defining with any is not recommended for good pratice since its allowed to assign any shit.
let any:any=[]; // FYI, Here we can declare a variable with name 'any' since its not a type in JS. But we can't declare like String, Number, etc.
any=[];
any='string';
any=10;
any={a:1};
any=false;
```

* Union & Literal Types
```ts
// Union Type
let union:string | number='string'; // string | number
var union:string | number='string'; // string | number
// OBSERVE HERE
const union:string | number='string'; // string
const union:string | number=1; // number

// Literal Type - It works with union type(|)
const user:{
  role: 'admin' | 'buyer';
}={
  role:'admin'
};
const user:{
  role: 'admin' | 'buyer';
}={
  role:'some_other_role' // Throws error. We can assign either 'admin' or 'buyer'. 🟥
};

// Const variables are default literal types.
const a=1; // 1
const a=1.4; // 1.4
```

* Type Aliases - only support in TS
```ts
type CustomType=any;
type CustomType=number;
type CustomType=string;
type CustomType=boolean;
type CustomType=string | number; // Union type
type CustomType=[]; // Literal type
type CustomType=['string', 1]; // Literal type
type CustomType=[string, number];  // Tuple type
type CustomType={
  a:string;
  b:number;
};
```