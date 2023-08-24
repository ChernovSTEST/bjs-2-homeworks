function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: undefined,
			max: undefined,
			avg: undefined
		};
	}

	let min = arr[0];
	let max = arr[0];
	let sum = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}

	const avg = sum / arr.length;

	return {
		min: min,
		max: max,
		avg: +avg.toFixed(2)
	};
}

console.log(getArrayParams(-99, 99, 10));
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(getArrayParams(5));

function summElementsWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	const sum = elements.reduce((acc, curr) => acc + curr, 0);
	return sum;
}

function differenceMaxMinWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	const max = Math.max(...elements);
	const min = Math.min(...elements);
	const difference = max - min;
	return difference;
}

function differenceEvenOddWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (const element of elements) {
		if (element % 2 === 0) {
			sumEvenElement += element;
		} else {
			sumOddElement += element;
		}
	}

	const difference = sumEvenElement - sumOddElement;
	return difference;
}

function averageEvenElementsWorker(...elements) {
	if (elements.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (const element of elements) {
		if (element % 2 === 0) {
			sumEvenElement += element;
			countEvenElement += 1;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	const average = sumEvenElement / countEvenElement;
	return average;
}

console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (const arr of arrOfArr) {
		const result = func(...arr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];

console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));