//////////////////////////////////////////////////////////
/*CodingBat.com warmup 2 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/*
Given a string and a non-negative int n, return a larger string that is n copies of the original string.
stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi" 
*/

function stringTimes(str, n){
  // returns the string repeated (n)*;
    return str.repeat(n)
  }

//////////////////////////////////////////////////////////

/*
Given a string and a non-negative int n, we'll say that the front of the
string is the first 3 chars, or whatever is there if the string is less than length 3.
Return n copies of the front;
frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc" 
*/

function frontTimes(str, n){
  // returns the start of the string up to char 3 repeated (n)*;
    return str.substr(0,3).repeat(n) 
  }

//////////////////////////////////////////////////////////

/*
Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".
countXX("abcxx") → 1
countXX("xxx") → 2
countXX("xxxx") → 3 
*/

function countXX(str) {
  // var for count;
  let count = 0;
  // loop over the array 1 at a time;
  for (let i = 0; i < str.length; i++) {
    // if the str at index i + 2 is xx increment the count and continue;
    if (str.substr(i, +2) === "xx"){
      count++;
    } 
  }
  // return the count;
  return count;
}

//////////////////////////////////////////////////////////

/*
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".
doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true 
*/


function doubleX(str){
  // loop over the string;
    for (let i = 0; i < str.length; i++){
      // if the index and the following = "xx" return true;
      if(str.substr(i , i + 1) === 'xx')
        return true;
      }
     return false;
   }

//////////////////////////////////////////////////////////

/*
Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello" 
*/

function stringBits(str) {
  // variable with first letter of string;
  let string = str.charAt(0);
  // loop over the string skipping the first char;
  for (let i = 1; i < str.length; i++) {
    // if i %2 and === 0 (every other element), append it to the string;
    if (i % 2 === 0) {
      string += str.charAt(i);
    }
  }
  return string;
}

//OR

function stringBits(str){
  // empty string variable;
    let result = "";
    // loop over every other element of the string starting with the first;
    for (let i = 0; i < str.length; i += 2){
      // add the first element and every 2nd elemet to the string;
      result += str.charAt(i, i + 2)
    }
    return result;
  }

//////////////////////////////////////////////////////////
  
/*
Given a non-empty string like "Code" return a string like "CCoCodCode".
stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab" 
*/

function stringSplosion(str) {
  // variable for result;
    let result = ""
    // loop over the array
    for (let i = 0; i < str.length; i++){
      // append the 0th index through the current index +1 to the result
      result += str.substr(0, i + 1)
    }
    return result
  }

//////////////////////////////////////////////////////////

/*
Given a string, return the count of the number of times that a substring length 2
appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1
(we won't count the end substring).
last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2 
*/

function last2(str){
  // variable for count;
  let count = 0;
  // variable for the last 2 chars of the string;
  let last = str.substr(str.length -2,)
  // loop over the string except for the last 2 chars;
 for (let i = 0; i < str.length -2; i++){
  // if the index and following 2chars equal the last 2 chars of string increment the count;
   if (str.substr(i, 2) === last){
     count++
   }
 }
  return count;
}

//////////////////////////////////////////////////////////

/*
Given an array of ints, return the number of 9's in the array.
arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3 
*/

function arrayCount9(arr) {
  // variable for count;
  let count = 0;
  // loop over the array;
  arr.forEach((a) => {
    // if the index is === 9 increment the count by 1;
    if (a === 9) {
      count++;
    }
  });
  return count;
}

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if one of the first 4 elements in the array is a 9.
The array length may be less than 4.
arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false 
*/

function arrayFront9(arr){
  // loop up to the 4th index;
  for (let i = 0; i < 4; i++){
    // if any index === 9 return true;
    if (arr[i] === 9){
      return true;
    }
  }
  return false;
}

//////////////////////////////////////////////////////////

/* 
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true 
*/

function array123(arr) {
  // set result variable to false by default;
  let result = false;
  // loop over the array and if the current index 
  arr.forEach((a) => {
    //if the two following sequentiate 1,2,3 set result to true
    if (arr[a] === 1 && arr[a + 1] === 2 && arr[a + 2] === 3) {
      result = true;
    }
  });
  return result;
}

//////////////////////////////////////////////////////////

/* 
Given 2 strings, a and b, return the number of the positions where they contain
the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since
the "xx", "aa", and "az" substrings appear in the same place in both strings.
stringMatch("xxcaazz", "xxbaaz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0 
*/ 

