function parseCount(value) {
	const parsedValue = Number.parseFloat(value);

	if (isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}

	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

const inputValue = "42.5";
try {
	const result = validateCount(inputValue);
	if (result instanceof Error) {
		console.error(result.message);
	} else {
		console.log("Результат:", result);
	}
} catch (error) {
	console.error("Произошла ошибка:", error.message);
}



class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const s = this.perimeter / 2;
		return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}

const triangle1 = getTriangle(3, 4, 5);
console.log("Периметр:", triangle1.perimeter);
console.log("Площадь:", triangle1.area);

const triangle2 = getTriangle(1, 1, 3);
console.log("Периметр:", triangle2.perimeter);
console.log("Площадь:", triangle2.area);