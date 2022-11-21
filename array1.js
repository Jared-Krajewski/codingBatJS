//////////////////////////////////////////////////////////
/*CodingBat.com array1 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/*
Goal:take array and return true if first or last in array is 6;
Params: array: arr;
Return Val: boolean;
Logic if first index or last index is = to 6;
return true;
otherwise return false;

Given an array of ints, return true if 6 appears as either the first or 
last element in the array. The array will be length 1 or more;

firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
*/

function firstLast6(arr) {
    if (arr[0] === 6 || arr[arr.length - 1] == 6) {
      return true;
    }
    return false;
  }
  
  console.log(firstLast6([1, 6, 2, 26]));

// or 

function firstLast6(arr){
  return arr[0] == 6 || arr[arr.length-1] == 6
}
console.log(firstLast6([13, 6, 1, 2, 3]))

//////////////////////////////////////////////////////////

/*
Goal: take array and return true if the array is longer than 1 and
 the first and last numbers are euqal;
Params: arr;
Return Val: boolean;
Logic: 
if arry is > 1 and the first and last index are identical;
return true;
otherwise return false;

Given an array of ints, return true if the array is length 1 or more, and the first
 element and the last element are equal;

sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true
*/

function sameFirstLast(arr) {
    if (arr.length > 1 && arr[0] == arr[arr.length - 1]) {
      return true;
    }
    return false;
  }
  
  console.log(sameFirstLast([1, 2, 3, 1]));

  // or 

  function sameFirstLast(arr){
    return arr.length > 1 && arr[0] === arr[arr.length - 1] 
   }
   console.log(sameFirstLast([1, 2, 3]))

 //////////////////////////////////////////////////////////

/*
Goal: make an array with first 3 digits of pi;
Params: none    ;
Return Val: array length 3;
Logic: return array with 3,1,4;

Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4};

makePi() → [3, 1, 4]
*/

function makePi() {
    return [3, 1, 4];
  }
  
  console.log(makePi());

  //////////////////////////////////////////////////////////

/*
Goal:take 2 arrays, return true if they have the same first or last 
element;
Params: array1: a; array2: b;
Return Val: boolean ;
Logic: 
if index 0 of array1 and index 0 of array 2 are equal ;
return true;
if last index of array1 and last index of array2 are equal ;
return true;
otherwise return false;

Given 2 arrays of ints, a and b, return true if they have the same first
 element or they have the same last element. 
 Both arrays will be length 1 or more;

commonEnd([1, 2, 3], [7, 3]) → true
commonEnd([1, 2, 3], [7, 3, 2]) → false
commonEnd([1, 2, 3], [1, 3]) → true
*/

function commonEnd(a, b) {
  if (a[0] === b[0]) {
    return true;
  }
  if (a[a.length - 1] === b[b.length - 1]) {
    return true;
  }
  return false;
}

console.log(commonEnd([1, 2, 3], [1, 3]));

// or 
function commonEnd(a, b) {
  return a[0] === b[0] 
    || a[a.length - 1] === b[b.length - 1]
    ? true 
    : false;
}

console.log(commonEnd([1, 2, 3], [1, 3]));

  //////////////////////////////////////////////////////////

/*
Goal:take an array with 3 numbers and return the total sum;
Params: array: a;
Return Val: int;
Logic:
loop over array and return sum of all numbers;

Given an array of ints length 3, return the sum of all the elements;

sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7
*/

function sum3(a) {
    let num = 0;
    a.forEach((int) => (num += int));
    return num;
  }
  console.log(sum3([5, 11, 2]));

  // or 

  function sum3(a) {
    return a.reduce((b,c) => b + c)
   }
   console.log(sum3([5, 11, 2]));

    //////////////////////////////////////////////////////////

/*
Goal:take an array of 3 ints and return them with the first digit rotated 
to the end;
Params: array: a;
Return Val: array rotated left;
Logic: add first array element to the end and remove it from the front
return the array;

Given an array of ints length 3, return an array with the elements
 "rotated left" so {1, 2, 3} yields {2, 3, 1};

rotateLeft3([1, 2, 3]) → [2, 3, 1]
rotateLeft3([5, 11, 9]) → [11, 9, 5]
rotateLeft3([7, 0, 0]) → [0, 0, 7]
*/

