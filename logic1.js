//////////////////////////////////////////////////////////
/*CodingBat.com logic 1 challenges solved in javascript*/
//////////////////////////////////////////////////////////
/*
Goal: check true/false if number is between 40 & 60 unless it is the weekend where number minimum of 40 is required only
Params: number, boolean (n, bool)
Return value: true/false
Logic: 
  - If cigars >= 40 And cigars greater than 60 or its the weekend
    - return true
  - otherwise
    - return false

When squirrels get together for a party, they like to have cigars. 
A squirrel party is successful when the number of cigars is between 40 and 60,
 inclusive. Unless it is the weekend, in which case there is no upper bound on 
 the number of cigars. Return true if the party with the given values is successful, or false otherwise. 

cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true 
*/

function cigarParty(cigars, weekend) {
  if (cigars >= 40 && (cigars > 60 || weekend)) {
    return true;
  } 
  return false;
}
console.log(cigarParty(30, false));
console.log(cigarParty(50, false));
console.log(cigarParty(70, true));


/* You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of
 your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes.
  The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. 
  If either of you is very stylish, 8 or more, then the result is 2 (yes). 
  With the exception that if either of you has style of 2 or less, then the result is 0 (no). 
  Otherwise the result is 1 (maybe).
dateFashion(5, 10) → 2
dateFashion(5, 2) → 0
dateFashion(5, 5) → 1 

Goal: determine on a score 0 = no, 1 = maybe, 2 = yes if you will get a table
Params: your style, dates style (0-10) (you, date)
Return value: 0-2 as int
Logi:
 -if you or date style is >= 8 and you or date style >= 2 
  - return 2
 -if you or date style <= 2
  - return 0
 - otherwise
  - return 1   */

  function dateFashion(date, you){
    if ( you > 2 && date > 2 && you >= 8 || date >=8){
      return 2
      
    } else if (you <= 2 || date <= 2){
      return 0
    }
    return 1
  }
  
  console.log(dateFashion(4,4))


/* 
The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). 
Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, 
return true if the squirrels play and false otherwise.
squirrelPlay(70, false) → true
squirrelPlay(95, false) → false
squirrelPlay(95, true) → true
 
Goal: taking in temperature(60-90 inclusive or 100 during summer)  determine boolean is squirrels play
Params: temp, isSummer(boolean)
Return Val: true/false
Logic: 
if temp > 60 and temp <= 100 && summer or temp < 90
return true
otherwise return false;
*/


function squirrelPlay(temp, isSummer){
  if (temp > 60 && (temp <= 100 && isSummer) || temp < 90){
    return true
  }
   return false;
 }
 console.log(squirrelPlay(70, false));


/*
Goal: 0 = no ticket, 1 = small ticket, 2 = big ticket. If speed is < 60 result = 0, if speed >60 & < 80 result = 1, if speed is > 81 result is 2. in cases of birthday speed is allowed to be 5 higher.
Params: speed: int, birthday: boolean
Return Val: 0 || 1
Logic:
if birthday and speed < 65 return 0, > 65 && < 85 return 1, > 85 return true
if !birthday and speed < 60 return 0, > 60 && < 80 return 1, > 80 return true

You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

caughtSpeeding(60, false) → 0
caughtSpeeding(65, false) → 1
caughtSpeeding(65, true) → 0
*/

function caughtSpeeding(speed, birthday) {
  if ((!birthday && speed < 61) || (birthday && speed < 66)) {
    return 0;
  }
  if (
    (!birthday && speed > 60 && speed < 80) ||
    (birthday && speed > 65 && speed < 85)
  ) {
    return 1;
  }
  if ((!birthday && speed > 80) || (birthday && speed > 86)) {
    return 2;
  }
}

console.log(caughtSpeeding(87, true));

/*
Goal:take 2 ints and return their sum. if sum is 10-19 return 20 instead
Params: int1: a, int2: b;
Return Val: int
Logic: if a + b is equal to > 9 and < 19 
return 20
otherwise return a + b

Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

sortaSum(3, 4) → 7
sortaSum(9, 4) → 20
sortaSum(10, 11) → 21
*/

function sortaSum(a, b) {
  let total = a + b;
  return total > 9 && total < 19 ? 20 : total;
}

console.log(sortaSum(9, 4));

