function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((value, index) => value === arr2[index]);
}

console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));



function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);

	if (filteredUsers.length === 0) {
		return 0;
	}

	const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
	const averageAge = totalAge / filteredUsers.length;

	return averageAge;
}

const people = [{
		firstName: "Александр",
		secondName: "Карпов",
		age: 17,
		gender: "мужской"
	},
];

console.log(getUsersNamesInAgeRange(people, "мужской"));
console.log(getUsersNamesInAgeRange(people, "женский"));
console.log(getUsersNamesInAgeRange([], "женский"));
console.log(getUsersNamesInAgeRange(people, "инопланетянин"));