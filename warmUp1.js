//////////////////////////////////////////////////////////
/*CodingBat.com warmup 1 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/* 
The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

sleepIn(false, false) → true
sleepIn(true, false) → false
sleepIn(false, true) → true 
*/

function sleepIn(weekday, vacation) {
  // returns true anytime other than weekdays and always on vacaton;
  return !weekday || vacation;
}

//////////////////////////////////////////////////////////

/*
  We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling.
  We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
  
  monkeyTrouble(true, true) → true
  monkeyTrouble(false, false) → true
  monkeyTrouble(true, false) → false 
  */

function monkeyTrouble(aSmile, bSmile) {
  // if neither is smiling or both are smiling return false;
  return (!aSmile && !bSmile) || (aSmile && bSmile);
}

//////////////////////////////////////////////////////////

/*
  Given two int values, return their sum. Unless the two values are the same, then return double their sum.
  sumDouble(1, 2) → 3
  sumDouble(3, 2) → 5
  sumDouble(2, 2) → 8 
  */

function sumDouble(a, b) {
  //if a === b add them and multiply by two;
  if (a === b) {
    return (a + b) * 2;
  }
  // if they are different return a + b;
  return a + b;
}

//////////////////////////////////////////////////////////

/*
  Given an int n, return the absolute difference between n and 21,
  except return double the absolute difference if n is over 21.
  
  diff21(19) → 2
  diff21(10) → 11
  diff21(21) → 0 
  */

function diff21(n) {
  return Math.abs(21 - n);
}

//////////////////////////////////////////////////////////

/*
  We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. 
  We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
  
  parrotTrouble(true, 6) → true
  parrotTrouble(true, 7) → false
  parrotTrouble(false, 6) → false 
  */

function parrotTrouble(talking, hour) {
  // returns true if the hour is before 7 or after 20 and talking is true;
  return (hour < 7 || hour > 20) && talking;
}

//////////////////////////////////////////////////////////

/*
  Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10;
  
  makes10(9, 10) → true
  makes10(9, 9) → false
  makes10(1, 9) → true 
  */

function makes10(a, b) {
  // add a & b and if they === 10 return true, or if a is >10 or b is >10 return true;
  return a + b === 10 || a > 10 || b > 10;
}

//////////////////////////////////////////////////////////

/*
  Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.
  
  nearHundred(93) → true
  nearHundred(90) → true
  nearHundred(89) → false 
  */

function nearHundred(n) {
  // variables for the difference of n from 100 and 200;
  let a = Math.abs(n - 100);
  let b = Math.abs(n - 200);
  // returns true if either difference is less than 10;
  return a <= 10 || b <= 10;
}

//////////////////////////////////////////////////////////

/* 
  Given 2 int values, return true if one is negative and one is positive.
  Except if the parameter "negative" is true,
  then return true only if both are negative.
  
  posNeg(1, -1, false) → true
  posNeg(-1, 1, false) → true
  posNeg(-4, -5, true) → true
  */

function posNeg(a, b, negative) {
  // if not negative and a < 0 a&& b > 0 || a > 0 && b < 0 return true;
  if (!negative && ((a < 0 && b > 0) || (a > 0 && b < 0))) {
    return true;
    // otherwise if negative is true and a < 0 && b < 0 return true;
  } else if (negative && a < 0 && b < 0) {
    return true;
  }
  return false;
}

//OR

function posNeg(a, b, negative) {
  // gives true if a or b is > 0;
  let abPos = a > 0 || b > 0;
  // gives true if a and b are < 0;
  let abNeg = a < 0 && b < 0;
  // if negative is false and a or b is positive return true || if negative is true and abNeg is true return true;
  return (!negative && abPos) || (negative && abNeg);
}

//////////////////////////////////////////////////////////

/*
  Given a string, return a new string where "not " has been added to the front. 
  However, if the string already begins with "not", return the string unchanged. 
  Note: use .equals() to compare 2 strings.
  
  notString("candy") → "not candy"
  notString("x") → "not x"
  notString("not bad") → "not bad" 
  */

function notString(str) {
  // if the string starts with "not" already return the string;
  // otherwise add not to the string and return it;
  return str.substr(0, 3) === "not" ? str : `not ${str}`;
}

//////////////////////////////////////////////////////////

/*
  Given a non-empty string and an int n, return a new string where the char at index n has been removed. 
  The value of n will be a valid index of a char in the original string 
  (i.e. n will be in the range 0..str.length()-1 inclusive).
  
  missingChar("kitten", 1) → "ktten"
  missingChar("kitten", 0) → "itten"
  missingChar("kitten", 4) → "kittn"
  */

