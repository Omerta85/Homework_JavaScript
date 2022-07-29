// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x = +prompt(' enter something');
if (false || !x) {
    document.write("default");
}

// let x = prompt("enter something") || "default";
// document.write(x);

// let x = +prompt('enter something');
// if (!x){
//     x = "default";
//     console.log(x);
// }else{
//     console.log(x);
// }