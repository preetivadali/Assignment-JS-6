// Variables for the DOM elements

// Array of words
let words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];




// function that will give a random word to the user 
function addWordToDOM() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  const typeword = document.getElementById("word");
  typeword.innerHTML = randomWord;
  
}
addWordToDOM();

// function that will increment score by 1
let count = 0;
function updateScore() {
  count += 1; 
  const scoreUpdate = document.getElementById("score");
  scoreUpdate.innerHTML = count;
}
updateScore()




