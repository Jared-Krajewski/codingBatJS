//////////////////////////////////////////////////////////
/*CodingBat.com string1 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/*
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!";

helloName("Bob") → "Hello Bob!"
helloName("Alice") → "Hello Alice!"
helloName("X") → "Hello X!"
*/

function helloName(name) {
  console.log("hello " + name + "!");
}

// or

// returns the name with Hello  before and ! after
const helloName = (str) => `Hello ${str}!`;

//////////////////////////////////////////////////////////

/*
Given two strings, a and b, return the result of putting them together 
in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi";

makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"
*/

function makeAbba(a, b) {
  // returns first string + second string + second string + first string;
  return a + b + b + a;
}

//////////////////////////////////////////////////////////

/*
The web is built with HTML strings like "<i>Yay</i>" which draws Yay
as italic text. In this example, the "i" tag makes <i> and </i> which 
surround the word "Yay". Given tag and word strings, 
create the HTML string with tags around the word, e.g. "<i>Yay</i>";

makeTags("i", "Yay") → "<i>Yay</i>"
makeTags("i", "Hello") → "<i>Hello</i>"
makeTags("cite", "Yay") → "<cite>Yay</cite>"
*/

function makeTags(a, b) {
  return `<${a}>${b}</${a}>`;
}

//////////////////////////////////////////////////////////

/*
Given an "out" string length 4, such as "<<>>", and a word, return a new 
string where the word is in the middle of the out string, e.g.
"<<word>>". Note: use str.substring(i, j) to extract the String 
starting at index i and going up to but not including index j;

makeOutWord("<<>>", "Yay") → "<<Yay>>"
makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
makeOutWord("[[]]", "word") → "[[word]]"
*/

function makeOutWord(outer, inner) {
  // returns first two chars of outer string + entire inner string + last two chars of outer string;
  return `${outer.substr(0, 2)}${inner}${outer.substr(-2)}`;
}

//////////////////////////////////////////////////////////

/* 
Given a string, return a new string made of 3 copies of the last 2
chars of the original string. The string length will be at least 2;

extraEnd("Hello") → "lololo"
extraEnd("ab") → "ababab"
extraEnd("Hi") → "HiHiHi"
 */

function extraEnd(a) {
  // returns the last 2 chars repeated 3 times;
  return a.substr(-2).repeat(3);
}

//////////////////////////////////////////////////////////

/*Given a string, return the string made of its first two chars,
so the String "Hello" yields "He". If the string is shorter than 
length 2, return whatever there is, so "X" yields "X", and the empty
string "" yields the empty string "". Note that str.length() returns
the length of a string;

firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"
*/

function firstTwo(a) {
  // returns the first two chars of the string;
  return a.substring(0, 2);
}

//////////////////////////////////////////////////////////

/*
Given a string of even length, return the first half. So the string
"WooHoo" yields "Woo";

firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"
*/

function firstHalf(a) {
  // returns the string from start to middle;
  return a.substr(0, a.length / 2);
}

//////////////////////////////////////////////////////////

/*
Given a string, return a version without the first and last char,
so "Hello" yields "ell". The string length will be at least 2;

withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"
*/

function withoutEnd(a) {
  // returns the string excluding the first and last chars;
  return a.substr(1, a.length - 1);
}

//////////////////////////////////////////////////////////

/*
Given 2 strings, a and b, return a string of the form 
short+long+short, with the shorter string on the outside 
and the longer string on the inside. The strings will not be 
the same length, but they may be empty (length 0);

comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"
*/

function comboString(a, b) {
  // if a's length is longer than b's lengthh;
  if (a.length > b.length) {
    // return b + a + b;
    return b + a + b;
  }
  // otherwise return a + b + a;
  return a + b + a;
}

//OR

function comboString(a, b) {
  // if a length is > b length return b + a + b otherwise return a + b + a;
  return a.length > b.length ? b + a + b : a + b + a;
}

//////////////////////////////////////////////////////////

/*
Given 2 strings, return their concatenation, except omit the first 
char of each. The strings will be at least length 1;

nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"
*/

function nonStart(a, b) {
  // returns the two strings together without each first char;
  return a.substr(1) + b.substr(1);
}

//////////////////////////////////////////////////////////

/*
Given a string, return a "rotated left 2" version where the first 
2 chars are moved to the end. The string length will be at least 2;

left2("Hello") → "lloHe"
left2("java") → "vaja"
left2("Hi") → "Hi"
*/

function left2(str) {
  // returns the string with the first 2 chars omit and added to the end;
  return str.substr(2, str.length - 2) + str.substr(0, 2);
}

