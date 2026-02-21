const quizData = [
  {
    question: "What drug does to the body is called?",
    options: ["Pharmacodynamics", "Pharmacokinetics", "Toxicology", "Therapy"],
    answer: "Pharmacodynamics"
  },
  {
    question: "ADME stands for?",
    options: [
      "Absorption Distribution Metabolism Excretion",
      "Action Dose Mechanism Effect",
      "Acid Drug Medical Entry",
      "None"
    ],
    answer: "Absorption Distribution Metabolism Excretion"
  },
  {
    question: "Atropine blocks?",
    options: ["Beta receptors", "Muscarinic receptors", "Dopamine receptors", "Opioid receptors"],
    answer: "Muscarinic receptors"
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;

function shuffleQuestions() {
  quizData.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("timer").innerText = "⏳ Time: " + timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "⏳ Time: " + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      document.getElementById("feedback").innerText = "⏰ Time up! Pharmacology ne dhoka de diya 😭";
    }
  }, 1000);

  const q = quizData[currentQuestion];
  document.getElementById("questionBox").innerText = q.question;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";
  document.getElementById("feedback").innerText = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  clearInterval(timer);

  if (selected === quizData[currentQuestion].answer) {
    score++;
    document.getElementById("feedback").innerText =
      "🔥 Sahi jawaab! Lagta hai viva me bhi top karoge 😎";
    confetti();
  } else {
    document.getElementById("feedback").innerText =
      "❌ Galat! NCERT dobara kholo bhai 📚😂";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("questionBox").innerText = "🎉 Quiz Finished!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("scoreBox").innerText =
      "Final Score: " + score + "/" + quizData.length;

    if (score === quizData.length) {
      document.getElementById("feedback").innerText =
        "👑 KING LEVEL! Pharma Baba khush hai 😎🔥";
    } else if (score >= 2) {
      document.getElementById("feedback").innerText =
        "💊 Achha tha! Thoda aur padho champion.";
    } else {
      document.getElementById("feedback").innerText =
        "😭 Bhai... Pharmacology tumse naraaz hai.";
    }
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  shuffleQuestions();
  loadQuestion();
}

function confetti() {
  document.body.style.backgroundColor = "#111122";
  setTimeout(() => {
    document.body.style.backgroundColor = "#000";
  }, 300);
}

shuffleQuestions();
loadQuestion();
