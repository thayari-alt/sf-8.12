// 8.5 Задание 2

let x = true;
let type = typeof(x);
switch (type) {
  case 'number':
    console.log(`${x} - число`);
    break;
  case 'string':
    console.log(`${x} - строка`);
    break;
  case 'boolean':
    console.log(`${x} - логическое значение`);
    break;
  default:
    console.log(`Тип ${x} не определён`)
    break;
}