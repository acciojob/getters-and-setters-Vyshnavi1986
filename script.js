//complete this code
class Person 
{
	Person(String name,Number age)
	{
		name=this.name;
		age=this.age;
	}
	get name()
	{
		console.log(this.name);
	}
	set name(Number age)
	{
		console.log(this.age);
	}
	
}

class Student extends Person 
{
	study(String name)
	{
		console.log(name+"is studying")
	}
}

class Teacher extends Person 
{
	teach(String name)
	{
		console.log(name+"is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
