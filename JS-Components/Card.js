export default function Card(cat) {
  // Create Card and Image

  const card = document.createElement("div");
  card.classList.add("card");

  const imageBox = document.createElement("div");
  imageBox.classList.add("image-box");

  const img = document.createElement("img");
  img.setAttribute("src", `${cat.url}`);
  img.setAttribute("alt", "random-cat-image");
  img.setAttribute("id", "cat-image");

  const arrowIcon = document.createElement("i");
  arrowIcon.classList.add("fa-solid", "fa-arrow-down");

  // Create List: Item for Item and Content

  const list = document.createElement("ul");
  list.classList.add("cat-description");
  list.style.display = "none";
  list.setAttribute("id", "cat-description");

  const listItemOne = document.createElement("li");
  const spanOne = document.createElement("span");

  listItemOne.textContent = "Breed-Name:";
  spanOne.textContent = `${cat.breeds[0].name}`;

  const listItemTwo = document.createElement("li");
  const spanTwo = document.createElement("span");

  listItemTwo.textContent = "Origin:";
  spanTwo.textContent = `${cat.breeds[0].origin}`;

  const listItemThree = document.createElement("li");
  const spanThree = document.createElement("span");

  listItemThree.textContent = "Temperament:";
  spanThree.textContent = `${cat.breeds[0].temperament}`;

  const listItemFour = document.createElement("li");
  const spanFour = document.createElement("span");

  listItemFour.textContent = "Description:";
  spanFour.textContent = `${cat.breeds[0].description}`;

  const listItemFive = document.createElement("li");
  const spanFive = document.createElement("span");
  const link = document.createElement("a");

  link.setAttribute("href", `${cat.breeds[0].wikipedia_url}`);
  link.textContent = "Wikipedia-Article";
  link.setAttribute("target", "_blank");

  const divider = document.createElement("div");
  divider.classList.add("divider");

  // Append: Assemble List

  listItemOne.append(spanOne);
  listItemTwo.append(spanTwo);
  listItemThree.append(spanThree);
  listItemFour.append(spanFour);
  spanFive.append(link);
  listItemFive.append(spanFive);

  list.append(
    listItemOne,
    listItemTwo,
    listItemThree,
    listItemFour,
    listItemFive
  );

  imageBox.append(img);
  imageBox.append(arrowIcon);

  card.append(imageBox, list, divider);

  img.addEventListener("click", () => {
    if (list.style.display === "none") {
      list.style.display = "block";
      arrowIcon.classList.toggle("fa-arrow-up");
    } else {
      list.style.display = "none";
      arrowIcon.classList.toggle("fa-arrow-up");
    }
  });

  list.addEventListener("click", () => {
    if (list.style.display === "none") {
      list.style.display = "block";
      arrowIcon.classList.toggle("fa-arrow-up");
    } else {
      list.style.display = "none";
      arrowIcon.classList.toggle("fa-arrow-up");
    }
  });

  return card;
}

// <!-- Template of Card-Design -->

// <!-- <p class="teaser">"Miau" the Button and see 😋</p> -->
// <!-- <div class="card">
//         <img
//           src="https://cdn2.thecatapi.com/images/klJJYDl2B.jpg"
//           alt="random-cat-image" />
//            <i class="fa-solid fa-arrow-down"></i>
//         <ul class="cat-description">
//           <li>Breed-Name: <span>Example</span></li>
//           <li>Origin: <span>Example</span></li>
//           <li>Temperament: <span>Example</span></li>
//           <li>Description: <span>Example</span></li>
//           <li><span><a href="">Wikipedia-Article</a></span></li>
//         </ul>
//         <div class="divider"></div>
//       </div> -->
