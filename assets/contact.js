const new_form = document.querySelector(".js-form");
const new_input = document.querySelector(".js-new_input");
const new_ul = document.querySelector(".js-new_ul");
const new_template = document.querySelector(".js-new_template").content;
 
let arr = [];

new_form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  arr.push(new_input.value);
  renderText();
  new_input.value = "";
});

function renderText() {
  new_ul.innerHTML = "";

  const docFrg = document.createDocumentFragment();

  arr.forEach((item, index) => {
    const clone = new_template.cloneNode(true);
    clone.querySelector(".js-paragraph").textContent = `${index + 1}. ${item}`;
    clone.querySelector(".js-button").addEventListener("click", (evt) => {
      evt.preventDefault();
      arr = arr.filter((_, inx) => index !== inx);
      renderText();
    });
    docFrg.appendChild(clone);
  });

  new_ul.appendChild(docFrg);
}

