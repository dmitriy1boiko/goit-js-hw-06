// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output. Если инпут пустой, в спане 
//  должна отображаться строка "Anonymous".

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener("input", onInputInput);

function onInputInput (event) {

  if(event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  } else{
    span.textContent = event.currentTarget.value;
  };
};