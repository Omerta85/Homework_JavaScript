// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3,
// то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    document.write('великий масив');
}else {
    document.write('маленький масив');
}


//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше).
//     Перевірити, чи знаходиться перше число між двома іншими.

let x = +prompt('x?');
let y = +prompt('y?');
let z = +prompt('z?');
if (x > y && x < z || x < y && x > z) {
    document.write(x);
} else if (y > x && y < z || y < x && y > z) {
    document.write(y);
} else if ((z > x && z < y || z < x && z > y)) {
    document.write(z);
}else {
    document.write(' What you want?');
}



// - Перепишіть конструкцію if з використанням умовного оператора '?':

let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}
let a = +prompt('a?');
let b = +prompt('b?');
let result = a + b > 4 ? 'Багато' : 'Мало';
document.write(result);


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//

let x1 = +prompt('x1?');
let message = (x1 < 0) ? 'негативним' :
    (x1 > 0) ? 'позитивним' : 'нулем';
document.write(message);


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

 let test = confirm('do some?');
let x2;
if (test) {
    x2 = "Вірно";
} else {
   x2 = "Неправильно";
}
document.write(x2);
let x2 = test ? "Вірно" : "Неправильно";
document.write(x2);

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!


let x3 = prompt('„Яка «офіційна» назва JavaScript?“');
if ( x3 === 'ECMAScript' ) {
    document.write('Правильно!');
} else {
    document.write('Не знаєте? ECMAScript!');
}


//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let day = +prompt(" what  is  number?")
if (day > 0 && day < 21) {
    console.log('I підїзд');
} else if (day > 21 && day < 49) {
    console.log('II підїзд');
} else if (day >48 && day < 91){
    console.log('III підїзд');
}else {
    document.write("<h2>Error</h2>");


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО

let x4 = +prompt('Enter number');
if ( x4 === 10 ) {
    document.write('Вірно');
} else {
    document.write('Невірно');
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let day1 = +prompt(" чи ми йдемо сьогодні в OKTEN на навчання?")
if (day1 > 9 && day1 < 23) {
    document.write('йдемо ВЧИТИСЯ');
}else {
    document.write("вчимося ОНЛАЙН");
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І взалежності від введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д )
// і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let day2 = +prompt(" what  is  number?")
switch (day2) {
    case 1:
        document.write('AVTO');
        break;
    case 2:
        document.write('MOTO');
        break;
    case 3:
        document.write('Phone');
        break;
    case 4:
        document.write('TV');
        break;
    case 5:
        document.write('Surprise');
        break;
    default:
        document.write("<h2>What do you want?</h2>");
}