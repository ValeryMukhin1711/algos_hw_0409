// Напишите рекурсивный метод, который проверяет, является ли строка палиндромом.





function palindrom (str, i) {
  str = str.replaceAll(' ', '');
  if (i > (str.length /2)) {
    return true;
  }
  else {
    if (str[i] == str[str.length - 1 - i]) {
      return palindrom(str, i+1);
    }
    else return false;
    
  }
}



console.log(palindrom('олддло',0));
console.log(palindrom('олддsdfsdло',0));
console.log(palindrom('наган',0));





