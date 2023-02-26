/* 
    Acronyms
    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
    Do it with .split first if you need to, then try to do it without
*/

var upperCase = ' ';
const str1 = "object oriented programming";
const expected1 = "OOP";
const myArray = str1.split(" ");
for (var i = 0; i < myArray.length; i++) {
    upperCase += myArray[i][0].toUpperCase();
}
console.log(upperCase);

// The 4 pillars of OOP
var upperCase = ' ';
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";
const myArray2 = str2.split(" ");
for (var i = 0; i < myArray2.length; i++) {
    upperCase += myArray2[i][0].toUpperCase();
}
console.log(upperCase);

var upperCase = ' ';
const str3 = "software development life cycle";
const expected3 = "SDLC";
const myArray3 = str3.split(" ");
for (var i = 0; i < myArray3.length; i++) {
    upperCase += myArray3[i][0].toUpperCase();
}
console.log(upperCase);

// Bonus: ignore extra spaces
var upperCase = ' ';
const str4 = "  global   information tracker    ";
const expected4 = "GIT";
const myArray4 = str4.split(" ");
for (var i = 0; i < myArray4.length; i++) {
    if (myArray4[i] != "") {
        upperCase += myArray4[i][0].toUpperCase();
    }
}
console.log(upperCase);

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {}