//////////////////////////////////////////////////////////
/*CodingBat.com array2 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/*
Return the number of even ints in the given array. Note: the % "mod" 
operator computes the remainder, e.g. 5 % 2 is 1;

countEvens([2, 1, 2, 3, 4]) → 3
countEvens([2, 2, 0]) → 3
countEvens([1, 3, 5]) → 0
*/

function countEvens(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] % 2 == 0) {
        count += 1;
      }
    }
    return count;
  }
  
  console.log(countEvens([1, 3, 5]));

  // or 

  function countEvens(a) {
    return a.filter((a) => a % 2 == 0).length;
  }
  
  console.log(countEvens([2, 1, 2, 3, 4]));

  //////////////////////////////////////////////////////////

/*
Given an array length 1 or more of ints, return the difference between 
the largest and smallest values in the array. Note: the built-in 
Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or
larger of two values;

bigDiff([10, 3, 5, 6]) → 7
bigDiff([7, 2, 10, 9]) → 8
bigDiff([2, 10, 7, 2]) → 8
*/

function bigDiff(a) {
    let max = a[0];
    let min = a[0];
    for (let i = 0; i < a.length; i++) {
      max = Math.max(max, a[i]);
      min = Math.min(min, a[i]);
    }
    return max - min;
  }
  
  console.log(bigDiff([2, 10, 7, 2]));

// or

function bigDiff(a) {
    return Math.max(...a) - Math.min(...a)
  }
  
  console.log(bigDiff([2, 10, 7, 2]));

  //////////////////////////////////////////////////////////

/*
Return the "centered" average of an array of ints, which we'll say is the
mean average of the values, except ignoring the largest and smallest 
values in the array. If there are multiple copies of the smallest value, 
ignore just one copy, and likewise for the largest value. Use int 
division to produce the final average. You may assume that the array 
is length 3 or more;

centeredAverage([1, 2, 3, 4, 100]) → 3
centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5
centeredAverage([-10, -4, -2, -4, -2, 0]) → -3
*/

function centeredAverage(a) {
  let avg =
    a.reduce((total, current) => total + current) -
    Math.min(...a) -
    Math.max(...a);

  return avg / (a.length - 2);
}
console.log(centeredAverage([1, 2, 3, 4, 100]));

//////////////////////////////////////////////////////////

/*
Return the sum of the numbers in the array, returning 0 for an empty array.
Except the number 13 is very unlucky, so it does not count and numbers 
that come immediately after a 13 also do not count;

sum13([1, 2, 2, 1]) → 6
sum13([1, 1]) → 2
sum13([1, 2, 2, 1, 13]) → 6
*/

function sum13(arr) {
  let total = 0;
  if (arr.length === 0){
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 13) {
      return total;
    }
    total += arr[i];
  }
  return total;
}

console.log(sum13([1, 2, 2, 1, 13]));

// or 

function sum13(arr) {
  let total = 0;
  arr.forEach((a, i) => {
    if (arr[i] === 13) {
      return total;
    }
    total += arr[i];
  });
  return total;
}

console.log(sum13([1, 1]));

//////////////////////////////////////////////////////////

/* 
Return the sum of the numbers in the array, except ignore sections of 
numbers starting with a 6 and extending to the next 7 (every 6 will be 
followed by at least one 7). Return 0 for no numbers;

sum67([1, 2, 2]) → 5
sum67([1, 2, 2, 6, 99, 99, 7]) → 5
sum67([1, 1, 6, 7, 2]) → 4
*/

function sum67(arr) {
  let start;
  let end;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 6) {
      start = arr.indexOf(arr[i]);
    }
    if (arr[i] == 7) {
      end = arr.indexOf(arr[i]);
    }
    arr.splice(start, end - start + 1);
  }
  return arr.reduce((current, num) => current + num);
}
console.log(sum67([1, 2, 2, 6, 99, 99, 7, 1, 1, 34]));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if the array contains a 2 next to a 2 
somewhere;

has22([1, 2, 2]) → true
has22([1, 2, 1, 2]) → false
has22([2, 1, 2]) → false
*/

function has22(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2 && arr[i + 1] == 2) {
      return true;
    }
  }
  return false;
}

console.log(has22([1, 2, 3, 2]));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if the array contains no 1's and no 3's;