//////////////////////////////////////////////////////////

/*
Given a string, return a "rotated right 2" version where the last 
2 chars are moved to the start. The string length will be at least 2;

right2("Hello") → "loHel"
right2("java") → "vaja"
right2("Hi") → "Hi"
*/

function right2(str) {
  // returns the strings last 2 chars + the beginning of the string excluding the last 2 chars;
  return str.substr(-2, 2) + str.substr(0, str.length - 2);
}

//////////////////////////////////////////////////////////

/*
Given a string, return a string length 1 from its front, unless 
front is false, in which case return a string length 1 from its back.
The string will be non-empty;

theEnd("Hello", true) → "H"
theEnd("Hello", false) → "o"
theEnd("oh", true) → "o"
*/

// if bool is true return the first char, otherwise return the last char;
const theEnd = (str, bool) => (bool ? str.charAt(0) : str.charAt(str.length));

//////////////////////////////////////////////////////////

/*
Given a string, return a version without both the first and last
 char of the string. The string may be any length, including 0;

withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""
*/

// return the string excluding the first and last char;
const withouEnd2 = (str) => str.substr(1, str.length - 2);

//////////////////////////////////////////////////////////

/*
Given a string of even length, return a string made of the middle two
chars, so the string "string" yields "ri". The string length will be
at least 2;

middleTwo("string") → "ri"
middleTwo("code") → "od"
middleTwo("Practice") → "ct"
*/

// returns the middle -1 char + the middle +1 char;
const middleTwo = (str) =>
  str.substr(str.length / 2 - 1, 1) + str.substr(str.length / 2, 1);

//////////////////////////////////////////////////////////

/*Given a string, return true if it ends in "ly";

endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false
*/

// returns false as "falsy" if the last 2 chars are not "ly";
const endsLy = (str) => str.substr(-2) === "ly";

//////////////////////////////////////////////////////////

/*
Given a string and an int n, return a string made of the first and 
last n chars from the string. The string length will be at least n;

nTwice("Hello", 2) → "Helo"
nTwice("Chocolate", 3) → "Choate"
nTwice("Chocolate", 1) → "Ce"
*/

// takes in a string and a number, returns the string starting at 0 up to the number
// + the string from the end - number
const nTwice = (str, n) => str.substr(0, n) + str.substr(str.length - n);

//////////////////////////////////////////////////////////

/*
Given a string and an index, return a string length 2 starting at 
the given index. If the index is too big or too small to define 
a string length 2, use the first 2 chars. The string length will
be at least 2;

twoChar("java", 0) → "ja"
twoChar("java", 2) → "va"
twoChar("java", 3) → "ja"
*/

// takes in a string and index, if the index is <= 2 return the first two chars if not the last 2;
const twoChar = (str, i) => (i <= 2 ? str.substr(i, 2) : str.substr(0, 2));

//////////////////////////////////////////////////////////

/*
Given a string of odd length, return the string length 3 from its 
middle, so "Candy" yields "and". The string length will be at least 3;

middleThree("Candy") → "and"
middleThree("and") → "and"
middleThree("solving") → "lvi"
*/

// takes in a str and returns the middle of the string up to 3 chars.
const middleThree = (str) => str.substr(Math.floor(str.length / 2 - 1), 3);

//////////////////////////////////////////////////////////

/*
Given a string, return true if "bad" appears starting at index 0 or 1
in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx".
The string may be any length, including 0. Note: use .equals() 
to compare 2 strings;

hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false
*/

// takes in a str if the word "bad" starts at index 0 or 1 return true otherwise return false;
const hasBad = (str) =>
  str.substr(0, 3) === "bad" || str.substr(1, 3) === "bad" ? true : false;

//////////////////////////////////////////////////////////

/*
Given a string, return a string length 2 made of its first 2 chars.
 If the string length is less than 2, use '@' for the missing chars;

atFirst("hello") → "he"
atFirst("hi") → "hi"
atFirst("h") → "h@"
*/

// takes in a str if the string length is 0 return "@@" if the length is 1 return the char + "@"
//otherwise return the first two index of str
const atFirst = (word) =>
  word.length === 0 ? "@@" : word.length === 1 ? word + "@" : word.substr(0, 2);

//////////////////////////////////////////////////////////

/*
Given 2 strings, a and b, return a new string made of the first char 
of a and the last char of b, so "yo" and "java" yields "ya". 
If either string is length 0, use '@' for its missing char;

lastChars("last", "chars") → "ls"
lastChars("yo", "java") → "ya"
lastChars("hi", "") → "h@"
*/