function missingChar(str, index) {
  // return the str starting at 0, ending at index + the remainder of the str starting at one past the index;
  return str.substr(0, index) + str.substr(index + 1);
}

//////////////////////////////////////////////////////////

/*
  Given a string, return a new string where the first and last chars have been exchanged.
  
  frontBack("code") → "eodc"
  frontBack("a") → "a"
  frontBack("ab") → "ba" 
  */

function frontBack(str) {
  if (str.length > 1) {
    let last = str.charAt(0);
    let middle = str.substr(1, str.length - 2);
    let first = str.charAt(str.length - 1);

    return first + middle + last;
  }
  return str;
}

//OR

function frontBack(str) {
  // if the string is > 1 return  the last char + the 2nd up to the last + the first char;
  return str.length > 1
    ? str[str.length - 1] + str.substr(1, str.length - 2) + str[0]
    : // if string is < 1 return str
      str;
}

//////////////////////////////////////////////////////////

/* 
  Given a string, we'll say that the front is the first 3 chars of the string.
  If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.
  
  front3("Java") → "JavJavJav"
  front3("Chocolate") → "ChoChoCho"
  front3("abc") → "abcabcabc" 
  */

function front3(str) {
  // get the first 3 letters and repeat them 3 times;
  return str.substr(0, 3).repeat(3);
}

//////////////////////////////////////////////////////////

/* 
  Given a string, take the last char and return a new string with the last char 
  added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.
  
  backAround("cat") → "tcatt"
  backAround("Hello") → "oHelloo"
  backAround("a") → "aaa" 
  */

function backAround(str) {
  // variable for last char of str;
  let last = str.charAt(str.length - 1);
  // return the last char + the str + the last char;
  return last + str + last;
}

//////////////////////////////////////////////////////////

/*
  Return true if the given non-negative number is a multiple of 3 or a multiple of 5.
  Use the % "mod" operator -- see Introduction to Mod
  
  or35(3) → true
  or35(10) → true
  or35(8) → false 
  */

function or35(a) {
  // returns true if a is divisible by 3 or 5;
  return a % 3 == 0 || a % 5 == 0;
}

//////////////////////////////////////////////////////////

/* 
  Given a string, take the first 2 chars and return the string with the 2 chars added
  at both the front and back, so "kitten" yields"kikittenki". 
  If the string length is less than 2, use whatever chars are there.
  
  front22("kitten") → "kikittenki"
  front22("Ha") → "HaHaHa"
  front22("abc") → "ababcab" 
  */

function front22(str) {
  // stores the first two chars;
  let first = str.substr(0, 2);
  // returns the first two chars + the str + the first two chars;
  return first + str + first;
}

//////////////////////////////////////////////////////////

/*
  Given a string, return true if the string starts with "hi" and false otherwise.
  
  startHi("hi there") → true
  startHi("hi") → true
  startHi("hello hi") → false 
  */

function startHi(str) {
  // returns true if the string starts with "hi";
  return str.startsWith("hi");
}

//////////////////////////////////////////////////////////

/*
  Given two temperatures, return true if one is less than 0 and the other is greater than 100.
  
  icyHot(120, -1) → true
  icyHot(-1, 120) → true
  icyHot(2, 120) → false 
  */

function icyHot(a, b) {
  if ((a < 0 && b > 100) || (a > 100 && b < 0)) {
    return true;
  }
  return false;
}

//OR

function icyHot(a, b) {
  // true if a < 0 && b > 100;
  let aLow = a < 0 && b > 100;
  // true if b < 0 && a > 100;
  let bLow = b < 0 && a > 100;
  // if a or b returns true we get true back;
  return aLow || bLow;
}

//////////////////////////////////////////////////////////

/*
  Given 2 int values, return true if either of them is in the range 10..20 inclusive.
  
  in1020(12, 99) → true
  in1020(21, 12) → true
  in1020(8, 99) → false
  */

function in1020(a, b) {
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
    return true;
  }
  return false;
}

//OR

function in1020(a, b) {
  // helper function returns true if num >=10 and <=20;
  let between10And20 = (num) => {
    return num >= 10 && num <= 20;
  };
  // returns true if a meets condition of function
  let aCheck = between10And20(a);
  // returns true if a meets condition of function
  let bCheck = between10And20(b);
  // returns true if either condition is met
  return aCheck || bCheck;
}

//////////////////////////////////////////////////////////

