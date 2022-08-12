// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRectangle = (a, b) => a * b;
console.log(areaRectangle (5, 6));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaCircles = (r) => 3.14 * r **2;
console.log(areaCircles (5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaCylinder = (r, h) => 2 * 3.14 * r * (r + h);
console.log(areaCylinder (5, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = ['vasya', 'petya', 'kolya', 'olya', 'max', 'anya', 'oleg', 'andrey', 'masha', 'olya', 'max'], i;
function arrayPrinter(array) {
    for (const item of array) {
        console.log(item);
    }
}
arrayPrinter(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(p) {
document.write(`<p>${p}</p>`);
}
paragraph('hello');
paragraph('okten');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function unorderedList(li) {
    document.write(`<ul>
<li>${li}</li>
<li>${li}</li>
<li>${li}</li>
</ul>`)
}
unorderedList("list");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listFor(li,c) {
    document.write(`<ul>`);
    for (i = 0; i < c; i++) {
        let cElement;
        cElement = c[i];
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
}
listFor('List', 10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [1, 2, 'string', true, false];
function arrList(a) {
    document.write('<ol>')
    for (let aElement of a) {
        document.write(`<li>${aElement}</li>`);
    }
    document.write('</ol>')
}
arrList(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

function arrObjectBlock(z) {
    for (let zElement of z) {
        let z;
        z = zElement.id;
        document.write(`<div>${zElement.id} ${zElement.name} ${zElement.age} </div> `)
    }
}
console.log(users);
arrObjectBlock(users);
// - створити функцію яка повертає найменьше число з масиву
let arr1 = [5,13,8,22,6];
function minNumberArray(arr) {
    return Math.min.apply(null, arr) ;
}
console.log(minNumberArray(arr1));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function summArrElement(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];
        result += arrElement;
    }
    console.log(result);
    return result;
}

summArrElement(arr1);