const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager = null){
        super(name, salary, title, manager)
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee)
    }
    _totalSubSalary(){
      
        let sum = 0;
        for(let i = 0; i < this.employees.length; i++){
            let employee = this.employees[i];
            if(employee instanceof Manager){
                sum += employee.salary + employee._totalSubSalary(); 
                
                
                
               
                 //first logic break
            }
            else {
                sum+=employee.salary;
            }
        }
        return sum;
    }
            
            
        
        
      
    
    calculateBonus(multiplier){
        const sumOfAllEmployeeSalaries = this._totalSubSalary();
        return (this.salary + sumOfAllEmployeeSalaries) * multiplier ;
    }
}
// const splinter = new Manager('Splinter', 100000, 'Sensei');
// console.log('Before: ', splinter);

// const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
// const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
// const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
// const raph = new Employee('Raphael', 90000, 'Ninja', splinter);


const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000

module.exports = Manager;