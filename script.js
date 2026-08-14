const PASSWORD = "chamgadar";
const startDate = new Date("2026-04-15T00:00:00");

const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");

let attempts = 0;


/* =========================
   PAGE SWITCHING
========================= */

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
    window.scrollTo(0, 0);
  }
}


/* =========================
   PASSWORD
========================= */

function checkPassword() {
  const enteredPassword = passwordInput.value.trim().toLowerCase();

  if (enteredPassword === PASSWORD) {
    errorMessage.textContent = "";

    showPage("page2");

    updateRelationshipCounter();

    return;
  }

  attempts++;

  const card = document.querySelector(".password-card");

  card.classList.remove("shake");
  void card.offsetWidth;
  card.classList.add("shake");

  if (attempts === 1) {
    errorMessage.textContent =
      "Uff bhoundu 😭 try again...";
  } else if (attempts === 2) {
    errorMessage.textContent =
      "Dubara tosis kawroo 😭";
  } else {
    errorMessage.textContent =
      "Princess, think harder 😭🦇";
  }

  passwordInput.value = "";
  passwordInput.focus();
}

unlockButton.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    checkPassword();
  }
});


/* =========================
   NEXT BUTTONS
========================= */

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => {
    const nextPage = button.getAttribute("data-next");
    showPage(nextPage);
  });
});


/* =========================
   RELATIONSHIP COUNTER
========================= */

function updateRelationshipCounter() {
  const now = new Date();
  const difference = now - startDate;

  const counter = document.getElementById("relationshipCounter");
  const monthNumber = document.getElementById("monthNumber");

  if (difference < 0) {
    counter.textContent = "Our story is about to begin... ♡";
    monthNumber.textContent = "0";
    return;
  }

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (now.getDate() < startDate.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalMonths = years * 12 + months;

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

  monthNumber.textContent = totalMonths;

  counter.textContent =
    `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

updateRelationshipCounter();

setInterval(updateRelationshipCounter, 1000);


/* =========================
   QUOTES
========================= */

const quotes = [
  "He annoys me 90% of the time… but somehow knows exactly when I need him. ♡",

  "He has this annoying little talent of making me happy when I don't even feel like smiling. 🫶",

  "He is my chamgadar. Apparently, I'm his tiddi. I still haven't approved that nickname. 🙄🦇",

  "He loves me in ways I never thought anyone ever would. ♡",

  "One second we're all lovely-dovely, the next we're roasting each other like it's our full-time job. 😭",

  "Somewhere between the teasing, the chaos, and all the little things… he became the best boyfie one could ask for. ♡"
];

let quoteIndex = 0;

const quoteText = document.getElementById("quoteText");
const nextQuoteButton = document.getElementById("nextQuoteButton");
const quoteDots = document.getElementById("quoteDots");

quotes.forEach((_, index) => {
  const dot = document.createElement("span");

  dot.classList.add("quote-dot");

  if (index === 0) {
    dot.classList.add("active");
  }

  quoteDots.appendChild(dot);
});

function showQuote(index) {
  quoteText.style.opacity = "0";

  setTimeout(() => {
    quoteText.textContent = quotes[index];
    quoteText.style.opacity = "1";

    document.querySelectorAll(".quote-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }, 250);
}

nextQuoteButton.addEventListener("click", () => {
  quoteIndex++;

  if (quoteIndex >= quotes.length) {
    quoteIndex = 0;
  }

  showQuote(quoteIndex);
});


/* =========================
   FINAL HEART BUTTON
========================= */

const finalRevealButton =
  document.getElementById("finalRevealButton");

finalRevealButton.addEventListener("click", () => {

  showPage("finalPage");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