/*
  We'll say that a number is "teen" if it is in the range 13..19 inclusive.
  Given 3 int values, return true if 1 or more of them are teen.
  
  hasTeen(13, 20, 10) → true
  hasTeen(20, 19, 10) → true
  hasTeen(20, 10, 13) → true
  */

function hasTeen(a, b, c) {
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) {
    return true;
  }
  return false;
}

//OR

function hasTeen(a, b, c) {
  // helper function to check if num is a teen;
  let checkTeen = (n) => {
    return n > 12 && n < 20;
  };
  // variable for each argument that returns true if it passes range check;
  let acheck = checkTeen(a);
  let bcheck = checkTeen(b);
  let ccheck = checkTeen(c);
  // returns true if any of the teen checks passes;
  return acheck || bcheck || ccheck;
}

//////////////////////////////////////////////////////////

/*
  We'll say that a number is "teen" if it is in the range 13..19 inclusive.
  Given 2 int values, return true if one or the other is teen, but not both.
  
  loneTeen(13, 99) → true
  loneTeen(21, 19) → true
  loneTeen(13, 13) → false
  */

function loneTeen(a, b) {
  if (a <= 19 && a >= 13 && b <= 19 && b >= 13) {
    return false;
  } else if ((a <= 19 && a >= 13) || (b <= 19 && b >= 13)) {
    return true;
  }
  return false;
}

//OR

function loneTeen(a, b) {
  // helper function to check if num is a teen;
  let checkTeen = (n) => {
    return n > 12 && n < 20;
  };
  // checks if a is a teen;
  let aCheck = checkTeen(a);
  // checks if b is a teen;
  let bCheck = checkTeen(b);
  // returns true if a is a teen and b is not or a is not a teen and b is;
  return (aCheck && !bCheck) || (!aCheck && bCheck);
}

//////////////////////////////////////////////////////////

/* 
  Given a string, if the string "del" appears starting at index 1,
  return a string where that "del" has been deleted. Otherwise, return the string unchanged.
  
  delDel("adelbc") → "abc"
  delDel("adelHello") → "aHello"
  delDel("adedbc") → "adedbc" 
  */

function delDel(str) {
  // if the string at index 1-4 is "del"
  // return the string before and after index 1-4
  // otherwise return the string;
  return str.substr(1, 3) === "del" ? str.substr(0, 1) + str.substr(4) : str;
}

//OR

// works but isnt correct because it will replace it regardless of position;
function delDel(str) {
  return str.replace("del", "");
}

//////////////////////////////////////////////////////////

/*
  Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.
  
  mixStart("mix snacks") → true
  mixStart("pix snacks") → true
  mixStart("piz snacks") → false 
  */
function mixStart(str) {
  // returns true if the string starts with "_ix"
  return str.substr(1, 2) === "ix";
}

//////////////////////////////////////////////////////////

/*
  Given a string, return a string made of the first 2 chars (if present),
  however include first char only if it is 'o' and include the second only
  if it is 'z', so "ozymandias" yields "oz".
  
  startOz("ozymandias") → "oz"
  startOz("bzoo") → "z"
  startOz("oxx") → "o"
  */

function startOz(str) {
  // variable for building a string;
  let string = "";
  // if the first index is o, add it to the string;
  if (str.substr(0, 1) === "o") {
    string += "o";
  }
  // if the second char is z, add it to the string;
  if (str.substr(1, 1) === "z") {
    string += "z";
  }
  // return the string;
  return string;
}

//////////////////////////////////////////////////////////

/* 
  Given three int values, a b c, return the largest.
  
  intMax(1, 2, 3) → 3
  intMax(1, 3, 2) → 3
  intMax(3, 2, 1) → 3 
  */

function intMax() {
  // uses the Math object to return the largest value, takes in any sized input;
  return Math.max(...arguments);
}

//////////////////////////////////////////////////////////

/*
  Given 2 int values, return whichever value is nearest to the value 10,
  or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.
  
  close10(8, 13) → 8
  close10(13, 8) → 8
  close10(13, 7) → 0 
  */

function close10(a, b) {
  // if the difference of a-10 and b-10 is the same return 0;
  if (Math.abs(a - 10) === Math.abs(b - 10)) {
    return 0;
  }
  // if the difference between a and 10 is less than b and 10 return a otherwise return b;
  return Math.abs(a - 10) < Math.abs(b - 10) ? a : b;
}

//////////////////////////////////////////////////////////

/* 
  Given 2 int values, return true if they are both in the range 30..40 inclusive,
  or they are both in the range 40..50 inclusive.
  
  in3050(30, 31) → true
  in3050(30, 41) → false
  in3050(40, 50) → true 
  */

