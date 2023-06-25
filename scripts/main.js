//Вивести на сторінку в один рядок через кому числа від 10 до 20.
document.write(`- Вивести на сторінку в один рядок через кому числа від 10 до 20: <br>`)
const MATH = [10, 11, 12, 13, 14, 15, 16, 17, 18.19, 20];
for (let i; i < MATH.lenght; i++);
document.write(`${MATH} <br>`);

//Вивести квадрати чисел від 10 до 20.
document.write(`- Вивести квадрати чисел від 10 до 20: <br>`)
for (let i = 10; i <= 20; i++) {
  let square = i **2;
  document.write(`${square} <br>`);
}

//Вивести таблицю множення на 7.
document.write(`- Вивести таблицю множення на 7: <br>`)
for (let i = 1; i <= 10; i++) {
  let table = i * 7;
  document.write(`${table} <br>`);
}

//Знайти суму всіх цілих чисел від 1 до 15.
document.write(`- Знайти суму всіх цілих чисел від 1 до 15: <br>`)
let sum = 0;
for (let i = 1; i <= 15; i++){
    sum += i;
} 
document.write(`Сума чисел: ${sum} <br>`)


//Знайти добуток усіх цілих чисел від 15 до 35
document.write(`- Знайти добуток усіх цілих чисел від 15 до 35: <br>`);
let dobytok = 1;
for (let i = 15; i <= 35; i++){
    dobytok *= i;
} 
document.write(`Добуток чисел: ${dobytok} <br>`);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500
document.write(`- Знайти середнє арифметичне всіх цілих чисел від 1 до 500: <br>`);
let counter = 0;
for (let i = 1; i <= 500; i++){
    counter += i;
} 
let average = counter / 500
document.write(`Cереднє арифметичне: ${average} <br>`);

//Вивести суму лише парних чисел в діапазоні від 30 до 80
document.write(`- Вивести суму лише парних чисел в діапазоні від 30 до 80: <br>`);
let couple = 0;
for (let i = 30; i <= 80; i++){
    if (i % 2 === 0) {
        couple += i;
} 
   }
document.write(`Сума парних чисел в діапазоні від 30 до 80: ${couple} <br>`);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
document.write(`- Вивести всі числа в діапазоні від 100 до 200 кратні 3: <br>`);
for (let k = 100; k <= 200; k++){
    if (k % 3 === 0) {
        document.write(`${k} <br>`);
} 
   }

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
document.write(`- Дано натуральне число. Знайти та вивести на сторінку всі його дільники: <br>`);
const number = prompt('Укажіть будь-яке натуральне число')
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    document.write(i + ",");
  }
}

//Визначити кількість його парних дільників
document.write(`- Визначити кількість його парних дільників: <br>`);
const COUPLE_OF_PAIR = prompt('Укажіть, будь яке, число')
let count = 0;
for (let i = 1; i <= COUPLE_OF_PAIR; i++) {
  if (COUPLE_OF_PAIR % i === 0 && i % 2 === 0) {
    count++;
  }
}
document.write(`Кількість парних дільників числа ${COUPLE_OF_PAIR}: ${count} <br>`);

//Знайти суму його парних дільників
document.write(`- Знайти суму його парних дільників: <br>`);
const SUM_OF_DILNIKOV = prompt('Укажіть, будь яке, число'); // Задане натуральне число
let summa = 0;
for (let i = 1; i <= SUM_OF_DILNIKOV; i++) {
  if (SUM_OF_DILNIKOV % i === 0 && i % 2 === 0) {
    summa += i;
  }
}
document.write(`Сума парних дільників числа ${SUM_OF_DILNIKOV}: ${summa} <br>`);

//Надрукувати повну таблицю множення від 1 до 10
document.write(`- Надрукувати повну таблицю множення від 1 до 10: <br>`);
for (let i = 1; i <= 10; i++){
      document.write(`Таблиця множення на ${i}:<br>`);
 for (let s = 1; s <= 10; s++) {
     let table_result = i * s;
    document.write(`${i} * ${s} = ${table_result}<br>`);
} 
  document.write("<br>");
}
