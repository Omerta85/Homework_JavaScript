// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число  (в першу, другу, третю или четверту частину години).

let time = 59;
if (time >= 0 && time < 15) {
    document.write('I part of the day');
} else if (time > 14 && time < 30) {
    document.write('II part of the day');
} else if (time > 29 && time < 45){
    document.write('III part of the day');
} else if (time > 44 && time <= 59) {
    document.write('IV part of the day');
}else {
    document.write("<h2>Error</h2>");
}