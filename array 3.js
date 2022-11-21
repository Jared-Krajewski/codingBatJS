//////////////////////////////////////////////////////////
/*CodingBat.com array1 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/*
Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)

maxSpan([1, 2, 1, 1, 3]) → 4
maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6
*/
function maxSpan(arr) {
    let span = 1;
    let temp;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          temp = j - i + 1;
        }
        if (temp > span) {
          span = temp;
        }
      }
    }
    return span;
  }
  console.log(maxSpan([1, 2, 1, 1, 3]));
// || recursively 
function maxSpan(arr) {
    if (arr.length > 0 && arr[0] != arr[arr.length - 1]) {
      return arr.length - 1;
    }
    return arr.length;
  }
  console.log(maxSpan([1, 4, 2, 1, 4, 1, 4]));

/*
Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.

fix34([1, 3, 1, 4]) → [1, 3, 4, 1]
fix34([1, 3, 1, 4, 4, 3, 1]) → [1, 3, 4, 1, 1, 3, 4]
fix34([3, 2, 2, 4]) → [3, 4, 2, 2]
*/ 

function fix34(arr) {
  let temp;
  let result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
      temp = arr[i + 1];
      result.splice(i + 1, 1, 4);
    }
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === 4) {
        result.splice(j, 1, temp);
      }
    }
  }
  return result;
}
console.log(fix34([1, 3, 1, 4, 4, 3, 1]));

 /*
(This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4's, but every other number may move. The array contains the same number of 4's and 5's, and every 4 has a number after it that is not a 4. In this version, 5's may appear anywhere in the original array.

fix45([5, 4, 9, 4, 9, 5]) → [9, 4, 5, 4, 5, 9]
fix45([1, 4, 1, 5]) → [1, 4, 5, 1]
fix45([1, 4, 1, 5, 5, 4, 1]) → [1, 4, 5, 1, 1, 4, 5]
*/ 

function fix45(arr) {
  let nums;
  let five;

  arr.forEach((num, index) => {
    if (num == 4 && index + 1 != 5) {
      arr.splice(index + 1, 1, 5);
    }
    if (num == 5) {
      //  arr.splice(index, 1, nums)
    }
    arr.forEach((n, i) => {});
  });
  return arr;
}
console.log(fix45([5, 4, 9, 4, 9, 5]));