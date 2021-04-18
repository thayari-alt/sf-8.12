// 8.9 Задание 9

arr = [4578, 57, 278, 0, 'text', null, NaN, 0, 8.99601];

function checkNumbers(arr) {
  arrNumbers = arr.filter(elem => typeof(elem) == 'number' && !isNaN(elem));

  let evenNumbers = 0, oddNumbers = 0, zeroNumbers = 0;

  arrNumbers.forEach(elem => {
    if (elem == 0) {
      zeroNumbers++;
    } else if (elem % 2 == 0) {
      evenNumbers++;
    } else {
      oddNumbers++;
    }
  });

  return {evenNumbers, oddNumbers, zeroNumbers};
}

result = checkNumbers(arr);

console.log(`${result.zeroNumbers} нулей, ${result.evenNumbers} четных чисел, ${result.oddNumbers} нечетных чисел`);