
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).



function sumDigits(numb){
  let sum = 0;

  while (numb > 9) {
      
     sum += numb % 10;
     numb = Math.floor(numb / 10);
   }
  return sum + numb;


  
}

console.log('Start');

for (i = 0; i < 7000; i = i + 979) {
  console.log('ввод ' + i + ' сумма цифр ' + sumDigits(i));
}