function lastChars(a, b) {
  // if the first string is empty and the second string is empty return "@@";
  if (a.length === 0 && b.length === 0) {
    return "@@";
  }
  // if a is empty return "@" + the last char of b;
  if (a.length === 0) {
    return "@" + b.charAt(b.length - 1);
  }
  // if b is empty return the first char of a and "@";
  if (b.length === 0) {
    return a.substr(0, 1) + "@";
  }
  // otherwise return the first char of a + last char of b;
  return a.substr(0, 1) + b.charAt(b.length - 1);
}

// or

const lastChars = (a, b) => {
  // if a is empty a = "@";
  if (a.length === 0) {
    a = "@";
    //if b is empty b = "@";
  }
  if (b.length === 0) {
    b = "@";
  }
  // return the first char of a + the last char of b;
  return a[0] + b[b.length - 1];
};

//////////////////////////////////////////////////////////

/*
Given two strings, append them together (known as "concatenation") 
and return the result. However, if the concatenation creates a
double-char, then omit one of the chars, so "abc" and "cat" 
yields "abcat";

conCat("abc", "cat") → "abcat"
conCat("dog", "cat") → "dogcat"
conCat("abc", "") → "abc"
*/

function conCat(a, b) {
  // if the last char of a is the same ast the first char of 0;
  if (a[a.length - 1] === b[0]) {
    // return string a + string b starting at the second char;
    return a + b.substr(1);
  }
  return a + b;
}

//////////////////////////////////////////////////////////

/*
Given a string of any length, return a new string where the last 2 
chars, if present, are swapped, so "coding" yields "codign";

lastTwo("coding") → "codign"
lastTwo("cat") → "cta"
lastTwo("ab") → "ba"
*/

function lastTwo(a) {
  // return a up to  the second to last char + the last char
  console.log(a.substr(-2));
  //return the string up to the last two chars + the last two chars reversed;
  return (
    a.substr(0, a.length - 2) +
    a
      .substr(-2)
      // splits the array into an array by each char;
      .split("")
      // reverses the position of each char in the array;
      .reverse()
      // returns the array into a string;
      .join("")
  );
}

//OR

const lastTwo = (str) => {
  // return the string without the last two chars + the last char + the second to last char;
  return (
    str.substr(0, str.length - 2) + str[str.length - 1] + str[str.length - 2]
  );
};

//////////////////////////////////////////////////////////

/*
Given a string, if the string begins with "red" or "blue" return 
that color string, otherwise return the empty string;

seeColor("redxx") → "red"
seeColor("xxred") → ""
seeColor("blueTimes") → "blue"
*/

function seeColor(a) {
  // if the first 3 chars = "red", return the string "red";
  if (a.substr(0, 3) == "red") {
    return "red";
  }
  // if the first 4 chars = "blue", return the string "blue";
  if (a.substr(0, 4) == "blue") {
    return "blue";
  }
  // otherwise return an empty string;
  return "";
}

// or

function seeColor(a) {
  // if a starts with "red";
  if (a.startsWith("red")) {
    // return red;
    return "red";
    // if a starts with "blue";
  }
  if (a.startsWith("blue")) {
    // returen blue;
    return "blue";
  }
  // otherwise return an empty string;
  return "";
}

//////////////////////////////////////////////////////////

/*
Given a string, return true if the first 2 chars in the string also 
appear at the end of the string, such as with "edited";

frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true
*/

function frontAgain(a) {
  // if the first two chars are equal to the last two chars returns true;
  return a.substr(0, 2) === a.substr(-2);
}

//////////////////////////////////////////////////////////

/*
Given two strings, append them together (known as "concatenation") 
and return the result. However, if the strings are different lengths,
omit chars from the longer string so it is the same length as the
shorter string. So "Hello" and "Hi" yield "loHi". The strings
may be any length;

minCat("Hello", "Hi") → "loHi"
minCat("Hello", "java") → "ellojava"
minCat("java", "Hello") → "javaello"
*/

function minCat(strA, strB) {
  // variable length represents the length of the shorter string;
  let length = Math.min(strA.length, strB.length);
  // return strA starting from the end - the length variable + strB starting from the end - the length variable;
  return strA.substr(strA.length - length) + strB.substr(strB.length - length);
}

// or

function minCat(a, b) {
  // if a is longer than b;
  return a.length > b.length
    ? // return a counting from end - length of b + b;
      a.substr(a.length - b.length) + b
    : // otherwise return a + b counting from end - length of a;
      a + b.substr(b.length - a.length);
}

//////////////////////////////////////////////////////////

