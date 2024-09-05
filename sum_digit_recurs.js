// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).


function sumDigits(numb, sum){

if (numb < 10) {
  return sum + numb
}
sum += numb % 10
numb = Math.floor(numb / 10)
// numb = Math.floor(numb  / 10)
console.log('numb ' + numb + ' sum ' + sum);

  return sumDigits(numb, sum)

}

console.log('Start')

for (i = 0; i < 10000; i = i + 397) {
  console.log('ввод ' + i + ' сумма цифр ' + sumDigits(i,0))
  console.log(  '     '  );
}