function rotateLeft3(a) {
    a.push(a[0]);
    a.shift();
  
    return a;
  }
  
  console.log(rotateLeft3([5, 11, 9]));

  //////////////////////////////////////////////////////////
  
/*
Goal:return an array reversed ;
Params: array: a;
Return Val: reversed array;
Logic: reverse the array;

Given an array of ints length 3, return a new array with the elements 
in reverse order, so {1, 2, 3} becomes {3, 2, 1}l;

reverse3([1, 2, 3]) → [3, 2, 1]
reverse3([5, 11, 9]) → [9, 11, 5]
reverse3([7, 0, 0]) → [0, 0, 7]
*/

function reverse3(a){
   return a.reverse()
  }
  
  console.log(reverse3([5, 11, 9]))

  //////////////////////////////////////////////////////////

/*
Goal: take an array and see if the first or last element is larger.
 return array of same length with that number;
Params: array: a;
Return Val: array;
Logic:
find larger number at first or last index and replace each index with
the larger number;

Given an array of ints length 3, figure out which is larger, the first 
or last element in the array, and set all the other elements to be that 
value. Return the changed array;

maxEnd3([1, 2, 3]) → [3, 3, 3]
maxEnd3([11, 5, 9]) → [11, 11, 11]
maxEnd3([2, 11, 3]) → [3, 3, 3]
*/

function maxEnd3(a) {
  let max = Math.max(a[0], a[a.length - 1]);
  a[0] = max;
  a[1] = max;
  a[2] = max;
 return a
}

console.log(maxEnd3([11, 5, 9]));

// or 

function maxEnd3(a) {
  let max = Math.max(a[0], a[a.length - 1]);
  a.splice(0, 3, max, max, max);
  return a;
}

console.log(maxEnd3([11, 5, 9]));

//////////////////////////////////////////////////////////

/*
Goal:return sum of first 2 array elements. if length is less than 2 sum 
whatever exists. if array is zero return 0;
Params: array ;
Return Val: int;
Logic: 
return sum of first 2 ints in array;
if array length is 0;
return 0;
if array length is <2 return sum of array;

Given an array of ints, return the sum of the first 2 elements in the 
array. If the array length is less than 2, just sum up the elements 
that exist, returning 0 if the array is length 0;

sum2([1, 2, 3]) → 3
sum2([1, 1]) → 2
sum2([1, 1, 1, 1]) → 2
*/

function sum2(a) {
    if (a.length == 0) {
      return 0;
    }
    if (a.length < 2) {
      return a[0] + a[1] || a[0];
    }
    return a[0] + a[1];
  }
  
  console.log(sum2([1, 1, 1, 1]));
  
  // or 

  function sum2(a) {
    let total = 0;
    return a.reduce((a, b, i) => {
      while (i <= 1) {
        return a + b;
      }
      return a;
    });
  }
  console.log(sum2([1, 4, 5]));

  //////////////////////////////////////////////////////////


/*
Goal: take 2 arrays and return an array with both middle elements;
Params: array1: a; array2: b;
return val: array;
Logic: 
make array and push middle elements into new array;

Given 2 int arrays, a and b, each length 3, return a new array length 2
containing their middle elements;

middleWay([1, 2, 3], [4, 5, 6]) → [2, 5]
middleWay([7, 7, 7], [3, 8, 0]) → [7, 8]
middleWay([5, 2, 9], [1, 4, 5]) → [2, 4]
*/

function middleWay(a, b) {
    let middle = [];
    middle.push(a[1], b[1]);
    return middle;
  }
  
  console.log(middleWay([7, 7, 7], [3, 8, 0]));

  // or 

  function middleWay(a, b) {
    let result = 
        [a[Math.floor(a.length / 2 + 1)],
         b[Math.floor(b.length / 2 + 1)]
        ];
    return result
  }
 
  console.log(middleWay([7, 7, 7], [3, 8, 0]));

  //////////////////////////////////////////////////////////

