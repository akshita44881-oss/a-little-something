let attempts = 0;

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const errorMessage = document.getElementById("errorMessage");

const startDate = new Date("2026-04-15T00:00:00");

const quotes = [
  "Somehow, you became my favourite part of ordinary days. ♡",
  "Different cities, same little universe. 🌎♡",
  "Four months, countless conversations, and still not enough. ♡",
  "Distance is annoying, but you are worth it. 🫶"
];

let quoteIndex = 0;


/* =========================
   PASSWORD
========================= */

function checkPassword() {

  const password = passwordInput.value.trim().toLowerCase();

  if (password === "chamgadar") {

    showPage("page2");

    updateCounter();

    return;
  }

  attempts++;

  const card = document.querySelector(".card");

  card.classList.remove("shake");

  void card.offsetWidth;

  card.classList.add("shake");

  if (attempts === 1) {

    errorMessage.textContent =
      "Uff bhoundu 😭 try again...";

  } else if (attempts === 2) {

    errorMessage.textContent =
      "Dubara tosis kawroo 😭💀";

  } else {

    errorMessage.textContent =
      "BROOO 😭 Batman ka hint diya tha 🦇";

  }

  passwordInput.value = "";
}

unlockBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    checkPassword();
  }

});


/* =========================
   PAGE SWITCHING
========================= */

function showPage(pageId) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const nextPage = document.getElementById(pageId);

  nextPage.classList.add("active");
}

document.querySelectorAll(".nextBtn").forEach(button => {

  button.addEventListener("click", function() {

    const nextPage = this.dataset.next;

    if (nextPage) {
      showPage(nextPage);
    }

  });

});


/* =========================
   FOUR MONTHS COUNTER
========================= */

function updateCounter() {

  const now = new Date();

  const difference = now - startDate;

  if (difference < 0) {

    document.getElementById("counter").textContent =
      "Our story is about to begin... ♡";

    return;
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("counter").textContent =
    `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

updateCounter();

setInterval(updateCounter, 1000);


/* =========================
   QUOTES
========================= */

const quoteText = document.getElementById("quoteText");
const quoteBtn = document.getElementById("quoteBtn");

quoteBtn.addEventListener("click", function() {

  quoteIndex++;

  if (quoteIndex >= quotes.length) {
    quoteIndex = 0;
  }

  quoteText.style.opacity = "0";

  setTimeout(() => {

    quoteText.textContent = quotes[quoteIndex];

    quoteText.style.opacity = "1";

  }, 250);

});


/* =========================
   LETTER
========================= */

const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

openLetter.addEventListener("click", function() {

  letter.classList.add("show");

  openLetter.style.display = "none";

});


/* =========================
   PAGE 5 FINAL EFFECT
========================= */

letter.addEventListener("click", function() {

  document.body.classList.add("celebrate");

});
