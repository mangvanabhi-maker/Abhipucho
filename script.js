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

    if(!input) return;

    const question = input.value.trim();

    if(question === ""){
      alert("Pehle sawaal likho 😎");
      return;
    }

    alert("Pharma Baba soch raha hai 🤔...");

  };

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
