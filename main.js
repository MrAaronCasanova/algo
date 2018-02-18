// https://medium.com/coderbyte/the-10-best-coding-challenge-websites-for-2018-12b57645b654

/* --------------------------------------------
CodeByte -mraa-1bor
-------------------------------------------- */

/* ------ LongestWord ------ */

// Casy
// function LongestWord(sen) {
//   let senArr = sen.replace(/[^A-Za-z]/g, ' ').split(' ');
//   let result = senArr[0];
//   senArr.forEach(function (word) {
//     if (word.length > result.length) {
//       result = word;
//     }
//   });
//
//   return result;
// }

// CodeByte
// function LongestWord(sen) {
//
//   // we use the regex match function which searches the string for the
//   // pattern and returns an array of strings it finds
//   // in our case the pattern we define below returns words with
//   // only the characters a through z and 0 through 9, stripping away punctuation
//   // e.g. "hello$% ##all" becomes [hello, all]
//   var arr = sen.match(/[a-z0-9]+/gi);
//
//   // the array sort function takes a function as a parameter
//   // which is used to compare each element in the array to the
//   // next element in the array
//   var sorted = arr.sort(function(a, b) {
//     return b.length - a.length;
//   });
//
//   // this array now contains all the words in the original
//   // string but in order from longest to shortest length
//   // so we simply return the first element
//   return sorted[0];
//
// }

// console.log(LongestWord('the $$$longest# word is coderbyte'));
// console.log(LongestWord('i love dogs'));
// console.log(LongestWord('fun!@ time'));

/* ------ FirstFactorial ------ */

// // Casy
// function FirstFactorial(num) {
//   let result = num;
//
//   for (var i = num - 1; i > 0; i--) {
//     result *= i;
//   }
//
//   return result;
// }
//
// console.log(FirstFactorial(4));

/* ------ FirstFactorial ------ */

// // Casy
// function FirstReverse(str) {
//
//   let strArr = str.split('');
//   let revArr = [];
//   for (var i = strArr.length; i >= 0; i--) {
//     revArr.push(strArr[i]);
//   }
//
//   return revArr.join('');
//
// }
//
// // keep this function call here
// console.log(FirstReverse('hello'));

/* ------ LetterChanges ------ */

// // Casy
// function LetterChanges(str) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let vowels = 'aeiou';
//   let strArr = str.toLowerCase().split('');
//   let altArr = strArr.map(function (letter) {
//     let letterIdx = alphabet.indexOf(letter);
//     if (letterIdx !== -1) {
//       if (letterIdx + 1 === 26) {
//         return alphabet[0];
//       } else {
//         return alphabet[letterIdx + 1];
//       }
//     } else {
//       return letter;
//     }
//   });
//
//   let upVowels = altArr.map(function (letter) {
//     if (vowels.indexOf(letter) !== -1) {
//       return letter.toUpperCase();
//     } else {
//       return letter;
//     }
//   });
//
//   // code goes here
//   return upVowels.join('');
// }
//
// // keep this function call here
// console.log(LetterChanges('hello*3z'));
// console.log(LetterChanges('fun times!'));

/* ------ SimpleAdding ------ */

// // Casy
// function SimpleAdding(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {
//     result.push(i);
//   }
//
//   // code goes here
//   return result.reduce(function (acc, next) {
//     return acc + next;
//   });
// }
//
// console.log(SimpleAdding(12));

// // CodeByte
// function SimpleAdding(num) {
//   var answer = 0;
//
//   // loop from 1 to num
//   for (var i = 1; i <= num; i++) {
//     answer = answer + i;
//   }
//
//   return answer;
// }
//
// console.log(SimpleAdding(12));

/* ------ LetterCapitalize ------ */

// function LetterCapitalize(str) {
//   let wordArr = str.split(' ');
//   let capArr = wordArr.map(function (word) {
//     return word[0].toUpperCase() + word.slice(1);
//   });
//
//   return capArr.join(' ');
// }
//
// console.log(LetterCapitalize('hello world'));

/* ------ SimpleSymbols ------ */

// function SimpleSymbols(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[a-z]/i) !== null) {
//       if (str[i - 1] !== '+' || str[i + 1] !== '+') {
//         return false;
//       }
//     }
//   }
//
//   return true;
// }
//
// console.log(SimpleSymbols('f++d+'));
// console.log(SimpleSymbols('aaaa'));
// console.log(SimpleSymbols('+d+=3=+s+'));

/* ------ CheckNums ------ */

// // Casy
// function CheckNums(num1, num2) {
//   if (num1 === num2) {
//     return '-1';
//   } else if (num2 > num1) {
//     return 'true';
//   } else {
//     return 'false';
//   }
// }
//
// console.log(CheckNums(3, 122));

// // CodeByte
// function CheckNums(num1, num2) {
//
//   // we use a ternary expression to write as little code as possible
//   return (num2 === num1) ? '-1' : (num2 > num1) ? true : false;
// }
//
// console.log(CheckNums(3, 122));

/* ------ CheckNums ------ */

// function TimeConvert(num) {
//   let hour = Math.floor(num / 60);
//   let min = num % 60;
//
//   // code goes here
//   return `${hour}:${min}`;
// }
//
// // keep this function call here
// console.log(TimeConvert(126));
// console.log(TimeConvert(45));

/* ------ AlphabetSoup ------ */

// function AlphabetSoup(str) {
//   return str.split('').sort().join('');
// }
//
// console.log(AlphabetSoup('coderbyte'));
// console.log(AlphabetSoup('hooplah'));

/* ------ KaprekarsConstant ------ */

// // Casy
// function KaprekarsConstant(num) {
//   let count = 0;
//   let checkNum = num;
//   while (checkNum !== 6174) {
//     let checkArr = checkNum.toString().split('').sort();
//     while (checkArr.length !== 4) {
//       checkArr.unshift(0);
//     }
//
//     let ascNum = checkArr.join('');
//     let descNum = checkArr.reverse().join('');
//     checkNum = descNum - ascNum;
//     count++;
//   }
//
//   return count;
// }
//
// console.log(KaprekarsConstant(11));
// console.log(KaprekarsConstant(2111));
// console.log(KaprekarsConstant(9831));
