// // Task 1
// let presentYear = prompt('Какой сейчас год?');
// if (presentYear === '2021'){
//     alert('Вы правы!');
// }
// else{
//    alert('С луны свалился? 2021!');
// }
//
// // Task 2
// let number = prompt('Введите любое целое число');
// if (number > 0){
//     alert('1');
// }
// else if (number < 0){
//     alert('-1');
// }
// else if (number === '0'){
//     alert('0');
// }
// // Task 3
// let login = prompt('Введите логин');
// if (login === 'admin'){
//     let pass = prompt('Введите пароль')
//     if (pass === 'passw0rd'){
//         alert('Welcome home!');
//     }
//     else if (pass === null){
//         alert('Canceled')
//     }
//     else {
//         alert('Wrong password');
//         }
// }
// else if (login === null){
//     alert('Canceled');
// }
// else {
//     alert('Access denied');
// }
//
// // Task 4
// let a = 1, b = 2;
// result = (a + b >= 3) ? 'Yep' : 'Noup';
//
// // Task 5
// let name = (name = 'admin') ? 'Hi':
//     (name = 'manager') ? 'Hello':
//         (name = '') ? 'No login':
//             '';
// Home Work 2
//
// Task 1
let num = prompt('Введите число больше 100');
while (num < 100 || num === null) {
    num = prompt('Попробуйте еще раз');
}
alert('Wow');
// Task 2
let simpleNum = [ ];
for (let n = 2; n <= 10; n++){
    let isSimple = true;
    for (let m = 2 ; m <= n-1 ; m++){
       isSimple = isSimple ? !!(n % m) : isSimple;
        // console.log('for m', m , n , n % m , isSimple)
    }
    if (isSimple){
        simpleNum.push (n);
    }
}        console.log(simpleNum)

// Task 3
for (let n = 1; n <=100 ; n++){
    if ((n % 3) && (n % 5)){
        console.log(n)
    } else if (!(n % 3)){
        console.log('fith');
    } else {
        console.log('buth');
    }
}
// Task 4
for (let n = 1; n <=100 ; n++){
    if (!(n % 3) && !(n % 5)) {
        console.log(n)
    }
}

// Task 5
let string = '';
for (let n = 1 ; n <= 64 ; n++){
    if ((n % 2)) {
        string += '#'
    } else {
        string += ' ';
    }
    if (!(n % 7)){
        string += '\n'
    }
}
console.log(string)
// Task 5
let base = prompt('Введите число, которое хотите возвести в степень');
let n = prompt('Введите число степени');
let result = Math.pow(base, n);
console.log(result)





// Выведите столбец четных чисел в промежутке от 0 до 10.
// for (let n = 0; n <=10 ; n++){
//     if (!(n % 2)) {
//         console.log(n)
//     }
// }


