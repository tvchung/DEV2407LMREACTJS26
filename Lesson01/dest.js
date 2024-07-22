const arr = [1,2,4,5,6];
console.log(arr);

const [a,b] = arr;
console.log("a=",a,"b=",b);

// object
const student = {
    name :"Chung chung",
    phone:"0978611889",
    email:"chungtrinhj@gmail.com"
}

const {Name,email,name}=student;
console.log(Name);
console.log(name);
console.log(email);

