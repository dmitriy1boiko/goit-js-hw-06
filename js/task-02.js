const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

//?==============================================

const list = document.querySelector("#ingredients");

const elementOfList = ingredients.map((ingredient) => {
const listItem = document.createElement('li');
listItem.classList.add('item');
listItem.textContent = ingredient;
return listItem;
});
list.prepend(...elementOfList);
console.log(list);
