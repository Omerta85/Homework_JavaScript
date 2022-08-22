// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let chbx1 = document.createElement("input");
let label1 = document.createElement("label");
chbx1.type = "checkbox";
chbx1.id="status";
label1.innerText="status";
let chbx2 = document.createElement("input");
let label2 = document.createElement("label");
chbx2.type = "checkbox";
chbx2.name="age"
label2.innerText="age";
let chbx3 = document.createElement("input");
let label3 = document.createElement("label");
chbx3.type = "checkbox";
chbx3.name="city";
label3.innerText="city";
let btn = document.createElement("button");
btn.innerText="filter";
document.body.append(chbx1,label1,chbx2,label2,chbx3,label3,btn);


let print=(arr)=>{
    let div = document.createElement("div");
    div.id="print";
    for (let i of arr) {
        div.innerHTML += (`id:${i.id} ,name: ${i.name}, age: ${i.age}, status: ${i.status}, address: city: ${i.address.city}, street: ${i.address.street}, number: ${i.address.number}<br>`);
    }
    div.innerHTML+="<hr>"
    document.body.appendChild(div);
}

btn.onclick=()=>{
    if(chbx1.checked && !chbx2.checked && !chbx3.checked){
        print(usersWithAddress.filter(user=>!user.status));
    }else if(!chbx1.checked && chbx2.checked && !chbx3.checked){
        print(usersWithAddress.filter(user=>user.age>=29));
    }else if(!chbx1.checked && !chbx2.checked && chbx3.checked){
        print(usersWithAddress.filter(user=>user.address.city==="Kyiv"));
    }else if(chbx1.checked && chbx2.checked && !chbx3.checked){
        print(usersWithAddress.filter(user=>!user.status&&user.age>=29));
    }else if(chbx1.checked && !chbx2.checked && chbx3.checked){
        print(usersWithAddress.filter(user=>!user.status&&user.address.city==="Kyiv"));
    }else if(!chbx1.checked && chbx2.checked && chbx3.checked){
        print(usersWithAddress.filter(user=>user.age>=29&&user.address.city==="Kyiv"));
    }else if(chbx1.checked && chbx2.checked && chbx3.checked){
        print(usersWithAddress.filter(user=>!user.status&&user.age>=29&&user.address.city==="Kyiv"));
    }

}