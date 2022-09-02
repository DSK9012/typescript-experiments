interface course{
  name:string;
  date:number;
}

// Partial utility
function createGoal(course:course):course{
  // let goal:course={};  This will throw error since we are assigning empty object. 
  let goal:Partial<course>={};  // So Partial will help us to make parameters optional temporarily.
  goal.name=course.name;
  goal.date=course.date;
  return goal as course;
}

// Readonly utility
const x:Readonly<string[]>=['string1', 'string2']; // It can be applied to Arrays and Objects
// x.push('string3'); We can't edit array.

let y:Readonly<string>='string'; // type of y is still string only.
y='string1';  // Here you see we are able to override the string. So It only works for objects and arrays since they are reference types. If you want to make this string Immutable, then define as a const variable.
