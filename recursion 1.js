//////////////////////////////////////////////////////////
/*CodingBat.com recursion 1 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/*
Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).

factorial(1) → 1
factorial(2) → 2
factorial(3) → 6
*/

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

//////////////////////////////////////////////////////////

/*
We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across
all the bunnies recursively (without loops or multiplication).

bunnyEars(0) → 0
bunnyEars(1) → 2
bunnyEars(2) → 4
*/

function bunnyEars(n) {
  if (n > 0) {
    return n * 2;
  }
  return bunnyEars(n - 1);
}

//////////////////////////////////////////////////////////

/* The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.

fibonacci(0) → 0
fibonacci(1) → 1
fibonacci(2) → 1
*/

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

/* We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

bunnyEars2(0) → 0
bunnyEars2(1) → 2
bunnyEars2(2) → 5
*/

function bunnyEars2(n) {
  if (n == 0) {
    return 0;
  }
  return n % 2 == 0 ? 2 + bunnyEars2(n - 1) : 3 + bunnyEars2(n - 1);
}

console.log(bunnyEars2(2));

/*
We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

triangle(0) → 0
triangle(1) → 1
triangle(2) → 3
*/

function triangle(n) {
  if (n == 0) {
    return 0;
  }
  return n + triangle(n - 1);
}
console.log(triangle(3));

/*
Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

sumDigits(126) → 9
sumDigits(49) → 13
sumDigits(12) → 3
*/

function sumDigits(n) {
  if (n < 10) {
    return n;
  }
  return Math.floor(sumDigits(n / 10) + sumDigits(n % 10));
}
console.log(sumDigits(12));

/*
Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

count7(717) → 2
count7(7) → 1
count7(123) → 0
*/

function count7(n) {
  n < 1 ? 0 : n % 10 == 7 ? 1 + count7(n / 10) : count7(n / 10);
}
console.log(count7(123107));

function count7(n) {
  if (n == 0) {
    return 0;
  }
  if (n % 10 == 7) {
    return 1 + count7(n / 10);
  }
  return count7(n / 10);
}
console.log(count7(772467));

// neither of the above work so i guess ill practice recursion more.
