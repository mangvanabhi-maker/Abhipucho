const questions = [

/* 🌿 PHARMACOGNOSY */

{ question: "Cinchona contains:", options: ["Morphine","Quinine","Nicotine","Caffeine"], answer: 1 },
{ question: "Clove oil contains:", options: ["Eugenol","Menthol","Tannin","Resin"], answer: 0 },
{ question: "Senna is used as:", options: ["Analgesic","Laxative","Antacid","Diuretic"], answer: 1 },
{ question: "Digitalis is used in:", options: ["Asthma","Heart failure","Diabetes","Fever"], answer: 1 },
{ question: "Aloe belongs to family:", options: ["Solanaceae","Liliaceae","Labiatae","Umbelliferae"], answer: 1 },
{ question: "Ginger is used as:", options: ["Carminative","Sedative","Antibiotic","Antacid"], answer: 0 },
{ question: "Morphine is obtained from:", options: ["Cinchona","Opium","Clove","Senna"], answer: 1 },
{ question: "Volatile oils are obtained by:", options: ["Distillation","Filtration","Evaporation","Sublimation"], answer: 0 },

/* 🧪 PHARM CHEMISTRY */

{ question: "Aspirin belongs to:", options: ["NSAID","Antibiotic","Antifungal","Sedative"], answer: 0 },
{ question: "IUPAC of Paracetamol:", options: ["N-acetyl-p-aminophenol","Acetyl salicylic acid","Sulfanilamide","None"], answer: 0 },
{ question: "Alcohol functional group is:", options: ["-COOH","-OH","-NH2","-CHO"], answer: 1 },
{ question: "Benzene is:", options: ["Aliphatic","Aromatic","Alcohol","Ester"], answer: 1 },
{ question: "Sodium bicarbonate is used as:", options: ["Antacid","Antibiotic","Sedative","Diuretic"], answer: 0 },
{ question: "Sulphuric acid formula:", options: ["HCl","H2SO4","HNO3","NaOH"], answer: 1 },
{ question: "Chloroform is:", options: ["CHCl3","C2H5OH","H2SO4","NaCl"], answer: 0 },
{ question: "Primary amine group is:", options: ["-NH2","-OH","-COOH","-CHO"], answer: 0 },

/* 💉 PHARMACOLOGY */

{ question: "Pharmacodynamics deals with:", options: ["ADME","Drug action on body","Excretion","Toxicity"], answer: 1 },
{ question: "Atropine blocks:", options: ["Beta receptors","Muscarinic receptors","Dopamine receptors","Histamine receptors"], answer: 1 },
{ question: "Phenytoin is used in:", options: ["Asthma","Epilepsy","Diabetes","Hypertension"], answer: 1 },
{ question: "Adrenaline acts on:", options: ["Alpha & Beta receptors","Muscarinic","GABA","Serotonin"], answer: 0 },
{ question: "Half-life determines:", options: ["Color","Dose frequency","Taste","Cost"], answer: 1 },
{ question: "Penicillin is:", options: ["Antibiotic","Antiviral","Antifungal","Analgesic"], answer: 0 },
{ question: "Diazepam is:", options: ["Sedative","Antacid","Antibiotic","Antifungal"], answer: 0 },
{ question: "Insulin lowers:", options: ["BP","Sugar","Cholesterol","Pulse"], answer: 1 },

/* 🏭 PHARMACEUTICS */

{ question: "Tablet is prepared by:", options: ["Compression","Distillation","Filtration","Extraction"], answer: 0 },
{ question: "Emulsion is mixture of:", options: ["Oil & Water","Gas & Liquid","Solid only","Powder only"], answer: 0 },
{ question: "Syrup is:", options: ["Solution","Suspension","Capsule","Tablet"], answer: 0 },
{ question: "Capsule shell made of:", options: ["Gelatin","Starch","Wax","Plastic"], answer: 0 },
{ question: "Suppository route:", options: ["Rectal","Oral","IV","IM"], answer: 0 },
{ question: "Filtration removes:", options: ["Solid particles","Gas","Liquid","Heat"], answer: 0 },
{ question: "Sterilization kills:", options: ["All microorganisms","Virus only","Bacteria only","Fungi only"], answer: 0 },
{ question: "Disintegration test checks:", options: ["Tablet breakdown","Color","Taste","Smell"], answer: 0 },

/* 🩺 THERAPEUTICS */

{ question: "Hypertension treated by:", options: ["Antihypertensives","Antibiotics","Antifungals","Antacids"], answer: 0 },
{ question: "Asthma drug class:", options: ["Bronchodilators","Diuretics","Analgesics","Antipyretics"], answer: 0 },
{ question: "Drug of choice in anaphylaxis:", options: ["Adrenaline","Atropine","Paracetamol","Diazepam"], answer: 0 },
{ question: "Antipyretic reduces:", options: ["Fever","BP","Sugar","Pain only"], answer: 0 },
{ question: "Metformin is used in:", options: ["Diabetes","Asthma","Fever","Pain"], answer: 0 },
{ question: "Diuretics increase:", options: ["Urine output","BP","Sugar","Pulse"], answer: 0 },

/* 🧠 HAP */

{ question: "Functional unit of kidney:", options: ["Nephron","Neuron","Alveoli","Atrium"], answer: 0 },
{ question: "Normal blood pH:", options: ["7.4","6.5","8.0","5.5"], answer: 0 },
{ question: "Largest organ of body:", options: ["Skin","Liver","Heart","Brain"], answer: 0 },
{ question: "RBC lifespan:", options: ["120 days","30 days","60 days","365 days"], answer: 0 },
{ question: "Insulin secreted by:", options: ["Pancreas","Liver","Kidney","Heart"], answer: 0 },
{ question: "Heart has how many chambers?", options: ["4","2","3","5"], answer: 0 }

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
