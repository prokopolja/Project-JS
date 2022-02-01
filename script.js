'use strict';

const title = prompt ('Как называется наш проект?');
const screens = prompt ("Какие типы экранов нужно разработать? (пример: Простые, Сложные, Интерактивные)");
const screenPrice = +prompt ("Сколько будет стоить данная работа?");
const adaptive = confirm ("Нужен ли адаптив на сайте?");

const service1 = prompt ("Какой дополнительный тип услуги нужен? (например service1, service2)");
const servicePrice1 = +prompt ("Сколько это будет стоить?");

const service2 = prompt ("Какой дополнительный тип услуги нужен? (например service1, service2)");
const servicePrice2 = +prompt ("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollback = 18;
const servicePercentPrice = fullPrice - (fullPrice*rollback/100);




console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));


switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case 15000 <= fullPrice && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case 0 <= fullPrice && fullPrice < 15000:
    console.log("Скидка не предусмотрена");
    break;  
  default:
    console.log("Что-то пошло не так");
    break;
}

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (15000 <= fullPrice && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (0 <= fullPrice && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что-то пошло не так");
}
