const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
  return this.tax * salary;
}

function getMiddleTaxes(country) {
  return this.tax * this.middleSalary;
}

function getTotalTaxes(country) {
  return this.tax * this.middleSalary * this.vacancies;
}

function getMySalary(country) {
  const randomSalary = Math.floor(Math.random() * (15000 - 10000) + 10000);
  const taxes = Math.floor(getMyTaxes.call(country, randomSalary));
  const profit = Math.floor(randomSalary - taxes);
  const salary = {
    randomSalary,
    taxes,
    profit,
  };
  return salary;
}

console.log(
  `Налог с зарплаты в 10000грн: ${getMyTaxes.call(ukraine, 10000)}грн`
);
console.log(
  `Столько в среднем платят налогоплательщики Украины ${getMiddleTaxes.call(
    ukraine
  )}грн`
);
console.log(
  `Столько всего налогов платят специалисты-IT ${getTotalTaxes.call(ukraine)}`
);
console.log(getMySalary(ukraine));
