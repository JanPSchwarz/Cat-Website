// ** Adding App-Functions to Button


import fetchAndRenderCats from "./JS-Components/fetch&Render.js";

const button = document.querySelector('[data-js="button"]');

button.addEventListener("click", () => fetchAndRenderCats());
