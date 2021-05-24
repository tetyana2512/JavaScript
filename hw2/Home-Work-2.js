// // Home Work 2
// // Task 1
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
    }
    if (isSimple){
        simpleNum.push (n);
    }
}
// Task 3
for (let n = 1; n <=100 ; n++){
    if ((n % 3) && (n % 5)){
        console.log(n)
    } else if (!(n % 3)){
        console.log('Fizz');
    } else {
        console.log('Buzz');
    }
}
// Task 4
for (let n = 1; n <=100 ; n++){
    if (!(n % 3) && !(n % 5)) {
        console.log(FizzBuzz)
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
// Task 5

const pow = (a, b) => {
    let result = a;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}
