//Переменные
const input = document.querySelector('input[type=text]');
const range = document.querySelector('#range');
const btn = document.querySelector('#btn');
const btnSecond = document.querySelector('#e_btn');
const square = document.querySelector('#square');
const span = document.querySelector('#range-span');
const circle = document.querySelector('#circle');



//Задание 1
const inputClick = function () {
    square.style.backgroundColor = input.value;
};

btn.addEventListener('click', inputClick);

//Задание 2
btnSecond.style.display = "none";

//Задание 3
span.textContent = range.value + " %";
let rangeChange = function () {
    span.textContent = range.value + " %";
    circle.style.height = range.value + "%";
    circle.style.width = range.value + "%";
};

range.addEventListener('input', rangeChange);