lucky13([0, 2, 4]) → true
lucky13([1, 2, 3]) → false
lucky13([1, 2, 4]) → false
*/

function lucky13(arr) {
  for (let num of arr) {
    if (num == 1 || num == 3) {
      return false;
    }
  }
  return true;
}

console.log(lucky13([2, 2, 1]));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if the sum of all the 2's in the array
is exactly 8;

sum28([2, 3, 2, 2, 4, 2]) → true
sum28([2, 3, 2, 2, 4, 2, 2]) → false
sum28([1, 2, 3, 4]) → false
*/

function sum28(arr) {
  let two = arr.filter((num) => num == 2);
  if (two.reduce((total, num) => num + total) == 8) {
    return true;
  }
  return false;
}

console.log(sum28([2, 3, 2, 4, 4, 2, 2]));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if the number of 1's is greater than the
number of 4's;

more14([1, 4, 1]) → true
more14([1, 4, 1, 4]) → false
more14([1, 1]) → true
*/

function more14(arr) {
  let one = arr.filter((num) => num == 1);
  let four = arr.filter((num) => num == 4);
  return one.length > four.length 
    ?true
    :false;
}

console.log(more14([1, 4, 1, 4]));

//////////////////////////////////////////////////////////

/* 
Given a number n, create and return a new int array of length n, containing 
the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just 
return a length 0 array. You do not need a separate if-statement for the 
length-0 case; the for-loop should naturally execute 0 times in that case, 
so it just works. The syntax to make a new int array is: 
new int[desired_length]   (See also: FizzBuzz Code);

fizzArray(4) → [0, 1, 2, 3]
fizzArray(1) → [0]
fizzArray(10) → [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

function fizzArray(a) {
  let arr = [];
  for (let i = 0; i < a; i++) arr.push(i);
  return arr;
}

console.log(fizzArray(10));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if every element is a 1 or a 4;

only14([1, 4, 1, 4]) → true
only14([1, 4, 2, 4]) → false
only14([1, 1]) → true
*/

function only14(arr) {
  let targetNums = arr.filter((num) => num == 1 || num == 4);
  if (targetNums.length == arr.length) {
    return true;
  }
  return false;
}

console.log(only14([1, 1, 1, 1, 4, 4, 4, 4]));

//////////////////////////////////////////////////////////

/* 
Given a number n, create and return a new string array of length n, 
containing the strings "0", "1" "2" .. through n-1. N may be 0, in which
case just return a length 0 array. Note: String.valueOf(xxx) will make the
String form of most types. The syntax to make a new string array is: new 
String[desired_length]  (See also: FizzBuzz Code)

fizzArray2(4) → ["0", "1", "2", "3"]
fizzArray2(10) → ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
fizzArray2(2) → ["0", "1"]
*/

function fizzArray2(a) {
  let newArr = [];
  for (let i = 0; i < a; i++) {
    newArr.push(i.toString());
  }
  return newArr;
}

console.log(fizzArray2(4));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if it contains no 1's or it contains no
4's;

no14([1, 2, 3]) → true
no14([1, 2, 3, 4]) → false
no14([2, 3, 4]) → true
*/

function no14(arr) {
  let one = arr.filter((num) => num == 1);
  let four = arr.filter((num) => num == 4);
  if (one == !true || four == !true) {
    return true;
  }
  return false;
}

console.log(no14([2, 3, 4]));

// or 

function no14(arr) {
  return arr.includes(4) && arr.includes(1) 
    ? false 
    : true;
}

console.log(no14([1, 2, 3, 4]));

//////////////////////////////////////////////////////////

/* 
We'll say that a value is "everywhere" in an array if for every pair of
adjacent elements in the array, at least one of the pair is that value.
Return true if the given value is everywhere in the array;

isEverywhere([1, 2, 1, 3], 1) → true
isEverywhere([1, 2, 1, 3], 2) → false
isEverywhere([1, 2, 1, 3, 4], 1) → false
*/

function isEverywhere(arr, n) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== n && arr[i + 1] !== n) {
      return false;
    }
  }
  return true;
}

console.log(isEverywhere([1, 2, 1, 3], 2));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if the array contains a 2 next to a 2
or a 4 next to a 4, but not both;

