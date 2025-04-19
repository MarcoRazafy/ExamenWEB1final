/**
 * Point culture (en Français car je suis un peu obligé): 
 * Dans ce genre de jeu, un mot equivaut a 5 caractères, y compris les espaces. 
 * La precision, c'est le pourcentage de caractères tapées correctement sur toutes les caractères tapées.
 * 
 * Sur ce... Amusez-vous bien ! 
 */



let startTime = null, previousEndTime = null;
let currentWordIndex = 0;
const wordsToType = [];

const modeSelect = document.getElementById("mode");
const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const results = document.getElementById("results");
const score = document.querySelector(".score");
const TextScore = document.querySelector(".text-score");

const words = {
    easy: ["apple", "banana", "grape", "orange", "cherry"],
    medium: ["keyboard", "monitor", "printer", "charger", "battery"],
    hard: ["synchronize", "complicated", "development", "extravagant", "misconception"]
};


document.querySelector('.return').addEventListener('click', function () {
    window.location.href = '../index.html';
});

// titre
const title = "Finger...Fury";
const animatedTitle = document.getElementById('animatedTitle');

title.split('').forEach((letter, index) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = letter;
    span.style.animationDelay = `${index * 0.1}s`;
    animatedTitle.appendChild(span);
});


// Generate a random word from the selected mode
const getRandomWord = (mode) => {
    const wordList = words[mode];
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// Initialize the typing test
const startTest = (wordCount = 50) => {
    wordsToType.length = 0; // Clear previous words
    wordDisplay.innerHTML = ""; // Clear display
    currentWordIndex = 0;
    startTime = null;
    previousEndTime = null;

    for (let i = 0; i < wordCount; i++) {
        wordsToType.push(getRandomWord(modeSelect.value));
    }

    wordsToType.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        if (index === 0) span.style.color = "#fff"; // Highlight first word
        wordDisplay.appendChild(span);
    });

    inputField.value = "";
    results.textContent = "";
    TextScore.textContent = "";
};

// Start the timer when user begins typing
const startTimer = () => {
    if (!startTime) startTime = Date.now();
};

// Calculate and return WPM & accuracy
const getCurrentStats = () => {
    const elapsedTime = (Date.now() - previousEndTime) / 1000; // Seconds

    const typed = inputField.value;
    const target = wordsToType[currentWordIndex];

    const wpm = (wordsToType[currentWordIndex].length / 5) / (elapsedTime / 60); // 5 chars = 1 word
    
    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === target[i]) {
            correctChars++;
        }
    }

    const accuracy = (correctChars / typed.length) * 100;
    
    return { wpm: wpm.toFixed(2), accuracy: accuracy.toFixed(2) };
};

// Move to the next word and update stats only on spacebar press
const updateWord = (event) => {
    if (event.key === " ") {
        if (!previousEndTime) previousEndTime = startTime;

        const typed = inputField.value.trim();
        const correct = typed === wordsToType[currentWordIndex];

        const { wpm, accuracy } = getCurrentStats();
        results.textContent = `WPM: ${wpm}, Accuracy: ${accuracy}%`;

        highlightWord(currentWordIndex, correct); 

        currentWordIndex++; 

        highlightCurrentWord(currentWordIndex); 

        previousEndTime = Date.now();
        inputField.value = "";
        event.preventDefault();
// ***
        if (currentWordIndex >= wordsToType.length) {
            showFinalScore();              
            inputField.disabled = true;   
            return;
        }
    }
};

// Color red or green
const highlightWord = (index, isCorrect) => {
    const wordElements = wordDisplay.children;
    if (index < wordElements.length) {
        wordElements[index].style.color = isCorrect ? "green" : "red";
    }
};

const highlightCurrentWord = (index) => {
    const wordElements = wordDisplay.children;
    if (index < wordElements.length) {
        wordElements[index].style.color = "#ffff";
    }
};

// show final score
const showFinalScore = () => {
    const wordElements = wordDisplay.children;
    let correctCount = 0;
    let incorrectCount = 0;

    for (let i = 0; i < wordElements.length; i++) {
        const color = wordElements[i].style.color;
        if (color === "green") {
            correctCount++;
        } else if (color === "red") {
            incorrectCount++;
        }
    }

    const total = correctCount + incorrectCount;
    score.style.display = "flex";
    TextScore.textContent = `🏁 FINISH !\n✅ Words typed correctly: ${correctCount} out of ${total}\n❌ Mistyped words: ${incorrectCount}`
;
};

//redirection game 
document.getElementById('home').addEventListener('click', function() {
    window.location.href = '../index.html'; 
  });
document.getElementById('retry').addEventListener('click', function() {
    window.location.href = 'game.html'; 
  });


// Event listeners
// Attach `updateWord` to `keydown` instead of `input`
inputField.addEventListener("keydown", (event) => {
    startTimer();
    updateWord(event);
});
modeSelect.addEventListener("change", () => startTest());

// Start the test
startTest();


