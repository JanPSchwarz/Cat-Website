function fold(element) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

export default async function eventListeners() {
  const image = document.getElementById("cat-image");
  const list = document.getElementById("cat-description");

  if (image != null) {
    image.addEventListener("click", () => {
      fold(list);
    });
  }

  if (list != null) {
    list.addEventListener("click", () => {
      fold(list);
    });
  }
}
