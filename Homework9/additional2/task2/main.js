// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName("menu")[0];
let title = document.getElementsByClassName("title")[0];
let ul = document.getElementById("items");
ul.style.display="block";
title.onclick=()=>{
    if(ul.style.display==="block"){
        ul.style.display="none";
    }else {
        ul.style.display="block";
    }

}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
document.getElementById("btn1").onclick=function () {
    this.hidden = true;
}