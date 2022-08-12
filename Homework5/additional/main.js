// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let number = (x, y, z) => {
    if (x < y && x < z) {
        console.log(x);
    } else if (y < x && y < z) {
        console.log(y);
    } else if (z < x && z < y) {
        console.log(z);
    } else {
        console.log('Ведіть різні числа');
    }
}

number(5, 3, 4);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let number1 = (x, y, z) => {
    if (x > y && x > z) {
        console.log(x);
    } else if (y > x && y > z) {
        console.log(y);
    } else if (z > x && z > y) {
        console.log(z);
    } else {
        console.log('Ведіть різні числа');
    }
}
number1(5, 3, 4);
// - створити функцію яка повертає найбільше число з масиву
    let array = [5,13,8,22,6];
let maxNumberArray = (arr) =>  Math.max.apply(null, arr);
console.log(maxNumberArray(array));
// - створити функцію яка повертає найменьше число з масиву
let minNumberArray = (arr) =>  Math.min.apply(null, arr);
console.log(minNumberArray(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let summArrElement = (arr) =>{
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];
        result += arrElement;
    }
    console.log(result);
    return result;
}
summArrElement(array);
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
let showNum = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
showNum(35);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let show = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    } else if (a === b) {
        console.log(`a = ${a} b = ${b}`)
    } else {
        console.log("Error");
    }

}
show(20,0);
show(0,20);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let foo = [9, 8, 0, 4]
let swap = (array, index) => {
    let tmp = array [index];
    array[index] = array[index + 1]
    array[index + 1] = tmp
    return foo
}
console.log(swap(foo, 0));
console.log(swap(foo, 1));
console.log(swap(foo, 2));
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let zeroEnd = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === 0) {
            array.splice(i,1);
            array.push(0);
        }
    }
    console.log(array);
}
zeroEnd([1,0,6,0,3]);
zeroEnd( [0,1,2,3,4]);
zeroEnd( [0,0,1,0] );