# **Hey Developer....👋!** 

This is the place where I've been praticing all the typescript features and documenting concepts with examples in my own understandings.

## **TypeScript Overview?** 
* It's a programming language written on top of javascript to make developers life easy.
* It's a superset of javascript. It makes javascript strong by applying all the type support with some additional built-in features to write error free and understandable code.

**Advantages:**
* It has all the built-in types from javascript.
* It allows us to write NextGen javascript features which can be compiled down to the older browsers by typescript compiler like for example babel for vanilla javaScript.
* It has some additional(Non-Javascript) features like Interafces, [Generics](https://github.com/DSK9012/typescript-experiments/blob/main/generics/generics.md) and Decorators. 
* It has rich configuration management.
* Modern tools like VS Code has built-in typescript support(In terms of helping developers to understand types, but to compile we always require a TS compiler) under the hood for Non-Typescript projects.

**Example:**
* Using Javascript
```js
function sum(a, b){
  return a+b;
}

sum(1,2); // 3
sum('1','2'); // 12
// You got it right. This is the weakness(I don't want to say this since I'm in love with Javascript😍. But still it is.) of javascript and makes confusion to the end user who is consuming this function.
```
* Using Typescript
```ts
function sum(a:number, b:number){
  return a+b;
}

sum(1,2); // 3
sum('1','2'); // We can't pass string parameters here.
// See the benefit here. It gives clear idea about the function inputs and outputs to the developer.
// Note: FYI, Don't open both JS and TS files(same) in IDE, TS will yell at us with some unwanted errors. 
```

Below are the features. ⭐ the repo, It might help you.

* [Basics](https://github.com/DSK9012/typescript-experiments/blob/main/typescript-basics/typescript-basics.md)
* [Generics](https://github.com/DSK9012/typescript-experiments/blob/main/generics/generics.md)  

