const title = "JS";
let screens = "Простые, Сложные, Интерактивные";
const screenPrice = 12;
const rollback = 78;
const fullPrice = 2000;
const adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + (screenPrice) + " рублей/долларов/гривен/юаней");
console.log("Стоимость разработки сайта " + (fullPrice) + " рублей/долларов/гривен/юаней");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice*(rollback/100));