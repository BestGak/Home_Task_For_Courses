const variableBtn = document.querySelector('.variable__btn');
const variableValue = document.querySelector('.variable__value');
const bread = 15.678 , 
      redFish = 123.965 , 
      meat = 90.2345;
let sumProducts = bread + redFish + meat;
let remainder = 500 - sumProducts;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const percentDiscount = getRandomInt(100);
const discount = ((sumProducts / 100) * percentDiscount).toFixed(1);
let pairing;
  if((Math.floor(bread) + Math.floor(redFish) + Math.floor(meat)) % 2 == 0) {
    pairing = true
  } else {
    pairing = false
  }
  console.log(pairing);
variableBtn.addEventListener('click' , () => {
  variableValue.style.opacity = 1
  variableValue.innerHTML = 'Минимальное число: ' + Math.min(bread , redFish , meat) + 'грн' +
  ' Максимальное число: ' + Math.max(bread , redFish , meat) + 'грн' + 
  ' Сумма товаров: ' + sumProducts + 'грн' + ' Cумма не считая копеек: ' + (Math.floor(bread) + Math.floor(redFish) + Math.floor(meat)) + 'грн' +
  ' Округление к сотням: ' + Math.round(sumPrice / 100) * 100 + 'грн' +
  ' Проврека на парность чисел: ' + pairing +
  ' Сдача с 500грн: ' + remainder + 'грн' + ' Средняя цена товара: ' + (sumProducts / 3).toFixed(2) + 'грн' +
  ' Рандомная сумма скидки: ' + percentDiscount + '%' + ' Сумма со скидкой: ' + 
  (sumProducts - discount).toFixed(2) + 'грн' + '  Чистая прибыль : ' + 
  ((sumProducts / 2) - discount).toFixed(2) + 'грн';
})