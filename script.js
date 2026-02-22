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
