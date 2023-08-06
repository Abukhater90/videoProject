// Scope and Hoisting Exercises
// For the following exercises, don't run the code, just write down your answers.:



/* 


1. Basic Understanding of Hoisting
Given this code, try to think what will be the outputs.
Sample Code:

console.log(a); // What will be the output?
var a = 5;
answer : 5
REF

console.log(b); // What will be the output?
let b = 5;
answer : not defined

console.log(c); // What will be the output?
const c = 5;
answer : not defined


-----------------------------------------------------------------------------

2. Understanding Function Hoisting
Given those two functions, one with a function declaration and another one with a function
expression, if we try to call both functions before they are defined, what would be the
outputs?
Sample Code:


console.log(myFuncDecl()); // What will be the output?
function myFuncDecl() {
 return "Hello from function declaration!";
}
answer : will return " hello form function "

console.log(myFuncExpr()); // What will be the output?
var myFuncExpr = function() {
 return "Hello from function expression!";
}

answer : i can't call function expression 


--------------------------------------------------




3. Nested Scopes and Hoisting
Given this program with a function inside another function, write what do you think would
be the output in each console statement.


const x = "global";
function outerFunc() {
 let y = "outer";
 function innerFunc() {
 var z = "inner";
 console.log(x); // What will be the output? "global";
 console.log(y); // What will be the output? "outer"
 }
 innerFunc();
 console.log(z); // What will be the output? not defined
}
outerFunc();





--------------------------------------------

4. Combining All Concepts
Given this code, what would be the output of the console statements and the function
calls?
Sample Code:


const a = 1;
function b() {
 const a = 10;
 c();
 return;
 function c() {
 console.log(a); // What will be the output? 1 **
 }
}
b();
console.log(a); // What will be the output of a? 1**

foo();
function foo() {
 console.log(x); // What will be the output? "Hello, world!" ** 

 var x = "Hello, world!";
 bar();
 function bar() {
 console.log(x); // What will be the output? "Hello, world!" **

 let x = "Hello, scope!";

 }
}

*/






console.log(x);
let x = 10; 