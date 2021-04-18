// 8.5 Задание 1

let input = prompt('Введите число');
input = +input;
if (isNaN(input) || typeof(input) != 'number') {
  console.log('Упс, кажется, вы ошиблись');
} else {
  
  if (input % 2 == 0) {
    console.log('Четное');
  } else {
    console.log('Нечетное');
  }
};