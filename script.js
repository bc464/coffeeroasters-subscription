// Mobile Navigation
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const closeIcon = document.querySelector(".icon-close");
const mobileContainer = document.querySelector(".mobile-container");
const mobileContent = document.querySelector(".mobile-content");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "none";
  mobileContent.style.display = "flex";
  closeIcon.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  mobileContent.style.display = "none";
  closeIcon.style.display = "none";
  hamburgerIcon.style.display = "block";
});

const headContainer = document.getElementById("headContainer");

// Accordion
const accordionHeading = document.querySelectorAll(".accordion-heading");
const accordionOptions = document.querySelectorAll(".accordion-options");
const arrowDirection = document.querySelectorAll(".arrowAccordion");

const optionBoxHeadings = document.querySelector(".accordion-option__box h6");

const asideOptions = document.querySelectorAll(".aside-options");

const optionBoxes = document.querySelectorAll(".accordion-option__box");
const summaryContentSpans = document.querySelectorAll(".summary-content span");
const moduleDisplay = document.querySelector(".module-container");
const moduleSummaryContentSpan = document.querySelectorAll(
  ".module-summary__content span"
);

const btnCreate = document.querySelector(".btn ");
const createPlanBtn = document.querySelector(".btnActive");
let price = document.querySelectorAll(".price");

for (let aside of asideOptions) {
  aside.addEventListener("click", () => {
    const dataAsideId = parseInt(aside.dataset.id);
    asideOptions[dataAsideId - 1].classList.toggle("active");
    accordionOptions[dataAsideId - 1].classList.toggle("selectedOption");
    arrowDirection[dataAsideId - 1].classList.toggle("arrowDirection");
  });
}

for (let heading of accordionHeading) {
  const dataId = parseInt(heading.dataset.id);

  heading.addEventListener("click", () => {
    asideOptions[dataId - 1].classList.toggle("active");

    accordionOptions[dataId - 1].classList.toggle("selectedOption");
    arrowDirection[dataId - 1].classList.toggle("arrowDirection");

    for (let option of accordionOptions) {
      option.display = "flex";
    }
  });

  let selectedBox = {
    block1: null,
    block2: null,
    block3: null,
    block4: null,
    block5: null,
  };

  function changeColor(boxId) {
    const box = document.getElementById(boxId);
    const blockClass = box.classList[1];

    if (selectedBox[blockClass]) {
      selectedBox[blockClass].classList.remove("selected");
    }
    selectedBox[blockClass] = box;
    box.classList.add("selected");
  }

  for (let i = 1; i <= 15; i++) {
    document
      .getElementById(`box${i}`)
      .addEventListener("click", () => changeColor(`box${i}`));
  }
}

optionBoxes.forEach((optionBox, index) => {
  optionBox.addEventListener("click", function () {
    const sourceH6 = this.querySelector("h6").innerText;
    let summaryIndex = Math.floor(index / 3);

    summaryContentSpans[summaryIndex].innerText = sourceH6;
    moduleSummaryContentSpan[summaryIndex].innerText = sourceH6;

    if (summaryIndex == 4) {
      btnCreate.classList.remove("btn");
      btnCreate.classList.add("btnActive");
    }

    createPlanBtn.addEventListener("click", () => {
      headContainer.style.opacity = 0.2;
      const howContainer = document.querySelector(".how-container");
      howContainer.style.opacity = 0.2;
      moduleDisplay.style.display = "block";
    });
    let priceResult = document.querySelector(".priceResult");

    if (index == 12) {
      priceResult.innerText = price[0].innerText;
    } else if (index == 13) {
      priceResult.innerText = price[1].innerText;
    } else if (index == 14) {
      priceResult.innerText = price[2].innerText;
    }

    let priceResultMobile = document.querySelector(".priceResultMobile");

    if (index == 12) {
      priceResultMobile.innerText = price[0].innerText;
    } else if (index == 13) {
      priceResultMobile.innerText = price[1].innerText;
    } else if (index == 14) {
      priceResultMobile.innerText = price[2].innerText;
    }
  });
});
