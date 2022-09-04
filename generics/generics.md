##  **Generics**

### Default Generic Types
```ts
// Array
const arr:Array=[]; // Throws error. When we want to define the Array type explicitly then we must have to define the Array with generic type using angular brackets. FYI, by default, typescript infers the type if we don't define explicitly.
const arr:Array<string>=[];
arr.push('string');
arr[0].split(' ');

// Promise
const promise:Promise<number>=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(1);
  },2000);
});
```

### Functions with Generics
```ts
// Function Declaration
function merge<T, U>(obj1:T, obj2:U){
  return Object.assign(obj1, obj2);
}

// Arrow Function Declaration
const extractKey2=<T,>(obj:T)=>{  // You know sometimes we need to add this extra comma at the end of generic for some reason when there is only one genric type. I'm yet to findout the reason.
  return  obj;
}
```

### Generics With Constraints
```ts
// Constraints help developers to define the type for specific usage and removes confusion about what data can be passed and received.
// If you observe in above merge function, we can call like merge({a:1}, 30), but its not what the function is intended to do. So based on the function logic, we can leverage constraints to define the types for generics.
function mergeWithConstraints<T extends object, U extends object>(obj1:T, obj2:U) : T & U{
  return Object.assign(obj1, obj2);
}

function extractKey<T extends object, U extends keyof T>(obj:T, key:U){
  return  obj[key];
}
```

### Generic Classes
```ts
class DataStorage<T extends string | number | boolean>{   // Its always better to define generics with constraints. You know this class won't work with objects.
  data:T[]=[];

  addItem(item:T){
    this.data.push(item);
  }

  getItems(){
    return [...this.data];
  }

  removeItem(item:T){
    const index = this.data.indexOf(item);
    this.data.splice(this.data.indexOf(item),1);
  }
}

const number=new DataStorage<number>();
number.addItem(1)
number.addItem(2)
number.removeItem(2)
number.getItems() // [1]
```

### Generic Utilities
```ts
// Partial utility
interface course{
  name:string;
  date:number;
}

function createGoal(course:course):course{
  // let goal:course={};  This will throw error since we are assigning empty object. 
  let goal:Partial<course>={};  // So Partial will help us to make parameters optional temporarily.
  goal.name=course.name;
  goal.date=course.date;
  return goal as course;
}

// Readonly utility
const arr:Readonly<string[]>=['string1', 'string2']; // It can be applied to Arrays and Objects
arr.push('string'); // Throws error. We can't edit array.

let arr1:Readonly<string>='string'; // Type of arr1 is still string only here.
arr1='string';  // Here you see we are able to override the string. So It only works for objects and arrays since they are reference types. If you want to make this string Immutable, then define it as a const variable.
```

### Generics vs Union
* Comparing to union types, Generic types help us to lock the incoming data at a root level like in above class.
* Assume if you are accepting types using union like string[] | number[], then we will face difficulties in accessing methods. Note it. 

### References & Summary 
* You see the benefit of using generics here. The same class/function can be used for multiple data types.Awesome na..😍!
* [Typescript Generics Documentation](https://www.typescriptlang.org/docs/handbook/2/generics.html)