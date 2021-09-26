const variableBtn = document.querySelector('.variable__btn');
const variableValue = document.querySelector('.variable__value');
const bread = 15.678 , 
      redFish = 123.965 , 
      meat = 90.2345;
const sumProducts = bread + redFish + meat;
const remainder = 500 - sumProducts;
const percentDiscount = getRandomInt(100);
const discount = ((sumProducts / 100) * percentDiscount).toFixed(1);
const productsValue = Math.floor(bread) + Math.floor(redFish) + Math.floor(meat)
let pairing;
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  if(productsValue % 2 === 0) {
    pairing = true
  } else {
    pairing = false
  }
  
  variableBtn.addEventListener('click' , () => {
    variableValue.style.opacity = 1
    variableValue.innerHTML = 'Минимальное число: ' + Math.min(bread , redFish , meat) + 'грн' +
    ' Максимальное число: ' + Math.max(bread , redFish , meat) + 'грн' + 
    ` Сумма товаров:   ${sumProducts}  грн` + ` Cумма не считая копеек:   ${productsValue}  грн` +
    ' Округление к сотням: ' + Math.round(sumProducts / 100) * 100 + 'грн' +
    ` Проврека на парность чисел:   ${pairing}` +
    ` Сдача с 500грн:   ${remainder}  грн` + ' Средняя цена товара: ' + (sumProducts / 3).toFixed(2) + 'грн' +
    ` Рандомная сумма скидки:   ${percentDiscount}  '%` + ' Сумма со скидкой: ' + 
    (sumProducts - discount).toFixed(2) + 'грн' + '  Чистая прибыль : ' + 
    ((sumProducts / 2) - discount).toFixed(2) + 'грн';
  })