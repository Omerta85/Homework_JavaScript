// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число  (в першу, другу, третю или четверту частину години).

let time = 59;
if (time >= 0 && time < 15) {
    console.log('I part of the day');
} else if (time > 14 && time < 30) {
    console.log('II part of the day');
} else if (time > 29 && time < 45){
    console.log('III part of the day');
} else if (time > 44 && time <= 59) {
    console.log('IV part of the day');
}else {
    document.write("<h2>Error</h2>");
}