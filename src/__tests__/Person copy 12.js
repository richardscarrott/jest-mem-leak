jest.dontMock('../Person');

var Person = require('../Person');

describe('Person', () => {

	var somebody;

	beforeEach(function() {
		somebody = new Person('your name here', 25);
	});

	it('has a name', () => {
		expect(somebody.name).toBe('your name here');
	});

	it('has an age', () => {
		expect(somebody.age).toBe(25);
	});

});
