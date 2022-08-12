// Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!console.log(5 < 6);
console.log(5 > 6);
console.log(5 >= 6);
console.log(5 === 6);
console.log(10 <= 10);
console.log(10 === 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 !== 10);
console.log(123 !== '123');
console.log(typeof 123 === typeof '123');
// Подивившись на наступні вірази написати який буде вивід в консоль
// console.log(132 > 100 && 45 < 12 );   false
// console.log(34 > 33 && 23 < 90 );     true
// console.log(99 > 100 && 45 > 12 );    false
// console.log(132 > 100 || 45 < 12 );   true
// console.log(111 > 11 || 45 < 111 );   true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );    true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );     true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );  false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));     true
// console.log(!!'-1');  true
// console.log(!!-1);    true
// console.log(!!'0');   true
// console.log(!!'null'); true
// console.log(!!'undefined'); true
// console.log(!!(3/'owu'));  false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false
// 5.Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s);
let areaRectangle = (a, b) => a * b;
console.log(areaRectangle (23, 10));

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = 3.14 * (dC / 2) **2 * heightC;
console.log(v);
let areaСylinder = (r, h) => 6.28 * r * (r + h);
console.log(areaСylinder (10, 4));

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = (n **2 + m**2);
console.log(Math.sqrt(k));
let areaЕriangle = (r, h) => { let k = n **2 + m**2; return Math.sqrt(k);}
console.log(areaЕriangle (10, 4));

