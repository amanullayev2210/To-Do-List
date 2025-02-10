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

// const form = document.querySelector(".js-form")
// const  input = document.querySelector(".js-input");
// const wrapper = document.querySelector(".js-ul");
// const template = document.querySelector(".js-template").content;

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const docFrg = document.createDocumentFragment();
//   const clone = template.cloneNode(true);
//   clone.querySelector(".js-li").textContent = input.value;
//   docFrg.appendChild(clone);
//   wrapper.appendChild(docFrg);

//   input.value = null;
// });