function stringMatch(a, b) {
  // variable to hold count;
    let count = 0;
    // variable to find the shortest length string for iteration;
    let length = Math.min(a.length, b.length);
    // loop over the strings
    for (i = 0; i < length - 1; i++) {
      // if 2 chars from string a match string b increment the count;
      if (a.substr(i, 2) == b.substr(i, 2)) {
        count++;
      }
    }
    return count;
  }

//////////////////////////////////////////////////////////

/*
Given a string, return a version where all the "x" have been removed.
Except an "x" at the very start or end should not be removed.

stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"
*/

  function stringX(str) {
    // spread the input string into an array named string;
    let string = [...str];
    // loop over that array ignoring the first and last index;
    for (let i = 1; i < string.length - 1; i++) {
      // if the char at i is x remove it;
      if (string[i] === "x") {
        string.splice(i, 1);
        i--;
      }
    }
  // return the array joined back as a string;
    return string.join("");
  }

  // OR

  function stringX(str) {
    // add the first char to a variable result;
    let result = str.substr(0, 1);
    // loop over the input string ignoring the first and last;
    for (let i = 1; i < str.length - 1; i++) {
      // if the index is not x, add it to the result;
      if (str[i] != "x") {
        result += str[i];
      }
    }
    // return the result with the last char of the original string;
    return result + str.substr(str.length - 1);
  }
  
//////////////////////////////////////////////////////////

/*
Given a string, return a string made of the chars at
indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"
*/

function altPairs(str) {
  // variable for new string;
  let string = "";
  // loop over the string 4 chars at a time;
  for (let i = 0; i < str.length; i += 4) {
    // add the first 2 of each set of 4 nums to the string;
    string += str.substr(i, 2);
  }
  return string;
}

//////////////////////////////////////////////////////////

/*
Suppose the string "yak" is unlucky. Given a string, return a version
where all the "yak" are removed, but the "a" can be any char.
The "yak" strings will not overlap.

stringYak("yakpak") → "pak"
stringYak("pakyak") → "pak"
stringYak("yak123ya") → "123ya"
*/

function stringYak(str){
  // returns the string with all regex of y.k replaced with nothing. (. is a wildcard char);
  return str.replaceAll(/y.k/ig , "")
 }

//or 

function stringYak(str) {
  // split the input string into an array 1 char per index;
  let string = str.split("");
  // loop over the string array;
  for (let i = 0; i < string.length; i++) {
    // if the char at str[i] is "y" and the char 2 index after is "k";
    if (string[i] == "y" && string[i + 2] == "k") {
     // delete that index and the following 2;
      string.splice(i, 3);
    }
  }
  // returns the new array as a string;
  return string.join("");
}

//////////////////////////////////////////////////////////

/*
Given an array of ints, return the number of times that two 6's are
next to each other in the array. Also count instances where the second "6" is actually a 7.

array667([6, 6, 2]) → 1
array667([6, 6, 2, 6]) → 1
array667([6, 7, 2, 6]) → 1
*/

function array667(arr) {
  let count = 0;
  // variable for count;
  for (let i = 0; i < arr.length; i++) {
    // if the current index is 6 and the following index is 6 or 7;
    if ((arr[i] === 6 && arr[i + 1] === 6) || arr[i + 1] === 7) {
      // increment the count;
      count++;
    }
  }
  return count;
}

//////////////////////////////////////////////////////////

/*
Given an array of ints, we'll say that a triple is a value appearing
3 times in a row in the array. Return true if the array does not contain any triples.

noTriples([1, 1, 2, 2, 1]) → true
noTriples([1, 1, 2, 2, 2, 1]) → false
noTriples([1, 1, 1, 2, 2, 2, 1]) → false
*/

function noTriples(arr) {
  // loop over the array;
  for (let i = 0; i < arr.length; i++) {
    // if the current index is equal to 1st and current index is equal to 2nd;
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      return false;
    }
  }
  return true;
}

//////////////////////////////////////////////////////////

/*
Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value,
followed by the value plus 5, followed by the value minus 1.
Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.

has271([1, 2, 7, 1]) → true
has271([1, 2, 8, 1]) → false
has271([2, 7, 1]) → true
*/

function has271(arr) {
  // iterate over the array;
  for (let i = 0; i < arr.length; i++) {
    // if two after current index  is equal to the index + 5 && 2 after current index is equal to current index -1
    if (arr[i + 1] === arr[i] + 5 && arr[i + 2] === arr[i] - 1) {
      return true;
    }
  }
  return false;
}

//////////////////////////////////////////////////////////
/* END OF CODING BAT WARMUP 2 IN JAVASCRIPT */
//////////////////////////////////////////////////////////