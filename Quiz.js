/* ===========================
   PHARMA ARENA 3.0
=========================== */

const questions = [
  {
    question:"What drug does to body?",
    options:["Pharmacodynamics","Pharmacokinetics","Toxicology","Therapy"],
    answer:"Pharmacodynamics"
  },
  {
    question:"ADME stands for?",
    options:[
      "Absorption Distribution Metabolism Excretion",
      "Action Dose Mechanism Effect",
      "Acid Drug Entry",
      "None"
    ],
    answer:"Absorption Distribution Metabolism Excretion"
  },
  {
    question:"Atropine blocks?",
    options:["Beta","Muscarinic","Dopamine","Opioid"],
    answer:"Muscarinic"
  }
];

let current = 0;
let xp = 0;
let level = 1;
let lives = 3;
let streak = 0;
let timer;
let timeLeft = 10;
let bossRound = false;

/* ELEMENTS */
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const feedbackText = document.getElementById("feedbackText");
const levelDisplay = document.getElementById("levelDisplay");
const livesDisplay = document.getElementById("livesDisplay");
const timerDisplay = document.getElementById("timerDisplay");
const xpFill = document.getElementById("xpFill");

/* TIMER */
function startTimer(){
  clearInterval(timer);
  timeLeft = bossRound ? 5 : 10;
  timerDisplay.innerText = "⏳ " + timeLeft;

  timer = setInterval(()=>{
    timeLeft--;
    timerDisplay.innerText = "⏳ " + timeLeft;
    if(timeLeft <= 0){
      clearInterval(timer);
      loseLife();
    }
  },1000);
}

/* LOAD QUESTION */
function loadQuestion(){
  bossRound = (current % 5 === 0 && current !== 0);

  const q = questions[current % questions.length];

  if(bossRound){
    questionText.innerText = "👹 BOSS: " + q.question;
    questionText.classList.add("boss-mode");
  }else{
    questionText.innerText = q.question;
    questionText.classList.remove("boss-mode");
  }

  optionsContainer.innerHTML = "";
  feedbackText.innerText = "";

  q.options.forEach(option=>{
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = ()=>checkAnswer(option);
    optionsContainer.appendChild(btn);
  });

  startTimer();
}

/* CHECK ANSWER */
function checkAnswer(selected){
  clearInterval(timer);

  const correct = questions[current % questions.length].answer;

  if(selected === correct){
    streak++;
    xp += bossRound ? 25 : 10;
    if(streak >= 3) xp += 5;

    feedbackText.innerText = "🔥 Correct!";
    confettiBlast();
  }else{
    loseLife();
  }

  updateStats();
}

/* LOSE LIFE */
function loseLife(){
  lives--;
  streak = 0;
  feedbackText.innerText = "❌ Life Lost";

  if(lives <= 0){
    questionText.innerText = "💀 GAME OVER!";
    optionsContainer.innerHTML = "";
    clearInterval(timer);
  }

  updateStats();
}

/* UPDATE */
function updateStats(){
  if(xp >= 100){
    level++;
    xp = 0;
  }

  levelDisplay.innerText = "Level " + level;
  livesDisplay.innerText = "❤️".repeat(lives);
  xpFill.style.width = xp + "%";

  localStorage.setItem("level",level);
}

/* NEXT */
function nextQuestion(){
  if(lives <= 0) return;
  current++;
  loadQuestion();
}

/* CONFETTI */
function confettiBlast(){
  const confetti = document.createElement("div");
  confetti.innerText = "🎉🎉🎉";
  confetti.style.position="fixed";
  confetti.style.top="50%";
  confetti.style.left="50%";
  confetti.style.fontSize="40px";
  confetti.style.transform="translate(-50%,-50%)";
  document.body.appendChild(confetti);

  setTimeout(()=>confetti.remove(),800);
}

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    size:Math.random()*3,
    speedY:Math.random()*1+0.2
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(138,43,226,0.7)";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();
    p.y += p.speedY;
    if(p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* INIT */
updateStats();
loadQuestion();
