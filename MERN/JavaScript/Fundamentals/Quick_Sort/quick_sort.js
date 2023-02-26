// Quick Sort
// Technical interview practice
// Implement quicksort
// Sort an unsorted array with no duplicate values

var nums1 = [1, 2, 3, 2];
var nums2 = [2, 1, 1, 2];
var nums3 = [3, 2, 2, 1, 3, 2, 4];

// const swap = (nums, i, j)  => {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

// const partition = (nums, left, right) => {
//     // choose pivot 
//     var pivot = nums[Math.floor((right + left) / 2)]; // middle pointer

//     // left pointer is compared to right pointer
//     while (left <= right) {
//         while (nums[left] < pivot) {
//             left++;
//         }
//         while (nums[right] > pivot) {
//             right--;
//         }
//         if (left <= right) {
//             swap(nums, left, right); // swaps two elements
//             left++;
//             right--;
//         }
//     }
//     return left;
// }

// function quickSort(nums, left, right) {
//     if (nums.length > 1) {
//         pivot = partition(nums, left, right); // pivot from the partition function

//         if (left < pivot - 1) {
//             quickSort(nums, left, pivot - 1);
//         }
//         if (pivot < right) {
//             quickSort(nums, pivot, right);
//         }
//     }
//     return nums;
// }


const quickSort = (nums = []) => {
    const obj = {};
    const newArray = [];

    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = true;
            newArray.push(nums[i]);
        };
    };
    return newArray.sort((left, right) => left - right);
}

var sotredArray1 = quickSort(nums1);
var sotredArray2 = quickSort(nums2);
var sotredArray3 = quickSort(nums3);
// var sotredArray1 = quickSort(nums1, 0, nums1.length - 1);
// var sotredArray2 = quickSort(nums2, 0, nums2.length - 1);
// var sotredArray3 = quickSort(nums3, 0, nums3.length - 1);
console.log(sotredArray1);
console.log(sotredArray2);
console.log(sotredArray3);
