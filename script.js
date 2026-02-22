function answer() {

  let q = document.getElementById("question").value.toLowerCase();
  let reply = document.getElementById("reply");

  // PHARMACOLOGY
  if(q.includes("pharmacology")){
    reply.innerHTML = `
    <b>Pharmacology:</b><br><br>
    Pharmacology is the branch of medical science which deals with the study of drugs and their effects on living organisms.<br><br>

    <b>Main Branches:</b><br>
    1. Pharmacodynamics – What drug does to the body.<br>
    2. Pharmacokinetics – What body does to the drug.<br>
    3. Toxicology – Study of harmful effects of drugs.<br><br>

    <b>Importance:</b><br>
    Helps in rational use of medicines and safe therapy.<br><br>

    <b>Exam Tip:</b> Definition + Branches + Importance likho.
    `;
  }

  // PHARMACODYNAMICS
  else if(q.includes("pharmacodynamics")){
    reply.innerHTML = `
    <b>Pharmacodynamics:</b><br><br>
    It is the study of biochemical and physiological effects of drugs and their mechanism of action.<br><br>

    <b>Includes:</b><br>
    • Receptor interaction<br>
    • Dose-response relationship<br>
    • Therapeutic effect<br>
    • Adverse effects<br><br>

    <b>Short Note Format:</b> Definition + Mechanism + Example.
    `;
  }

  // PHARMACOKINETICS
  else if(q.includes("pharmacokinetics")){
    reply.innerHTML = `
    <b>Pharmacokinetics:</b><br><br>
    It deals with the movement of drug in the body.<br><br>

    <b>ADME:</b><br>
    A – Absorption (Drug enters bloodstream)<br>
    D – Distribution (Drug spreads in body)<br>
    M – Metabolism (Drug breakdown in liver)<br>
    E – Excretion (Drug removal via kidney)<br><br>

    <b>Exam Tip:</b> ADME full form zaroor likho.
    `;
  }

  // ADRENALINE
  else if(q.includes("adrenaline")){
    reply.innerHTML = `
    <b>Adrenaline (Epinephrine):</b><br><br>

    <b>Class:</b> Sympathomimetic drug<br><br>

    <b>Mechanism of Action:</b><br>
    Stimulates alpha and beta adrenergic receptors.<br><br>

    <b>Effects:</b><br>
    • Increases heart rate<br>
    • Raises blood pressure<br>
    • Bronchodilation<br><br>

    <b>Uses:</b><br>
    • Anaphylactic shock<br>
    • Cardiac arrest<br>
    • Asthma (emergency)<br><br>

    <b>Adverse Effects:</b><br>
    Palpitations, anxiety, hypertension.
    `;
  }

  // ATROPINE
  else if(q.includes("atropine")){
    reply.innerHTML = `
    <b>Atropine:</b><br><br>

    <b>Class:</b> Anticholinergic (Muscarinic blocker)<br><br>

    <b>Mechanism:</b><br>
    Blocks acetylcholine at muscarinic receptors.<br><br>

    <b>Uses:</b><br>
    • Bradycardia<br>
    • Organophosphate poisoning antidote<br>
    • Pre-anaesthetic medication<br><br>

    <b>Side Effects:</b><br>
    Dry mouth, blurred vision, tachycardia.
    `;
  }

  // PHENYTOIN
  else if(q.includes("phenytoin")){
    reply.innerHTML = `
    <b>Phenytoin:</b><br><br>

    <b>Class:</b> Antiepileptic drug<br><br>

    <b>Mechanism:</b><br>
    Blocks voltage-gated sodium channels and prevents seizure spread.<br><br>

    <b>Uses:</b><br>
    • Generalized tonic-clonic seizures<br>
    • Status epilepticus (IV form)<br><br>

    <b>Adverse Effects:</b><br>
    Gingival hyperplasia, hirsutism, ataxia.
    `;
  }

  else{
    reply.innerHTML = "itni choti cheej nahi pta chutiya ho kya 😅";
  }

}
function toggleSubjects() {
  const more = document.getElementById("moreSubjects");
  
  more.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function(){

  const cards = document.querySelectorAll(".subject-card");

  cards.forEach(card => {
    card.addEventListener("click", function(){

      const page = this.getAttribute("data-page");

      if(page){
        window.location.href = page;
      } else {
        alert("Page abhi ready nahi hai 👀");
      }
