// console.log("i am a external file");

// tokens

// smallest unit in anu programming lang

// keyword
// operator +-*/=%
// separtor ;,
// symbols {}()[]
// identifier
// literals

// keywords
// Keywords in C are reserved words with special meanings, part of the syntax, and cannot be used as identifier

// variables
// named memory location used to store the data

// data types

// pimitive

// 1.Number
// 2.String
// 3.Boolean
// 4.undefined
// 5.null
// 6.BigInt
// 7.Symbol

// non-primitive

// function
// array
// Object

// console.log(5 + 5);
// console.log(20 + 20);
// console.log("the sum of 5 + 5 = 10");
// console.log("the sum of 20 + 20 = 10");

// dynamically typed lang

// declare the variable

// var , let , const

// keyword identifier operator = data type separtor

// var num1 = 10;
// var num2 = 20;

// console.log("the sum of " + num1 + "+" + num2 + "=" + (num1 + num2));
// console.log("the difference of " + num1 + "-" + num2 + "=" + (num1 - num2));
// console.log("the difference of " + num1 + "*" + num2 + "=" + num1 * num2);
// console.log("the difference of " + num1 + "/" + num2 + "=" + num1 / num2);

// var a = 10;
// let b = 11;
// const c = 12;

// variable decalration
// var a;
// console.log(a);
// a = 10; //initialization
// console.log(a);
// a = 12; // reinitialization
// console.log(a)
// var a=56;//redeclaration
// console.log(a+10); //utilization

// var a = 10;
// a = 11;
// var a = 89;
// console.log(a);

// let b;
// console.log(b);

// b = "hi";
// // let b = 67;
// console.log(b);

// const fatherName = "Raj father";

// fatherName = "ram fathers";
// let children;
// children = 1;

// console.log(father_name);
// // hoisting: accessing/utilzation of the varible before decalartion
// var father_name = "Raj father";
// console.log(father_name);

// console.log(age);
// // tdz (temporal dead zone)
// // this is the time gap bw the variable declaration and utilization
// let age = 1;
// console.log(age);

// ES6 Fetures

// console.log(father_name);
// const father_name = "ram father";

// rules for identifier

// snakecase, camel
// alphabets
// alpha numeric
// invalid keywords
//         numeric
//         spl chars

// let a = 10;
// console.log(typeof a);
// let b = 23.5;
// console.log(typeof b);

// let c = 10 / 3;
// console.log(c);
// console.log(parseInt(c));
// console.log(parseFloat(c));

// console.log(10 / 0);
// console.log(typeof Infinity);

// console.log(-10 / -0);

// alert("hi welcome to Deep Root institute");

// const response = confirm("are u eng graduate");
// console.log(response);

// const num1 = parseInt(prompt("enter ur first num"));
// const num2 = Number(prompt("enter ur second num"));
// const res = num1 + num2;
// console.log(res);

// console.log(typeof num1);
// console.log(typeof num2);

// "abc"+"def"
// "abcdef"
// "10"+"10"
// 10+10
// typecasting converting data from one type to another type
// const res = num1 + num2;
// // console.log(num1);
// alert("the sum of" + num1 + " " + num2 + " = " + res);

// const a = Number("18");
// console.log(a);
// console.log(typeof a);

// const b = Number("abhi");
// console.log(b);
// console.log(typeof b);

// console.log(NaN + 1);

// let a = "hi";
// let b = "hello";
// let c = `hey`;
// let d = String("gm");
// // let d = String("gm");
// // let e = "10";
// console.log(a + b);
// console.log("a+b");

// let a = "'hi'";
// let b = '"hello"';
// let c = "`hey`";//es6
// let d = String("gm");

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 10;
// let b = 20;
// BODMAS
// console.log("the sum of " + a + " + " + b + "= " + a + b);
// console.log("the sum of " + a + " + " + b + "= " + (a + b));

// console.log(`the sum
//      of ${a} + ${b} + ${a + b}`);

// console.error("i am a error");
// console.warn("i am a warn");

// let msg = "Deep Rooted";

// console.log(msg);
// console.log(msg[11]);
// console.log(msg.length);
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());
// console.log(msg.charAt(0));
// console.log(msg.charAt(10));

// console.log(msg[0]);
// console.log(msg[1]);
// console.log(msg[2]);
// console.log(msg[3]);

// looping
// know range/iteration---for
// not know range/iteration based on some condition --- while
// do while

//  i++//post increment

// for (let i = 0; i < 4; i = i + 1) {
//   console.log(i);
//   console.log(msg.charAt(i));
// }
// let ans = "";

// for (let i = 0; i < 4; i = i + 1) {
//   ans = ans + msg[i];
//   //     D  = "" + D;//0
//   //     De  = "D" + e;//1
//   //     Dee  = "De" + e;//2
//   //     Deep  = "Dee" + p;//3
// }
// console.log(ans);
// let a = "1 3";
// console.log(a.length);

// console.log("ab" === " ab");
// console.log("ab" === "ab");

// console.log(msg.charCodeAt(0));
// let num = 4;
// convert numn to binary