function in3050(a, b) {
  //boolean checks if num is within ranges
  let a3040 = a >= 30 && a <= 40;
  let b3040 = b >= 30 && b <= 40;
  let a4050 = a >= 40 && a <= 50;
  let b4050 = b >= 40 && b <= 50;
  // returns true if both are within the same range
  return (a3040 && b3040) || (a4050 && b4050);
}

//OR

function in3050(a, b) {
  // if a is > 30 and < 40 and b is >30 and < 40 return true;
  if (a >= 30 && a <= 40 && b >= 30 && b <= 40) {
    return true;
    // if a is > 40 and < 50 and b is >40 and less than 50 return true;
  } else if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
    return true;
  }
  return false;
}

//////////////////////////////////////////////////////////

/*
  Given 2 positive int values, return the larger value that is in the range 10..20 inclusive,
  or return 0 if neither is in that range.
  
  max1020(11, 19) → 19
  max1020(19, 11) → 19
  max1020(11, 9) → 11 
  */

function max1020(a, b) {
  // booleans for a and b, return true if between 10 and 20;
  let aVal = a >= 10 && a <= 20;
  let bVal = b >= 10 && b <= 20;
  // if either is in range, return the larger of a or b;
  if (aVal || bVal) {
    return Math.max(a, b);
  }
  // otherwise if neither is in range return 0;
  return 0;
}

//OR

function max1020(a, b) {
  if (a < 0 || (a > 20 && b < 0) || b > 20) {
    return 0;
  } else if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20))
    return Math.max(a, b);
}

//////////////////////////////////////////////////////////

/*
  Return true if the given string contains between 1 and 3 'e' chars.
  
  stringE("Hello") → true
  stringE("Heelle") → true
  stringE("Heelele") → false 
  */

function stringE(str) {
  // variable for count of "e";
  let eCount = 0;
  // splits the string into array by each char, loops over array;
  str.split("").forEach((letter) => {
    // if the letter is "e" increment the count if not do nothing;
    letter === "e" ? eCount++ : null;
  });
  //if the count is between 1 and 3 return true;
  return eCount >= 1 && eCount <= 3;
}

//OR

function stringE(str) {
  // variable for counting e's in string;
  let eCount = 0;
  // loop over strings length and check if chat at each index is "e";
  // if it is increment the count by 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
      eCount++;
    }
  }
  //if the count is between 1 and 3 return true;
  return eCount >= 1 && eCount <= 3;
}

//////////////////////////////////////////////////////////

/*
  Given two non-negative int values, return true if they have the same last digit,
  such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.
  
  lastDigit(7, 17) → true
  lastDigit(6, 17) → false
  lastDigit(3, 113) → true
  */

function lastDigit(a, b) {
  // if the last digit of a is == to the last digit of b returns true;
  return a % 10 === b % 10;
}

//or

function lastDigit(x, y) {
  if (x % 10 === y % 10)
    if (x > 0 && y > 0) {
      return true;
    }
  return false;
}

//////////////////////////////////////////////////////////

/*
  Given a string, return a new string where the last 3 chars are now in upper case.
  If the string has less than 3 chars, uppercase whatever is there.
  Note that str.toUpperCase() returns the uppercase version of a string.
  
  endUp("Hello") → "HeLLO"
  endUp("hi there") → "hi thERE"
  endUp("hi") → "HI"
  */

function endUp(str) {
  // if the strings length is <3 return whatevers there as uppercase;
  if (str.length < 3) {
    return str.toUpperCase();
  }
  // returns the start of the string up to the last 3 + the last 3 as uppercase chars;
  return (
    str.substr(0, str.length - 3) + str.substr(str.length - 3).toUpperCase()
  );
}

//OR

function endUp(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  let start = str.substr(0, str.length - 3);
  let end = str.substr(str.length - 3).toUpperCase();
  return start + end;
}

//////////////////////////////////////////////////////////

/*
  Given a non-empty string and an int N, return the string made starting with char 0,
  and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.
  
  everyNth("Miracle", 2) → "Mrce"
  everyNth("abcdefg", 2) → "aceg"
  everyNth("abcdefg", 3) → "adg" 
  */

function everyNth(str, n) {
  // variable with frist char of string;
  let string = str.charAt(0);
  // loop over the string starting at the first index;
  for (let i = 1; i < str.length; i++) {
    // if the index divided by n === append that char to the string;
    if (i % n === 0) string += str.charAt(i);
  }
  return string;
}

//////////////////////////////////////////////////////////
/* END OF CODING BAT WARMUP 1 IN JAVASCRIPT */
//////////////////////////////////////////////////////////
