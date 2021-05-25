// // Home Work 3
// // Task 1
// (Последовательность Фибоначчи)

let n = 4;
function fib(n) {
    return n = (n-1) + (n-2);
}

// Задание 2 (Проверка на СПАМ)

function checkSpam(text) {
    let registr = text.toLowerCase()
    return registr.includes('spam', 'sex')
}


// Задание 3 (Троеточие)

function filtr(string) {
    let points = '...'
       if (string.length > 20){
              return string.slice(0, 19) + points;
       }
       else {
           return string;
       }
}
