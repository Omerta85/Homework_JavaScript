//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arrays = [1, 3.6, 'number', 'type of', 'name', true, false, '135', 280, 'age'];
console.log(arrays);
console.log(arrays[0]);
console.log(arrays[1]);
console.log(arrays[2]);
console.log(arrays[3]);
console.log(arrays[4]);
console.log(arrays[5]);
console.log(arrays[6]);
console.log(arrays[7]);
console.log(arrays[8]);
console.log(arrays[9]);
for (let i = 0; i < arrays.length; i++) {
    console.log(`${arrays[i]}`)
};
function arrayLoop(arrays) {
    for (const array of arrays) {
        console.log(array);
    }
}
function arrays1(...a) {
    console.log(a);
}
arrays1(1, 3.6, 'number', 'type of', 'name', true, false, '135', 280, 'age');