//1 Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.
// const num = prompt("Your number",'');
//
// if (num > 0){
//     alert('положительное')
// } else if (num < 0){
//     alert('отрицательное')
// } else {
//     alert('ноль')
// }

//2 Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
// const num = prompt("Your number",'');
// if (num < 0){
//     alert('Упс. Слишком мало')
// }
// else if (num > 120 ){
//     alert('Упс. Слишком много')
// } else {
//     alert(`Поздравляю! Вам ${num}`)
// }

//3 Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).

// const num = prompt("Your number",'');
//
// if (num >= 0){
//     alert(`|${num}|`)
// } else {
//     alert(`|${num * -1}|`)-
// }

//4 Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.

// const hour = +prompt('Hour','0');
// const min = +prompt('Min',0);
// const sec = +prompt('Sec',0);
//
// if (hour<=24 && min <=60 && sec <=60){
//     alert('ok')
// } else {
//     alert('no')
// }

//5 Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка.
// Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.
//
// const x = +prompt('Введите х',"0");
// const y = +prompt('Введите y',"0");
//
// if (x > 0 && y> 0){
//     alert('I Четверть ')
// }else if (x < 0 && y > 0){
//     alert('II Четверть ')
// }else if (x < 0 && y < 0){
//     alert('III Четверть ')
// } else if (x > 0 && y < 0){
//     alert('IV Четверть ')
// } else if (x === 0 && y ===0){
//     alert('точка находиться в начале координат')
// }else if (x === 0){
//     alert('точка на оси X')
// } else if (y === 0){
//     alert('точка на оси Y')
// }

//6 Запросить у пользователя номер месяца и вывести на экран его название.
// const mon = +prompt('Введите номер месяца','0');
//
// if (mon===1){
//     alert('Январь')
// } else if (mon===2){
//     alert('Февраль')
// } else if (mon===3){
//     alert('Март')
// } else if (mon===4){
//     alert('Апрель')
// } else if (mon===5){
//     alert('Май')
// } else if (mon===6){
//     alert('Июнь')
// } else if (mon===7){
//     alert('Июль')
// } else if (mon===8){
//     alert('Август')
// } else if (mon===9){
//     alert('Сентябрь')
// } else if (mon===10){
//     alert('Октябрь')
// } else if (mon===11){
//     alert('Ноябрь')
// } else if (mon===12){
//     alert('Декабрь')
// }

//7 Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.
// const num1 = +prompt("Введите x");
// const num2 = +prompt("Введите y");
// const znak = prompt("Введите знак(+ , - , * , /)");
//
// if (znak === '+'){
//     alert(num1 + num2 )
// } else if(znak === '-'){
//     alert(num1 - num2 )
// } else if(znak === '*'){
//     alert(num1 * num2 )
// } else if(znak === '/'){
//     alert(num1 / num2 )
// }

//8 Запросить 2 числа и вывести большее из них.
// const num1 = +prompt('Введите первое число','0');
// const num2 = +prompt('Введите второе число','0');
//
// if (num1 > num2){
//     alert('Первое число больше')
// } else if (num2 > num1){
//     alert('Второе число больше')
// } else {
//     alert('Они равны')
// }
//9 Запросить 1 число и проверить, оно кратно 5 или нет.
// const num = +prompt('Введите число');
//
// num1 = num % 5;
// if (num1 === 0){
//     alert('Кратно')
// } else {
//     alert('Не кратно')
// }

//10 Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», то вывести «Привет, землянин!»,
// в остальных случаях вывести «Привет, инопланетянин!».
// const planet = prompt('Your planet');
//
// if (planet === 'Земля' || planet === 'земля' ){
//     alert('Привет, землянин!')
// } else {
//     alert('Привет, инопланетянин!')
// }


//1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2),
// подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// const old = +prompt('Ваш возраст','0');
//
// if (old >0 && old <12){
//     alert('Вы ребёнок')
// } else if (old >=12 && old <18){
//     alert('Вы подросток')
// } else if (old >=18 && old <60){
//     alert('Вы взрослый')
// } else if (old >=60 && old <120){
//     alert('Вы пенсионер')
// } else {
//     alert('error')
// }

//2 Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// const num = +prompt('Введите число','0');
//
// if (num===1){
//     alert('!')
// } else if (num===2){
//     alert('@')
// } else if (num===3){
//     alert('#')
// } else if (num===4){
//     alert('$')
// } else if (num===5){
//     alert('%')
// } else if (num===6){
//     alert('^')
// } else if (num===7){
//     alert('&')
// } else if (num===8){
//     alert('*')
// } else if (num===9){
//     alert('(')
// } else if (num===0) {
//     alert(')')
// } else {
//     alert('error')
// }

