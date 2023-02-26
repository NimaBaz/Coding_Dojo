// Quick Sort
// Technical interview practice
// Implement quicksort
// Sort an unsorted array with no duplicate values

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const swap = (nums, i, j)  => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const partition = (nums, left, right) => {
    // choose pivot 
    var pivot = nums[Math.floor((right + left) / 2)]; // middle pointer

    // left pointer is compared to right pointer
    while (left <= right) {
        while (nums[left] < pivot) {
            left++;
        }
        while (nums[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(nums, left, right); // swaps two elements
            left++;
            right--;
        }
    }
    return left;
}

function quickSort(nums, left, right) {
    if (nums.length > 1) {
        pivot = partition(nums, left, right); // pivot from the partition function

        if (left < pivot - 1) {
            quickSort(nums, left, pivot - 1);
        }
        if (pivot < right) {
            quickSort(nums, pivot, right);
        }
    }
    return nums;
}

// ---------------------------------------------------------------------------------------------

// This sortss and removes duplicates 

// const quickSort = (nums = []) => {
//     const obj = {};
//     const newArray = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (!obj[nums[i]]) {
//             obj[nums[i]] = 1;
//             newArray.push(nums[i]);
//         };
//     };
//     return newArray.sort((left, right) => left - right);
// }

console.log(quickSort(nums1, 0, nums1.length - 1))
console.log(quickSort(nums2, 0, nums2.length - 1))
console.log(quickSort(nums3, 0, nums3.length - 1))
console.log(quickSort(nums4, 0, nums4.length - 1))