/*
Given a string, return a new string made of 3 copies of the first 2 
chars of the original string. The string may be any length.
 If there are fewer than 2 chars, use whatever is there;

extraFront("Hello") → "HeHeHe"
extraFront("ab") → "ababab"
extraFront("H") → "HHH"
*/

function extraFront(a) {
  // repeats the first two chars 3 times;
  return a.substr(0, 2).repeat(3);
}

//////////////////////////////////////////////////////////

/*
Given a string, if a length 2 substring appears at both its beginning
and end, return a string without the substring at the beginning,
so "HelloHe" yields "lloHe". The substring may overlap with itself,
so "Hi" yields "". Otherwise, return the original string unchanged;

without2("HelloHe") → "lloHe"
without2("HelloHi") → "HelloHi"
without2("Hi") → ""
*/

function without2(a) {
  // if the first two chars of a are equal to the last 2 chars;
  return a.substr(0, 2) === a.substr(-2)
    ? // return the str starting at index 2;
      a.substr(2)
    : // otherwise return the original string;
      a;
}

//////////////////////////////////////////////////////////

/*
Given a string, return a version without the first 2 chars. 
Except keep the first char if it is 'a' and keep the second char if
it is 'b'. The string may be any length;

deFront("Hello") → "llo"
deFront("java") → "va"
deFront("away") → "aay"
*/

function deFront(str) {
  // variable for string set to empty string;
  let string = "";
  // if the 0th index is "a";
  if (str[0] === "a") {
    // append char to string;
    string += str[0];
  }
  // if the 1st index is "b";
  if (str[1] === "b") {
    // apend char to string;
    string += str[1];
  }
  // return string + the original string starting at 2nd index;
  return string + str.substr(2);
}

//////////////////////////////////////////////////////////

/*
Given a string and a second "word" string, we'll say that the word
matches the string if it appears at the front of the string,
except its first char does not need to match exactly.
On a match, return the front of the string, or otherwise return the
empty string. So, so with the string "hippo" the word "hi" returns 
"hi" and "xip" returns "hip". The word will be at least length 1;

startWord("hippo", "hi") → "hi"
startWord("hippo", "xip") → "hip"
startWord("hippo", "i") → "h"
*/

function startWord(a, b) {
  // if the a string starting at 1st index through last char of b string is equal to b string excluding first char up to last;
  if (a.substr(1, b.length - 1) === b.substr(1, b.length - 1)) {
    // return a string from start of a string up to length of b string
    return a.substr(0, b.length);
  }
  // otherwise return an empty string
  return "";
}

//////////////////////////////////////////////////////////

/*
Given a string, if the first or last chars are 'x', return the string
without those 'x' chars, and otherwise return the string unchanged;

withoutX("xHix") → "Hi"
withoutX("xHi") → "Hi"
withoutX("Hxix") → "Hxi"
*/

function withoutX(a) {
  // variable for answer set to initial string;
  let answer = a;
  // if the string starts with "x" set the answer to the string starting after the first char;
  if (a.startsWith("x")) {
    answer = a.substring(1);
  }
  // if the string ends with "x" set the answer to the string up to the last char;
  if (answer.endsWith("x")) {
    answer = answer.substring(0, answer.length - 1);
  }
  // return the answer;
  return answer;
}

// or

function withoutX(a) {
  // variable for start defaulted to 0;
  let start = 0;
  // variable for end defaulted to number of last index of string;
  let end = a.length;
  // if the string starts with "x", set the start variable to 1;
  if (a.startsWith("x")) {
    start = 1;
  }
  // if the string ends with "x" set the end variable to the length - 1
  if (a.endsWith("x")) {
    end = a.length - 1;
  }
  // return the string using the conditional start and end indices;
  return a.substring(start, end);
}

//////////////////////////////////////////////////////////

/*
Given a string, if one or both of the first 2 chars is 'x', return the
string without those 'x' chars, and otherwise return the string unchanged; 

withoutX2("xHi") → "Hi"
withoutX2("Hxi") → "Hi"
withoutX2("Hi") → "Hi"
*/

function withoutX2(a) {
  // variable for word set to passed in string split into array one char per index;
  let word = a.split("");
  // if the 0th index is "x" remove it from the word array;
  if (word[0] === "x") {
    word.splice(0, 1);
  }
  // if the 1st index is "x" remove it from the word array;
  if (word[1] === "x") {
    word.splice(1, 1);
  }
  // return the word joined back together as a string;
  return word.join("");
}

//////////////////////////////////////////////////////////
/* END OF CODINGBAT STRING 1 IN JAVASCRIPT */
//////////////////////////////////////////////////////////
