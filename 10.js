// 8.12 Задание 10

let num = prompt('Введите любое целое число от 0 до 1000');
num = +num;

function checkNumber(num) {
  if (num > 1000 || num < 0 || !(isInteger(num))) {
    return 'Данные неверны';
  } else if (num == 1) {
    return 'В настоящее время в математике принято не относить единицу ни к простым, ни к составным числам.';
  } else if (num == 0) {
    return 'Ноль не является натуральным числом и, соответственно, не является ни простым, ни составным.';
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return 'Составное число';
      }
    }
  }
  return 'Простое число';
}

function isInteger(num) {
  return (num ^ 0) === num;
}

console.log(checkNumber(num));