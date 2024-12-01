/*
class Marker {
    constructor(color, inkAmount, printMethod) {
        this.color = color;
        this.inkAmount = inkAmount;
        this.printMethod = printMethod;
    }
}

class RefillableMarker extends Marker {
    constructor(color, inkAmount, printMethod) {
        super(color, inkAmount, printMethod);
    }

    refill(amount) {
        this.inkAmount += amount;
    }
}

const myMarker = new RefillableMarker('blue', 50, 'print');
console.log(myMarker.inkAmount);
myMarker.refill(20);
console.log(myMarker.inkAmount);
*/

//2 task
/*
class ExtendedDate extends Date {
    constructor(...args) {
        super(...args);  // pass
    }

    getDateText() {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    isFutureDate() {
        const now = new Date();
        return this.getTime() >= now.getTime();
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        const nextDate = new Date(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}

const myDate = new ExtendedDate();
console.log(myDate.getDateText());
console.log(myDate.isFutureDate());
console.log(myDate.isLeapYear());
console.log(myDate.getNextDate());
*/

//3 & 4 task
// Клас Employee
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = `
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (const employee of this.employees) {
            html += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td>${employee.salary}</td>
                </tr>
            `;
        }

        html += `
                </tbody>
            </table>
        `;

        return html;
    }
}

class StyledEmpTable extends EmpTable {
    constructor(employees) {
        super(employees);
    }

    getStyles() {
        return `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                    font-size: 18px;
                    text-align: left;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                th {
                    background-color: #4CAF50;
                    color: white;
                }
                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
                tr:hover {
                    background-color: #ddd;
                }
            </style>
        `;
    }

    getHtml() {
        return this.getStyles() + super.getHtml();
    }
}

const employees = [
    new Employee("John Doe", "Manager", 5000),
    new Employee("Jane Smith", "Accountant", 4000),
    new Employee("Sam Brown", "Cashier", 3000),
    new Employee("Chris Johnson", "Security", 2500),
];

const styledEmpTable = new StyledEmpTable(employees);

document.write(styledEmpTable.getHtml());