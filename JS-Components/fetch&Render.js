import Card from "./Card.js";
import renderElement from "./Render.js";
import fetchCats from "./fetch.js";

const root = document.getElementById("start-box");

export default async function RenderCats() {
  const data = await fetchCats();

  root.textContent = "";

  data.forEach((cat) => {
    const card = Card(cat);
    renderElement(card);
    // console.log(cat);
  });

  const note = document.querySelector(".note");
  note.removeAttribute("hidden");
}
