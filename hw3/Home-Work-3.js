// // Home Work 3
// // Task 1
// (Последовательность Фибоначчи)

let n = 4;
function fib(n) {
    return (n-1) + (n-2);
}

// Задание 2 (Проверка на СПАМ)

function checkSpam(text) {
    let registr = text.toLowerCase();
    return registr.includes('spam', 'sex');
}

// Задание 3 (Троеточие)

function filtr(string) {
    let points = '...';
       return string.length > 20 ? string.slice(0, 19) + points : string;
}