either24([1, 2, 2]) → true
either24([4, 4, 1]) → true
either24([4, 4, 1, 2, 2]) → false
*/

function either24(arr) {
  let four = false;
  let two = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2 && arr[i + 1] == 2) {
      two = true;
    }
    if (arr[i] == 4 && arr[i + 1] == 4) {
      four = true;
    }
  }
  return four && two ? false : true;
}

console.log(either24([2, 2, 1, 2]));

//////////////////////////////////////////////////////////

/* 
Given arrays nums1 and nums2 of the same length, for every element in
nums1, consider the corresponding element in nums2 (at the same index).
Return the count of the number of times that the two elements differ 
by 2 or less, but are not equal;

matchUp([1, 2, 3], [2, 3, 10]) → 2
matchUp([1, 2, 3], [2, 3, 5]) → 3
matchUp([1, 2, 3], [2, 3, 3]) → 2
*/

function matchUp(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (Math.abs(arr1[i] - arr2[i]) <= 2 && arr1[i] !== arr2[i]) {
      count++;
    }
  }
  return count;
}
console.log(matchUp([1, 2, 3], [2, 3, 10]));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if the array contains two 7's next to
each other, or there are two 7's separated by one element, such as with 
{7, 1, 7};

has77([1, 7, 7]) → true
has77([1, 7, 1, 7]) → true
has77([1, 7, 1, 1, 7]) → false
*/

function has77(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == 7 && (arr[i + 1 ] == 7 || arr[i + 2] == 7)){
      return true;
    }
  }
  return false;
}

console.log(has77([1, 7, 7]))

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if there is a 1 in the array with a 2 
somewhere later in the array;

has12([1, 3, 2]) → true
has12([3, 1, 2]) → true
has12([3, 1, 4, 5, 2]) → true
*/

function has12(arr) {
  let one = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      one = i;
    }
    if (arr[i] == 2 && i > one) {
      return true;
    }
  }
  return false;
}

console.log(has12([3, 1, 3, 2]));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if the array contains either 3 even 
or 3 odd values all next to each other;

modThree([2, 1, 3, 5]) → true
modThree([2, 1, 2, 5]) → false
modThree([2, 4, 2, 5]) → true
*/

function modThree(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] && arr[i + 1] && arr[i + 2]) % 2 == 0) {
      return true;
    }
    if ((arr[i] && arr[i + 1] && arr[i + 2]) % 2 == 1) {
      return true;
    }
  }
  return false;
}

console.log(modThree([2, 4, 2, 5]));

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if the value 3 appears in the array 
exactly 3 times, and no 3's are next to each other;

haveThree([3, 1, 3, 1, 3]) → true
haveThree([3, 1, 3, 3]) → false
haveThree([3, 4, 3, 3, 4]) → false
*/

function haveThree(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3 && arr[i + 1] !== 3) {
      count += 1;
    }
    if (count === 3) {
      return true;
    }
  }
  return false;
}
console.log(haveThree([3, 1, 3, 3]));

//////////////////////////////////////////////////////////

/*
Given an array of ints, return true if every 2 that appears in the array 
is next to another 2;

twoTwo([4, 2, 2, 3]) → true
twoTwo([2, 2, 4]) → true
twoTwo([2, 2, 4, 2]) → false
*/

function twoTwo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2 && arr[i + 1] !== 2 && arr[i - 1] !== 2) {
      return false;
    }
  }

  return true;
}
console.log(twoTwo([2, 2, 4]));

//////////////////////////////////////////////////////////

/*
Return true if the group of N numbers at the start and end of the array 
are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are 
the same for n=0 and n=2, and false for n=1 and n=3. You may assume 
that n is in the range 0..nums.length inclusive;

sameEnds([5, 6, 45, 99, 13, 5, 6], 1) → false 
sameEnds([5, 6, 45, 99, 13, 5, 6], 2) → true
sameEnds([5, 6, 45, 99, 13, 5, 6], 3) → false
*/

function sameEnds(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - num + i]) {
      return true;
    }
  }
  return false;
}

console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 2));

//////////////////////////////////////////////////////////

/*
Return true if the array contains, somewhere, three increasing adjacent
numbers like .... 4, 5, 6, ... or 23, 24, 25;

tripleUp([1, 4, 5, 6, 2]) → true
tripleUp([1, 2, 3]) → true
tripleUp([1, 2, 4]) → false
*/

