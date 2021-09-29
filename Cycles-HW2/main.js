let a = +prompt("Введите целое число а.");
let b = +prompt("Введите целое число b.");
let ourValue = 0;

if (a % 1 === 0 && b % 1 === 0) {
  let askQuestion = confirm("Вы хотите пропускать парные числа?");
  if (a > b) {
    [a, b] = [b, a];
  }
  for (let i = a; i <= b; i++) {
    if (askQuestion === true && i % 2 === 0) {
      continue;
    } else {
      console.log((ourValue += i));
    }
  }
} else {
  console.log("Вы ввели не число");
}