/*
Goal:given a day of the week 0=sun...6=sat, and boolean for vacation return a string in form "0:00" for alarm time. alarm is 7 on weekdays and 10 on weekend unless vacation then weekdays is 10 and weekends is off
Params: day(0-6): day, vacation(boolean): vacation
Return Val: time in string ("0:00")
Logic: if day is 0 || 6 && vacation is false alarm is 10
if day is >0 and  day is <6 and vacation is false alarm is 7


Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

alarmClock(1, false) → "7:00"
alarmClock(5, false) → "7:00"
alarmClock(0, false) → "10:00"
*/

function alarmClock(day, vacation) {
  if (!vacation && day != 0 && day != 6) {
    return "7:00";
  }
  if ((day == 0 || day == 6) && !vacation) {
    return "10:00";
  }

  return "off";
}

console.log(alarmClock(5, false));

/*
Goal:return true if a or b is 6, if their sum is 6, or the difference is 6
Params: int1: a, int2: b;
Return Val: boolean
Logic:
if a or b is = to 6
return true
if a + b is = to 6
return true
if the difference of a and b is 6
return true
otherwise return false

The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

love6(6, 4) → true
love6(4, 5) → false
love6(1, 5) → true
*/

function love6(a, b) {
  if (Math.abs(a + b) == 6 || Math.abs(a, b) == 6 || a == 6 || b == 6) {
    return true;
  }
  return false;
}

console.log(love6(1, 5));

/*
Goal: return true if n is in the range 1-10, unless outsideMode is true, then return true if the number is less or equal to 1 or greater than 10
Params:int: n, boolean: outsideMode;
Return Val:boolean
Logic:if n >1 or < 10 return true

Given a number n, return true if n is in the range 1..10, inclusive. Unless outsideMode is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

in1To10(5, false) → true
in1To10(11, false) → false
in1To10(11, true) → true
*/

function in1To10(n,outsideMode){
  if(n > 1 && n < 10){
    return true;
  }if(outsideMode === true && (n <= 1 || n >= 10)){
    return true
  }
  return false;
}

console.log(in1To10(11, true))

/*
Goal:return true if n is multiple of 11 or more than multiple of 11
Params: int: a;
Return Val:boolean
Logic:if a % 11 == 0 or a % 11 == <=1;
return true
otherwise return false

We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator -- see Introduction to Mod

specialEleven(22) → true
specialEleven(23) → true
specialEleven(24) → false
*/

function specialEleven(a){
  if (a % 11 == 0 || a % 11 <= 1){
    return true
  }
  return false;
}

console.log(specialEleven(23))

/*
Goal:return true if non negative number is 1 or 2 more than a multiple of 20
Params: int: a;
Return Val: boolean
Logic: if modulus of 20 is equal to 1 or modulus of 20 is equal to 2 
return true
otherwise return false

Return true if the given non-negative number is 1 or 2 more than a multiple of 20. See also: Introduction to Mod

more20(20) → false
more20(21) → true
more20(22) → true
*/

function more20(a) {
  if (a % 20 == 1 || a % 20 == 2) {
    return true;
  }
  return false;
}

console.log(more20(42));

/*
Goal: return true if the given number is multiple of 3 or 5 but not both
Params: int: a;
Return Val:boolean
Logic: if a is equal to 3 and 5 
return false
if a is equal to 3 or 5
return true
otherwise return false;

Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator -- see Introduction to Mod

old35(3) → true
old35(10) → true
old35(15) → false
*/

function old35(a) {
  if (a % 3 == 0 && a % 5 == 0) {
    return false;
  }
  if (a % 3 == 0 || a % 5 == 0) {
    return true;
  }
  return false;
}
console.log(old35(15));

/*
Goal:return true if the number is 1 or 2 less than a multiple of 20
Params: int: a;
Return Val: boolean
Logic:
if int is equal to 1 or 2 less than multiple of 20
return true
otherwise return false;

Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false. See also: Introduction to Mod

less20(18) → true
less20(19) → true
less20(20) → false
*/

function less20(a) {
  if (a % 20 == 20 - 1 || a % 20 == 20 - 2) {
    return true;
  }
  return false;
}

console.log(less20(38));

/*
Goal:take a number and return true if it is within 2 of a multiple of 10
Params: int: a;
Return Val: boolean
Logic: 
if remainder of 10 is 2 or 1 
return true
if remainder of 10 is -2 or -1
return true
otherwise return false

Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2. See also: Introduction to Mod

nearTen(12) → true
nearTen(17) → false
nearTen(19) → true
*/

