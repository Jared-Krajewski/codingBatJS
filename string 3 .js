//////////////////////////////////////////////////////////
/*CodingBat.com string 3 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/* 
Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

countYZ("fez day") → 2
countYZ("day fez") → 2
countYZ("day fyyyz") → 2
*/

function countYZ(str) {
    let count = 0 ;
    let words = str.split(" ");
    words.forEach((n, i) => {
      n.charAt(n.length - 1) == "y"
        ? count ++
        : n.charAt(n.length - 1 == "z")
        ? count ++
        : null;
    });
    return count;
  }
  console.log(countYZ("fez day"));

  // || 

  function countYZ(str) {
    let count = 0;
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].slice(-1) == "z" || words[i].slice(-1) == "y") {
        count++;
      }
    }
    return count;
  }
  console.log(countYZ("fez day"));

  /*
Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

withoutString("Hello there", "llo") → "He there"
withoutString("Hello there", "e") → "Hllo thr"
withoutString("Hello there", "x") → "Hello there"
*/ 

function withoutString(base, remove) {
    return base.replaceAll(remove, "");
  }
  
  console.log(withoutString("Hello there", "e"));

  /*
Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

equalIsNot("This is not") → false
equalIsNot("This is notnot") → true
equalIsNot("noisxxnotyynotxisi") → true
*/ 

function equalIsNot(str) {
    let notCount = 0;
    let isCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.substr(i, 2) == "is") {
        isCount++;
      }
      if (str.substr(i, 3) == "not") {
        notCount++;
      }
    }
    return notCount == isCount ? true : false;
  }
  
  console.log(equalIsNot("This is notnot"));

  /*
We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

gHappy("xxggxx") → true
gHappy("xxgxx") → false
gHappy("xxggyygxx") → false
*/      

function gHappy(str) {
  let answer = false;
  for (let i = 0; i < str.length; i++) {
    if (
      str.substr(i, 1) == "g" &&
      (str.substr(i - 1, 1) == "g" || str.substr(i + 1, 1) == "g")
    ) {
      answer = true;
    }
    if (
      str.substr(i, 1) == "g" &&
      str.substr(i - 1, 1) !== "g" &&
      str.substr(i + 1, 1) !== "g"
    ) {
      answer = false;
    }
  }
  return answer;
}
console.log(gHappy("xxgyyxx"));

/*
We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

countTriple("abcXXXabc") → 1
countTriple("xxxabyyyycd") → 3
countTriple("a") → 0
*/   

function countTriple(str) {
  let iStr;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    iStr = str[i].repeat(3);
    if (str.substr(i, 3) == iStr) {
      count++;
    }
  }
  return count;
}

console.log(countTriple("xxxabyyyycd"));

/*
Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters. Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

sumDigits("aa1bc2d3") → 6
sumDigits("aa11b33") → 8
sumDigits("Chocolate") → 0
*/  

function sumDigits(str) {
  let nums = [];
  for (let i = 0; i < str.length; i++) {
    nums.push(Number(str[i]));
  }
  return nums.filter(Number).reduce((a, b) => a + b);
}
console.log(sumDigits("aa11b33"));

/* Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab".

sameEnds("abXYab") → "ab"
sameEnds("xx") → "x"
sameEnds("xxx") → "x"
*/

function sameEnds(str) {
  let word = "";
  for (let i = 0; i < Math.floor(str.length / 2) + 1; i++) {
    if (str.endsWith(str.substr(0, i))) {
      word += str.substr(0, i);
    }
  }
  return word;
}
console.log(sameEnds("abXYab"));

/* Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

mirrorEnds("abXYZba") → "ab"
mirrorEnds("abca") → "a"
mirrorEnds("aba") → "aba""
*/

function mirrorEnds(str) {
  let backwards = str.split("").reverse().join("");
  let result = "";
  for (let i = 1; i < str.length; i++) {
    if (str.substr(0, i) == backwards.substr(0, i)) {
      console.log(i);
      result = str.substr(0, i);
    }
  }
  if (str == backwards) {
    return str;
  }
  return result;
}
console.log(mirrorEnds("abXYZba"));

/* 
Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.

maxBlock("hoopla") → 2
maxBlock("abbCCCddBBBxx") → 3
maxBlock("") → 0
*/

function maxBlock(str) {
  let tempcount = 0;
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.substr(i, 1) == str.substr(i + 1, 1)) {
      tempcount++;
    }
    if (tempcount > count) {
      count = tempcount;
      tempcount = 0;
    }
  }
  return count;
}

console.log(maxBlock("abbCCCddBBBxx"));


/* 
Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

sumNumbers("abc123xyz") → 123
sumNumbers("aa11b33") → 44
sumNumbers("7 11") → 18
*/

function sumNumbers(str){
  return str.split("").filter(a => parseInt(a)).join("")
   
 }
 console.log(sumNumbers("abc123xyz"))

 // this is incorrect
