function addFunction(a, b) {
  return a + b;
}

function multiplySum(c, d) {
  return c * d;
}
let sum = addFunction(4, 5);
let result = multiplySum(sum, 3);
console.log(result);
/////////////////////////////
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
///////////////////////////////
const userAge = prompt("please enter your age");
if (userAge >= 18) {
  alert("Access granted. You are eligible.");
} else {
  alert("Access denied. You must be 18 or older to access.");
}

////////////////////////////////
const score1 = parseFloat(prompt("Enter your score for subject 1: "));
const score2 = parseFloat(prompt("Enter your score for subject 2: "));
const score3 = parseFloat(prompt("Enter your score for subject 3: "));

function calculateAverage(score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return alert("Your grade is: " + grade);
}
calculateAverage(score1, score2, score3);
//////////////////////////////////
let string = "hello world";
let number = 10;
let boolean = true;
let nullVariable = null;
let undefinedVariable;
let symbolVariable = Symbol("unique");

console.log(string, typeof string);
console.log(number, typeof number);
console.log(boolean, typeof boolean);
console.log(nullVariable, typeof nullVariable);
console.log(undefinedVariable, typeof undefinedVariable);
console.log(symbolVariable, typeof symbolVariable);
//////////////////////////////

let a = "5"; //////string
let b = 3; //////number
let c = a * b;
let d = a + b;
let e = false; ///////boolean
let f = e + a;
console.log(c); // What will be the output?  15
console.log(d); // What will be the output?  53
console.log(f); // What will be the output?  false5
///////////////////////
const name = prompt("Enter your name");
const age = prompt("Enter your Age");
const favoriteNumber = prompt("Enter your favorite number");

const ageNumber = parseInt(age);
const favoriteNumberNumber = parseFloat(favoriteNumber);
const message = `Hello ${name},Your age is ${ageNumber},and your favorite number is ${favoriteNumberNumber}`;
const formattedMessage = message.toUpperCase();
alert(formattedMessage);
/////////////////////
const sentence = prompt("Enter a sentence:");
console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
const startIndex = parseInt(prompt("Enter starting index for substring:"));
const length = parseInt(prompt("Enter length of substring:"));
const substring = sentence.substring(startIndex, startIndex + length);
console.log(substring);
const wordToReplace = prompt("Enter the word to replace:");
const replacementWord = prompt("Enter the replacement word:");
const replacedSentence = sentence.replace(wordToReplace, replacementWord);
console.log(replacedSentence);
///////////////
const Input = prompt("Enter a number");
const userNumber = parseFloat(Input);
const evenOrOdd = userNumber % 2 === 0 ? "even" : "odd";
alert(`The number ${userNumber} is ${evenOrOdd}`);
//////////////////
const choice = prompt("Menu: 1.Add 2.Subtract 3.Multiply 4.Divide");
const option = parseInt(choice);
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
let result;
switch (option) {
  case 1:
    result = num1 + num2;
    console.log(result);
    break;
  case 2:
    result = num1 - num2;
    console.log(result);
    break;
  case 3:
    result = num1 * num2;
    console.log(result);
    break;
  case 4:
    if (num2 !== 0) {
      result = num1 / num2;
      console.log(result);
    } else {
      console.log("Cannot divide by zero.");
    }
    break;
  case 5:
    console.log("Goodbye!");
    return;
  default:
    console.log("Invalid choice. Please choose again.");
}