/*
Goal: return new array with first and last elements from original array; 
Params: array: a;
Return Val: array;
Logic: create new array;
push first number and last number to new array;
return array;

Given an array of ints, return a new array length 2 containing the first
and last elements from the original array. The original array will
be length 1 or more;

makeEnds([1, 2, 3]) → [1, 3]
makeEnds([1, 2, 3, 4]) → [1, 4]
makeEnds([7, 4, 6, 2]) → [7, 2]
*/

function makeEnds(a){
    let newArr = [];
    newArr.push(a[0], a[a.length -1]);
    return newArr;
  }
  console.log(makeEnds([1, 2, 3]))

  //////////////////////////////////////////////////////////

/*
Goal: return true if array contains a 2 or a 3;
Params: array: a;
Return Val: boolean ;
Logic: 
if array index 0 is 2 or 3 or index 1 is 2 or 3;
return true;
otherwise return false;

Given an int array length 2, return true if it contains a 2 or a 3;

has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false
*/

function has23(a){
    if (a[0] === 2 || a[0] === 3 || a[1] === 2 || a[1] === 3){
      return true
    }
    return false
  }
  console.log(has23([4, 5]));

  // or 

  function has23(a) {
    let answer = false;
    a.includes(2)
      ? (answer = true)
      : a.includes(3)
      ? (answer = true)
      : (answer = false);
    return answer;
  }
  console.log(has23([4,3]));

  // or 

  function has23(a) {
    if (a.includes(2) || a.includes(3)) {
      return true;
    }
    return false;
  }
  console.log(has23([4, 5]));
  

  //////////////////////////////////////////////////////////

/*
Goal:return true if array does not contain a 2 or 3;
Params: array: a;
Return Val: boolean;
Logic: if index 0 and index 1 are not equal to 2 or 3;
return true;
otherwise return false;

Given an int array length 2, return true if it does not contain a 2 or 3;

no23([4, 5]) → true
no23([4, 2]) → false
no23([3, 5]) → false
*/

function no23(a) {
    if ((a[0] && a[1]) != (2 || 3)) {
      return true;
    }
    return false;
  }
  
  console.log(no23([5, 5]));
  
  // or 

  function no23(a) {
    if (!a.includes(2) && !a.includes(3)) {
      return true;
    }
    return false;
  }
  console.log(no23([3, 5]));
  
  //////////////////////////////////////////////////////////

/*
Goal: return an array double the length filled with zeroes except the
last digit remains the same;
Params: array: a;
Return Val: array;
Logic: 
double the array and minus itself to zero out;
loop over array and push results to new array;
remove last zeroed digit and replace with original end digit;

Given an int array, return a new array with double the length where its 
last element is the same as the original array, and all the other 
elements are 0. The original array will be length 1 or more. 
Note: by default, a new int array contains all 0's;

makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
makeLast([1, 2]) → [0, 0, 0, 2]
makeLast([3]) → [0, 3]
*/

function makeLast(a) {
  let lastNum = a[a.length - 1];
  let double = [...a, ...a];
  let result = [];
  double.forEach((num) => result.push(num - num));
  result.pop();
  return [...result, lastNum];
}

console.log(makeLast([4, 5, 6]));

//////////////////////////////////////////////////////////

/*
Goal: if array has two twice or 3 twice return true;
otherwise return false;
Params: array: a;
Return Val: boolean;
Logic:
if index 0 is equal to index 1 and 2 or 3 ;
return true;
otherwise return false;

Given an int array, return true if the array contains 2 twice, or 3 twice. 
The array will be length 0, 1, or 2;

double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false
*/

function double23(a) {
    if (a[0] === a[1] && (2 || 3)) {
      return true;
    }
    return false;
  }
  
  console.log(double23([3, 3]));

  // or 

  function double23(a) {
    return a[0] === a[1] && (2 || 3) ? true : false;
  }
  
  console.log(double23([2, 2]));

  //////////////////////////////////////////////////////////

/*
Goal:take 2 arrays and return a count of how many arrays have 1 as their first element;
Params: array1: a, array2: b;
Return Val: int;
Logic:
create counter;
if index zero of array a is 1 increase count by 1;
if index zero of array b is 1 increase count by 1;
return counter;

Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as 
their first element;

start1([1, 2, 3], [1, 3]) → 2
start1([7, 2, 3], [1]) → 1
start1([1, 2], []) → 1
*/

