const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});



const quizData = [
    {
        question: "Which brand is known for the iconic Birkin bag?",
        a: "Louis Vuitton",
        b: "Hermès",
        c: "Chanel",
        d: "Gucci",
        correct: "b"
    },
    {
        question: "What is the world's most expensive car as of 2024?",
        a: "Bugatti La Voiture Noire",
        b: "Rolls-Royce Boat Tail",
        c: "Pagani Zonda HP Barchetta",
        d: "Lamborghini Veneno",
        correct: "b"
    },
    {
        question: "Which country is home to the largest number of luxury yacht manufacturers?",
        a: "Italy",
        b: "USA",
        c: "France",
        d: "Germany",
        correct: "a"
    },
    {
        question: "Which luxury watch brand features the famous ‘Crown’ logo?",
        a: "Rolex",
        b: "Omega",
        c: "Patek Philippe",
        d: "Tag Heuer",
        correct: "a"
    },
    {
        question: "Which city is considered the fashion capital of the world?",
        a: "Paris",
        b: "New York",
        c: "Milan",
        d: "Tokyo",
        correct: "a"
    },
    {
        question: "What is the name of the champagne that Jay-Z owns?",
        a: "Dom Pérignon",
        b: "Cristal",
        c: "Armand de Brignac",
        d: "Veuve Clicquot",
        correct: "c"
    },
    {
        question: "Which of these luxury hotels is located in Dubai?",
        a: "Burj Al Arab",
        b: "The Ritz-Carlton",
        c: "The Plaza",
        d: "Marina Bay Sands",
        correct: "a"
    },
    {
        question: "What is the name of the luxury train that travels between London and Venice?",
        a: "Blue Train",
        b: "Venice Simplon-Orient-Express",
        c: "Royal Scotsman",
        d: "Glacier Express",
        correct: "b"
    },
    {
        question: "Which island is often called the 'Billionaire's Playground'?",
        a: "Santorini",
        b: "Ibiza",
        c: "Saint-Barthélemy (St. Barts)",
        d: "Bora Bora",
        correct: "c"
    }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h5>${currentQuizData.question}</h5>
        <div class="form-check">
            <input type="radio" class="form-check-input" name="answer" id="a" value="a">
            <label class="form-check-label" for="a">${currentQuizData.a}</label>
        </div>
        <div class="form-check">
            <input type="radio" class="form-check-input" name="answer" id="b" value="b">
            <label class="form-check-label" for="b">${currentQuizData.b}</label>
        </div>
        <div class="form-check">
            <input type="radio" class="form-check-input" name="answer" id="c" value="c">
            <label class="form-check-label" for="c">${currentQuizData.c}</label>
        </div>
        <div class="form-check">
            <input type="radio" class="form-check-input" name="answer" id="d" value="d">
            <label class="form-check-label" for="d">${currentQuizData.d}</label>
        </div>
    `;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    submitButton.style.display = "block";
    loadQuiz();
}

submitButton.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
    } else {
        resultContainer.style.display = "block";
        scoreDisplay.innerText = score;

        submitButton.style.display = "none";

        const restartButton = document.createElement("button");
        restartButton.classList.add("btn", "btn-custom");
        restartButton.textContent = "Restart Quiz";
        restartButton.addEventListener("click", resetQuiz);

        quizContainer.appendChild(restartButton);
    }
});

loadQuiz();
