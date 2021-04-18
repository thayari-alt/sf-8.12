// 8.9 Задание 8

let map = new Map([
  ['Great Britain', 'London'],
  ['France', 'Paris'],
  ['USA', 'Washington'],
]);

for (let country of map.keys()) {
  console.log(`Ключ — ${country}, значение — ${map.get(country)}.`);
}