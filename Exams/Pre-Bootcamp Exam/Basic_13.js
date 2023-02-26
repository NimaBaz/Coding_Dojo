// Print1To255()
// Print all the integers from 1 to 255.

// function Print1To255() {
//     for (var i = 1; i <= 255; i++) {
//         console.log(i);
//     }
// }

// Print1To255()



// PrintOdds1To255()
// Print all odd integers from 1 to 255.

// function PrintOdds1To255() {
//     for (var i = 1; i <= 255; i += 2) {
//         console.log(i);
//     }
// }

// PrintOdds1To255()



// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer
// print the sum so far.

// function PrintIntsAndSum0To255() {
//     var sum = 0;

//     for (var i = 0; i <= 255; i++) {
//         sum += i;
//         console.log(i);
//         console.log(sum);
//     }
// }

// PrintIntsAndSum0To255()



// Iterate through a given array, printing each value.
// PrintArrayVals(arr)

// function PrintArrayVals(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// PrintArrayVals([1, 2, 3, 4, 5])



// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.

// function PrintMaxOfArray(arr) {
//     var max = 0;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }

// PrintMaxOfArray([1, 2, 3, 4, 5])



// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.

// function PrintAverageOfArray(arr) {
//     var avg = 0;

//     for (var i = 0; i < arr.length; i++) {
//         avg += arr[i];
//     }
//     console.log(avg / arr.length);
// }

// PrintAverageOfArray([1, 2, 3, 4, 5])



// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1
// and 255(inclusive).

// function ReturnOddsArray1To255() {
//     var odd = [];

//     for (var i = 1; i <= 255; i += 2) {
//         if (i % 2 != 0) {
//             odd.push(i);
//         }
//     }
//     console.log(odd);
// }

// ReturnOddsArray1To255()



// SquareArrayVals(arr)
// Square each value in a given array, returning that
// same array with changed values.

// function SquareArrayVals(arr) {

//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = Math.pow(arr[i], 2);
//     }
//     return arr;
// }

// SquareArrayVals([1, 2, 3, 4, 5])



// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the
// number of array values greater than Y.

// function ReturnArrayCountGreaterThanY(arr, y) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > y) {
//             console.log(arr[i]);
//         }
//     }
// }

// ReturnArrayCountGreaterThanY([1, 2, 3, 4, 5, 6, 7], 4)



// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative
// values to zero.

// function ZeroOutArrayNegativeVals(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = 0;
//         }
//     }
//     console.log(arr);
//     return arr;
// }

// ZeroOutArrayNegativeVals([-1, 2, -3, 4, -5, 6])



// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average
// values for that array.

// function PrintMaxMinAverageArrayVals(arr) {
//     var max = 0;
//     var min = 1;
//     var avg = 0;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }

//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         avg += arr[i] / arr.length;
//     }
//     console.log(max);
//     console.log(min);
//     console.log(avg);
// }

// PrintMaxMinAverageArrayVals([1, 2, 3, 4, 5, 6, 7, 8])



// ShiftArrayValsLeft(arr)
// Given an array, move all values forward(to the left)
// by one index, dropping the first value and leaving a 0
// (zero) value at the end of the array.

// function ShiftArrayValsLeft(arr) {

//     for (var i = 0; i < arr.length; i++) {
//         arr[i] += ;
//         arr[4] = 0;
//     }
//     console.log(arr);
// }

// ShiftArrayValsLeft([1, 2, 3, 4, 5])



// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative
// values with the string 'Dojo'.

// function SwapStringForArrayNegativeVals(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = 'Dojo';
//         }
//     }
//     console.log(arr);
// }

// SwapStringForArrayNegativeVals([-1, 2, 3, 4, -5])

