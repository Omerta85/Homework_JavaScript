let usersDiv = document.createElement('div');
usersDiv.classList.add('main');
document.body.appendChild(usersDiv);

let userContainer = document.getElementsByClassName('main')[0];

fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json()).then(users => {
    for (let user of users) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML= `<h5>${user.id} ${user.name}</h5>`

        let btn = document.createElement('button');
        let anchor = document.createElement('a');
        anchor.innerText = 'user-details';
        anchor.href = `./user-details.html?data=${JSON.stringify(user)}`


        userDiv.appendChild(btn);
        usersDiv.appendChild(userDiv);
        btn.appendChild(anchor)
    }
})
