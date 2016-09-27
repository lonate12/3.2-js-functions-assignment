/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";
    if(num1 > num2){
      return num1;
    }else if (num1 < num2){
      return num2;
    }else {
      var answer = 'They are equal';
      return answer;
    }
}

  var largerNumber = max(100, 500);
  console.assert(largerNumber == 500);
  console.assert(max(-10, -5) == -5);
  console.assert(max(5, 5) == 'They are equal');

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";
    if(num1>num2 && num1>num3){
      return num1;
    }else if(num2>num1 && num2>num3){
      return num2;
    }else if(num3>num1 && num3>num2){
      return num3;
    }else if((num1==num2 && num1>num3) || (num1==num3 && num1>num2)){
      return num1;
    }else if((num2==num1 && num2>num3) || (num2==num3 && num2>num1)){
      return num2;
    }else{
      var answer = 'They are equal';
      return answer;
    }
}

console.assert(maxOfThree(2,4,7) == 7);
console.assert(maxOfThree(-50,1,1000) == 1000);
console.assert(maxOfThree(2,2,2) == 'They are equal');

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if(char.length == 1 && typeof(char) == 'string'){
      var lowerCaseConversion = char.toLowerCase();
      if(lowerCaseConversion=='a' || lowerCaseConversion=='e' || lowerCaseConversion=='i' || lowerCaseConversion=='o' || lowerCaseConversion=='u'){
        return true;
      }else{
        return false;
      }
    } else {
      var error = 'Too many characters entered or not a string.';
      return error;
    }

}

console.assert(isVowel('a') === true);
console.assert(isVowel('A') === true);
console.assert(isVowel(']') === false);
console.assert(isVowel('sde') === 'Too many characters entered or not a string.');
console.assert(isVowel(4) === 'Too many characters entered or not a string.');


// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var newSentence = '';
    if(typeof(phrase) == 'string'){
      for(var i=0; i < phrase.length; i++){
        var currentLetter = phrase[i];
        if((phrase[i] == 'a') || (phrase[i] =='e') || (phrase[i] == 'i') || (phrase[i] == 'o') || (phrase[i] == 'u') || (phrase[i] == ' ')){
          newSentence += phrase[i];
        }else{
          newSentence = newSentence + phrase[i] + 'o' + phrase[i];
        }
      }
      return newSentence;
    }else{
      return 'This is not a string';
    }
}

console.log(rovarspraket('I want to go to the store'));
console.assert(rovarspraket('What') === 'WoWhohatot');
console.assert(rovarspraket(345) === 'This is not a string');


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    var calculation = 0;
    var numbersArray = arguments.length;
    for(var i=0; i < numbersArray; i++){
      calculation += arguments[i];
    }
    return calculation;
}

var calculation = sum(1,2,3,4);

console.log(calculation);
console.assert(sum(1,2,3,4) == 10);
console.assert(sum(-1, -2, -3, -4) == -10);

function multiply(){
    "use strict";
    var calculation = 0;
    var numbersArray = arguments.length;
    for(var i=0; i < numbersArray; i++){
      calculation += arguments[i];
    }
    return calculation;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