function nearTen(a){ 
  if (a%10 == 2 || a%10 ==  1){
    return true;
  }if (a%10 == 8 || a%10 == 9){
    return true;
  }
  return false;
}
console.log(nearTen(17))

/*
Goal:take 2 ints and return sum. if either num is between 13 and 19 return a 19 instead
Params: int1: a, int2: b;
Return Val: int;
Logic: if a or b is 13 to 19 return 19
otherwise return a + b

Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.

teenSum(3, 4) → 7
teenSum(10, 13) → 19
teenSum(13, 2) → 19
*/

function teenSum(a, b) {
  if (a > 12 && a < 20) {
    return 19;
  }
  if (b > 12 && b < 20) {
    return 19;
  }
  return a + b;
}
console.log(teenSum(13, 2));

/*
Goal: return true if phone should be answered. 
Params: normal, mom , asleep
Return Val: boolean
Logic:

Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

answerCell(false, false, false) → true
answerCell(false, false, true) → false
answerCell(true, false, false) → false
*/

function answerCell(morning, mom, asleep) {
  if (!morning && !asleep) {
    return true;
  }
  if (morning && mom) {
    return true;
  }
  if (asleep) {
    return false;
  }
  if (morning && !mom) {
    return false;
  }
  return false;
}

console.log(answerCell(true, false, false));

/* 
Goal:return outcome of party as int. 0 bad(tea or candy <5), 1 good(tea and candy > 4) , 2 great(either is double or more). 
Params:tea: a, candy: b;
Return Val:int
Logic: 
if tea or candy are both at least 5 and double the other party is 2
if tea or candy is less than 5 party is 0
if tea and candy are 5 or more party is 1

We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

teaParty(6, 8) → 1
teaParty(3, 8) → 0
teaParty(20, 6) → 2
*/

function teaParty(a, b) {
  if (a > 4 && b > 4 && (a > b * 2 || b > a * 2)) {
    return 2;
  }
  if (a < 5 || b < 5) {
    return 0;
  }
  if (a > 4 && b > 4) {
    return 1;
  }
}

console.log(teaParty(20, 8));

/* 
Goal:if a string starts with f return "Fizz" if the string ends with b returnb "Buzz" if both condrtions are true return "FizzBuzz". anything else return unchanged string
Params: string: str;
Return Val: str;
Logic: 
if index 0 of string is f 
return "Fizz"
if last index of string is b
return "Buzz"
if both condtions are met 
return "FizzBuzz"
otherwise return the string

Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged. (See also: FizzBuzz Code)

fizzString("fig") → "Fizz"
fizzString("dib") → "Buzz"
fizzString("fib") → "FizzBuzz"
*/

function fizzString(str) {
  if (str[0] === "f") {
    return "Fizz";
  }
  if (str[str.length - 1] === "b") {
    return "Buzz";
  }
  if (str[0] === "f" && str[str.length - 1] === "b") {
    return "FizzBuzz";
  }
  return str;
}
console.log(fizzString("gib"));

/* 
Goal:take a number and return it as a string ie: 1 = "1!" unless divisible by 3 returh "Fizz" or divisible by 5 return "Buzz" or divisible by 3 and 5 return "FizzBuzz"
Params: int: a;
Return Val: string
Logic:
if number is divisible by 3 
return "Fizz"
if numvber is divisble by 5
return "Buzz"
if number is divisible by 3 and 5 
return "FizzBuzz"
otherwise return number to as string + !

Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3. What will the remainder be when one number divides evenly into another? (See also: FizzBuzz Code and Introduction to Mod)

fizzString2(1) → "1!"
fizzString2(2) → "2!"
fizzString2(3) → "Fizz!"
*/

function fizzString2(a) {
  if (a % 3 == 0 && a % 5 == 0) {
    return "FizzBuzz";
  }
  if (a % 3 == 0) {
    return "Fizz";
  }
  if (a % 5 == 0) {
    return "Buzz";
  }
  return `${a}!`;
}
console.log(fizzString2(5));

/* 
Goal:take 3 ints and return true if any two equal the third
Params: int1: a, int2: b, int3: c;
Return Val:boolean;
Logic:
if a + b == c;
return true;
if c + a == b;
return true;
if b + c == a;
retur true;
otherwise return false;

Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

twoAsOne(1, 2, 3) → true
twoAsOne(3, 1, 2) → true
twoAsOne(3, 2, 2) → false
*/