function tripleUp(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1] 
        && arr[i + 1] + 1 === arr[i + 2]) {
      return true;
    }
  }

  return false;
}
console.log(tripleUp([1, 3, 4, 1, 2, 3]));

//////////////////////////////////////////////////////////

/*
Given start and end numbers, return a new array containing the sequence 
of integers from start up to but not including end, so start=5 and end=10 
yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the 
start number. Note that a length-0 array is valid. (See also: FizzBuzz 
Code)

fizzArray3(5, 10) → [5, 6, 7, 8, 9]
fizzArray3(11, 18) → [11, 12, 13, 14, 15, 16, 17]
fizzArray3(1, 3) → [1, 2]
*/

function fizzArray3(a, b) {
  let arr = [];
  while (a < b) {
    arr.push(a);
    a++
  }
  return arr;
}

console.log(fizzArray3(11, 18));

//////////////////////////////////////////////////////////

/*
Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns
{2, 5, 3, 6}. You may modify and return the given array, or return a new 
array.

shiftLeft([6, 2, 5, 3]) → [2, 5, 3, 6]
shiftLeft([1, 2]) → [2, 1]
shiftLeft([1]) → [1]
*/

function shiftLeft(arr){
  return arr.splice(1).concat(arr.splice(0,1));
}

console.log(shiftLeft([6,2,5,3]));

//////////////////////////////////////////////////////////

/*
For each multiple of 10 in the given array, change all the values following it to 
be that multiple of 10, until encountering another multiple of 10.
So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.

tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]
*/

function tenRun(arr) {
  // iterate the array;
  for (i = 0; i < arr.length - 1; i++) {
    // if the int at i is divisible by 10  and === 0;
    if (arr[i] % 10 == 0) {
     // if the following number is not divisible by 10 and === 0;
      if (arr[i + 1] % 10 != 0) {
        // set that number to the current number;
        arr[i + 1] = arr[i];
      }
    }
  }
  return arr;
}

console.log(tenRun([2, 10, 3, 4, 20, 5]));

//////////////////////////////////////////////////////////


function pre4(arr) {
  let upToFour = [];
  for (i = 0; i < arr.length; i++)
    while (i < arr.length - 1 && arr[i] !== 4) {
      upToFour.push(arr[i]);
      i++;
    }

  return upToFour;
}

console.log(pre4([1, 3, 4, 5]));

// or 

function pre4(array) {
  // variable for the result array;
  let result = [];
  // iterate over the array;
  for (let i = 0; i < array.length; i++) {
    // if the index is === 4 set result to the array from start ending at the current index;
    if (array[i] === 4) {
      result = array.slice(0, i);
      return result;
    }
  }
  return result;
}

console.log(pre4([1, 2, 4, 1]));

//////////////////////////////////////////////////////////

/* 
Given a non-empty array of ints, return a new array containing the elements from the 
original array that come after the last 4 in the original array. The original array 
will contain at least one 4. Note that it is valid in java to create an array of length 0.

post4([2, 4, 1, 2]) → [1, 2]
post4([4, 1, 4, 2]) → [2]
post4([4, 4, 1, 2, 3]) → [1, 2, 3]
*/

function post4(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === 4) {
      return arr.splice(i + 1);
    }
  }
}

console.log(post4([2, 4, 1, 2]));

//////////////////////////////////////////////////////////

/* 
an element in an array is "alone" if there are values before and after it, and those
values are different from it. Return a version of the given array where every instance
of the given value which is alone is replaced by whichever value to its left or right is larger.

notAlone([1, 2, 3], 2) → [1, 3, 3]
notAlone([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
notAlone([3, 4], 3) → [3, 4]
*/

function notAlone(arr, n) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == n && arr[i - 1] != undefined && arr[i + 1] != undefined) {
      if (arr[i - 1] > arr[i + 2]) {
        arr[i] = arr[i - 1];
      }
      arr[i] = arr[i + 1];
    }
  }
  return arr;
}

console.log(notAlone([1, 2, 3, 2, 5, 2], 2));