function start1(a, b) {
  let counter = 0;
  if (a[0] === 1) {
    counter++;
  }
  if (b[0] === 1) {
    counter++;
  }
  return counter;
}

console.log(start1([1, 2, 3], [1, 3]));

//////////////////////////////////////////////////////////

/*
Goal:take two arrays and compare their sums. return the array with the larger sum. 
if a tie return a;
Params: array1: a, array2: b;
Return Val: array;
Logic:
create variables for sum;
compare sum and return b if higher;
otherwise return a;

Start with 2 int arrays, a and b, each length 2. Consider the sum of the
 values in each array. Return the array which has the largest sum. 
 In event of a tie, return a;

biggerTwo([1, 2], [3, 4]) → [3, 4]
biggerTwo([3, 4], [1, 2]) → [3, 4]
biggerTwo([1, 1], [1, 2]) → [1, 2]
*/

function biggerTwo(a, b) {
  let aSum = a[0] + a[1];
  let bSum = b[0] + b[1];
  if (bSum > aSum) {
    return b;
  }
  return a;
}
console.log(biggerTwo([4, 4], [3, 4]));

// or 

function biggerTwo(a, b) {
  let aSum = a[0] + a[1];
  let bSum = b[0] + b[1];
  return bSum > aSum ? b : a;
}
console.log(biggerTwo([4, 4], [3, 4]));

//////////////////////////////////////////////////////////

/*
Goal: take an even length array and return a new 2 length array containing the 
middle two elements of the original;
Params: array: a;
Return Val: array;
Logic: 
create array with middle -1 element and middle +1 element;
return array;

Given an array of ints of even length, return a new array length 2 containing the 
middle two elements from the original array. The original array will be length 2 or more;

makeMiddle([1, 2, 3, 4]) → [2, 3]
makeMiddle([7, 1, 2, 3, 4, 9]) → [2, 3]
makeMiddle([1, 2]) → [1, 2]
*/

function makeMiddle(a) {
  let middle = a.slice(a.length / 2 - 1, a.length / 2 + 1);
  return middle;
}
console.log(makeMiddle([7, 1, 2, 3, 4, 9]));

//////////////////////////////////////////////////////////

/*
Goal:take 2 arrys and return a new array containing them together;
Params: array1: a, array2: b;
Return Val: array;
Logic:
concatenate and return array;

Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

plusTwo([1, 2], [3, 4]) → [1, 2, 3, 4]
plusTwo([4, 4], [2, 2]) → [4, 4, 2, 2]
plusTwo([9, 2], [3, 4]) → [9, 2, 3, 4]
*/

function plusTwo(a, b) {
  return a.concat(b);
}

console.log(plusTwo([1, 2], [3, 4]));

//////////////////////////////////////////////////////////

/*
Goal:take an array and swap the first and last elements in the array;
Params: array: a;
Return Val: array;
Logic:
remove first and last ints and store in variable;
unshift last onto beginning;
push first onto end;
return combined array;

Given an array of ints, swap the first and last elements in the array.
 Return the modified array. The array length will be at least 1;

swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
swapEnds([1, 2, 3]) → [3, 2, 1]
swapEnds([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8]
*/

function swapEnds(a) {
  let last = a[a.length - 1];
  let first = a[0];
  a.pop();
  a.shift();
  a.unshift(last);
  return a.concat(first);
}

console.log(swapEnds([1, 2, 3]));

// or 

function swapEnds(a) {
  let last = a[a.length - 1];
  a.splice(a.length - 1, 1, a[0]);
  a.splice(0, 1, last);
  return a;
}

console.log(swapEnds([1, 2, 3]));

//////////////////////////////////////////////////////////

/*
Goal:take an array and return a new array length of 3 with the elements from 
the middle of the original array;
Params: array: a;
Return Val: array;
Logic:
return array starting at middle -1 and 3 in length;

Given an array of ints of odd length, return a new array length 3 containing the 
elements from the middle of the array. The array length will be at least 3;

midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
midThree([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3]
midThree([1, 2, 3]) → [1, 2, 3]
*/

function midThree(a) {
  return a.splice(a.length / 2 - 1, 3);
}

console.log(midThree([8, 6, 7]));

//////////////////////////////////////////////////////////

