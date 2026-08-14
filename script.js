/* =========================
   PASSWORD
========================= */

const PASSWORD = "chamgadar";

const passwordInput =
  document.getElementById("passwordInput");

const unlockButton =
  document.getElementById("unlockButton");

const wrongPassword =
  document.getElementById("wrongPassword");

let attempts = 0;


/* =========================
   PAGE SWITCH
========================= */

function openPage(pageId) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target =
    document.getElementById(pageId);

  if (target) {
    target.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


/* =========================
   CHECK PASSWORD
========================= */

function checkPassword() {

  const entered =
    passwordInput.value
      .trim()
      .toLowerCase();

  if (entered === PASSWORD) {

    wrongPassword.textContent = "";

    openPage("storyPage");

    updateCounter();

    return;
  }


  attempts++;

  const box =
    document.querySelector(".password-box");

  box.classList.remove("shake");

  void box.offsetWidth;

  box.classList.add("shake");


  if (attempts === 1) {

    wrongPassword.textContent =
      "Uff bhoundu 😭 try again...";

  }

  else if (attempts === 2) {

    wrongPassword.textContent =
      "Dubara tosis kawroo 😭😭";

  }

  else {

    wrongPassword.textContent =
      "Princess... THINK HARDER 😭👑🦇";

  }


  passwordInput.value = "";

  passwordInput.focus();
}


unlockButton.addEventListener(
  "click",
  checkPassword
);


passwordInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {
      checkPassword();
    }

  }
);


/* =========================
   NEXT BUTTONS
========================= */

document.querySelectorAll("[data-next]")
  .forEach(button => {

    button.addEventListener(
      "click",
      function() {

        const target =
          this.getAttribute("data-next");

        openPage(target);

      }
    );

  });


/* =========================
   ANNIVERSARY COUNTER
========================= */

const startDate =
  new Date("2026-04-15T00:00:00");


function updateCounter() {

  const now = new Date();

  const monthCount =
    document.getElementById("monthCount");

  const liveCounter =
    document.getElementById("liveCounter");


  let years =
    now.getFullYear() -
    startDate.getFullYear();

  let months =
    now.getMonth() -
    startDate.getMonth();


  if (
    now.getDate() <
    startDate.getDate()
  ) {

    months--;

  }


  if (months < 0) {

    years--;

    months += 12;

  }


  const totalMonths =
    years * 12 + months;


  monthCount.textContent =
    Math.max(totalMonths, 0);


  const difference =
    Math.max(
      now - startDate,
      0
    );


  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      difference /
      (1000 * 60 * 60)
    ) % 24;


  const minutes =
    Math.floor(
      difference /
      (1000 * 60)
    ) % 60;


  const seconds =
    Math.floor(
      difference /
      1000
    ) % 60;


  liveCounter.textContent =
    `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}


updateCounter();

setInterval(
  updateCounter,
  1000
);


/* =========================
   QUOTES
========================= */

const quotes = [

  "You annoy me 90% of the time… but somehow you always know exactly when I need you. ♡",

  "You have this annoying little talent of making me happy when I don't even feel like smiling. 🫶",

  "You are my chamgadar. Apparently, I'm your tiddi. I still haven't approved that nickname. 🙄🦇",

  "You love me in ways I never thought anyone ever would. ♡",

  "One second we're all lovely-dovely, the next we're roasting each other like it's our full-time job. 😭",

  "Somewhere between the teasing, the chaos, and all the little things… you became the best boyfie I could've asked for. 🎀"

];


let currentQuote = 0;

const quoteText =
  document.getElementById("quoteText");

const quoteDots =
  document.getElementById("quoteDots");

const nextQuote =
  document.getElementById("nextQuote");


/* CREATE DOTS */

quotes.forEach(
  function(_, index) {

    const dot =
      document.createElement("span");

    dot.classList.add("dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    quoteDots.appendChild(dot);

  }
);


/* CHANGE QUOTE */

function showQuote() {

  quoteText.style.opacity = "0";


  setTimeout(
    function() {

      quoteText.textContent =
        quotes[currentQuote];

      quoteText.style.opacity = "1";


      document
        .querySelectorAll(".dot")
        .forEach(
          function(dot, index) {

            dot.classList.toggle(
              "active",
              index === currentQuote
            );

          }
        );

    },
    250
  );
}


nextQuote.addEventListener(
  "click",
  function() {

    currentQuote++;

    if (
      currentQuote >=
      quotes.length
    ) {

      currentQuote = 0;

    }

    showQuote();

  }
);


/* =========================
   ENVELOPE
========================= */

const envelopeButton =
  document.getElementById(
    "envelopeButton"
  );


envelopeButton.addEventListener(
  "click",
  function() {

    envelopeButton.classList.add(
      "open"
    );


    setTimeout(
      function() {

        openPage("letterPage");

        setTimeout(
          function() {

            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });

          },
          200
        );

      },
      700
    );

  }
);


/* =========================
   FINAL HEART
========================= */

const heartButton =
  document.getElementById(
    "heartButton"
  );


heartButton.addEventListener(
  "click",
  function() {

    openPage("finalPage");

  }
);
