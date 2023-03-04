

//====================================Day 2: Exercises================================================

//1-Declare a variable named challenge and assign it to an initial value 'Long Days Of JavaScript'.
let challenge = ' Long Days Of JavaScript ';
//-2Print the string on the browser console using console.log()
console.log(challenge);
//-3Print the length of the string on the browser console using console.log()
console.log(challenge.length);
//4-Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
//5-Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());
//6-Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, 5));
//7-Slice out the phrase Days Of JavaScript from Long Days Of JavaScript.
console.log(challenge.substring(5, 23));
//-8Check if the string contains a word Script using includes() method
console.log(challenge.includes("a"));
//9-Split the string into an array using split() method
let array = challenge
console.log(array.split());
//10-Split the string Long Days Of JavaScript at the space using split() method
console.log(array.split(" "));
//11-'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let hola = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(hola.split(", "));
//12-Change Long Days Of JavaScript to Long Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));
//13-What is character at index 15 in 'Long Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));
//14-What is the character code of J in 'Long Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("j"));
//15-Use indexOf to determine the position of the first occurrence of a in Long Days Of JavaScript
console.log(challenge.indexOf("a"));
//16-Use lastIndexOf to determine the position of the last occurrence of a in Long Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));
//17-Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let adios = 'You cannot end a sentence with because because because is a conjunction'
console.log(adios.indexOf("because"));
//18-Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(adios.lastIndexOf("because"));
//19-Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(adios.search("because"));
//20-Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' Long Days Of JavaScript '.
console.log(challenge.trim());
//21-Use startsWith() method with the string Long Days Of JavaScript and make the result true
console.log(challenge.startsWith(" Long"));
//22-Use endsWith() method with the string Long Days Of JavaScript and make the result true
let si = 'Long Days Of JavaScript';
let no = si.endsWith('Script');
console.log(no); 
//23-Use match() method to find all the a’s in Long Days Of JavaScript
let sil = 'Long Days Of JavaScript';
let nol = sil.match(/a/g);
console.log(nol); 
//24-Use concat() and merge ‘Long Days of' and 'JavaScript' to a single string, 'Long Days Of JavaScript'
let silo = 'Long Days of';
let nolo = 'JavaScript';
let sino = silo.concat(' ', nolo);
console.log(sino);
//25-Use repeat() method to print Long Days Of JavaScript 2 times
let lo = 'Long Days Of JavaScript';
let re = lo.repeat(2);
console.log(re); 