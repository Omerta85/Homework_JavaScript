// - Є масив:
let arr = ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu Завдання робити через цикли.
let menu = document.getElementsByClassName('menu')[0];
for (let string of arr) {
    let li = document.createElement('li');
    li.append(string);
    menu.append(li);
}