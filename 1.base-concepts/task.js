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