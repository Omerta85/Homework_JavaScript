//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'David', username: 'Ace', password: 67959574},
    {name: 'Misha', username: 'Cobra', password: 23011266},
    {name: 'Stepan', username: 'Baby', password: 19920965},
    {name: 'Myroslav', username: 'Omerta', password: 73682794},
    {name: 'Volodymyr', username: 'Bean', password: 5902118},
    {name: 'Andriy', username: 'Buddy', password: 26130104},
    {name: 'Mariya', username: 'Amor', password: 8533554},
    {name: 'Alla', username: 'Champ', password: 74830877},
    {name: 'Nina', username: 'Duke', password: 56519559},
    {name: 'Elvira', username: 'Mother', password: 16487206}
]
console.log(users);
console.table(users,['password']);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].password}`);
}