function twoAsOne(a, b, c) {
  if (a + b == c) {
    return true;
  }
  if (c + a == b) {
    return true;
  }
  if (b + c == a) {
    return true;
  }
  return false;
}
console.log(twoAsOne(3, 2, 2));

/* 
Goal:take 3 ints and return true if b is > a and c > b. If 'bOk' is true b does not need to be > a
Params: int1: a, int2: b, int3: c, boolean: bOk;
Return Val:boolean
Logic:
if b> a and c > b;
return true;
if bOk and c > b;
return true;
otherwise return false;

Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.

inOrder(1, 2, 4, false) → true
inOrder(1, 2, 1, false) → false
inOrder(1, 1, 2, true) → true
*/

function inOrder(a, b, c, bOk) {
  if (b > a && c > b) {
    return true;
  }
  if (bOk && c > b) {
    return true;
  }
  return false;
}
console.log(inOrder(1, 1, 2, true));

/* 
Goal:take 3 ints, return true of they are in strict increasing order. if equalOk is true equality is allowed.
Params: int1: a, int2: b, int3: c, boolean: equalOk;
Return Val:boolean;
Logic:
if a > b > c 
return true
if equalOk and a>= b >=c 
return true
otherwise return false

Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.

inOrderEqual(2, 5, 11, false) → true
inOrderEqual(5, 7, 6, false) → false
inOrderEqual(5, 5, 7, true) → true
*/

function inOrderEqual(a, b, c, equalOk) {
  if (a < b && b < c) {
    return true;
  }
  if (equalOk && a <= b && b <= c) {
    return true;
  }
  return false;
}
console.log(inOrderEqual(5, 5, 7, true));

/* 
Goal:take 3 ints, return true if 2 or more have the same rightmost digit
Params: int1: a, int2: b, int3: c;
Return Val: boolean
Logic:
declare variable of number in tenths position of each parameter
if a == b or b == c or a === c 
return true
otherwise return false;

Given three ints, a b c, return true if two or more of them have the same rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.

lastDigit(23, 19, 13) → true
lastDigit(23, 19, 12) → false
lastDigit(23, 19, 3) → true
*/

function lastDigit(a, b, c) {
  aRight = a % 10;
  bRight = b % 10;
  cRight = c % 10;
  if (aRight == bRight || bRight == cRight || aRight == cRight) {
    return true;
  }
  return false;
}
console.log(lastDigit(23, 19, 3));

/* 
Goal:take 3 ints and return true if one is 10 or more less than any others
Params: int1: a, int2: b, int3: c;
return Val:boolean
Logic:
if difference between a-b is >= 10 
or b-c is >= 10
or a-c is >= 10
return true;
otherwise return false;

Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

lessBy10(1, 7, 11) → true
lessBy10(1, 7, 10) → false
lessBy10(11, 1, 7) → true
*/

function lessBy10(a, b, c) {
  if (Math.abs(a - b) >= 10 || Math.abs(b - c) >= 10 || Math.abs(a - c) >= 10) {
    return true;
  }
  return false;
}
console.log(lessBy10(1, 7, 11));

/*
Goal: return the sum of two 6 sided dice (1-6) if noDoubles is true & the dice are the same increment one to the next value (wrapping to 1 if 6's)
Params: int1: a, int2: b, boolean: NoDoubles;
Return Val: int
Logic: 
if nodoubles and a is equal to b
return a + (b + 1)
otherwise return a + b

Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.

withoutDoubles(2, 3, true) → 5
withoutDoubles(3, 3, true) → 7
withoutDoubles(3, 3, false) → 6
*/

function withoutDoubles(a, b, noDoubles) {
  if (noDoubles & (a == b)) {
    return a + (b + 1);
  }
  return a + b;
}

console.log(withoutDoubles(3, 3, false));

/*
Goal: take 2 ints, return larger. if the two values have the same remainder when % 5, return the smaller val. in all cases, if the two values are the same return 0.
Params: int1: a, int2: b;
Return Val: int
Logic: 
if two val are same when divded by 5, return smaller
in call cases if remainders are same return 0
if a > b return a;
if b > a return b;

Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

maxMod5(2, 3) → 3
maxMod5(6, 2) → 6
maxMod5(3, 2) → 3
*/

