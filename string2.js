//////////////////////////////////////////////////////////
/*CodingBat.com string 2 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/*
Given a string, return a string where for every char in the original, there are two chars.

doubleChar("The") → "TThhee"
doubleChar("AAbb") → "AAAAbbbb"
doubleChar("Hi-There") → "HHii--TThheerree
*/

function doubleChar(str) {
  return (
    str
      // splits string into array with 1 char per index;
      .split("")
      // maps each char to add one copy per;
      .map((a) => a + a)
      // joins the array back into a string;
      .join("")
  );
}

//////////////////////////////////////////////////////////

/*Return the number of times that the string "hi" appears anywhere in the given string.

countHi("abc hi ho") → 1
countHi("ABChi hi") → 2
countHi("hihi") → 2
*/

function countHi(str) {
  // variable for count init to 0;
  let count = 0;
  // loop over the passed in string one index at a time;
  for (let i = 0; i < str.length; i++) {
    // if the index and the char after it = "hi", increment the count;
    if (str.substring(i, i + 2) === "hi") {
      count++;
    }
  }
  return count;
}

//////////////////////////////////////////////////////////

/*
Return true if the string "cat" and "dog" appear the same number of times in the given string.

catDog("catdog") → true
catDog("catcat") → false
catDog("1cat1cadodog") → true
*/

function catDog(str) {
  // variable for catCount and dogCount init to 0;
  let catCount = 0;
  let dogCount = 0;
  // loop over passed in string and if current index + 3 is = to cat or dog increment respective count;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 3) === "cat") {
      catCount++;
    }
    if (str.substring(i, i + 3) === "dog") {
      dogCount++;
    }
  }
  // if the counts are > 0 and equal to eachother returns true; otherwise returns false;
  return catCount > 0 && catCount === dogCount;
}

//////////////////////////////////////////////////////////

/*
Return the number of times that the string "code" appears anywhere in the given string,
except we'll accept any letter for the 'd', so "cope" and "cooe" count.

countCode("aaacodebbb") → 1
countCode("codexxcode") → 2
countCode("cozexxcope") → 2
*/

function countCode(str) {
  // returns the length(count) of regex matches to co"wildcard"e within the argument string;
  return str.match(/co\w\e/g).length;
}

//////////////////////////////////////////////////////////

/*
Given two strings, return true if either of the strings appears at the very end of the other string, 
ignoring upper/lower case differences (in other words, the computation should not be "case sensitive").
Note: str.toLowerCase() returns the lowercase version of a string.

endOther("Hiabc", "abc") → true
endOther("AbC", "HiaBc") → true
endOther("abc", "abXabc") → true
*/

function endOther(a, b) {
  // converts each string to lowercase;
  let strA = a.toLowerCase();
  let strB = b.toLowerCase();
  // if a string is shorter then b string see if a matches anything in b, otherwise see if b matches anything in a;
  return a.length > b.length
    ? // if results are returned they are added to an array, if the length is > 0 true is returned;
      strA.match(strB).length > 0
    : strB.match(strA).length > 0;
}

//////////////////////////////////////////////////////////

/*
Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.).
So "xxyz" counts but "x.xyz" does not.

xyzThere("abcxyz") → true
xyzThere("abc.xyz") → false
xyzThere("xyz.abc") → true
*/

function xyzThere(str) {
  // loop over the string;
  for (let i = 0; i < str.length; i++) {
    // if the current index and following 2 chars is "xyz" and not preceeded by ".", return true, otherwise false;
    if (str.substring(i, i + 3) === "xyz" && str.charAt(i - 1) !== ".") {
      return true;
    }
  }
  return false;
}

//////////////////////////////////////////////////////////

/*
Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

bobThere("abcbob") → true
bobThere("b9b") → true
bobThere("bac") → false
*/

function bobThere(str) {
  // uses regex with wildcard middle checking for "b*b";
  //if anything is populated its a match and true is returned;
  return str.match(/b\wb/) !== null;
}

//////////////////////////////////////////////////////////

/*
We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. 
So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

xyBalance("aaxbby") → true
xyBalance("aaxbb") → false
xyBalance("yaaxbb") → false
*/

function xyBalance(str) {
  // variable for y index and x index init;
  let yIndex;
  let xIndex;
  // loop over the string backwards and assign first found index of y and x to variables;
  for (let i = str.length - 1; i > 0; i--) {
    if (str.charAt(i) === "y") {
      yIndex = i;
    }
    if (str.charAt(i) === "x") {
      xIndex = i;
    }
  }
  // if the y index is > than x index it came after the x and true is returned;
  return yIndex > xIndex;
}

//////////////////////////////////////////////////////////