// let msg = "Deep Rooted";

// let num = 4;
// let binary = num.toString(6
// );

// console.log(binary);

// let num = 4;
// let base = 2;
// let binary = 0;

// console.log(num % 2);
// console.log(num / 2);

// while (parseInt(num / base)) {}

// let msg = "Deep Rooted";
// let add = "axx-e1224";

// let email = "depeRoot@gmail.come";
// console.log(msg.charCodeAt(1));

// console.log(add + msg);
// console.log(add.concat(msg));
// console.log(email.endsWith(".com"));
// console.log(email.endsWith(".net"));

// console.log(add.startsWith("axx"));
// console.log(email.includes("Root"));
// console.log(email.includes("Root1"));

// console.log(email.indexOf("R"));
// console.log(email.indexOf("e"));
// console.log(email.indexOf("e", 2));
// console.log(email.lastIndexOf("e"));
// let msg = "hi gm anujna";

// console.log(msg);
// console.log(msg.split(" "));

// console.log(msg.padEnd(40, "hello"));
// console.log(msg.padStart(40, "hello"));
// console.log(msg.repeat(5));
// console.log(msg.replace("anujna", "abhilash"));
// console.log(msg.replaceAll("a", "b"));

// console.log(msg.slice(3));
// console.log(msg.slice(3, 5));
// console.log(msg.);
// console.log(msg + msg);
// let ans = "";
// for (let i = 0; i < 50; i++) {
//   ans = ans + msg;
// }
// console.log(ans);

// console.log(4 + 4);

// 5*1=5

// 5*2=10

// 5*10=50
// operation = two operannds with one opertaor
// muliplication=5 ,i *

// let table = 10;
// for (let i = 1; i < 11; i++) {
//   console.log(table + " * " + i + " = " + table * i);
// }

// let table = 10;
// for (let i = 1; i < 11; i++) {
//   console.log(table + " * " + i + " = " + table * i);
// }

// let table1 = 5;
// for (let i = 1; i < 11; i++) {
//   console.log(table1 + " * " + i + " = " + table1 * i);
// }

// let table2 = 12;
// for (let i = 1; i < 11; i++) {
//   console.log(table2 + " * " + i + " = " + table2 * i);
// }

// odd no

// let num = 5;
// if (num % 2 === 0) {
//   console.log(num + " is a even num");
// } else {
//   console.log(num + " is a odd num");
// }

// function
// it is a block of code which is used to perform some specific task or operation which will be executed only whenever it is invoked or called
// code resuability avoiding coding rewriting
// code readability
// fnc can accept the parameters
// fnc can return the value
// default return value is undefined

// parametrs
// function tableFnc(a) {
//   let table1 = a;
//   for (let i = 1; i < 11; i++) {
//     console.log(table1 + " * " + i + " = " + table1 * i);
//   }
// }

// fncName()
// function with parameter
// tableFnc(5); //arguments

// tableFnc(7);
// tables

// check num is odd or even
// calculate the square of num
// calculate the cube of num
// calculate the squareroot of num
// calculate the cuberoot of num
// calculate the lcm of num
// calculate the hcf of num
// calculate the happy  num
// calculate the armstrong
// calculate the dissarium
// calculate the prime num
// calculate the palindrome nu
// calculate the factorial num
// calculate the fibbonaci series

// types of function
// 1. fnc without parameter and without return type
// 2. fnc with parameter and without return type
// 3. fnc without parameter and with return type
// 4. fnc with parameter and with return type
//  Nested function

function isEven(num) {
  if (num % 2 === 0) {
    // console.log(num + " is even num");
    return true;
  }
}
// isEven(9);
// isEven(10);
// console.log(isEven);
// console.log(isEven(7));

// if (isEven(8)) {
//   console.log(8 + 10);
// }

// function square(num = 1) {
//   return num * num;
// }
// console.log(square(3));
// console.log(square());

// function happyNum(num) {
//   const [num1, num2] = num.toString().split("");
//   const sum = square(parseInt(num1)) + square(parseInt(num2));

//   while (sum !== 1 || sum !== 4) {
//     happyNum(sum);
//   }
//   return "num is a happy num";
// }

// happyNum(10);

// types of function
// 1.named function
// 2.anonymous function
// firstclass function
// function with expression
// IIFE -immediately invoked function expression
// 4.arrow function
// 5.nested function
// 6.HOF -higher order function
//  7.callback function

function factorial(num) {
  return 10;
  console.log("i am a factorila");
  return undefined;
}
console.log(factorial(4));

// const demo=2;
// const test = function () {
//   console.log(" i a anonymous");
// };

// const res=2+4

// const res = (function () {
//   console.log("i ma  a IIFE");
//   return 10;
// })();
// console.log(res);
// console.log(res);
// console.log(res);

// arrow function es6
const add = (a) => {
  a + 10;

console.log("hi");

console.log(add(5)); //15
// fnction keyword is ommited
// curly braces can be ommited if we have only one statement
// it will have implicit return when we omit curly braces 
// we can omit the parenthesis when we have only one parameter

// fnc calling syntxa=fncName+()
