// 8.7 Задание 6

let arrSame = ['text', 'text', 'text', 'text'];
let arrDifferent = ['text', 'text', 'text', null];

function compareElements(array) {
  let sample = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] != sample) {
      return false;
    }
  }
  return true;
}

console.log(compareElements(arrSame));
console.log(compareElements(arrDifferent));