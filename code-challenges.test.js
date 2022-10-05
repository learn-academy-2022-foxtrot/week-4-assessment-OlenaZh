// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { template } = require("@babel/core")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//----------------------------------------------------------------------------------------------

describe('shuffleArray', () => {   
    it('removes the first item from the array and shuffles the remaining content.', () => {
    //PROVIDED VARIABLES
    const  colors1 = ["purple", "blue", "green", "yellow", "pink"];
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];

    // EXPECTED OUTPUT
    //--in any order--
    const expected1 = ["yellow", "blue", "pink", "green"];
    const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];
    
    expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(expected1));
    expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(expected2))
    });
    
  });
//---------------------------------INITIAL TEST RESULTS------------------------------------------
//   FAIL  ./code-challenges.test.js
//   shuffleArray
//     ✕ removes the first item from the array and shuffles the remaining content. (1 ms)

//   ● shuffleArray › removes the first item from the array and shuffles the remaining content.

//     ReferenceError: shuffleArray is not defined

//       35 |     const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];
//       36 |     
//     > 37 |     expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(expected1));
//          |     ^
//       38 |
//       39 |     expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(expected2))
//       40 |     });

//       at Object.expect (code-challenges.test.js:37:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.169 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

//-------------------------------------------------------------------------------------------
// b) Create the function that makes the test pass.

// declare a function and name it shuffleArray.
//use shift() method to remove the first element(element at the [0]index)
//use Fisher-Yates shuffle algorithm to shuffle (randomly reorder) elements
//use Math.random() to generate random index from 0 to i
//swap elements array[i] and array[j]; use destructuring assignment syntax to achieve that
//return arr

function shuffleArray(arr) {
    arr.shift()
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
return arr
}

//-----------------------------------|| OPT -2 ||------------------------------------------------
// function shuffleArray(arr) {
//     arr.shift()
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// return arr
// }

//-----------------------------------||TEST RESULTS||--------------------------------------------
// PASS  ./code-challenges.test.js
//   shuffleArray
//   ✓ removes the first item from the array and shuffles the remaining content. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.17 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.52s.
//-------------------------------------------------------------------------------------------------

// --------------------2) Create a function that takes in an object that contains up votes and down 
//votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.
//------------------------------------------------------------------------------------------------

describe('totalVotes', () => {   
    it('takes in an object that contains up votes and down votes and returns the net total of votes..', () => { 
    //PROVIDED VARIABLES
    const votes1 = {upVotes: 13, downVotes: 2}
    const votes2 = {upVotes: 2, downVotes: 33}

    //EXPECTED OUTPUT
    const expected1 = 11;
    const expected2 = -31;

    
    expect(totalVotes(votes1)).toEqual(expected1);
    expect(totalVotes(votes2)).toEqual(expected2);
    });
    
  });
//--------------------------------||INITIAL TEST RESULTS||-----------------------------------------
// FAIL  ./code-challenges.test.js
//   totalVotes
//     ✕ takes in an object that contains up votes and down votes and returns the net total of votes..

//   ● totalVotes › takes in an object that contains up votes and down votes and returns the net total of votes..

//     ReferenceError: totalVotes is not defined

//       104 |
//       105 |     
//     > 106 |     expect(totalVotes(votes1)).toEqual(expect.arrayContaining(expected1));
//           |     ^
//       107 |     expect(totalVotes(votes2)).toEqual(expect.arrayContaining(expected2))
//       108 |     });
//       109 |     

//       at Object.expect (code-challenges.test.js:106:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.153 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
//---------------------------------------------------------------------------------------------

// b) Create the function that makes the test pass.

//declare a function and name it totalVotes
//pass an obj as a parameter
//object upVotes value - object downVotes value

const totalVotes = (obj) => {
    return obj.upVotes - obj.downVotes;
}
//-----------------------------------||TEST RESULT||--------------------------------------------
// PASS  ./code-challenges.test.js
// totalVotes
//   ✓ takes in an object that contains up votes and down votes and returns the net total of votes.. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.139 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.56s.
//-------------------------------------------------------------------------------------------
// --------------------3) Create a function that takes in two arrays as arguments and 
// returns one array with no duplicate values. STRETCH: Use the spread operator to pass 
// in a dynamic number of arguments.
//-------------------------------------------------------------------------------------------
// a) Create a test with an expect statement using the variables provided.

describe('noDuplicateArr', () => {   
    it('takes in two arrays as arguments and returns one array with no duplicate values.', () => {
     //PROVIDED VARIABLES
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // EXPECTED OUTPUT
    const expected = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    
    expect(noDuplicateArr(dataArray1, dataArray2)).toEqual((expected));
    });  
})
//-----------------------------------------||INITIAL TEST RESULTS||-----------------------------------
// FAIL  ./code-challenges.test.js
//   noDuplicateArr
//     ✕ takes in two arrays as arguments and returns one array with no duplicate values.

//   ● noDuplicateArr › takes in two arrays as arguments and returns one array with no duplicate values.

//     ReferenceError: noDuplicateArr is not defined

//       168 |     const expected = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
//       169 |     
//     > 170 |     expect(noDuplicateArr(dataArray1, dataArray2)).toEqual((expected));
//           |     ^
//       171 |     });  
//       172 | })
//       173 

//       at Object.expect (code-challenges.test.js:170:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.171 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
//------------------------------------------------------------------------------------------------

// b) Create the function that makes the test pass.

//declare a function and name it noDuplicateArr
//pass 2 parameters (arr1, arr2)
//use concat() method to combine two arrays into one
//use set() method to remove duplicates from the array. 
    //1-st -> convert an array of duplicates to a Set. The new Set will implicitly remove duplicates elements.
    //2-nd -> convert the set back to an array
//return new, modified array (uniqueArr)


const noDuplicateArr = (arr1, arr2) => {
    let combinedArr = arr1.concat(arr2)
    let uniqueArr = [...new Set(combinedArr)]
    
    return uniqueArr
}
//-----------------------------------||TEST RESULT||---------------------------------------------
// PASS  ./code-challenges.test.js
// noDuplicateArr
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.138 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.48s.
//-----------------------------------------------------------------------------------------------