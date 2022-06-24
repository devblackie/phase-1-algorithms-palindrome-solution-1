function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split("").reverse().join("")

  return word === reverseWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The variable reverseWord  is equivalent to the word which is splitted, reversed and joined
  The code checks if the reverseWord is equal to word and it returns true else false if they are not equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
