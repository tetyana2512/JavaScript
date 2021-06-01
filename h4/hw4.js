// Задание 1 (Кто первым решил больше всех задач)
// Напиште код который выведет сотрудника который выполнил больше всех задач.
//     Например:

const tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};
let maxNum = -Infinity;
for (let key in tasksCompleted) {
    maxNum = Math.max(maxNum, tasksCompleted[key]);
}
console.log(maxNum);


// Задание 2 (Изменение численных свойств)
// Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором
// все числовые значения у свойств умножены на 2.
// // Before
// const doubleArr = {
//     width: 10,
//     height: 200,
//     title: 'Cool image',
// };
// function multiplyNumeric(doubleArr){
// for (let key in doubleArr){
//     if (typeof doubleArr[key] == 'number'){
//     doubleArr[key] *= 2;
//     }
// }
// }
// console.log(multiplyNumeric('doubleArr'))


// Задание 3 (Калькулятор)
// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
//     Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
//     Выводит сумму всех значений массива когда ввод прекращен.


let arr = [];

while(true) {
    let input = prompt('Введите число', '0');
     if (isNumeric(input)) arr.push(+input);
     else break;
    console.log(arr);
}
console.log("result arr: " + arr);
let sum = 0;
for (let i=0; i < arr.length; i++) {
    sum += arr[i];
}
alert(sum);
console.clear();

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
