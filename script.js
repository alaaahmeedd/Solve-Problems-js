                                          // Assignment 1 js

// 1- Write a program that allow to user enter number then printit
// Example
// Input: 5
// Output: 5 

// Answer 1

// var num  = window.prompt('Enter your number');
// console.log(num);

// -----------------------------------------------------

// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// Example1
// Input: 12 Output Yes
// Example 2
// Input: 9 Output No

// Answer 2

// var num = window.prompt('Enter your number')

// if( num %3 == 0 && num %4 == 0){
//     console.log('yes');
// }
// else{
//     console.log('No')
// }

// ----------------------------------------------------------

// 3- Write a program that allows the user to insert 2 integers then print the max
// Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10

// Answer 3

// var num1 = window.prompt('Enter your num1');
// var num2 = window.prompt('Enter your num2');

// if( num1 > num2 ){
//     console.log(num1);
// }else{
//     console.log(num2)
// }

// ------------------------------------------------------------

// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative
// Example2
// Input: 10
// Output positive

// Answer 4

// var num = window.prompt('Enter your num');

// if( num >0 ){
//     console.log('positive');
// }else{
//     console.log('negative')
// }

// ---------------------------------------------------------------

// 5- Write a program that take 3 integers from user then print the max element
// and the min element.
// Example 1
//  Input:7,8,5
// Output:
// max element = 8
// min element = 5
// Example2
// Input: 3 6 9
// Outputs:
// Max element = 9
// Min element = 3

// Answer 5

// var num1 = window.prompt('Enter your num1');
// var num2 = window.prompt('Enter your num2');
// var num3 = window.prompt('Enter your num3');

// if( num2> num1 && num1>num3 ){
//     console.log("max element = " + num2);
//     console.log("min element = " + num3);
// }
// else if(num3> num2 && num3> num1 ){
//     console.log("max element = " + num3);
//     console.log("min element = " + num1);

// }

// ---------------------------------------------------------------

// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd
// 7- Example 1
// Input: 8
// Output: even
// Example 2
// Input: 7
// Output: odd

// Answer 6 7

// var num = window.prompt('Enter your num');

// if( num % 2 == 0 ){
//     console.log('even')
// }
// else{
//     console.log('odd')
// }

// -------------------------------------------------------------------

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
// Example1
// Input: O
// Output: C
// Example 2
// Input: b
// Output:
// Consonant

// Answer 8

// var char = window.prompt('Enter character')

// if( char == 'a' || char == 'e' || char == 'I' || char == 'o' || char == 'u' ){
//     console.log('vowel');
// }else{
//     console.log('Consonant')
// }

// -------------------------------------------------------------------------

// 9- Write aprogram that allows user to insert integer then print all numbers between 1 to 5
// that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5

// Anwer 9

// var num = window.prompt('Enter your num')

// for( var i= 1 ; i <=num ; i++){
//     console.log(i);
// }

// --------------------------------------------------------------------------

// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// Example
// Input: 5
// Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60

// Answer 10

// var num = window.prompt('Enter your num')

// for( var i= 1 ; i<= 12 ; i++ ){
//     var res = num * i
//     console.log(res);
// }

// ----------------------------------------------------------------------------

// 11- Write aprogram that allows to user to insert number then print all even numbers
// between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14

// Answer 11

// var num = window.prompt('Enter your num')

// for( var i = 2 ; i<=num ; i++){
//     if( i %2 == 0 ){
//         console.log(i);

//     }
// }

// -------------------------------------------------------------------------------

// 12- Write aprogram that take two integers then print the power
// Example:
// Input: 4 3
// Output: 64
// Hint how to calculate 4^3 = 4 * 4 * 4 =64

// Answer 12

// var base = window.prompt('Enter your base')
// var exponent = window.prompt('Enter your exponent')
// var res = 1;

// for (var i =1 ; i<=exponent ; i++){
//     res = res*base;
// }

// console.log(res);

// -----------------------------------------------------------------------------------

// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
//  Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-.Total marks = 435
//  Average Marks =87
// Percentage =87 

