//////////////////////////////////////////////////////////
/*CodingBat.com logic 2 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/* 
Goal:make a row of bricks that is goal inches long. we have small bricks(1 in ) and large bricks (5 in);
Params: 1inchBrick: a, 5inchBrick: b, goal: goal;
Return Val:boolean;
Logic: 
if a + 5 * b is >= goal;
return true;
otherwise return false;

We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

makeBricks(3, 1, 8) → true
makeBricks(3, 1, 9) → false
makeBricks(3, 2, 10) → true
*/

function makeBricks(a, b, goal) {
    if (a + 5 * b >= goal) {
      return true;
    }
    return false;
  }
  
  console.log(makeBricks(3, 2, 10));

  /* 
Goal: take 3 int. Return sum. if one value is the same as another it does not count toward sum.
Params: int1: a, int2: b, int3: c;
Return Val: int;
Logic:


Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

loneSum(1, 2, 3) → 6
loneSum(3, 2, 3) → 2
loneSum(3, 3, 3) → 0
*/

function loneSum(a, b, c) {
    if (a == b && b == c) {
      return 0;
    }
    if (a == b) {
      return c;
    }
    if (a == c) {
      return b;
    }
    if (b == c) {
      return a;
    }
    return a + b + c;
  }
  
  console.log(loneSum(3, 3, 3));

  /* 
Goal: take 3 int, return sum. if val is 13, it does not count and values to the right of it do not count. 
Params: int1: a, int2: b, int3: c;
Return Val: int
Logic:
if a == 13 
return 0
if b == 13
return a
if c == 13
return a + b

Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.

luckySum(1, 2, 3) → 6
luckySum(1, 2, 13) → 3
luckySum(1, 13, 3) → 1
*/

function luckySum(a, b, c) {
    if (a == 13) {
      return 0;
    }
    if (b == 13) {
      return a;
    }
    if (c == 13) {
      return a + b;
    }
    return a + b + c;
  }
  console.log(luckySum(1, 13, 2));

  /* 
Goal: take 3 int and return sum. if any value is in range 13-14/16-19 it counts as 0. Use a helper function to return the value for the teen rule;
Params: int1: a, int2: b, int3: c;
Return Val:int;
Logic: 
make array of values to be filtered. check if int is equal to any, if it is return n as 0;
check each int against filter function and add.

Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().

noTeenSum(1, 2, 3) → 6
noTeenSum(2, 13, 1) → 3
noTeenSum(2, 1, 14) → 3
*/

function noTeenSum(a, b, c) {
    function fixTeen(n) {
      let teens = [13, 14, 17, 18, 19];
      if (teens.includes(n) == true) {
        n = 0;
      }
      return n;
    }
    return fixTeen(a) + fixTeen(b) + fixTeen(c);
  }
  
  console.log(noTeenSum(2, 13, 1));

  /* 
Goal:take 3 ints, round to multiple of 10. return sum of rounded values.
Params: int1: a, int2: b, int3: c;
Return Val: int
Logic: 
if rightmost digit of n is > 5 
return that number rounded up to nearest 10th
otherwise return that number rounded down to nearest 10th
add up the rounded numbers.

For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().

roundSum(16, 17, 18) → 60
roundSum(12, 13, 14) → 30
roundSum(6, 4, 4) → 10
*/

function roundSum(a, b, c) {
  function round(n) {
    if (n % 10 > 5) {
      return Math.ceil(n / 10) * 10;
    }
    return Math.floor(n / 10) * 10;
  }
  return round(a) + round(b) + round(c);
}

console.log(roundSum(16, 13, 14));


/*
Goal: take 3 ints, return true of b or c is <1 from a while the other is > 2 difference
Params: int1: a, int2: b, int3: c;
Return Val: boolean
Logic:
if the difference of a-b is <= 1 and a-c and c-b >= 2
return true
if the difference of a-c is <=1 and a-b and b-c >= 2
return true
otherwise return false;

Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

closeFar(1, 2, 10) → true
closeFar(1, 2, 3) → false
closeFar(4, 1, 3) → true
*/

function closeFar(a, b, c) {
  if (Math.abs(a - b) <= 1 && Math.abs(a - c) >= 2 && Math.abs(c - b) >= 2) {
    return true;
  }
  if (Math.abs(a - c) <= 1 && Math.abs(a - b) >= 2 && Math.abs(b - c) >= 2) {
    return true;
  }
  return false;
}
console.log(closeFar(1, 2, 10));

/*
Goal:take 2 ints, return whichever value is nearest 21 without going over. return 0 if they both go over;
Params:int1: a, int2: b;
Return Val: int
Logic: 
if params > 21 they = 0;
find out difference of each param from 21
return closest value to 21

Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

blackjack(19, 21) → 21
blackjack(21, 19) → 21
blackjack(19, 22) → 19
*/

function blackjack(a, b) {
  if (a > 21) {
    a = 0;
  }
  if (b > 21) {
    b = 0;
  }
  let aDiff = Math.abs(a - 21);
  let bDiff = Math.abs(b - 21);
  let result = aDiff < bDiff ? a : b;
  return result;
}
console.log(blackjack(19, 21));

/*
Goal:take 3 ints, return true if the 3 values are even spaced, otherwise return false;
Params:int1: a, int2: b, int3: c;
Return Val:boolean 
Logic:
if the difference of a to b is equal to difference of b-c ;
return true;
if the difference of a-c is equal to b-a ;
return true;
otherwise return false;

Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

evenlySpaced(2, 4, 6) → true
evenlySpaced(4, 6, 2) → true
evenlySpaced(4, 6, 3) → false
*/

function evenlySpaced(a, b, c) {
  if (Math.abs(a - b) == Math.abs(b - c)) {
    return true;
  }
  if (Math.abs(a - c) == Math.abs(b - a)) {
    return true;
  }
  return false;
}
console.log(evenlySpaced(1, 2, 3));

/*
Goal: make package of "goal" Kilos, we have small (1) and big (2). return number of small to use assuming we always use big before small. return -1 if cannot be done.
Params: int1: small, int2: big, int3: goal;
return Val:int
Logic: if the difference of the goal and big bars is > total of small bars
return -1
otherwise return how many extra small bars needed

We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.

makeChocolate(4, 1, 9) → 4
makeChocolate(4, 1, 10) → -1
makeChocolate(4, 1, 7) → 2
*/

function makeChocolate(small, big, goal) {
  if (Math.abs(goal - big * 5) > small) {
    return -1;
  }
  return Math.abs(goal - big * 5);
}
console.log(makeChocolate(4, 1, 7));


