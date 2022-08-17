// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User {
    constructor(id,name, username, email,street,suite,city,zipcode,lat, lng, phone, website,nameCompany, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng,
            }
        };
        this._phone = phone;
        this._website = website;
        this.company = {
            nameCompany: nameCompany,
            catchPhrase: catchPhrase,
            bs: bs
        }
    }
}
console.log(new User(1,'vasia','validol','validol@gmail.com',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
    '-37.3159', '81.1496', '1-770-736-8031 x56442','hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
class Teg {
    constructor(titleOfTag, action, titleOfAttrOne,actionOfAttrOne, titleOfAttrTwo,actionOfAttrTwo,titleOfAttrThree,actionOfAttrThree) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attributes = [new Attributes(titleOfAttrOne, actionOfAttrOne),
            new Attributes(titleOfAttrTwo, actionOfAttrTwo)]
    }
}
class Attributes {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}
let a = new Teg('<a>',`Тег < a > є одним з важливих елементів HTML і призначений
для створення посилань. Залежно від присутності атрибутів name або href тег < a > встановлює посилання або якір.
Якорем називається закладка всередині сторінки, яку можна вказати як мету посилання.
Коли ви використовуєте посилання, що вказує на якір, можна перейти до закладки всередині веб-сторінки.`,
    'name', 'Встановлює назву якоря всередині документа.',
    'href','Визначає адресу документа, на якbq слід перейти.')
console.log(a);
let div = new Teg('<div>',`Елемент < div > є блоковим елементом і призначений для виділення
фрагмента документа, щоб змінити вигляд вмісту.
Як правило, вигляд блоку керується за допомогою стилів.
Ви можете виділити стиль у зовнішню таблицю стилів, щоб не описувати стиль тега кожного разу.
а для теґу додати атрибут class або id з назвою селектора.`,
    'align', 'Визначає вирівнювання вмісту теґу < div >.',
    'title','Додає спливаючу підказку до вмісту.')
console.log(div);
let h1 = new Teg('<h1>',`HTML пропонує шість заголовків різного рівня,
які показують відносну важливість секції, розташованої після заголовка.
Так, тег < h1 > являє собою найбільш важливий заголовок першого рівня,
а тег < h6 > є для позначення заголовка шостого рівня і є найменш значним.
За замовчуванням, заголовок першого рівня відображається найбільшим шрифтом жирного накреслення.
заголовки наступного рівня за розміром менші.
Теги < h1 >,..., < h6 > належать до блокових елементів, вони завжди починаються з нового рядка,
а потім інші елементи відображаються на наступному рядку.
Крім того, перед заголовком і після нього додається порожній простір.`,
    'align', 'Визначає вирівнювання заголовка.',
    'class','Визначає назву класу, яка дозволяє звязати тег зі стилевою оформою.')
console.log(h1);
let span = new Teg('<span>',`Тег < span > призначено для визначення рядкових елементів документа.
На відміну від блокових елементів, таких як < table >, < p > або < div >, використовуючи тег < span > можна виділити частину
інформації всередині інших тегів і встановити для неї свій стиль.
Наприклад, ви можете змінити колір і розмір першої літери всередині абзацу (теґу < p >).
якщо додати початковий і кінцевий тег < span > і визначити стиль тексту.
Ви можете виділити стиль у зовнішню таблицю стилів, щоб не описувати стиль тега кожного разу.
а для теґу додати атрибут class або id з назвою селектора.`,
    'accesskey', 'Дозволяє отримати доступ до елемента за допомогою вказаної комбінації клавіш.',
    'class','Визначає назву класу, яка дозволяє звязати тег зі стилевою оформою.')
console.log(span);
let input = new Teg('<input>',`Тег < input > є одним з різнобічних елементів форми і дозволяє
створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем.
Головним чином < input > призначено для створення текстових полів, різних кнопок, перемикачів та параметрів.
Хоча елемент < input > не потрібно розміщувати всередину контейнера < form >, що визначає форму,
але якщо введені користувачем дані повинні бути відправлені на сервер, де їх обробляє серверна програма,
вказувати < form > обов'язково. Те ж саме і в разі обробки даних за допомогою клієнтських додатків,
наприклад, скриптів мовою JavaScript.`,
    'accept', 'Встановлює фільтр на типи файлів, які ви можете надіслати за допомогою поля завантаження файлів.',
    'max','Верхнє значення для введення числа або дати.')
console.log(input);
let form = new Teg('<form>',`Тег < form > встановлює форму на веб-сторінці.
Форма призначена для обміну даними між користувачем і сервером.
Область застосування форм не обмежена відправкою даних на сервер,
за допомогою клієнтських скриптів можна отримати доступ до будь-якого елемента форми,
змінювати його і застосовувати на власний розсуд.`,
    'action', 'URI-адреса програми, яка обробляє інформацію передану через форму. \' +\n' +
    '«Це значення може бути переписано за допомогою атрибута oneaction на < button > або < input > елементі».',
    'name',' Назва форми.')
console.log(form);
let option = new Teg('<option>',`Тег < option > визначає окремі пункти списку,
створюваного за допомогою контейнера < select >. Ширина списку визначається найширшим текстом,
у теґі < option >, а також можна змінювати за допомогою стилів.
Якщо планується надіслати дані списку на сервер, потрібно розмістити елемент < select > всередину форми.
Це також необхідно, коли до даних списку йде звернення через скрипти.`,
    'disabled', 'Заблокувати елемент списку.',
    'value','Значення пункту списку, яке буде надіслано на сервер або прочитано за допомогою скриптів.')
console.log(option);
let select = new Teg('<select>',`Тег < select > створює елемент інтерфейсу в
вигляд списку, що розкривається, а також список з одним або множиною вибором, як показано далі.
Кінцевий вигляд залежить від використання атрибута size тегу < select >, який встановлює висоту списку.
Ширина списку визначається найширшим текстом, вказаним у теґі < option >,
а також може змінюватися за допомогою стилів. Кожен пункт створюється за допомогою теґу < option >,
який повинен бути вкладений в контейнер < select >. Якщо планується відправляти дані списку на сервер,
ви можете розмістити елемент < select > всередину форми.
Це також необхідно, коли до даних списку йде звернення через скрипти.`,
    'form', 'Зв\'язує список з формою.',
    'size','Кількість показаних рядків списку.')
console.log(select);