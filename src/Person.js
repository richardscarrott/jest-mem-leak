window.stuff = [];

// Use some memory to exaggerate leak
for (var i = 0; i < 100000; i++) {
	window.stuff.push(document.createElement('div'));
}

function Person(name, age) {
	this.name = name;
	this.age = age;
}

module.exports = Person;
