class Worker {
	constructor(name, surname, rate, days) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		this.days = days;
	}
	getSalary() {
		return this.rate * this.days;
	}
}

var worker = new Worker('John', 'Smith', 10, 31);
var worker2 = new Worker('John', 'Jolly', 20, 12);

console.log(worker.name); // print 'John'
console.log(worker.surname); // print 'Smith'
console.log(worker.rate); // print 10
console.log(worker.days); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31
console.log(worker.getSalary() + worker2.getSalary()); // print 310 - because 10*31