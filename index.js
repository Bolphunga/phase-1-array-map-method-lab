const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(array => {
  return array
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    })
    
}


// function titleCased() {
//   // Function to convert a string to title case with exceptions for specific words
//   const toTitleCase = (str) => {
//     const uppercaseWords = ["API", "OO", "PreventDefault", "JSONP"];
//     return str
//         .split(" ")
//         .map((word) => {
//             // Keep specific uppercase words in original case
//             if (uppercaseWords.includes(word.toUpperCase())) {
//                 return word.toUpperCase();
//             } else {
//                 return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//             }
//         })
//         .join(" ");
// };

// // Return an array of tutorial names in title case
// return tutorials.map(toTitleCase);
// }


