// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

const input = document.querySelector("#validation-input");

input.addEventListener("blur",onInputBlur);

function onInputBlur (event) {
if (input.getAttribute("data-length") == event.currentTarget.value.length) {
  input.classList.remove("invalid");
  input.classList.add("valid");
} else{
  input.classList.remove("valid");
  input.classList.add("invalid");
};
console.log(event.currentTarget);
};