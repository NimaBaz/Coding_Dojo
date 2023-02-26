// function romanToInt(s) {
//     var map = {"M":1000, "D":500, "C":100,"L":50,"X":10,"V":5,"I":1,"":0};
//     var sum = 0;
//     var prev = "";
//     var curr= "";

//     for (var i = 0; i < s.length; i++) {
//         curr = s[i];

//         if (i == 0 || map[prev] >= map[curr]) {
//             sum += map[prev];
//         }
//         else {
//             sum -= map[prev];
//         }
//         if (i == s.length - 1) {
//             sum += map[curr];
//         }
//         prev = curr;
//     }
//     console.log(sum);
//     return sum;
// }

// romanToInt("IIXXX")


// function alwaysHungry(arr) {
//     // your code here 
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == "food") {
//             console.log("yummy");
//         }
//         else {
//             console.log("I'm hungry");
//         }
//     }
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"


// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     // your code here
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > cutoff) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


// function betterThanAverage(arr) {
//     var sum = 0;
//     // calculate the average
//     var count = 0;
//     // count how many values are greater than the average

//     for ( var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     var avg = sum / arr.length;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > avg) {
//             console.log(arr[i]);
//             count++;
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4


// function reverse(arr) {
//     // your code here
//     var left = 0;
//     var right = arr.length - 1;
//     var temp = 0;

//     while (left < right) {
//         temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp; 
//         left++;
//         right--;
//     }
//     return arr;  
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     // your code here
//     for (var i = fibArr.length; i < n; i++) {
//         fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
//     }
//     return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



// function containsDuplicate(nums) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = 0; j < nums.length; j++) {
//             if (nums[i] == nums[j] && i != j) {
//                 return true;
//             }
//             else {
//                 continue;
//             }
//         }
//     }
//     return false;
// }
// var nums = [1,2,3,4];

// var result = containsDuplicate(nums);
// console.log(result);


// var msg = 'codingdojo';

// for (var x = -1; x < msg.length - 4; x += 1) {
//     if (msg.length == 6) {
//         for (var i = 2; i < 6; i++) {
//             console.log(i);
//         }
//     }
//     else {
//         for (var i = msg.length; i > (msg.length - 4); i -= 1) {
//             console.log(i);
//         }
//     }
// }


// var msg = 'codingdojo';

// for (var x = 3; x < msg.length - 4; x += 1) {
//     if (msg.length == 3) {
//         for (var i = 3; i < 8; i++) {
//             console.log(i);
//         }
//     }
//     else {
//         for (var i = msg.length; i > (msg.length - 1); i -= 2) {
//             console.log(i);
//         }
//     }
// }





