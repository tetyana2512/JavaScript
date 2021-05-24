// Task 1
let presentYear = prompt('Какой сейчас год?');
if (presentYear === '2021'){
    alert('Вы правы!');
}
else{
   alert('С луны свалился? 2021!');
}

// Task 2
let number = prompt('Введите любое целое число');
if (number > 0){
    alert('1');
}
else if (number < 0){
    alert('-1');
}
else if (number === '0'){
    alert('0');
}
// Task 3
let login = prompt('Введите логин');
if (login === 'admin'){
    let pass = prompt('Введите пароль')
    if (pass === 'passw0rd'){
        alert('Welcome home!');
    }
    else if (pass === null){
        alert('Canceled')
    }
    else {
        alert('Wrong password');
        }
}
else if (login === null){
    alert('Canceled');
}
else {
    alert('Access denied');
}

// Task 4
let a = 1, b = 2;
result = (a + b >= 3) ? 'Yep' : 'Noup';

// Task 5
let name = (name = 'admin') ? 'Hi':
    (name = 'manager') ? 'Hello':
        (name = '') ? 'No login':
            '';