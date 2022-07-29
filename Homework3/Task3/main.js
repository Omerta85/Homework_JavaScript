// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).



let day = 31;
if (day > 0 && day < 11) {
    console.log('I decade of the month');
} else if (day > 10 && day < 20) {
    console.log('II decade of the month');
} else if (day > 19 && day < 32){
    console.log('III decade of the month');
}