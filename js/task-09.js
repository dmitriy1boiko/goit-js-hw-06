// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн 
// стиль при клике на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const text = document.querySelector(".change-color");
const color = document.querySelector(".color");

text.addEventListener("click", onCangeColor);

function onCangeColor (event) {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = `-${body.style.backgroundColor}`
};