const count = document.getElementById("count");
const plus = document.getElementById("btn_plus");
const reset = document.getElementById("btn_reset");
const minus = document.getElementById("btn_minus");

const click_sound = new Audio('click-21156.mp3')
plus.addEventListener("click", () => {
  count.innerText = Number(count.innerText) + 1;
  click_sound.play();
})
minus.addEventListener("click", () => {
  count.innerText = Number(count.innerText) - 1;
  click_sound.play();
});
reset.addEventListener("click", () => {
  count.innerText = 0;
  click_sound.play();
})


