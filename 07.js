// 8.8 Задание 7 

arr = [457, 57, 278, {key: 'value'}, 'text', null, NaN, 0, 8.99601];
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

console.log(`${zeroNumbers} нулей, ${evenNumbers} четных чисел, ${oddNumbers} нечетных чисел`);