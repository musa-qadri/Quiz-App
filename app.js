var subject = {
    Python: {
        subName: '1 Subjects',

    },
    'Web and App Crash Course': {
        subName: '1 Subjects',

    },
    'Web & App Development(Madaris)': {
        subName: '1 Subjects',

    },
    TypeScript: {
        subName: '3 Subjects',

    },
    'Web And Mobile Hybrid App Develpment': {
        subName: '2 Subjects',

    },
    'Module-1 Exam': {
        subName: '1 Subjects',

    },
    'Web & App Rangers': {
        subName: '1 Subjects',

    },
    'Generative AI & Chatbot Batch-3': {
        subName: '2 Subjects',

    },
    CCO: {
        subName: '3 Subjects',

    },
    'Web & Mobile App (ASF)': {
        subName: '2 Subjects',

    },

}




// quiz code
const questions = [
    {
        question: " HTML stands for what?",
        choices: ["Hypertrophic Management Language", "Hyperbaric Tertiary Logarithm", " Hypertext Markup Language", "Hyperresonant Marginal Logarithm"],
        correctAnswer: 2,
    },
    {
        question: "Which tag begins a new paragraph?",
        choices: ["<pg>", "<pp>", "<li>", "<p>"],
        correctAnswer: 3,
    },
    {
        question: "Choose the correct HTML element for the largest heading?",
        choices: ["<h1>", "<heading>", "<h6>", "<head>"],
        correctAnswer: 0,
    },
    {
        question: "What does CSS stand for?",
        choices: ["Colorful style sheet", "Computer style sheet", "Cascading style sheet", "Car style sheet"],
        correctAnswer: 2,
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        choices: ["<style>", "<css>", "<script>", "<title>"],
        correctAnswer: 0,
    },
    {
        question: "Which property is used to change the background color?",
        choices: ["box-shadow", "color", "bgcolor", "background-color"],
        correctAnswer: 3,
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<script>", "<javaScript", "<scripting>"],
        correctAnswer: 1,
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices: ['<script href="xxx.js">', '<script src="xxx.js">', '<script class="xxx.js">', '<script name="xxx.js">'],
        correctAnswer: 1,
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function:myFunction()", "function; myFunction()", "function=myFunction"],
        correctAnswer: 0,
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onchange", "onmouceclick", "onclick", "onmouceover"],
        correctAnswer: 2,
    },
]






var main = document.getElementById('main')
var main1 = document.getElementById('main1')
var main2 = document.getElementById('main2')
var cart = document.getElementById('cart')




for (key in subject) {
    for (key1 in subject[key]) {
        var value = subject[key][key1]

        cart.innerHTML +=
            `<div class="col-sm-12 col-md-6 col-lg-4 row1">
            <div class="card cart " style="width: 100%; ">
               
                <div class="card-body" id='carDetails'>
                 <h5 class="card-title">${key}</h5>
                 <p>${value}</p>
                 <a href="#" class="btn btn-primary" onclick="select()">join</a>
              
                </div>
            </div>
        </div>`

    }
}

var heading = document.getElementById('heading')

for (key in subject) {
    for (key1 in subject[key]) {
        var value = subject[key][key1]
        heading.innerHTML = `<h1>${key} <span class="size">(${value})</span></h1>`
    }
}

function select() {
    main.style.display = 'none'
    main1.style.display = 'block'
}

function start() {
    main.style.display = 'none'
    main1.style.display = 'none'
    main2.style.display = 'block'
}

var drop = document.getElementById('drop')


function dropdown() {
    drop.innerHTML = `<div class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Musa
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="#"><i class="fa-solid fa-square-poll-vertical"></i> Result</a></li>
      <li><a class="dropdown-item" href="#"> <i class="fa-solid fa-arrow-right-from-bracket"></i> LogOut</a></li>
   
    </ul>
  </div>`


}
dropdown()

const timerUp = document.getElementById('timer');
const questionElenment = document.getElementById('questio');
const choice = document.getElementById('choice');
const btnnext = document.getElementById('btn-next');
const scoreElenment = document.getElementById('score');
const restart = document.getElementById('btn-restart');

var currentQuestion = 0;
var score = 0
var timer = 180;

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElenment.textContent = question.question;

    choice.innerHTML = '';
    for (i = 0; i < question.choices.length; i++) {
        const li = document.getElementById('li');
        const radio = document.getElementById('input');
        radio.type = 'radio';
        radio.name = 'choice';
        radio.value = 'i';
        li.appendChild(radio);
        li.appendChild(document.createTextNode(question.choices[i]));
        choice.appendChild(li)

    }
}
loadQuestion();

function checkAnswer() {
    const selectOption = document.querySelector("input:checked")
    if (selectOption) {
        const selectAnswer = parseInt(selectOption.value)
        if (selectAnswer === questions[currentQuestion].correctAnswer) {
            score++;
        }
        if (currentQuestion < questions.length) {
            loadQuestion()
        }
        else {
            showCase()
        }
    }
}
checkAnswer();

function showCase() {
    clearInterval(timeIntervel);
    timer.style.display = 'none'
    questionElenment.style.display = 'none'
    choice.style.display = 'none'
    btnnext.style.display = 'none'
    scoreElenment.textContent = `your Scour: ${score} out of ${questions.length}`
    restart.style.display = 'block'
}

function restartQuize() {
    currentQuestion = 0;
    score = 0;
    timer = 180;
    loadQuestion();
    restart.style.display = 'none'
    timer.style.display = 'block'
    questionElenment.style.display = 'block'
    choice.style.display = 'block'
    btnnext.style.display = 'block'
    timeIntervel = setInterval(updateTimer, 1000);
}
restartQuize();

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerElement.textContent = `${minutes} : ${seconds}`;

    if (timeLeft === 0) {
        showScore();
    } else {
        timeLeft--;
    }
}

updateTimer()


var timeIntervel = setInterval(updateTimer,1000)

btnnext.addEventListener("click",checkAnswer);
restart.addEventListener("click",restartQuize);
loadQuestion();
restart.style.display="none";