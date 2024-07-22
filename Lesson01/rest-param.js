// các tham số còn lại
function sum(num1, num2, ...other){
    console.log(num1);
    console.log(num2);
    other.forEach(element => {
        console.log(element);
    });
}

sum(1,2,3,4,5,6);
console.log("=====================");
sum(10,29,11,22,33,44,55,66,77,88)
console.log("=====================");
sum(10,29)