function maxMod5(a, b) {
  if (a == b) {
    return 0;
  }
  if (a % 5 == b % 5) {
    if (a > b) {
      return b;
    }
    if (b > a) {
      return a;
    }
  }
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  }
}

console.log(maxMod5(15, 10));

/*
Goal: 3 ints each is a 0-2. if they are all 2 the result is 10, if they are all the same the result is 5. if b & c are different from a, result is 1. otherwise result is 0;
Params:int1: a, int2: b, int3: c;
Return Val: int
Logic:
if a b and c = 2;
return 10;
if a == b and b == c ;
return 5;
if b & c not = a;
return 1;
otherwise return 0;

You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5. Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.

redTicket(2, 2, 2) → 10
redTicket(2, 2, 1) → 0
redTicket(0, 0, 0) → 5
*/

function redTicket(a,b,c){
  if (a == 2 && b == 2 & c == 2){
    return 10
  }if (a == b && b == c){
    return 5
  }if (b !== a && c !== a){
    return 1
  }
   return 0
 }
 console.log(redTicket(0,0, 0))

 /*
Goal: 3 ints, if all nums are different from eachother result is 0, if all are the same result is 20, if two are the same result is 10;
Params: int1: a, int2: b, int3: c;
Return Val: int
Logic:
if a == b & b == c
return 20
if a != b != c
return 0
if a == b || b == c || c == a
return 10

You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.

greenTicket(1, 2, 3) → 0
greenTicket(2, 2, 2) → 20
greenTicket(1, 1, 2) → 10
*/

function greenTicket(a, b, c) {
  if (a == b && b == c) {
    return 20;
  }
  if (a != b && b != c) {
    return 0;
  }
  if (a == b || b == c || c == a) {
    return 10;
  }
}
console.log(greenTicket(1, 1, 2));

/* 
Goal: 3 ints with 3 pairs(ab,bc,ac) consider sum of each pair. if any pair is 10 the result is 10. otherwise if the ab sum is exactly 10 more than bc or ac sum result is 5, otherwise result is 0
Params: int1: a, int2: b, int3: c;
Return Val: int
Logic:
if a + b || b + c || a + c are equal to 10 return 10
if a + b == b+c + 10 || a + c + 10 return 5
otherwise return 0

You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs, which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair. If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is exactly 10 more than either bc or ac sums, the result is 5. Otherwise the result is 0.

blueTicket(9, 1, 0) → 10
blueTicket(9, 2, 0) → 0
blueTicket(6, 1, 4) → 10
*/

function blueTicket(a, b, c) {
  if (a + b == 10 || b + c == 10 || a + c == 10) {
    return 10;
  }
  if (a + b == b + c + 10 || a + b == a + c + 10) {
    return 5;
  }
  return 0;
}

console.log(blueTicket(14, 1, 4));

/* 
Goal: take 2 ints range 10-99, return true if a digit appears in both numbers;
Params: int1: a, int2: b;
Return Val: boolean;
Logic:
if a 1n is equal to b 1n or b 2n 
return true
if a 2n is equal to b 1n or b 2n
return true
otherwise return false

Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

shareDigit(12, 23) → true
shareDigit(12, 43) → false
shareDigit(12, 44) → false
*/

function shareDigit(a, b) {
  if (
    Math.floor(a / 10) == Math.floor(b / 10) ||
    Math.floor(a / 10) == b % 10
  ) {
    return true;
  }
  if (a % 10 == Math.floor(b / 10) || a % 10 == b % 10) {
    return true;
  }
  return false;
}
console.log(shareDigit(12, 44));

/* 
Goal: take 2 ints and return sum as long as the sum has same number of digits as a. if it has more digits than a just return a;
Params: int1: a, int2: b;
Return Val: int;
Logic: 
if the length of sum of a + b is equal to the length of digits in a;
return sum of a and b;
if the length of the sum of a + b is longer than the length of digits in a;
return a;

Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of digits as a. If the sum has more digits than a, just return a without b. (Note: one way to compute the number of digits of a non-negative int n is to convert it to a string with String.valueOf(n) and then check the length of the string.)

sumLimit(2, 3) → 5
sumLimit(8, 3) → 8
sumLimit(8, 1) → 9
*/

function sumLimit(a, b) {
  if (Math.abs(a + b).toString().length == a.toString().length) {
    return a + b;
  }
  if (Math.abs(a + b).toString().length > a.toString().length) {
    return a;
  }
}

console.log(sumLimit(8, 1));





