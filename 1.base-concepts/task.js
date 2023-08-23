"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const denominator = 2 * a;
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + sqrtDiscriminant) / denominator;
    const root2 = (-b - sqrtDiscriminant) / denominator;
    return [root1, root2];
  }
}

const solutions1 = solveEquation(1, -3, 2);
const solutions2 = solveEquation(1, 2, 1);
const solutions3 = solveEquation(2, 1, 3);

console.log(solutions1);
console.log(solutions2);
console.log(solutions3);


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== 'number' ||
    typeof contribution !== 'number' ||
    typeof amount !== 'number' ||
    typeof countMonths !== 'number'
  ) {
    return false;
  }

  const monthlyInterestRate = percent / 100 / 12;

  const loanAmount = amount - contribution;

  const monthlyPayment =
    loanAmount *
    (monthlyInterestRate +
      monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));

  const totalPayment = monthlyPayment * countMonths;

  const roundedTotalPayment = parseFloat(totalPayment.toFixed(2));

  return roundedTotalPayment;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));