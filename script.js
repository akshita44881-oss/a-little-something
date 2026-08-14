/* =========================
   PASSWORD
========================= */

const PASSWORD = "chamgadar";

const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");
const wrongPassword = document.getElementById("wrongPassword");

let attempts = 0;

function openPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const nextPage = document.getElementById(pageId);

  if (nextPage) {
    nextPage.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function checkPassword() {

  const entered = passwordInput.value.trim().toLowerCase();

  if (entered === PASSWORD) {

    wrongPassword.textContent = "";

    openPage("storyPage");

    updateCounter();

    return;
  }

  attempts++;

  const box = document.querySelector(".password-box");

  box.classList.remove("shake");

  void box.offsetWidth;

  box.classList.add("shake");

  if (attempts === 1) {

    wrongPassword.textContent =
      "Uff bhoundu 😭 try again...";

  } else if (attempts === 2) {

    wrongPassword.textContent =
      "Dubara tosis kawroo 😭😭";

  } else {

    wrongPassword.textContent =
      "Princess... THINK. 😭👑🦇";

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
   PAGE BUTTONS
========================= */

document.querySelectorAll("[data-next]").forEach(button => {

  button.addEventListener("click", () => {

    const target = button.getAttribute("data-next");

    openPage(target);

  });

});


/* =========================
   15 APRIL → 15 AUGUST
========================= */

const startDate = new Date("2026-04-15T00:00:00");

function updateCounter() {

  const now = new Date();

  const difference = now - startDate;

  const counter = document.getElementById("liveCounter");
  const monthCount = document.getElementById("monthCount");

  if (difference < 0) {

    monthCount.textContent = "0";

    counter.textContent =
      "Our story is about to begin... ♡";

    return;
  }

  let years =
    now.getFullYear() - startDate.getFullYear();

  let months =
    now.getMonth() - startDate.getMonth();

  if (now.getDate() < startDate.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalMonths =
    years * 12 + months;

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

  monthCount.textContent = totalMonths;

  counter.textContent =
    `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

updateCounter();

setInterval(updateCounter, 1000);


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

let currentQuote = 0;

const quoteText = document.getElementById("quoteText");
const quoteDots = document.getElementById("quoteDots");
const nextQuote = document.getElementById("nextQuote");


/* CREATE DOTS */

quotes.forEach((quote, index) => {

  const dot = document.createElement("span");

  dot.classList.add("dot");

  if (index === 0) {
    dot.classList.add("active");
  }

  quoteDots.appendChild(dot);

});


/* CHANGE QUOTE */

function changeQuote() {

  quoteText.style.opacity = "0";

  setTimeout(() => {

    quoteText.textContent =
      quotes[currentQuote];

    quoteText.style.opacity = "1";

    document.querySelectorAll(".dot").forEach(
      (dot, index) => {

        dot.classList.toggle(
          "active",
          index === currentQuote
        );

      }
    );

  }, 250);

}

nextQuote.addEventListener("click", () => {

  currentQuote++;

  if (currentQuote >= quotes.length) {
    currentQuote = 0;
  }

  changeQuote();

});


/* =========================
   FINAL HEART REVEAL
========================= */

const heartButton =
  document.getElementById("heartButton");

heartButton.addEventListener("click", () => {

  openPage("finalPage");

});
