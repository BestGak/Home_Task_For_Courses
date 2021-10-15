const getRandomArray = (length, min, max) => {
  let arrRanomNums = [];
  for (let i = 0; i < length; i++) {
    arrRanomNums.push(Math.floor(min + Math.random() * (max + 1 - min)));
  }
  return arrRanomNums;
};
const getAverage = (...numbers) => {
  const numArr = [];
  let sum = 0;
  numbers.map(function (number) {
    if (number % 1 === 0) {
      numArr.push(number);
      return numArr;
    }
  });
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 1 === 0) {
      sum += numArr[i];
    }
  }
  return sum / numArr.length;
};

const getMedian = (...numbers) => {
  let middleNum;
  let arrSortNumbers = [];
  numbers.map(function (number) {
    if (number % 1 === 0) {
      arrSortNumbers.push(number);
      return arrSortNumbers;
    }
  });
  arrSortNumbers.sort((a, b) => a - b);
  if (arrSortNumbers.length % 2 === 0) {
    middleNum = arrSortNumbers.length / 2;
    return (arrSortNumbers[middleNum] + arrSortNumbers[middleNum - 1]) / 2;
  } else {
    middleNum = Math.ceil(arrSortNumbers.length / 2);
    return arrSortNumbers[middleNum - 1];
  }
};

const filterEvenNumbers = (...numbers) =>(evenArr = numbers.filter((number) => number % 2 === 1));
const getDividedByFive = (...numbers) =>(dividedFiveArr = numbers.filter((number) => number % 5 === 0));

const divideByThree = (word) => {
  const arrWord = [];
  for (let i = 0, charsLenght = word.length; i < charsLenght; i += 3) {
    arrWord.push(word.substring(i, i + 3));
  }
  return arrWord;
};

const countPositiveNumbers = (...numbers) => {
let positiveNumbers = [];
for(const number of numbers) {
  if(number > 0) {
    positiveNumbers.push(number)
  }
}
return positiveNumbers.length
}

console.log(getRandomArray(15, 1, 100));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);
console.log(divideByThree("Commander"));
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));


document.writeln(`Function #1: ${getRandomArray(15,1,100)}<br>`);
document.writeln(`Function #3: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>`);
document.writeln(`Function #4: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>`);
document.writeln(`Function #5: ${filterEvenNumbers(1,2,3,4,5,6)}<br>`);
document.writeln(`Function #6: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}<br>`);
document.writeln(`Function #7: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>`);
document.writeln(`Function #9: ${divideByThree("Commander")}`);