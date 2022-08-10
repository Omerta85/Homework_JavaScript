// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
console.log(a.length);
let b = 'lorem ipsum';
console.log(b.length);
let c = 'javascript is cool';
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let  a1 = 'HELLO WORLD';
console.log(a1.toLowerCase());
let  b1 = 'LOREM IPSUM';
console.log(b1.toLowerCase());
let  c1 = 'JAVASCRIPT IS COOL';
console.log(c1.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.substring(1, 13))
let strClean = str.trim()
console.log(strClean);
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';
let stringToArray = str =>{
    let newArray = str.split(' ');
    console.log(newArray);
};
stringToArray(str2);
let str1 = 'Ревуть воли як ясла повні';
console.log(str1.split(' '));
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrayMap =[10,8,-7,55,987,-1011,0,1050,0];
let map = arrayMap.map((array)=>{
    return array + '';
});
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
let sortNums = (arr, direction) => {
    let minToMax;
    let maxToMin;
    if (direction === 'ascending'){
        minToMax = arr.sort((a, b) => a - b);
        return minToMax;
    }else if (direction === 'descending'){
        maxToMin = arr.sort((a, b) => b - a);
        return maxToMin;
    }else {
        return arr;
    }
}
// sortNums(nums,'ascending') // [3,11,21]
console.log(sortNums(nums, 'descending'));
// sortNums(nums,'descending') // [21,11,3]
console.log(sortNums(nums, 'ascending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = coursesAndDurationArray.sort((u1, u2) => {
    return u1.monthDuration - u2.monthDuration;
});
console.log(sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter( value => value.monthDuration > 5);
console.log(filter);

//
// описати колоду карт


let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},
];
// - знайти піковий туз
let filter0 = cards.filter(value => value.value === 'Ace' && value.cardSuit === 'clubs');
console.log(filter0);
// - всі шістки
let filter1 = cards.filter(value => value.value === 6);
console.log(filter1);
// - всі червоні карти
let filter2 = cards.filter(value => value.color === 'red');
console.log(filter2 );
// - всі буби
let filter3 = cards.filter(value => value.cardSuit === 'diamonds');
console.log(filter3);
// - всі трефи від 9 та більше
let filter4 = cards.filter(value => value.value > 8 + '' && value.cardSuit === 'spades');
console.log(filter4);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce(function (accumulator, card) {
        if (card.cardSuit === 'spades') {
            accumulator.spades.push(card);
        }
        if (card.cardSuit === 'diamonds') {
            accumulator.diamonds.push(card);
        }
        if (card.cardSuit === 'hearts') {
            accumulator.hearts.push(card);
        }
        if (card.cardSuit === 'clubs') {
            accumulator.clubs.push(card);
        }
        return accumulator;
    }, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduce);