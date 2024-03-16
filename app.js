var subject = {
    Python:{
        subName :'1 Subjects',
    
    },
    'Web and App Crash Course' : {
        subName :'1 Subjects',

    },
    'Web & App Development(Madaris)':{
        subName :'1 Subjects',

    },
    TypeScript :{
        subName :'3 Subjects',

    },
    'Web And Mobile Hybrid App Develpment' :{
        subName :'2 Subjects',

    },
    'Module-1 Exam' : {
        subName :'1 Subjects',

    },
   'Web & App Rangers' :{
    subName :'1 Subjects',

   },
   'Generative AI & Chatbot Batch-3' :{
    subName :'2 Subjects',

   },
   CCO :{
    subName :'3 Subjects',

   },
   'Web & Mobile App (ASF)' :{
    subName :'2 Subjects',

   },

}




// quiz code
const questions=[
    {
      question:" HTML stands for what?",
      choices:["Hypertrophic Management Language","Hyperbaric Tertiary Logarithm"," Hypertext Markup Language","Hyperresonant Marginal Logarithm"],
      correctAnswer:2,
    },
    {
     question:"Which tag begins a new paragraph?",
     choices:["<pg>","<pp>","<li>","<p>"],
     correctAnswer:3,
    },
    {
      question:"Choose the correct HTML element for the largest heading?",
      choices:["<h1>","<heading>","<h6>","<head>"],
      correctAnswer:0,
     },
     {
      question:"What does CSS stand for?",
      choices:["Colorful style sheet","Computer style sheet","Cascading style sheet","Car style sheet"],
      correctAnswer:2,
     },
     {
      question:"Which HTML tag is used to define an internal style sheet?",
      choices:["<style>","<css>","<script>","<title>"],
      correctAnswer:0,
     },
     {
      question:"Which property is used to change the background color?",
      choices:["box-shadow","color","bgcolor","background-color"],
      correctAnswer:3,
     },
     {
      question:"Inside which HTML element do we put the JavaScript?",
      choices:["<js>","<script>","<javaScript","<scripting>"],
      correctAnswer:1,
     },
     {
      question:'What is the correct syntax for referring to an external script called "xxx.js"?',
      choices:['<script href="xxx.js">','<script src="xxx.js">','<script class="xxx.js">','<script name="xxx.js">'],
      correctAnswer:1,
     },
     {
      question:"How do you create a function in JavaScript?",
      choices:["function myFunction()","function:myFunction()","function; myFunction()","function=myFunction"],
      correctAnswer:0,
     },
     {
      question:"Which event occurs when the user clicks on an HTML element?",
      choices:["onchange","onmouceclick","onclick","onmouceover"],
      correctAnswer:2,
     },
   ]
  
  




var main =document.getElementById('main')
var main1 =document.getElementById('main1')
var main2 =document.getElementById('main2')
var cart =document.getElementById('cart')




for (key in subject){
    for(key1 in subject[key]){
            // console.log(subject[key][key1])
            var value = subject[key][key1]
               
          
            
            cart.innerHTML +=`<div class="col-sm-12 col-md-6 col-lg-4 row1">
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


for (key in subject){
    for(key1 in subject[key]){
            // console.log(subject[key][key1])
            var value = subject[key][key1]
               

heading.innerHTML =`<h1>${key} <span class="size">(${value})</span></h1>`


}
}


var heading = document.getElementById('heading')
var question =document.getElementById('question-container')
var questionElenment=document.getElementById('question')
var choices=document.getElementById('choices')


function select(){
    main.style.display='none'
    main1.style.display='block'

}




const container = document.querySelector(".container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("time");



  
var currentQuestion =0;
var score =0;
var timeleft =180;


function start(){
    
    main.style.display='none'
    main1.style.display='none'
    main2.style.display='block'
    // loadQuestion()
}



function loadQuestion() {
    const question = questions[currentQuestion];
    questionElenment.textContent =question.question;

    choices.innerHTML='';
    for(var i=0; i<question.choices.length; i++){
        const li= document.createElement('li');
        const radio= document.createElement('input');
        radio.type='radio';
        radio.class='choice';
        radio.value=i
        li.appendChild(radio);
        li.appendChild(document.createTextNode(question.choices[i]));
        choices.appendChild(li);

    }

}

loadQuestion()

function checkAnswer(){
    const selectOption = document.querySelector('input[name="choice"]:checked');
    
     if(selectOption){
        const selectAnswer = parseInt(selectOption.value);
        if(selectAnswer === question[currentQuestion].correctAnswer){
            score++;
        }
        currentQuestion++;
        if(currentQuestion<question.length){
            loadQuestion()
        }
        else{
            showScore();
        }
     }
}
checkAnswer();


function showScore(){
    clearInterval(timeIntervel);
    questionElenment.style.display = "none";
    choicesElenment.style.display = "none";
    submitButton.style.display = "none";
    scoreElenment.textContent = `Your Score: ${score} out of ${question.length}`;
    scoreElenment.style.display ="block";
    restartButton.style.display = "block";

}
showScore()

function restartQuiz(){
    currentQuestion = 0;
    score = 0;
    timeleft = 180;
    loadQuestion();
    restartButton.style.display='none';
    questionElenment.style.display ='block';
    choicesElement.style.display = 'block';
    submitButton.style.display = 'block';
    scoreElenment.style.display = 'none';
    timeIntervel = setInterval(updateTime,1000);

}

restartQuiz();

function updateTime(){
    const minutes = Math.floor(timeleft/60);
    var seconds = timeLeft%60;
    seconds = seconds < 10 ? "0"+ seconds:seconds;
    timeleft.Elenment.textContent=`${minutes} : ${seconds}`;
    
    if(timeleft===0){
        showScore();

    }
    else{
        timeleft--;
    }
}
updateTime();


var timeIntervel = setInterval(updateTimer,1000);

submitButton.addEventlisner('click',checkAnswer);
restartButton.addEventlisner('click', restartQuiz);
loadQuestion();
restartButton.style.display= 'none';