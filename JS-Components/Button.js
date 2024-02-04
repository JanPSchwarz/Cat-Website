export default function NextButton(text, onclick) {
  const button = document.createElement("button");

  button.classList.add("nav-button");
  button.textContent = text;

  button.addEventListener("click", onclick);

  const buttonBox = document.querySelector("#nav-box");

  buttonBox.append(button);

  return buttonBox;
}
