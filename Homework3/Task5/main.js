// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let x = +prompt('x?');
let y = +prompt('y?');
if (x > y) {
    document.write(x);
}else if (x < y) {
    document.write(y);
}else {
    document.write('?????????');
}

