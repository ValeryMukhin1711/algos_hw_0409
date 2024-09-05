
// Напишите рекурсивный метод, который выводит на экран числа Фибоначчи до N-ого элемента.



function fibonacci(a,b,n_current,n_max) {
  
  if (n_current == n_max) {
    console.log(b);
    return b;
  }
  else {
    // let c = b
    // b=a+b;
    // a=c;
   
    n_current+=1;
    console.log(b);
    return fibonacci(b,b+a,n_current, n_max);
  }
} 


console.log('Start')

fibonacci(1,1,1,15)