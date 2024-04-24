//complete this code
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}
//const person = new Person("John", 25);
//const student = new Student("Alice", 22);

// Do not change the code below this line
//window.Person = Person;
//window.Student = Student;
//window.Teacher = Teacher;
//student.study();
// Example usage:
const student = new Student("Alice", 20);
const teacher = new Teacher("Bob", 35);

console.log(student.name); // Output: Alice
student.study(); // Output: Alice is studying

console.log(teacher.name); // Output: Bob
teacher.teach(); // Output: Bob is teaching
teacher.teach();