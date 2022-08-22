// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let arr = ["fuck","dick","shit","bastard"];
let divTask = document.createElement("div");
let inputCheck = document.createElement("input");
let check = document.createElement("button");
divTask.append(inputCheck,check);
document.body.appendChild(divTask);
check.innerText="check";
check.onclick=()=>{
    for (let item of arr) {
        if(inputCheck.value.includes(item)){
            alert("this is bad word in sentence");
        }
    }
}