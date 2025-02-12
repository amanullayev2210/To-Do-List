const form = document.querySelector(".js-form")
const input = document.querySelector(".js-input");
const wrapper = document.querySelector(".js-wrapper");
let num = 1;

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const p = document.createElement("p");
  p.textContent = `${num} ${input.value}`;
  wrapper.appendChild(p);
  input.value = null;
  num++;
});