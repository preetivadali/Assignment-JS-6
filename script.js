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


// function to check the correct word typed by the user

function checkWord(){
  const input = document.getElementById("text").value;
  const displayedWord = document.getElementById("word").textContent;
  if(input === displayedWord){
    addWordToDOM();
    updateScore();
    document.getElementById("text").value ="";
  }
}
// Add an event listener to check the word each time the user types
document.getElementById("text").addEventListener("input", checkWord);

// Reload button
const reloadButton = document.createElement('button');
reloadButton.textContent = 'Reload';
document.body.appendChild(reloadButton);

// Add an event listener to reload the page
reloadButton.addEventListener('click', function() {
  location.reload();
});


// Update time
let startTime = 15;
const timer  = document.getElementById("time");
timer.textContent = startTime;

function updateTime(){
  startTime--;

   
    timer.textContent = startTime;


  if(startTime <= 0){
    clearInterval(countDown);
    gameOver();
  }
}
const countDown = setInterval(updateTime, 1500);

function gameOver() {
  // Check if the timer has hit zero
  if (startTime <= 0) {
    const container = document.querySelector(".container"); 
    container.innerHTML = "<h1>Game Over</h1> "; 
  }
}

