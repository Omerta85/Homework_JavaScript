// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let item of coursesAndDurationArray) {
    let div = document.createElement("div");
    div.innerHTML=`${item.title}  - duration - ${item.monthDuration} month`
    document.body.appendChild(div);
}

//  - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу. Завдання робити через цикли.

for (let arrayElement of coursesAndDurationArray2) {
    let block = document.createElement('div');
    block.classList.add('item');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.classList.add('heading');
    h2.innerText = arrayElement.title;
    p.innerText = arrayElement.monthDuration;
    p.classList.add('description');
    block.append(h2, p);
    document.body.append(block);
}
