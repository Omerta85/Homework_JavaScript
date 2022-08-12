// -створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
let number = [21, 22, 23, 24, 25];
console.log(number);
let fruits = ['Яблоко', 'Апельсин', 'Слива', 'Банан', 'Груша'];
console.log(fruits);
let students = [21, 'year', 'old', 15, true];
console.log(students);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

let array = [];
array[0] = 20;
array[1] = 21;
array[2] = 22;
array[3] = 23;
array[4] = 24;
array[5] = 25;
console.log(array);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array7 = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let i = 0;
while (i < array7.length){
    console.log(array7[i]);
    i++;
}
// 2. перебрати його циклом for
for (let number of array) {
    console.log(number);
}
// 3. перебрати циклом while та вивести числа тільки з непарним індексом
let p = 0;
while (p<array.length){
    if (p%2 !== 0){
        console.log(array[p]);
    }
    p++;
}

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0){
        console.log(array[i]);
    }
}
// 5. перебрати циклом while та вивести числа тільки парні значення
k=0;
while (k<array.length){
    if (array[k] % 2 === 0){
        console.log(array[k]);
    }
    k++;
}
// 6. перебрати циклом for та вивести числа тільки парні значення
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
        console.log(array[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0){
        array[i] =  'okten';

    }
}
console.log(array)
// 8. вивести масив в зворотньому порядку.
let arrayBack = [2,17,13,6,22,31,45,66,100,-18];
console.log(arrayBack.reverse());


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
let s = arrayBack.length-1;
while (s >= 0){
    console.log(arrayBack[s]);
    s--;
}
// 2. перебрати його циклом for
for (let i = arrayBack.length - 1; i >= 0; i--) {
    console.log(arrayBack[i]);
}
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
let t = arrayBack.length-1;
while (t >= 0){
    if (t % 2 !==0 ){
        console.log(arrayBack[t]);
    }
    t--;
}
//4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i = arrayBack.length - 1; i >= 0; i--) {
    const arElement = arrayBack[i];
    if (i % 2 !== 0){
        console.log(arElement);
    }
}
//5. перебрати циклом while та вивести числа тільки парні значення
let c =  arrayBack.length-1;
while (c >= 0){
    if (arrayBack[c] % 2 === 0 ){
        console.log(arrayBack[c]);
    }
    c--;
}
//6. перебрати циклом for та вивести числа тільки парні значення
for (let i = arrayBack.length - 1; i >= 0; i--) {
    let arrayBackElement = arrayBack[i];
    if (arrayBackElement % 2 === 0){
        console.log(arrayBackElement);
    }

}
//7. замінити кожне число кратне 3 на слово "okten"
for (let i = arrayBack.length - 1; i >= 0; i--) {
    let arrayBackElement = arrayBack[i];
    if (arrayBackElement % 3 === 0 ){
        arrayBack[i] = 'okten';
    }
}
console.log(arrayBack);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let array1 = [105, 104, 106, 107, 110, 112, 113, 154, 468, 123];
for (let number1 of array1) {console.log(number1);}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let array22 = ['Aaron','Badger','Ariadne','Charlotte','Daphne','Elias','Fannie','Gideon','Hank','Jocelyn'];
for (let string of array22) {console.log(string);}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array2 = ['Vadym', 26, 'years', 'old', 'you', 'smoke', '?', false, 20, 22];
for (let array2Element of array2) {console.log(array2Element);}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array3 = ['John', 'age', 30, 'likes birds', true, 20, {}, [], 15, false];
for (let i = 0; i < array3.length; i++) {
    if (typeof array3[i] === 'boolean'){
        console.log( array3[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

let array4 = ['John', 'age', 30, 'likes birds', true, 20, {}, [], 15, false];
for (let i = 0; i < array4.length; i++) {
    if (typeof array4[i] === 'number'){
        console.log(array4[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

let array5 = ['John', 'age', 30, 'likes birds', true, 20, {}, [], 15, false];

for (let i = 0; i < array5.length; i++) {
    if (typeof array5[i] === 'string'){
        console.log(array5[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення
// до конкретних індексів.Вивести в консоль всі його елементи в циклі.

let array6 = [];
array6[0] = 'Zhanna';
array6[1] = 32 ;
array6[2] = true;
array6[3] = 'Antonina';
array6[4] = 'Margaryta';
array6[5] = false ;
array6[6] = 25;
array6[7] = 'Galagan';
array6[8] = 50;
array6[9] = true;

for (let array6Element of array6) {
    console.log(array6Element);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<h2>номер кроку: ${i}  </h2>`);
    document.write('<h2>поточний крок циклу : ' + i + ' </h2>');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i + ' ');
}
document.write( '<br/>');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(i + ' ');

}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log( i);
        document.write( i + " ");
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        document.write( i + " ");
    }
}