const person = {
    get salary() {
        const current = new Date();
        const day = current.getDate();
        const daysInMonth = new Date(current.getFullYear(), current.getMonth()+1, 0).getDate();
        
        if (daysInMonth - day > 20) {
            return 'Good salary!!!!!';
        }
        else {
            return 'Bad salary!!!!!';
        }
        
    }
};

console.log(person.salary);