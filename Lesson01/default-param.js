// Tham số mặc định là tham số có giá trị mặc định và được sử dụng khi gọi
// thực hiện hàm mà không truyền giá trị

function add(num1, num2=100){
    console.log(num1,"+",num2,"=",num1+num2);
}

add(100);
add(100,200);

function display(name, company){
    company = company || "Devmaster Academy"
    console.log("Name:", name);
    console.log("Company:", company);
}
display("Chung Chung");
display("Chung chun", "DEV")
