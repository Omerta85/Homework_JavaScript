// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
// b. заповнити його 50 непарними числами за допомоги циклу.
let array = [];
let array2 = [];
for (let i =1; i <= 50; i++) {
    if (i % 2 === 0){
        array.push(i);
    } else if (i % 2 !== 0){
        array2.push(i);
    }
}
console.log(array);
console.log(array2);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let array3 =[];
for (let i = 0; i < 20; i++) {
    array3.push(Math.round(Math.random()*20));
}
console.log(array3);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let array4 = [];
for (let i = 0; i < 20; i++) {
    array4.push(Math.round(Math.random() * (732 - 8) + 8));
}
console.log(array4);


// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < array4.length; i += 3) {
    const array4Element = array4[i];
    console.log(array4Element);

}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < array4.length; i+=3) {
    let array4Element = array4[i];
    if (array4Element % 2 === 0){
        console.log(array4Element);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArray = [];
for (let i = 2; i <array4.length ; i+=3) {
    if (array4[i] % 2 === 0 ){
        console.log(array4[i]);
        newArray.push(array4[i]);
    }
}
console.log(newArray);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let array5 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i = 0; i<array5.length; i++) {
    if (array5[i] % 2 === 0 ){
        console.log(array5[i - 1]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
let arrayPrice = [100,250,50,168,120,345,188];
let price = 0;
for (let number of arrayPrice) {
    price += number;
}
console.log(price);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let newArrayRandom = [];
let newArrayRandom2 = [];
for (let i = 0; i < 20; i++) {
    newArrayRandom.push(Math.round(Math.random()*20));
}
console.log(newArrayRandom);
for (let newArrayRandom2Element of newArrayRandom) {
    newArrayRandom2.push(newArrayRandom2Element * 5);
}
console.log(newArrayRandom2);
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
let anyArray = [true, 22, 50, 'anyArray', false, 20, 65, 70];
let newAnyArray = [];
for (let anyArrayElement of anyArray) {
    if (typeof anyArrayElement === 'number'){
        newAnyArray.push(anyArrayElement);
    }
}
console.log(newAnyArray);
// - Дано 2 масиви з рівною кількістю об'єктів. Масиви:
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let newArrayId = [];
for (let users of usersWithId) {
    for (let cities of citiesWithId) {
        if (users.id === cities.user_id) {
            users.address = cities;
            newArrayId.push(users);
        }
    }
}
// newArrayId = usersWithId; - якщо ''push'' без то так
console.log(newArrayId);

//   Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let array6 = [23,14,51,32,12,693,512,945,134,621];
for (let number of array6) {
    if (number % 2 === 0){
        console.log(number);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let array7 = [];
for (let number of array6) {
    array7.push(number);
}
console.log(array7);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let array8 =[ 'a', 'b', 'c'];
let wordFor = '';
for (let i = 0; i < array8.length; i++) {
    let array8Element = array8[i];
    wordFor +=array8Element
}
console.log(wordFor)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let wordWhile = '';
let i = 0;
while (i < array8.length){
    wordWhile += array8[i];
    i++;
}
console.log(wordWhile);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let wordForOf = '';
for (let array7Element of array8) {
    wordForOf += array7Element;
}
console.log(wordForOf);