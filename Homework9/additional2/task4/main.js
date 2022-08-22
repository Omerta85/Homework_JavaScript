// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// onclick=(e)=>{
//     console.log("tag name: "+e.target.tagName);
//     console.log("Class list: "+e.target.classList);
//     console.log("id: "+e.target.id);
//     console.log("Width x Height: "+e.target.scrollWidth+" x "+e.target.scrollHeight);
// }



// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let popup = document.createElement("div");
// onclick=(e)=>{
//     popup.innerHTML=`tag name: ${e.target.tagName}</br>
//     Class list: ${e.target.classList}</br>
//     id: ${e.target.id}</br>
//     Width x Height: ${e.target.scrollWidth+" x "+e.target.scrollHeight}</br>`;
//     document.body.append(popup);
// }