// Answer 12

// var sub1 = Number(window.prompt('Enter your subject 1'));
// var sub2 = Number(window.prompt('Enter your subject 2'));
// var sub3 = Number(window.prompt('Enter your subject 3'));
// var sub4 = Number(window.prompt('Enter your subject 4'));
// var sub5 = Number(window.prompt('Enter your subject 5'));


// var totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
// console.log(totalMarks);

// var averageMarks = totalMarks / 5 ;
// console.log(averageMarks);

// var percentage = (totalMarks/500)*100;
// console.log(percentage);

// ---------------------------------------------------------------

// 13-Write a program to input month number and print number of days in that 
// month.
// Example:
// Input: - Month Number: 1
//  Output:-. Days in Month: 31

// Answer 13

// var month = Number(window.prompt("Enter month Number"))
// if (month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log("30 Days")
// }
// else if (month == 2) {
//     console.log("28 or 29 Days")
// }
// else {
//     console.log("31 Days");
// }

// -------------------------------------------------------------------

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade 
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

// Answer 14

// var Physics = Number(window.prompt("Enter physics marks"));
// var Chemistry = Number(window.prompt("Enter chemisty marks"));
// var Biology = Number(window.prompt("Enter biology marks"));
// var Mathematics = Number(window.prompt("Enter mathematics marks"));
// var Computer = Number(window.prompt("Enter computer marks"));
// var persentage = (Physics + Chemistry + Biology + Mathematics + Computer) / 500 * 100;

// if (persentage >= 90) {
//     console.log("Grade A")
// } 
// else if (persentage >= 80) {
//     console.log("Grade B")
// } 
// else if (persentage >= 70) {
//     console.log("Grade C")
// } 
// else if (persentage >= 60) {
//     console.log("Grade D")
// } 
// else if (persentage >= 40) {
//     console.log("Grade E")
// }
//  else if (persentage < 40) {
//     console.log("Grade F")
// }

// -----------------------------------------------------------------

// ********************************* Using switch case*********************************

// 15- Write a program to print total number of days in month 

// Answer 15

// var month = window.prompt("Entyer your month ");
// switch (month) {
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         console.log("30 days");
//         break;
//     case '2':
//         console.log("28 or 29 days");
//         break;
//     default:
//         console.log("31 days");
// }

// ------------------------------------------------------------------

// 16 - Write a program to check whether an alphabet is vowel or consonant

// Answer 16

// var char = window.prompt("Enter your char");
// switch (char) {
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case "i":
//     case "I":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//         console.log("char is vowel");
//         break;
//     default:
//         console.log("char is consonant");
//         break;
// }

// ---------------------------------------------------------------------

// 17 - Write a program to find maximum between two numbers

// Answer 17

// var num1 = Number(window.prompt('enter number 1'))
// var num2 = Number(window.prompt('enter number 2'))
// switch (num1 > num2) {
//     case true: 
//     console.log(" number is bigger= " + num1);
//         break;
        
//     case false: 
//     console.log("number is bigger= " + num2);
//         break;
// }

// ---------------------------------------------------------------

// 18- Write a program to check whether a number is even or odd 

// Answer 18

// var num = Number(window.prompt('enter number'))
// switch (num % 2 == 0) {
//     case true:
//          console.log("this number is even");
//         break;
//     case false:
//          console.log("this number is odd");
//         break;
// }

// ----------------------------------------------------------------

// 19- Write a program to check whether a number is positive or negative or zero

// Answer 19

// var num = Number(window.prompt('enter your number'))
// switch (num > 0) {
//     case true:
//         console.log("Number is positive");
//         break;
//     case false:
//         console.log("Number is negative");
//         break;
// }

// ---------------------------------------------------------------------

// 20 - Write a program to create Simple Calculator

// Answer 20

// var num1 = Number(window.prompt("Enter first number"));
// var operator  = window.prompt("Enter your operator ");
// var num2 = Number(window.prompt("Enter second number"));

// switch (operator ) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num1 / num2);
//         break;
// }















































