// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i < 11; i++) {
    if (i==0) {
        console.log(`${i}-это ноль`);
    }
    else if (i % 2 == 0){
        console.log(`${i}-четное число`);
    }
    else{
        console.log(`${i}-нечетное число`);
    }   
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]==4){
        arr.splice(i,1)
    }
    if (arr[i]==5){
        arr.splice(i,1)
    } 
}
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const arr2 = []
for (let i = 0; i < 5; i++) {
    arr2.push(getRandomNumber(0,9));   
}
console.log(`рандомный массив ${arr2}`);
function sum(arr){
    let sumNumb = 0
    for (let i = 0; i < arr.length; i++) { 
        sumNumb = sumNumb + arr[i] 
    }
    console.log(`сумма чисел ${sumNumb}`);
}
function min(arr) {
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (temp > arr[i]){
            temp = arr[i]
        }
    }
    console.log(`минимальное число ${temp}`);
    
}
sum(arr2)
min(arr2)
console.log(arr2.indexOf(3));