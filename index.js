// ** Adding App-Functions to Button

import RenderCats from "./JS-Components/fetch&Render.js";
import NextButton from "./JS-Components/Button.js";

const button = document.querySelector('[data-js="button"]');

const nextButton = document.querySelector("#nextButton");
// const prevButton = document.querySelector("#prevButton");

let page = 0;

const header = document.querySelector("#header");

button.addEventListener("click", () => {
  RenderCats();

  setTimeout(NextButton, 3000, "Next", () => {
    page++;
    window.scrollTo({ top: 0, behavior: `smooth` });

    RenderCats();
  });
});
