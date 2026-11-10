// var totalMark=100;

// console.log(totalMark);

// var totalMarks=900;
// console.log(totalMark);

// var totalMark=700;
// console.log(totalMark);

// let totalMark=100;

// console.log(totalMark);

// let totalMarks=900;
// console.log(totalMark);

// let totalMark=700;
// console.log(totalMark);

// const totalMark=100;

// console.log(totalMark);

// const totalMarks=900;
// console.log(totalMark);

// const totalMark=700;
// console.log(totalMark);




// let firstName='Nikhil'
// let lastName='Bhatt'
// console.log(firstName+lastName)

// console.log (firstName + ' ' + lastName)
// console.log(firstName,lastName)

// let price=28;
// console.log( + price + 5 + 'Total ');
// console.log(`Total=${price+5}`);

// let Name='Chaitanya';
// let item='coffee'
// console.log(`Hello ${Name},your${item} is ready!`);
// const studentName="Roushan";
// const studentCity="Banka";
// const StudentRollNumber="2616400176";
// const StudentCollege="ZSAI";
// const student={
//     name:"Roushan",
//     city:"Banka",
//     rollNumber:"2616400176",
//     college: "ZSAI"
// };
// console.log(student);
// console.log(typeof(student));

// console.log(student.name);
// console.log(student["name"]);
// console.log(student.rollNumber);
// console.log(student["rollNumber"])
// // console.log(student["phone"])

// student["country"]="INDIA";
// console.log(student);
// student["college"]="Zenith";
// console.log(student);
// const product={
//     title: "Monitor",
//     price: 7000,
//     brand: "Sony"
// };
// console.log(product);
// product.warranty='3 years';
// product.price=9000;
// console.log(product);
// console.log(student);
// delete student.college;
// console.log(student);
// const student=["Roushan", "alok","tejas"];
// console.log(student);
// console.log( typeof student)
// console.log(student[1]);
// student[20]="Roushankumar"
// student.push("rk")
// console.log(student)

// const laststudent=student.pop();
// console.log(student);
// console.log(laststudent);
// const firststudent=student.shift();
// console.log(student);
// console.log(firststudent);
// student.unshift("Roushankumar");


// const student={
//     name:"Roushan",
//     city:"Banka",
//     rollNumber:"2616400176",
//     college: "ZSAI"
// };
// const student=["Roushan", "alok","tejas","lol","manas"];
// console.log(student);
// const extrastudent=["sreyesh","lol"]
// student.push(...extrastudent);
// console.log(student);     
// delete student[2];
// console.log(student);
// console.splice(1,1);
// console.log(student);
// student.splice(1,2,"a","b","c");
// console.log(student);   

// const std ={
//     name:"Ajay",
//     age: "20",
//     roll:"2",
//     hobbies: ["p","d"]
// };
// const{name,age,hobbies}=std
// console.log(name,age,hobbies);
// const data = {
//     "products": [
//         {
//             "id": 26,
//             "title": "Green Chili Pepper",
//             "price": 0.99
//         },
//         {
//             "id": 27,
//             "title": "Honey Jar",
//             "price": 6.99
//         },
//         {
//             "id": 28,
//             "title": "Ice Cream",
//             "price": 5.49
//         },
//         {
//             "id": 29,
//             "title": "Juice",
//             "price": 3.99
//         },
//         {
//             "id": 30,
//             "title": "Kiwi",
//             "price": 2.49
//         },
//         {
//             "id": 31,
//             "title": "Lemon",
//             "price": 0.79
//         },
//         {
//             "id": 32,
//             "title": "Milk",
//             "price": 3.49
//         },
//         {
//             "id": 33,
//             "title": "Mulberry",
//             "price": 4.99
//         },
//         {
//             "id": 34,
//             "title": "Nescafe Coffee",
//             "price": 7.99
//         },
//         {
//             "id": 35,
//             "title": "Potatoes",
//             "price": 2.29
//         }
//     ],
//     "total": 194,
//     "skip": 25,
//     "limit": 10
// }
// let i = 0
// const products = data.products;
// const n = products.length
// while (i <= n - 1) {
//     console.log(products[i].title)
//     i += 1
// };



// console.log("------d0-while-loop-----")
// let i=1;
// do{
//     console.log(`2 x ${i}=${2*i}`);
//     i++;
// } while (i<=10);

// let i = 1;
// j = 0
// while (i <= 10) {
//     j += i
//     i += 1
// };
// console.log(j);

// let n=prompt("type your name");
// let age=prompt("type your age")
// alert("type your name");
// alert("type your age")
// // Math.min(65,50,40,90)
// function greet(n,p){
//     var price=p*100
//     console.log(`total  ${n} price: ${price.toFixed(2)}`);
    
    
// }
// greet(`alu`, 5.98);
// greet(`kiwi`, 2.99);
// function add(a,b){
//     const ans=a+b;
    
//     return ans;
// }
// let result=add(5,3);
// console.log(result);
// console.log(add(5,3)*2);
// function check(){
//     return "done";
//     console.log("Function executed");
// }
// console.log(check());

// function cubeNumber(num){
  
//     let cube=num*num*num;
//     return cube; 
// }
// let num=Number(prompt("Enter a number to calculate its cube:"));
// let cube=cubeNumber(num);
// alert(`The cube of ${num} is ${cube}.`);
// let age=prompt("Enter your age:");
// if(age>=18){
//     alert("You are eligible to vote.");
// }
// else{
//     alert("You are not eligible to vote.");
// }
// function agecheck(age){
//     if (age >= 18) {
//         return "You are eligible to vote.";
//     } else {
//         return "You are not eligible to vote.";
//     }
// }
// let age=prompt("Enter your age:");
// let result=agecheck(age);
// alert(result);


// function agecheker(age){
//     if (age>=18){
//         return "False"
//     } else{
//         return "True"

//     }
//     };
// let age=parseInt(prompt("Enter Your age:"));
// let vote=agecheker(age);
// alert(vote);
// alert(agecheker(age));
// function totalMark(mark){
//     if (mark>=90){
//         return "A";
//     }else  if (mark>=75 && mark<90 ){
//         return  "tejas chuti'/ya";
//     }
//     else if(mark>=50 && mark<75){
//         return "C";
//     }
//     else {
//         return"D";
//     }

// }
// mark=prompt("Enter you mark:");
// alert(totalMark(mark));     
// console.log("------------Start------------")
// let a=2;
// var b=3;
// console.log(a,b);
// function multiplyByTwo(n){
//     console.log("----------Inside function-----------")
//     let result =n*2
//     console.log("----------FUNCTION ABOUT TO RETURN RESULT---------")
//     return result;
//     console.log("----------FUNCTION COMPLETED------")

// }   
// console.log("----- MID -----");
// let c = multiplyByTwo(a);
// console.log(c);
// console.log("----- END -----");
// console.log(x);
// let     x = 5;
// console.log(x);

function square(n){
    let sq=n*n
    return sq;
}
function cube(n){
    let cu=n*n*n;
    return cu;
}
function sumOfSquareAndCube(n){
    let sq = square(n);
    let cu=cube(n);
    let  sum = sq +cu

    return sum;

}
let num = Number(prompt("Enter your number"))
let sum=sumOfSquareAndCube(num)
alert(sum)