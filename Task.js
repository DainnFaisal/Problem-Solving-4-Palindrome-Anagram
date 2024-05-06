//-------------------------Palindrome------------------------//

let string1 = 'smart';
let string2 = 'level';

function isPalindrome(str) {

    let len = str.length;
    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {

            return false;
        }
    }

    return true;
}

console.log("Is string1 a palindrome?", isPalindrome(string1));

console.log("Is string2 a palindrome?", isPalindrome(string2));



//--------------------------Anagram----------------------------//

let str1 = 'silent';
let str2 = 'listen';


function areAnagrams(str1, str2) {

    //checking the length of both strings
    if (str1.length !== str2.length) {
      return false;
    }
  
    // frequency count for both strings
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
  
    // Counting frequency for string1 characters
    for (let i = 0; i < str1.length; i++) {
      let char = str1[i];

      if (frequencyCounter1[char]) {
        frequencyCounter1[char]++;

      } else {
        frequencyCounter1[char] = 1;
      }
    }
  
    // Counting frequency for string2 characters
    for (let i = 0; i < str2.length; i++) {
      let char = str2[i];

      if (frequencyCounter2[char]) {
        frequencyCounter2[char]++;
      } else {
        frequencyCounter2[char] = 1;
      }
    }
  
    // Comparing frequency of each character in both strings
    for (let char in frequencyCounter1) {

      if (!(char in frequencyCounter2)) {
        return false;
      }

      if (frequencyCounter1[char] !== frequencyCounter2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  
  console.log(areAnagrams(str1, str2)); 