/*
Goal:return the largest number in an array;
Params: array: a;
Return Val: int;
Logic: 
highest variable default 0;
loop over array and set number to highest;
if number is higher than highest it becomes highest;

Given an array of ints of odd length, look at the first, last, and middle values 
in the array and return the largest. The array length will be a least 1;

maxTriple([1, 2, 3]) → 3
maxTriple([1, 5, 3]) → 5
maxTriple([5, 2, 3]) → 5
*/

function maxTriple(a) {
  let highest = 0;
  a.forEach((num) => {
    if (num > highest) {
      highest = num;
    }
  });
  return highest;
}

console.log(maxTriple([1, 2, 3]));

// or 

function maxTriple(a) {
  return Math.max(...a);
}

console.log(maxTriple([1, 5, 3]));

//////////////////////////////////////////////////////////

/*
Goal: take an array and return a new array of its first 2. if array is less than 2 
use whatever is present ;
Params:array: a;
Return Val: array;
Logic: 
if array is longer than 2 return first 2 elements;
otherwise return first element;

Given an int array of any length, return a new array of its first 2 elements. 
If the array is smaller than length 2, use whatever elements are present;

frontPiece([1, 2, 3]) → [1, 2]
frontPiece([1, 2]) → [1, 2]
frontPiece([1]) → [1]
*/

function frontPiece(a) {
  if (a.length > 2) {
    return a.slice(0, 2);
  }
  return a.slice(0, 1);
}

console.log(frontPiece([1]));

// or 

function frontPiece(a) {
  return a.length >= 2 ? a.slice(0, 2) : a[0];
}

console.log(frontPiece([1, 2, 3]));

//////////////////////////////////////////////////////////

/* 
Goal: if a 1 is followed by a 3 in the first 2 or last 2 positions return
 true otherwise return false;
Params: array: a;
Return Val: boolean;
Logic:
if index 0,1, 1,2 or 2nd to last has a 1 followed by a 3;
return true;
otherwise return false;

We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1.
 Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions 
 in the array;

unlucky1([1, 3, 4, 5]) → true
unlucky1([2, 1, 3, 4, 5]) → true
unlucky1([1, 1, 1]) → false
*/

function unlucky1(a) {
  if ((a[0] == 1 && a[1] == 3) || (a[1] == 1 && a[2] == 3)) {
    return true;
  }
  if (a[a.length - 2] == 1 && a[a.length - 1] == 3) {
    return true;
  }
  return false;
}

console.log(unlucky1([1, 1, 1]));

//////////////////////////////////////////////////////////

/* 
Goal:take 2 arrays and return a new 2 length array containing as much as will fit;
Params: array1: a, array2: b;
Return Val: array of 2 elements;
Logic:
variable for first 2 of first array;
variable for first 2 of second array;
combine them and return the first two elements of new array;

Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit,
 the elements from a followed by the elements from b. The arrays may be any length, 
 including 0, but there will be 2 or more elements available between the 2 arrays;

make2([4, 5], [1, 2, 3]) → [4, 5]
make2([4], [1, 2, 3]) → [4, 1]
make2([], [1, 2]) → [1, 2]
*/

function make2(a, b) {
  let first = a.slice(0, 2);
  let second = b.slice(0, 2);
  let result = first.concat(second);
  return result.slice(0, 2);
}

console.log(make2([], [1, 2]));

//////////////////////////////////////////////////////////

/* 
Goal: take 2 arrays and return array with first element of each array.
 if an array is empty ignore it;
Params: array1: a, array2: b;
Return Val: array
Logic:
variable for first element of first array;
variable for first element of last array;
combine them and return;

Given 2 int arrays, a and b, of any length, return a new array with the first element 
of each array. If either array is length 0, ignore that array;

front11([1, 2, 3], [7, 9, 8]) → [1, 7]
front11([1], [2]) → [1, 2]
front11([1, 7], []) → [1]
*/

function front11(a, b) {
  let first = a.slice(0, 1);
  let second = b.slice(0, 1);
  return first.concat(second);
}

console.log(front11([1, 7], []));



//////////////////////////////////////////////////////////
/* END OF CODINGBAT ARRAY 1 IN JAVASCRIPT */
//////////////////////////////////////////////////////////