/*
Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, 
the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

mixString("abc", "xyz") → "axbycz"
mixString("Hi", "There") → "HTihere"
mixString("xxxx", "There") → "xTxhxexre"
*/

function mixString(strA, strB) {
  // variable to find and store the longer length between two strings;
  let length = Math.max(strA.length, strB.length);
  // initialized variable for word set to empty string;
  let word = "";
  // loop over the max number of chars in either string one at a time;
  for (let i = 0; i < length; i++) {
    // apend one char from each string to the word per increment
    word += strA.charAt(i) + strB.charAt(i);
  }
  return word;
}

//////////////////////////////////////////////////////////

/*
Given a string and an int n, return a string made of n repetitions of the last n characters of the string. 
You may assume that n is between 0 and the length of the string, inclusive.

repeatEnd("Hello", 3) → "llollollo"
repeatEnd("Hello", 2) → "lolo"
repeatEnd("Hello", 1) → "o"
*/

function repeatEnd(str, n) {
  // returns the string starting from the end counting back n indices, repeated n times;
  return str.substring(str.length - n).repeat(n);
}

//////////////////////////////////////////////////////////

/*
Given a string and an int n, return a string made of the first n characters of the string, 
followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, 
inclusive (i.e. n >= 0 and n <= str.length()).

repeatFront("Chocolate", 4) → "ChocChoChC"
repeatFront("Chocolate", 3) → "ChoChC"
repeatFront("Ice Cream", 2) → "IcI"
*/

function repeatFront(str, n) {
  // variable for word init to empty string;
  let word = "";
  // set i to n, if i is > 0 decrement by 1 until 0;
  for (let i = n; i > 0; i--) {
    // append the string from the 0th index to ith index;
    word += str.substring(0, i);
  }
  return word;
}

//////////////////////////////////////////////////////////

/* 
Given two strings, word and a separator sep, return a big string made of count occurrences of the word, 
separated by the separator string.

repeatSeparator("Word", "X", 3) → "WordXWordXWord"
repeatSeparator("This", "And", 2) → "ThisAndThis"
repeatSeparator("This", "And", 1) → "This"
*/

function repeatSeparator(a, b, n) {
  // word variable combines both word args into one and repeats them n times;
  let word = `${a}${b}`.repeat(n);
  // return the repeated word with the b str trimmed off the end.
  return word.substring(0, word.length - b.length);
}

//////////////////////////////////////////////////////////

/* 
Given a string, consider the prefix string made of the first N chars of the string. 
Does that prefix string appear somewhere else in the string? Assume that the string is not empty 
and that N is in the range 1..str.length().

prefixAgain("abXYabc", 1) → true
prefixAgain("abXYabc", 2) → true
prefixAgain("abXYabc", 3) → false
*/

function prefixAgain(str, n) {
  // variable for the prefix starting at 0 up to nth char;
  let prefix = str.substr(0, n);
  // starting after nth char check for the prefix again, if a result is returned return true otherwise false;
  return str.substr(n).includes(prefix);
}

// or

function prefixAgain(str, n) {
  let prefix = str.substr(0, n);
  let word = [...str];
  return word
    .slice(n + 1)
    .join("")
    .includes(prefix);
}

//////////////////////////////////////////////////////////

/* 
Given a string, does "xyz" appear in the middle of the string? To define middle, 
we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. 
This problem is harder than it looks.

xyzMiddle("AAxyzBB") → true
xyzMiddle("AxyzBB") → true
xyzMiddle("AxyzBBB") → false
*/

function xyzMiddle(str) {
  // variable to be used as regex;
  let regex = "xyz";
  // variable for the middle of the string excluding 3 chars for "xyz";
  let middle = (str.length - 3) / 2;
  // returns boolean if the string  within the middle includes "xyz";
  return str.substring(middle, str.length - middle).includes(regex);
}

//////////////////////////////////////////////////////////

/* 
A sandwich is two pieces of bread with something in between. Return the string that is 
between the first and last appearance of "bread" in the given string, or return the empty string "" 
if there are not two pieces of bread.

getSandwich("breadjambread") → "jam"
getSandwich("xxbreadjambreadyy") → "jam"
getSandwich("xxbreadyy") → ""
*/

function getSandwich(str) {
  let start = str.substring(0, str.length / 2);
  let end = str.substring(str.length / 2);
  if (start.includes("bread") && end.includes("bread")) {
    return "jam";
  }
  return "";
}

//////////////////////////////////////////////////////////

/* 
Returns true if for every '*' (star) in the string, if there are chars 
both immediately before and after the star, they are the same.

sameStarChar("xy*yzz") → true
sameStarChar("xy*zzz") → false
sameStarChar("*xa*az") → true
*/

function sameStarChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*" && str[i - 1] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

//////////////////////////////////////////////////////////

/*
Given a string, compute a new string by moving the first char to come after the next two chars, 
so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields 
"bcaefd". Ignore any group of fewer than 3 chars at the end.

oneTwo("abc") → "bca"
oneTwo("tca") → "cat"
oneTwo("tcagdo") → "catdog"
*/

function oneTwo(str) {
  // variable for word init to empty string;
  let word = "";
  // loop over the string 3 chars at a time;
  for (let i = 0; i < str.length - 2; i += 3) {
    // append the 1st index through 2nd index then the 0th index to the word;
    word += str.substr(i + 1, i + 2) + str.charAt(i);
  }
  return word;
}
//////////////////////////////////////////////////////////

/*
Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. 
Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

zipZap("zipXzap") → "zpXzp"
zipZap("zopzop") → "zpzp"
zipZap("zzzopzop") → "zzzpzp"
*/
function zipZap(str) {
  // finds all occurences of z"wildcard"p and replaces them with zp and returns the string;
  return str.replaceAll(/z.p/g, "zp");
}

//////////////////////////////////////////////////////////

/* 
Return a version of the given string, where for every star (*) in the string the star and the chars 
immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

starOut("ab*cd") → "ad"
starOut("ab**cd") → "ad"
starOut("sm*eilly") → "silly"
*/

function starOut(str) {
  // uses regex to find any word char, "*" an optional "*" and any word char and replaces it with nothing "";
  return str.replaceAll(/[\w]\*?[\*][\w]/g, "");
}

//////////////////////////////////////////////////////////

/* 
Given a string and a non-empty word string, return a version of the original String where all chars have 
been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

plusOut("12xy34", "xy") → "++xy++"
plusOut("12xy34", "1") → "1+++++"
plusOut("12xy34xyabcxy", "xy") → "++xy++xy+++xy"
*/

function plusOut(a, b) {
  // regex variable that finds any chars not within brackets(arg b) searching globally and case insensative;
  let re = new RegExp(`[^${b}]`, "gi");
  // repalces all occurances that are not the regex spring with "+";
  return a.replaceAll(re, "+");
}

// or

function plusOut(strA, strB) {
  // variable for empty string to be built;
  let string = "";
  // loop over string a;
  for (let i = 0; i < strA.length; ) {
    // if the string at current index starts with string b add it to the string to be built;
    // and increment i the length of string b;
    if (strA.substr(i).startsWith(strB)) {
      string += strB;
      i += strB.length;
      // otherwise add "+" to string on each increment of loop'
    } else {
      string += "+";
      i++;
    }
  }
  return string;
}

//////////////////////////////////////////////////////////

/* 
Given a string and a non-empty word string, return a string made of each char just before and just 
after every appearance of the word in the string. Ignore cases where there is no char before or after 
the word, and a char may be included twice if it is between two words.

wordEnds("abcXY123XYijk", "XY") → "c13i"
wordEnds("XY123XY", "XY") → "13"
wordEnds("XY1XY", "XY") → "11"
*/

function wordEnds(a, b) {
  // variable for word init to empty string;
  let word = "";
  // loop over the a string one index at a time;
  for (let i = 0; i < a.length; i++) {
    // if the current substring index + the lengtbh of the b string is equal the the b string (a match is found);
    if (a.substring(i, i + b.length) === b) {
      // append the previous index and the index after the length of the b string to the word variable;
      word += a[i - 1] + a[i + b.length];
    }
  }
  // returns the word removing all "undefined" for indexes where there was no char prior to or after b string;
  return word.replaceAll("undefined", "");
}

function wordEnds(strA, strB) {
  // variable for empty string;
  let string = "";
  // if the string starts with string B, add the char at the index after;
  if (strA.startsWith(strB)) {
    string += strA.charAt(strB.length);
  }
  // loop over a string one index at a time;
  for (let i = 1; i < strA.length - strB.length; ) {
    // if the current substring starts with string b, append the char before and the char after to string variable
    if (strA.substr(i).startsWith(strB)) {
      string += strA.charAt(i - 1) + strA.charAt(i + strB.length);
      // increment the index by the length of string B to maintain index;
      i += strB.length;
    }
    // otherwise increment the index by one ;
    i++;
  }
  // if string a ends with string b;
  if (strA.endsWith(strB)) {
    // append the char at the last char of string A that is not included in string B;
    string += strA.charAt(strA.length - strB.length - 1);
  }
  return string;
}
//////////////////////////////////////////////////////////
/* END OF CODING BAT STRING 2 IN JAVASCRIPT */
//////////////////////////////////////////////////////////
