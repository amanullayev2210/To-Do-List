const new_form = document.querySelector(".new-js_form");
const new_input = document.querySelector(".new-js_input");
const new_input2 = document.querySelector(".new-js_input2")
const new_text = document.querySelector(".new-js_text")
const new_button = document.querySelector(".new-js_button")
const new_ul = document.querySelector(".js-new_ul");
const new_template = document.querySelector(".js-new_template").content;
 
let arr = [];

new_form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  arr.push(new_input.value);
  arr.push(new_input2.value)
  arr.push(new_text.value)
  renderText();
  new_input.value = "";
  new_input2.value = "";
  new_text.value = "";
});

function renderText() {
  new_ul.innerHTML = "";

  const docFrg = document.createDocumentFragment();

  arr.forEach((item, index) => {
    const clone = new_template.cloneNode(true);
    clone.querySelector(".js-paragraph").textContent = `${index + 1}.  ${item}`;
    clone.querySelector(".js-button").addEventListener("click", (evt) => {
      evt.preventDefault();
      arr = arr.filter((_, inx) => index !== inx);
      renderText();
    });
    docFrg.appendChild(clone);
  });

  new_ul.appendChild(docFrg);
}

