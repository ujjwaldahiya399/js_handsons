// Question 1:- "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"
function removeDuplicates(string,N) {
    let strSet = new Set(string); // removes duplicate characters
    let res = ""
    for (let str of strSet) { // itirating over the string
        res = res+str; // joining the string after removing duplicates
    }
    return res
}
console.log(removeDuplicates("define",6)) // defin



// Question 2:- "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"
function myFunc(str,N) {
  const counts = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
        if (char >= 'a' && char <= 'z') {
            counts.set(char, (counts.get(char) || 0) + 1); // settting updated couint of each alphabetic character
        }
    }
    return counts;
}
console.log(myFunc("ujjwal",6)); // Map(5) { 'u' => 1, 'j' => 2, 'w' => 1, 'a' => 1, 'l' => 1 }



