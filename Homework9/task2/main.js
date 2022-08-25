// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
for (let coursesArrayElement of coursesArray) {
    let block = document.createElement('div');
    block.style.border = '2px solid red';

    let titleBlock = document.createElement('div');
    titleBlock.innerText = coursesArrayElement.title;
    titleBlock.style.border = '2px solid blue';

    let blockWrap = document.createElement('div');
    blockWrap.style.display = 'flex';
    blockWrap.style.columnGap = '15px';

    let monthBlock = document.createElement('div');
    monthBlock.innerText = coursesArrayElement.monthDuration;
    monthBlock.style.border = '2px solid blue';

    let hourBlock = document.createElement('div');
    hourBlock.innerText = coursesArrayElement.hourDuration;
    hourBlock.style.border = '2px solid blue';
    blockWrap.append(monthBlock,hourBlock);

    let modulesBlock = document.createElement('ul');
    modulesBlock.style.border = '2px solid blue';

    let modules = coursesArrayElement.modules;
    for (let module of modules) {
        let li = document.createElement('li');
        li.style.border = '2px solid blue';
        li.append(module);
        modulesBlock.append(li);
    }
    block.append(titleBlock, blockWrap, modulesBlock);
    document.body.append(block);
}

