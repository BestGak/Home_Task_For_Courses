const getMaxDigit = (number) => {
  const numArr = [];
  numArr.push(number);
  const maxNumber = numArr.toString().split("").map(Number);
  return Math.max.apply(Math, maxNumber);
};

const getNumberPow = (n1, n2) => {
  let result = n1;
  for (let i = 1; i < n2; i++) {
    result *= n1;
  }
  return result;
};

const firstLetterBig = (word) => {
  const wordArr = word.toLowerCase().split("");
  return wordArr[0].toUpperCase() + wordArr.slice(1).join("");
};

const taxSalary = (salary) => salary - (salary * 19.5) / 100;

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const countLetter = (phrase = "пустота", letters = "") => {
  const phraseArr = phrase.toLowerCase().split("");
  const countLetter = phraseArr.filter((letter) => {
    return letter === letters;
  }).length;
  return countLetter;
};

const convertCurrency = (moneyValue) => {
 
  let value = moneyValue.toLowerCase();
  if(value.includes('$')) {
    return parseInt(value) * 25 + 'грн'
  } else if(value.includes('uah') || value.includes('UAH')) {
    return parseInt(value) / 25 + '$'
  } else {
    return 'Вы ввели не правильную валюту'
  }
   // const value = moneyValue.split("");
  // if (value[value.length - 1] === "$") {
  //   return value.slice(0, -1).join("") * 25 + " UAH";
  // } else if (
  //   value.slice(-3).join("") === "UAH" ||
  //   value.slice(-3).join("") === "uah"
  // ) {
  //   return value.slice(0, -3).join("") / 25 + " $";
  // } else if (value != "$" || value != "H" || value != "h") {
  //   return "Другие валюты не конвертируются, введите UAH , $";
  // }
};

const getRandomPassword = (numPassword = 8) => {
  let randomPassword = "";
  for (i = 0; i < numPassword; i++) {
    const randomNum = Math.floor(Math.random() * (10 - 1)) + 1;
    randomPassword += randomNum;
  }
  return randomPassword;
};

const deleteLetters = (deleteLetter, sentence) => {
  const arrLetters = sentence.split("");
  const arrLetter = arrLetters.filter((letter) => {
    return letter !== deleteLetter;
  });
  return arrLetter.join("");
};

const isPalyndrom = (palyndromWord) => {
  const palyndrom = palyndromWord.toLowerCase().split(" ").join("").split("");
  if (palyndrom.join("") === palyndrom.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

const deleteDuplicateLetter = (wordWithoutDublicateLetter) => {
  let arrLetterWithoutDuplicate = wordWithoutDublicateLetter.toLowerCase().split("");
  arrLetterWithoutDuplicate = arrLetterWithoutDuplicate.filter(letter => arrLetterWithoutDuplicate.indexOf(letter) === arrLetterWithoutDuplicate.lastIndexOf(letter));
  return arrLetterWithoutDuplicate.join("");
}

console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'));

document.writeln(`Функция #1 получает число 4271249(Найбольшее число будет): ${getMaxDigit(4271249)} <br>`)
document.writeln(`Функиця #2 визначає ступінь числа например возьмём числа 3,3: ${getNumberPow(3,3)} <br>`)
document.writeln(`Функция #3 Яка форматує ім'я, роблячи першу букву великою возьмём(вЛАД): ${firstLetterBig('вЛАД')} <br>`)
document.writeln(`Функция #4 яка вираховує суму, що залишається після оплати податку від зарабітньої плати возьмём(1000): ${taxSalary(1000)} <br>`)
document.writeln(`Функция #5 яка повертає випадкове ціле число в діапазоні від N до M например с 1 до 10: ${randomInteger(1,10)} <br>`)
document.writeln(`Функция #6 яка рахує скільки разів певна буква повторюється в слові например(Асталавіста): ${countLetter('Асталавіста', 'а')} <br>`)
document.writeln(`Функиця #7 конвентатор валют с курсом 25, uan $ , например(100$) ${convertCurrency('100$')} <br>`)
document.writeln(`Функиця #8 генерация випадкового паролю (тільки числа): ${getRandomPassword(5)} <br>`)
document.writeln(`Функиця #9 яка видаляє всі букви з речення: ${deleteLetters('a' , 'blablalbalba')} <br>`)
document.writeln(`Функиця #10 яка перевіряє, чи є слово паліндромом например(мадам): ${isPalyndrom('мадам')} <br>`)
document.writeln(`Функиця #11 яка видалить з речення букви, які зустрічаються більше 1 разу: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`)
