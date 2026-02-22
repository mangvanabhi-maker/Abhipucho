// Wait until DOM fully loads
document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     SUBJECT PANEL FUNCTIONS
  ========================== */

  const subjectsPanel = document.getElementById("subjectsPanel");
  const pyqPanel = document.getElementById("pyqPanel");
  const overlay = document.getElementById("overlay");

  window.openSubjects = function () {
    subjectsPanel.classList.add("active");
    overlay.classList.add("active");
  };

  window.openPYQ = function () {
    pyqPanel.classList.add("active");
    overlay.classList.add("active");
  };

  window.closeAll = function () {
    subjectsPanel.classList.remove("active");
    pyqPanel.classList.remove("active");
    overlay.classList.remove("active");
  };

  /* =========================
     SUBJECT CARD CLICK HANDLER
  ========================== */

  const subjectCards = document.querySelectorAll(".subject-card");

  subjectCards.forEach(function (card) {
    card.addEventListener("click", function () {

      const page = card.getAttribute("data-page");

      if (page) {
        window.location.href = page;
      } else {
        alert("Page abhi ready nahi hai 👀");
      }

    });
  });

  /* =========================
     PHARMA BABA MODE
  ========================== */

  window.answer = function () {

    const questionInput = document.getElementById("question");
    const reply = document.getElementById("reply");

    if (!questionInput || !reply) return;

    const q = questionInput.value.toLowerCase();

    if (q.includes("pharmacology")) {
      reply.innerHTML = `
        <b>Pharmacology:</b><br><br>
        Study of drugs and their effects on living organisms.<br><br>
        <b>Main Branches:</b><br>
        1. Pharmacodynamics<br>
        2. Pharmacokinetics<br>
        3. Toxicology
      `;
    }

    else if (q.includes("adrenaline")) {
      reply.innerHTML = `
        <b>Adrenaline:</b><br><br>
        Class: Sympathomimetic drug<br>
        Uses: Anaphylaxis, Cardiac arrest<br>
        Effects: ↑ Heart rate, ↑ BP
      `;
    }

    else if (q.includes("atropine")) {
      reply.innerHTML = `
        <b>Atropine:</b><br><br>
        Class: Anticholinergic<br>
        Uses: Bradycardia, OP poisoning antidote
      `;
    }

    else {
      reply.innerHTML = "Thoda clear sawaal pucho 😎";
    }

  };

});
