// Создай переменную counterValue в которой будет храниться текущее 
// значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const addSpanValue = document.querySelector('#value');

decBtn.addEventListener("click", onDecBtnAddClick);
incBtn.addEventListener("click", onIncBtnAddClick);

function onDecBtnAddClick () {
  counterValue -=1;
  addSpanValue.textContent = counterValue;
}
function onIncBtnAddClick () {
  counterValue +=1;
  addSpanValue.textContent = counterValue;
}