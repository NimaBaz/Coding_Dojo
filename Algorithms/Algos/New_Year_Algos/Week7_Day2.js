/* 
    Given in an alumni interview in 2021.
    String Encode
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears. 


    If final result is not shorter (such as "bb" => "b2" ),
    return the original string.
  */

    const str1 = "aaaabbcddd";
    const expected1 = "a4b2c1d3";

    const str2 = "";
    const expected2 = "";

    const str3 = "a";
    const expected3 = "a";

    const str4 = "bbcc";
    const expected4 = "bbcc";

    /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */

    function encodeStr(str) {
        let newStr = {};
        var obj = "";

        for (var i = 0; i < str.length; i++) {
            if (!newStr[str[i]]) {
                newStr[str[i]] = 1;
            }
            else {
                newStr[str[i]]++;
            }
        }
        if (str.length > (Object.keys(newStr).length * 2)) {
            for (values in newStr) {
                obj += values + newStr[values];
            }
        }
        else {
            return str;
        }
        return obj
    }

    console.log(encodeStr(str1));
    console.log(encodeStr(str2));
    console.log(encodeStr(str3));
    console.log(encodeStr(str4));


// /* 
//     String Decode  
// */

// const str1 = "a3b2c1d3";
// const expected1 = "aaabbcddd";

// const str2 = "a3b2c12d10";
// const expected2 = "aaabbccccccccccccdddddddddd";

// /**
//  * Decodes the given string by duplicating each character by the following int
//  * amount if there is an int after the character.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str An encoded string with characters that may have an int
//  *    after indicating how many times the character occurs.
//  * @returns {string} The given str decoded / expanded.
//  */
// function decodeStr(str) {

//     var newStr = []
//     let obj ="";

//     for (var i = 0; i < str.length; i++) {
//         for (var j = 0; j < str.length; j++) {
            
//         }
//     }
// }

// console.log(decodeStr(str1));
// console.log(decodeStr(str2));
