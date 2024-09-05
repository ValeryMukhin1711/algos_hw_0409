
// Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


// Ввод 8
// Вывод YES


// ВВОД 3
// ВыводNO








console.log('Start');

function is_power_2(numb) {

  while (numb > 2) {
    if (numb % 2 != 0) {
        return 'NO'
        }
    numb = numb / 2
    }
  return 'YES'
}

for(i = 0; i < 20; i = i + 1) {
  console.log('ВВОД ' + i +' ВЫВОД ' + is_power_2(i));
 
}

console.log(is_power_2(3));
console.log(is_power_2(14));
console.log(is_power_2(1024));
console.log(is_power_2(1023));
console.log(is_power_2(1000));
console.log(is_power_2(16));
console.log(is_power_2(18));


