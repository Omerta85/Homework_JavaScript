// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surName , email, phone) {
    this.id = id;
    this.name = name;
    this.surName = surName;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let newArray = [];
let user5 = new User(5,"Leanne", "Graham", "Sincere@april.biz", "1-770-736-8031 x56442");
let user6 = new User(6, "Ervin", "Howell", "Shanna@melissa.tv", "010-692-6593 x09125");
let user10 = new User(10, "Clementine", "Bauch", "Nathan@yesenia.net", "1-463-123-4447");
let user8 = new User(8, "Patricia", "Lebsack", "Julianne.OConner@kory.org","493-170-9623 x156");
let user1 = new User(1,"Chelsey", "Dietrich","Lucio_Hettinger@annie.ca","(254)954-1289");
let user2 = new User(2, "Mrs. Dennis", "Schulist", "Karley_Dach@jasper.info", "1-477-935-8478 x6430");
let user7 = new User(7,"Kurtis", "Weissnat", "Telly.Hoeger@billy.biz","210.067.6132");
let user4 = new User(4, "Nicholas", "Runolfsdottir V", "Sherwood@rosamond.me","586.493.6943 x140");
let user9 = new User(9, "Glenna", "Reichert", "Chaim_McDermott@dana.io","(775)976-6794 x41206");
let user3 = new User(3, "Clementina", "DuBuque","Rey.Padberg@karina.biz","024-648-3804");
newArray.push(user1, user2,user3, user4, user5, user6, user7, user8, user9, user10);
console.log(newArray);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(newArray.filter(a => a.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(newArray.sort((u1, u2) =>  u1.id - u2.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let newAnyArray1 = [];
let client1 = new Client(1,'Alicia','Hill', 'hill@gmail','0966147156',['milk','apple','juice']);
let client2 = new Client(2,'Ariadne','Henderson','Henderson@gmail','0966144350', ['bread','eggs','flour','sugar','bananas','chips']);
let client3 = new Client(3,'Chris','Hernandez','Hernandez@gmail','0966144352', ['sausages','sugar','water','bananas']);
let client4 = new Client(4,'Cassius','James','James@gmail','0966144354', ['tea','sausages','beer','chips']);
let client5 = new Client(5,'Raymond','James','Raymond@gmail','0966144354', ['tea','sausages','beer','chips']);
let client6 = new Client(6,'Gareth','Ramirez','Ramirez@gmail','0966144384', ['wine','sugar','chips']);
let client7 = new Client(7,'Isaac','Labert','Labert@gmail','0966144385', ['beer','chips']);
let client8 = new Client(8,'Jade','Smith','Smith@gmail','0966144387', ['water','flour','eggs','bananas']);
let client9 = new Client(9,'Paulina','Webb','Webb@gmail','0966141527', ['salt','chips','beer','sausages','bananas']);
let client10 = new Client(10,'Phebe','Young','Young@gmail','0966141529', ['wine','cheese']);
newAnyArray1.push( client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(newAnyArray1);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(newAnyArray1.sort((a,b) => a.order.length - b.order.length));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineVol){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVol = engineVol;
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    this.drive();
    this.info = () => console.log(`
        Модель - ${this.model},
        Виробник - ${this.manufacturer},
        Рік випуску - ${this.year},
        Виробник - ${this.maxSpeed},
        Обєм двигуна - ${this.engineVol},
        Водій - ${this.driver}`);
    this.info();
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
    console.log(this.increaseMaxSpeed(30));
    this.changeYear = (newValue) => this.year = newValue;
    console.log(this.changeYear(2022));
    this.addDriver = (driver) => this.driver = driver;
    this.addDriver({name: 'Sofia', age: 20, experience: 3});
    console.log(this.driver);
}
console.log(new Car('SSC Ultimate Aero TT', 'Shelby Super Cars', 2009, 421, 6.4));

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car1 {
    constructor(model, manufacturer, year, maxSpeed, engineVol) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVol = engineVol;
        this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        this.drive();
        this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
        console.log(this.increaseMaxSpeed(30));
        this.changeYear = (newValue) => this.year = newValue;
        console.log(this.changeYear(2022));
        this.addDriver = (driver) => this.driver = driver;
        this.addDriver({name: 'Olga', status: true, category: 'B'});
        console.log(this.driver);
    }
}
 console.log(new Car1('Bugatti Veyron Super Sport','Bugatti', 2010,431,'8.0' ));

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
// function Cinderella(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
// Створити масив з 10 попелюшок.
let cinderella1 = new Cinderella('Zoe',20,38);
new Cinderella('Isabel',18,36);
let cinderella3 = new Cinderella('Jacqueline',25,40);
let cinderella4 = new Cinderella('Lauren',26,41);
let cinderella5 = new Cinderella('Destiny',27,36);
let cinderella6 = new Cinderella('Savannah',20,40);
let cinderella7 = new Cinderella('Taylor',30,38);
let cinderella8 = new Cinderella('Amelia',32,37);
let cinderella9 = new Cinderella('Susan',33,39);
let cinderella10 = new Cinderella('Caroline',19,38);
let cinderellas = [cinderella1,cinderella1,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10,];
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let prince = new Prince('Harry', 37, 39)
console.log(prince);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let cinderella of cinderellas) {
    if (cinderella.size === prince.size) {
        console.log(`wedding with ${cinderella.name}`)}
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let princess = cinderellas.find(item => item.size === prince.size);
console.log(`wedding with ${princess.name}`);