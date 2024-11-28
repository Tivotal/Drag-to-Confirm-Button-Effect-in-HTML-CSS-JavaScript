/* Created by Tivotal */

let btn = document.querySelector(".btn");
let rangeInput = document.querySelector(".inner input");

btn.addEventListener("click", () => {
  btn.classList.add("clicked");
});

rangeInput.addEventListener("change", () => {
  let val = rangeInput.value;

  if (val < 80) {
    rangeInput.value = 0;
  } else {
    rangeInput.value = 100;
    setTimeout(() => {
      btn.classList.add("confirmed");
    }, 200);
  }
});
