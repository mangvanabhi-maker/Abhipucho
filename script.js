document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     PAGE REDIRECT FUNCTION
  ========================== */

  window.goTo = function(page){
    if(page){
      window.location.href = page;
    } else {
      alert("Page abhi ready nahi hai 👀");
    }
  };


  /* =========================
     SUBJECT PANEL
  ========================== */

  const subjectsPanel = document.getElementById("subjectsPanel");
  const pyqPanel = document.getElementById("pyqPanel");
  const overlay = document.getElementById("overlay");

  window.openSubjects = function(){
    if(subjectsPanel){
      subjectsPanel.classList.add("active");
      overlay.classList.add("active");
    }
  };

  window.openPYQ = function(){
    if(pyqPanel){
      pyqPanel.classList.add("active");
      overlay.classList.add("active");
    }
  };

  window.closeAll = function(){
    if(subjectsPanel) subjectsPanel.classList.remove("active");
    if(pyqPanel) pyqPanel.classList.remove("active");
    if(overlay) overlay.classList.remove("active");
  };


  /* =========================
     PHARMA BABA MODE
  ========================== */

 window.askBaba = function(){

  const input = document.getElementById("questionInput");
  const replyBox = document.getElementById("babaReply");

  if(!input || !replyBox) return;

  const question = input.value.trim();

  if(question === ""){
    replyBox.innerHTML = "😎 Pehle sawaal likho King!";
    return;
  }

  const lower = question.toLowerCase();

  replyBox.innerHTML = "<span class='typing'>Pharma Baba soch raha hai 🤔...</span>";

  setTimeout(() => {

    let answer = "";

    if(lower.includes("pharmacology")){
      answer = "💉 Pharmacology is the branch of medical science that deals with drugs and their effects on living organisms.<br><br>It includes Pharmacodynamics (what drug does to body) and Pharmacokinetics (ADME).<br><br>It ensures safe and rational therapy.";
    }

    else if(lower.includes("insulin")){
      answer = "🩸 Insulin is secreted by beta cells of pancreas.<br><br>It lowers blood glucose level and helps glucose enter cells.<br><br>Mainly used in Type 1 Diabetes.";
    }

    else if(lower.includes("aspirin")){
      answer = "💊 Aspirin is an NSAID.<br><br>Used for pain, fever and inflammation.<br><br>Low dose prevents blood clot.";
    }

    else if(lower.includes("atropine")){
      answer = "⚡ Atropine blocks muscarinic receptors.<br><br>Used in bradycardia and organophosphate poisoning.";
    }

    else{
      answer = "🤔 Pharma Baba ko abhi iska gyaan nahi hai.<br>Clear keyword likho jaise insulin, aspirin, pharmacology.";
    }

    typeWriterEffect(answer, replyBox);

  }, 800);

};


function typeWriterEffect(text, element){
  element.innerHTML = "";
  let i = 0;

  function typing(){
    if(i < text.length){
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 15);
    }
  }

  typing();
}

});
document.querySelectorAll('.main-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 10);
    const rotateY = ((centerX - x) / 10);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
