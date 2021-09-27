let a = +prompt('Введите целое число а. Иначе страница обновиться.');
let b = +prompt('Введите целое число b Иначе страница обновиться.');
let ourValue = 0;

 if(a < b ) { 
  if(a % 1 === 0 && b % 1 === 0) {
    let askQuestion = confirm('Вы хотите пропускать парные числа?');
    for(let i = a; i <= b; i++) {
      if(askQuestion === true && (i % 2 === 1)) {  
        console.log(ourValue = ourValue + i);
      } else if(askQuestion === false) {
        console.log(ourValue = ourValue + i );
    }
  }
  } else {
    console.log('Вы ввели не целые числа');
  }
} else {
  location.reload();
}