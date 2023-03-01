/* 
Given two strings, return true if the first string can be built from the letters in the 2nd string
Ignore case .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.


/*****************************************************************************/

/**
 * Determines whether neededChars can be built using the chars of availableChars.
 * - Time: O(n + m) -> O(n) linear, n = neededChars length,
 *    m = availableChars length.
 * - Space: O(m) -> O(n) since it's still linear just call it n for simplicity.
 * @param {string} neededChars
 * @param {string} availableChars
 * @returns {boolean}
 */
function canBuildS1FromS2(neededChars, availableChars) {

    // Check to see if there are enough chars to do the check
    if (availableChars.length < neededChars.length ) {
        return false
    }

    const obj = {};

    // Create obj to store the frequency of characters in str2
    for (let i = 0; i < availableChars.length; i++) {
        char = availableChars.charAt(i).toLowerCase();
        obj[char] = (obj[char] || 0) + 1;
    }
    // Check to see if str1 can be built from the chars in str2
    for (let j = 0, availableChars = neededChars.length; j < availableChars; j++) {
        char = neededChars.charAt(j).toLowerCase();
        if (!obj[char]) {
            return false
        }
        else {
            obj[char] -= 1;
        }
    }
    return true
}
console.log(canBuildS1FromS2(strA1, strB1));
console.log(canBuildS1FromS2(strA2, strB2));
console.log(canBuildS1FromS2(strA3, strB3));
console.log(canBuildS1FromS2(strA4, strB4));
console.log(canBuildS1FromS2(strA5, strB5));
module.exports = { canBuildS1FromS2 };