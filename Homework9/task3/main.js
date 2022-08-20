// - створити блок,
let block = document.createElement('div');
// - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.background = 'blue';
block.style.color = 'red';
block.style.fontSize = '30px';
// - додати цей блок в body.
document.body.append(block);
// - клонувати його повністю, та додати клон в body.
let cloneBlock = block.cloneNode(true);
document.body.appendChild(cloneBlock);