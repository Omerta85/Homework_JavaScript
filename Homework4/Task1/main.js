// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for ( let i = 0; i < 10; i++) {
    document.write(`<div>okten</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for ( let i = 0; i < 10; i++) {
    document.write(`<div>okten${i}okten</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<div><h1>okten</h1></div>`)
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i1 = 0;
while (i1 < 20) {
    document.write(`<div><h1>okten${i1}okten</h1></div>`)
    i1++;
}