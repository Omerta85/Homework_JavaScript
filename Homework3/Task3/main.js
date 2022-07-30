// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).



let day = +prompt(" what  is  number?")
if (day > 0 && day < 11) {
    document.write('I decade of the month');
} else if (day > 10 && day < 20) {
    document.write('II decade of the month');
} else if (day > 19 && day < 32){
    document.write('III decade of the month');
}else {
    document.write("<h2>Error</h2>");
}