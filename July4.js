// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, 
// starting with word1. If a string is longer than the other, 
// append the additional letters onto the end of the merged string.

// Return the merged string.

const alternateStrings = (str1, str2) => {
    // Create a string variable to return at the end
    let result = ""

    // Run a for loop that goes until it reaches the end of string 1 and string 2
    for(let i = 0; i < str1.length || i < str2.length; i++) {
        // If i is less than the length of string 1, add the index to result
        if(i < str1.length) {
            result += str1[i]
        }

        // If i is less than the length of string 2, add the index to result
        if(i < str2.length) {
            result += str2[i]
        }
    }

    // Return result
    return result
}


// TESTING
const test1A = "something"
const test1B = "cool"

const test2A = "wicked"
const test2B = "pogged"

console.log(alternateStrings(test1A, test1B))
console.log(alternateStrings(test2A, test2B))