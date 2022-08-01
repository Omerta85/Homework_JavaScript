// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число  (в першу, другу, третю или четверту частину години).

let time = +prompt("What quarter?");
if (time >= 0 && time < 16) {
    document.write('I part of the day');
} else if (time > 15 && time < 31) {
    document.write('II part of the day');
} else if (time > 30 && time < 46){
    document.write('III part of the day');
} else if (time > 45 && time <= 59) {
    document.write('IV part of the day');
}else {
    document.write("<h2>Error</h2>");
}