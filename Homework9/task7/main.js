// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let txt = document.getElementById("text");
let btn = document.getElementById("btn");
btn.onclick=()=>{
    txt.hidden = true;
}
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById("btn2").onclick=()=>{
    let age = document.getElementById("age").value;
    if(+age>=18){
        alert("Welcome");
    }else if(+age<18){
        alert("You must leave this page");
    }else if(!age){
        alert("enter your age");
    }
}
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let inputTr = document.createElement("input");
inputTr.name="tr";
let inputTd = document.createElement("input");
inputTd.name = "td";
let content = document.createElement("input");
content.name = "content";
let btn1 = document.createElement("button");
btn1.innerText = "create table";
document.body.append(inputTr,inputTd,content,btn1);
btn1.onclick=()=> {
    let table = document.createElement("table");
    table.style.border = "2px solid black";
    for (let i = 0; i < +inputTr.value; i++) {
        let tr = document.createElement("tr");
        tr.style.border = "1px solid black";
        for (let j = 0; j < +inputTd.value; j++) {
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.innerText = content.value;
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
    document.body.appendChild(table);
}