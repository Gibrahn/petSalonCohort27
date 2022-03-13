console.log("hello World");

//let student = "Gibrahn"
let student = {
    firstName:"Gibrahn", 
    lastName:"Duarte",
    age:99, 
    email:"gibrahn@gmail.com",
    isActive:true,
    fullName:function(){
        return this.firstName+" " + this.lastName;
    }
};

    console.log(student.fullName());

// function displayStudent(){
//     //display students information on the HTML
//     document.getElementById("displayName").innerHTML = student.firstName;

// }
// displayStudent();

//object constructor

class StudentsConstructor {
    constructor(firstName, lastName, age, email, isActive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.isActive = isActive;

    }
}

let student1 = new StudentsConstructor("Vicky","Warren", 99,"vicky@gmail.com",true);
let student2 = new StudentsConstructor("Von","Abrea", 99, "von@gmail.com",true);

function displayStudent(user){
    return `Name: ${user.firstName} \n Last Name: ${user.lastName} \n Age: ${user.age} \n Email: ${user.email} \n Status: ${user.isActive}`
}

console.log(displayStudent(student1));
console.log(student1,student2);