//3  Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// const num = +prompt('Введите число',0);
//
// if (Math.floor(num / 100) === Math.floor(num % 100 /10)){
//     alert('Первая и вторая цифры равны');
// } else if (Math.floor(num % 100 /10) === Math.floor(num % 10)){
//     alert('Вторая и третья цифры равны');
// } else if (Math.floor(num / 100) === Math.floor(num % 10)){
//     alert('Первая и третья цифры равны');
// } else{
//     alert('Нет равных цифер');
// }

//4 Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// const num = +prompt('Введите год',0);
//
// if (num % 4 === 0){
//     alert('Високосный')
// } else if (num % 400 === 0){
//     alert('Високосный')
// } else if (num % 100 === 0){
//     alert('Не високосный')
// }else {
//     alert('Не високосный')
// }

//5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// const world = prompt('Введите слово',0);
// const worldReverse = world.split('').reverse().join('');
//
// if ( world == worldReverse){
//     alert('Палиндром')
// } else {
//     alert('Не палиндром')
// }

//6 Написать конвертор валют. Пользователь вводит количество USD, выбирает,
// в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// const usd = +prompt('USD',0);
// const value = prompt('Введите валюту (EUR, UAN или AZN)');
//
// if (value == 'EUR'){
//     alert(`${usd * 0.9} EUR `)
// } else if (value == 'UAN'){
//     alert(`${usd * 24.20} UAN `)
// } else if (value == 'AZN'){
//     alert(`${usd * 1.7} AZN `)
// } else {
//     alert('error')
// }

//7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// const sum = +prompt('Сумма покупки',0);
//
// if (sum >= 200 && sum < 300){
//     alert(`${sum - sum*3/100} к оплате`)
// } else if (sum >= 300 && sum < 500){
//     alert(`${sum - sum*5/100} к оплате`)
// } else if (sum >= 500){
//     alert(`${sum - sum*7/100} к оплате`)
// } else {
//     alert(sum)
// }

//8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// const pCircle = +prompt('Длина окружности',0);
// const pSquare = +prompt('Периметр квадрата',0);
// aSquare = pSquare / 4;
// aCircle = pCircle / Math.PI;
//
// if (aSquare >= aCircle){
//     alert('Поместиться')
// } else {
//     alert('Не поместиться')
// }

//9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла.
// После вопросов выведите пользователю количество набранных баллов.

// const q1 = prompt('Какой сейчас год?\nВарианты ответов:\n - 2017\n - 2018\n - 2019');
// const q2 = prompt('Солнце - это\nВарианты ответов:\n - Звезда\n - Планета\n - Спутник Земли');
// const q3 = prompt('Какой по счету месяц Октябрь?\nВарианты ответов:\n - 7\n - 10\n - 4');
//
// if(q1 == '2019'){
//     p1= 2;
// } else {
//     p1 = 0
// }
// if(q2 == 'Звезда'){
//     p2= 2;
// } else {
//     p2 = 0
// }
// if(q3 == '10'){
//     p3= 2;
// } else {
//     p3 = 0
// }
// alert(p1 + p2 + p3);

//10 Запросить дату (день, месяц, год) и вывести следующую за ней дату.
// Учтите возможность перехода на следующий месяц, год, а также високосный год.

// const day = +prompt('День',0);
// const mon = +prompt('Месяц',0);
// const year = +prompt('Год',0);
//
// if (mon == '02') {
//     if (day >= 1 && day <= 27) {
//         day2 = day + 1;
//         mon2 = mon
//     } else {
//         day2 = 1;
//         mon2 = mon + 1
//     }
// } else if (mon == '04' || mon == '06'|| mon == '09' || mon == '11'){
//     if (day >= 1 && day <= 29) {
//         day2 = day + 1;
//         mon2 = mon
//
//     } else {
//         day2 = 1;
//         mon2 = mon + 1
//     }
// } else {
//     if (day >= 1 && day <= 30) {
//         day2 = day + 1;
//         mon2 = mon
//     } else {
//         day2 = 1;
//         mon2 = mon + 1
//     }
// }
// if (day == '31' && mon == '12'){
//     mon2 = 1;
//     year2 = year + 1;
// } else {
//     year2 = year
// }
// if (year % 4 === 0 || year % 400 === 0 && !year % 100 === 0){
//     if (mon == '02') {
//         if (day >= 1 && day <= 28) {
//             day2 = day + 1;
//             mon2 = mon
//         } else {
//             day2 = 1;
//             mon2 = mon + 1
//         }
//     }
// }
// if (day2 >= 1 && day2 <= 9 && mon2 >=1 && mon2 <= 9){
//     alert(`0${day2}.0${mon2}.${year2}` );
// } else if (day2 >= 1 && day2 <= 9){
//     alert(`0${day2}.${mon2}.${year2}` );
// } else if (mon2 >=1 && mon2 <= 9){
//     alert(`${day2}.0${mon2}.${year2}` );
// } else {
//     alert(`${day2}.${mon2}.${year2}` );
// }
