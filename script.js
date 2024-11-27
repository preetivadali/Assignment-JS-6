
const typeword = document.getElementById("word");
const scoreUpdate = document.getElementById("score");
const textInput = document.getElementById("text");
const timer = document.getElementById("time");
const container = document.querySelector(".container");


let count = 0;
let startTime = 15;
let randomWord = ""; 
let countDown;


const words = [
  "dependent", "dog", "superficial", "admit", "juice", "javascript", 
  "developer", "airplane", "great", "fun", "manipulate", "cat", 
  "transition", "school", "computer", "programming", "drag", "loving", "north"
];

// Function to get a random word from the array
function getRandomWord() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  typeword.innerHTML = randomWord;
}

// Function to update the score
function updateScore() {
  count += 1;
  scoreUpdate.innerHTML = count;
}

// Function to check if the typed word matches the displayed word
function checkWord() {
  const input = textInput.value;
  if (input === randomWord) {
    getRandomWord();  
    updateScore();   
    textInput.value = "";  
  }
}

// Add an event listener to check the word each time the user types
textInput.addEventListener("input", checkWord);

// Reload Button (optional, if you want a manual reload option)
const reloadButton = document.createElement('button');
reloadButton.textContent = 'Reload';
document.body.appendChild(reloadButton);

reloadButton.addEventListener('click', function() {
  location.reload(); 
});

// Timer Functionality
function updateTime() {
  startTime--;
  timer.textContent = startTime;

  if (startTime <= 0) {
    clearInterval(countDown);  
    gameOver(); 
  }
}

// Start countdown 
countDown = setInterval(updateTime, 1000);

// Game Over logic
function gameOver() {
  if (startTime <= 0) {
    container.innerHTML = "<h1>Game Over</h1><button onclick='location.reload()'>Reload Game</button>";
  }
}


getRandomWord(); 
