class Person{

    // constructor(){
    //     this.name="Devmaster";
    //     this.age=10
    // }

    constructor(name,age){
        this.name=name;
        this.age=age
    }

    // getter
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    //setter
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }

    // method
    display(){
        console.log("Name:",this.name);
        console.log("Age:",this.age);
    }
}

// khởi tạo đối tượng
let person = new Person();
person.display(); // gọi thực hiện phương thức

person.setName("Chung Chung");
person.setAge(45);
person.display();

// kế thừa
class Student extends Person{
    constructor(name, age, studentId){
        super(name,age)
        this.studentId = studentId;
    }

    // method
    getInfo(){
        console.log("Name:",this.name);
        console.log("Age:",this.age);
        console.log("ID:",this.studentId);
    }
}


student = new Student();
student.getInfo();
student = new Student("Chung Trinh",45,10102010);
student.getInfo();