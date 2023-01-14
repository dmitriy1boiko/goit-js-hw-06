// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую 
// функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const inputEL = document.querySelector("input");
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector("#boxes");
let inputValue = 0;

inputEL.addEventListener("blur", onInputValue);

function onInputValue (event) {
  inputValue = Number(event.currentTarget.value);
  if (inputValue < 1 || inputValue > 100) {
   alert("Bведіть значення у діапазоні від 1 до 100");
   inputValue = 0;
   inputEL.value = "";
  }
};

function createBoxes(amount){
let divWidth = 30;
let divHeight = 30;
let newMassiv = [];
for (let i = 1; i <= amount; i++) {
  const newEl = document.createElement('div');
  newEl.style.width = `${divWidth}px`;
  newEl.style.height = `${divHeight}px`;
  newEl.style.backgroundColor = getRandomHexColor();

 newMassiv.push(newEl);
 divWidth += 10;
 divHeight += 10;
};
return newMassiv;
};

create.addEventListener("click", onButtonClickAddEl);

function onButtonClickAddEl (event) {
const elements = createBoxes(inputValue);
boxesEl.append(...elements);
};

 destroy.addEventListener("click", onButtonClickDelEl);
 function onButtonClickDelEl (event) {
  boxesEl.innerHTML = "";
  inputEL.value = "";
};