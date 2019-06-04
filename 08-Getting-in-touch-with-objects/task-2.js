const person = {
    rate: null,
    get salary() {
        const current = new Date();
        const day = current.getDate();
        
        if (this.rate === null) {
            return 0;
        }
        else {
            return this.rate * day;
        }
        
    }
};

Object.defineProperty(person, 'rate', {
    enumerable: false,
    configurable: false
});
Object.defineProperty(person, 'salary', {
    configurable: false
});

person.rate = 30;
console.log(person.salary);