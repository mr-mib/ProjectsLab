const containerEl = document.querySelector(".container");

const carreers = ["an Engineer", "an Entrepreuneur", "a Bilingual (FR/EN)"];

let carreersIndex = 0;
let charIndex = 0;

updateText();
function updateText() {
  charIndex++;

  containerEl.innerHTML = `
  <h1>I am ${carreers[carreersIndex].slice(0, charIndex)}</h1>
  `;
  if (charIndex === carreers[carreersIndex].length) {
    carreersIndex++;
    charIndex = 0;
  }
  if (carreersIndex === carreers.length) {
    carreersIndex = 0;
  }
  setTimeout(updateText, 350);
}
