import Card from "./Card.js";
import renderElement from "./Render.js";

const root = document.getElementById("start-box");

export default async function fetchAndRenderCats() {
  const url =
    "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_80QHtDPhcDJgMWfVMivtOm4RkbsEB7Op11NNA8NkImpLpcuUvYoyb12eDy5cLmnb";

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  root.textContent = "";

  data.forEach((cat) => {
    const card = Card(cat);
    renderElement(card);
    // console.log(cat);
  });

  const note = document.querySelector(".note");
  note.removeAttribute("hidden");
}
