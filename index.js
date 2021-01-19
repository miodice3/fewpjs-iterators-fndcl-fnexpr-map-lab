const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

function titleCase(str) {
  return str.split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }

function titleCased() {
    
    return tutorials.map(function(tutorial){
      console.log(tutorial)
      console.log(titleCase(tutorial))
      return titleCase(tutorial)
    })
}