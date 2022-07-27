//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1 = {
    title: 'The Godfather',
    pageCount: 480,
    genre: 'Crime novel',
    authors: [
      {name:'Mario Puzo',
       age: 78}
        ]
};
console.log(book1);
let book2 = {
    title: 'Turkish gambit',
    pageCount: 211,
    genre: 'Historical detective',
    authors: [
        {name: 'Boris Akunin',
         age: 66}
    ]
};
console.log(book2);
let book3 = {
    title: 'Kisya',
    pageCount: 250,
    genre: 'comedy',
    authors: [
        {name: 'Vladimir Kunin',
         age: 83}
    ]
};
console.log(book3);