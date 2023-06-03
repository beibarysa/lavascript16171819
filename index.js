//1 task

let number = 15; 

if(number % 2 == 0){ 
    console.log("Число " + number + " четное"); 
} 

else { 
    console.log("Число " + number + " нечетное"); 
}

//2task

/*let num1 = 78;
let num2 = 4;

if(num1 > num2){
    console.log(num1 + " больше чем " + num2)
}

else {
console.log(num2 + " больше чем " + num1)
}*/

//3task

let year = 1389;

if(year % 4 == 0) {
    console.log("это високосное число")
}
else{
    console.log("это не високосное число")
}

//4task

let variable = 3456; 
if (typeof variable === "string") { 
    console.log(variable + " Переменная является строкой");
} 
else if (typeof variable === "number") { 
    console.log(variable + " Переменная является числом"); 
} 
else { 
    console.log(variable + " Переменная не является строкой или числом"); 
}

//5task

const hour = 12; 
if (hour >= 6 && hour < 12) {
     console.log("Доброе утро!");
} 
else if (hour >= 12 && hour < 18) {
     console.log("Добрый день!");
} 
else { 
    console.log("Доброй ночи!"); 
}

//6task
let num1 = 3;
let num2 = 5;
let num3 = 56;

if(num1 > num2 && num3) {
    console.log(num1 + " больше всех")
}
else if (num2 > num3 && num1) {
    console.log(num2 + " больше всех")
}
else {
    console.log (num3 + " больше всех")
}

//7task

/*const login = 1;
const password = 1;
const entertoLogin = prompt("Введите логин:");
const entertoPassword = prompt("Введите пароль:");
if(login == entertoLogin && password == entertoPassword) {
    console.log ("Доступ разрешен")
}
else {
    console.log("Доступ не разрешен")
}
*/

//task8

let mouth = prompt("введите месяц")
if(mouth == 1){
    console.log("январь")
}
else if(mouth == 2) {
    console.log("февраль")
}
else if(mouth == 3) {
    console.log("март")
}
else if(mouth == 4) {
    console.log("апрель")
}
else if(mouth == 5) {
    console.log("май")
}
else if(mouth == 6) {
    console.log("июнь")
}
else if(mouth == 7) {
    console.log("июль")
}
else if(mouth == 8) {
    console.log("август")
}
else if(mouth == 9) {
    console.log("сентябрь")
}
else if(mouth == 10) {
    console.log("октябрь")
}
else if(mouth == 11) {
    console.log("ноябрь")
}
else if(mouth == 12) {
    console.log("декабрь")
}
else {
    console.log("такого меясца нет как и твоего айкью")
}

//task9

let age = prompt("напишите свой возраст") 
if(age >=0 && age < 12) {
    console.log("детский возраст")
}
else if(age >= 12 && age < 18) {
    console.log("подростковый возраст")
}
else if(age >= 18 && age < 65) {
    console.log("взрослый возраст")
}
else if(age >=65 && age < 150) {
    console.log("на пенсию")
}
else {
    console.log("вранье")
}

//task10
let time = prompt("укажите месяц")
if(time >= 1 && time < 4) {
    alert("зима")
}
else if(time >= 4 && time < 7) {
    alert("весна")
}
else if(time >= 7 && time < 10) {
    alert("лето")
}
else if(time >= 10 && time <= 12) {
    alert("осень")
}
else {
    alert("неккоректный месяц")
}

//medium tasks2
let apples = prompt("количество яблок")
if(apples % 3 === 0) {
    alert("Яблоки можно разделить поровну между тремя детьм")
}
else {
    alert("Яблоки нельзя разделить поровну между тремя детьми")
}

//medium task1
let weight = 1;
const country = 3;

if (weight <= 1) {
    alert("10dollars")
}
else if (weight > 1 && weight <= 5 && country == USA) {
    alert("20dollars")
}
else if(weight > 1 && weight <= 5 && country  ) {
    alert("30dollars")
}
else {
    alert("50dollars")
}

//meedium3
/*let a = 1
let b = 2
let c = 3
if (a + b > c && a + c > b && b + c > a) {
    console.log("может существовать")
}
else {
    console.log("не может существовать")
}*/

//medium4
let a = 3;
let b = 4;
let c = 5;

if ((a + b > c) && (a + c > b) && (b + c > a)) {
if (a === b && b === c) {
console.log("Равносторонний треугольник");
}
else if (a === b || a === c || b === c) {
console.log("Равнобедренный треугольник");
}
else {
console.log("Разносторонний треугольник");
}
}
else {
console.log("Несуществующий треугольник");
}