/* 
Goal: return an array that contains the same numbers as the given array but rearranged so all zeros are grouped at the beginning
Params: Araray: arr
Return Val: array;
Logic: 
initiate array for zeroes;
initiate array for other numbers;
loop over the array  ;
add all zeroes to an array ;
add all other numbers to an array;
return the arrays combined with zeros first;

Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.

zeroFront([1, 0, 0, 1]) → [0, 0, 1, 1]
zeroFront([0, 1, 1, 0, 1]) → [0, 0, 1, 1, 1]
zeroFront([1, 0]) → [0, 1]
*/

function zeroFront(arr) {
  let zeroes = [];
  let numbers = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroes.push(arr[i]);
    }
    if (arr[i] !== 0) {
      numbers.push(arr[i]);
    }
  }
  return [...zeroes, ...numbers];
}

console.log(zeroFront([1, 0]));

/* 
Goal: return an array where all 10s are removed. all elements are shifted left and end elements are replaced with 0's
Params: array: arr;
Return Val: array;
Logic:
initiate array zero
initiate array not10
loop over array
if an index is not 10
push to not10
if an index is 10
push a 0 to zero
return the combined arrays with zeroes at end

Return a version of the given array where all the 10's have been removed. The remaining elements should shift left towards the start of the array as needed, and the empty spaces a the end of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array.

withoutTen([1, 10, 10, 2]) → [1, 2, 0, 0]
withoutTen([10, 2, 10]) → [2, 0, 0]
withoutTen([1, 99, 10]) → [1, 99, 0]
*/

function withoutTen(arr) {
  let zero = [];
  let not10 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 10) {
      not10.push(arr[i]);
    }
    if (arr[i] == 10) {
      zero.push(0);
    }
  }
  return [...not10, ...zero];
}

console.log(withoutTen([1, 99, 10]));

/*
Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. If there is no odd value to the right of the zero, leave the zero as a zero.

zeroMax([0, 5, 0, 3]) → [5, 5, 3, 3]
zeroMax([0, 4, 0, 3]) → [3, 4, 3, 3]
zeroMax([0, 1, 0]) → [1, 1, 0]
*/

function zeroMax(arr) {
  let max = 0;
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] % 2 == 1) {
      max = Math.max(max, arr[i]);
    }
    if (arr[i] == 0) {
      arr[i] = max;
    }
  }

  return arr;
}

console.log(zeroMax([0, 5, 0, 3]));
console.log(zeroMax([0, 4, 0, 3]));
console.log(zeroMax([0, 1, 0]));

  /* 
Return an array that contains the exact same numbers as the given array, but rearranged so that all the even numbers come before all the odd numbers. Other than that, the numbers can be in any order. You may modify and return the given array, or make a new array.


evenOdd([1, 0, 1, 0, 0, 1, 1]) → [0, 0, 0, 1, 1, 1, 1]
evenOdd([3, 3, 2]) → [2, 3, 3]
evenOdd([2, 2, 2]) → [2, 2, 2]
*/

function evenOdd(arr) {
  return arr.filter((num) => num % 2 == 0) + arr.filter((num) => num % 2 == 1);
}

console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]));


/*This is slightly more difficult version of the famous FizzBuzz problem which is sometimes given as a first problem for job interviews. (See also: FizzBuzz Code.) Consider the series of numbers beginning at start and running up to but not including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new String[] array containing the string form of these numbers, except for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz", and for multiples of both 3 and 5 use "FizzBuzz". In Java, String.valueOf(xxx) will make the String form of an int or other type. This version is a little more complicated than the usual version since you have to allocate and index into an array instead of just printing, and we vary the start/end instead of just always doing 1..100.

fizzBuzz(1, 6) → ["1", "2", "Fizz", "4", "Buzz"]
fizzBuzz(1, 8) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
fizzBuzz(1, 11) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]
*/


function fizzBuzz(start, end) {
  let fizz = [];
  let word = "";
  for (let i = start; i < end; i++) {
    i % 3 === 0 && i % 5 === 0
      ? (word = "FizzBuzz")
      : i % 3 === 0
      ? (word = "Fizz")
      : i % 5 === 0
      ? (word = "Buzz")
      : (word = i);

    fizz.push(word);
  }
  return fizz;
}

console.log(fizzBuzz(1, 16));


//////////////////////////////////////////////////////////
/* END OF CODINGBAT ARRAY 2 IN JAVASCRIPT */
//////////////////////////////////////////////////////////