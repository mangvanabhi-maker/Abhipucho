const questions = [
  {
    question: "Which vitamin is fat soluble?",
    options: ["Vitamin C", "Vitamin B12", "Vitamin A", "Vitamin B6"],
    answer: 2
  },
  {
    question: "Normal blood pH is?",
    options: ["6.5", "7.4", "8.0", "5.5"],
    answer: 1
  },
  {
    question: "Insulin is secreted by?",
    options: ["Liver", "Pancreas", "Kidney", "Heart"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
let hearts = 3;
let timeLeft = 15;
let timerInterval;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const heartsEl = document.getElementById("hearts");
const timeEl = document.getElementById("time");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("scoreBox");

function startTimer(){
  timeLeft = 15;
  timeEl.textContent = timeLeft;
  timeEl.classList.remove("red");

  timerInterval = setInterval(()=>{
    timeLeft--;
    timeEl.textContent = timeLeft;

    if(timeLeft <= 5){
      timeEl.classList.add("red");
    }

    if(timeLeft <= 0){
      clearInterval(timerInterval);
      loseHeart();
      nextBtn.style.display = "block";
    }

  },1000);
}

function showQuestion(){
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.options.forEach((option,index)=>{
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = ()=> checkAnswer(index,button);
    optionsEl.appendChild(button);
  });

  startTimer();
}

function checkAnswer(index,button){
  clearInterval(timerInterval);

  const correctIndex = questions[currentQuestion].answer;
  const buttons = document.querySelectorAll(".options button");

  buttons.forEach(btn => btn.disabled = true);

  if(index === correctIndex){
    button.classList.add("correct");
    score++;
  }else{
    button.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
    loseHeart();
  }

  nextBtn.style.display = "block";
}

function loseHeart(){
  hearts--;
  heartsEl.textContent = "❤️ ".repeat(hearts);
  heartsEl.classList.add("blink");

  setTimeout(()=> heartsEl.classList.remove("blink"),300);

  if(hearts <= 0){
    endGame();
  }
}

nextBtn.onclick = ()=>{
  currentQuestion++;

  if(currentQuestion < questions.length){
    showQuestion();
  }else{
    endGame();
  }
};

function endGame(){
  clearInterval(timerInterval);
  questionEl.textContent = "Game Over!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreBox.textContent = "Your Score: " + score;
}

showQuestion();
