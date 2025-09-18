//   this is varible
//  let fullName="raza is most power full name"
// console.log(fullName);
//  let age=12;
// console.log(age+1);
// 
{
    let a=56;
    
    console.log(a);

}
{
    let a=107;
    console.log(a)
}
// data types:
// numbers ,string ,boolean NUll ,undefined bigint,symbols
// let age=45;
// console.log(typeof age);
// let FullName="sneha patel"
// console.log(typeof FullName);
// boolean data types
let isFollow=true;
console.log(isFollow);
console.log(typeof isFollow);
// null data types:
let x=null;
console.log(x);
console.log(typeof null);
// bigint data types:
// let X=Bigint("123");
// console.log(typeof X);
let  y=Symbol("hellow !");
console.log(typeof y);
// non primitive data types; that is object:
// const student ={
//     FullName:"islam navi",
//     age:17,
//     cgpa:7,
//     isPass:true,
// }
// console.log(student);
// console.log(typeof student);    
// console.log(student["age"]);
// console.log(student.age);
// console.log(typeof age);
// console.log(student.cgpa);
// update age;
// student["age"]=student["age"]+1;
// console.log(student.age);
// // practice one:
// const product={
//     title:"ball pen",
//     ratting:4,
//     offer:5,
//     price:270,
// }
// console.log(product);
// console.log(typeof product);
// practice two:
const profile={
    username:"its_islam_razvi_600",
    isFollow:false,
    followers:206,
    following:246,

}
console.log(profile);
console.log(profile["username"]);
console.log(typeof profile['isFollow']);
// lecture -2; comment in js: 
 console.log('hello word');
//  opretoers i js:

// let a=5;
// let b=2;
// let sum=a+b;
// console.log('a+b=',a+b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);
// unary opretors:
// let a=5;
// let b=2;
// console.log("a=",a," & b=",b);
// console.log(a);
// pre increment:
// let a=5;
// let b=2;
// console.log("a=",a," & b=",b);
// console.log("++a=",++a)
// console.log(a);
// let a=5;//assignment opretors:
// let b=2;
// a+=4;//a=a+4
// console.log(a);
// comparison operators:
// let a=5;
//  let b=2;
// console.log("5!==2",a!==b);
// console.log("a>b",a>b);
// console.log("a<=b",a<=b);
// logical opretors:
// let a=6;//AND
// let b=5;
//  console.log(a>b&& a===6);//true
//   logical NoT
// let a=8;
// let b=10;
// console.log(a<b||a===b);//true
// logical NoT;
// let a=6;
// let b=4;
// console.log(!a<b);// true
// conditional statement:
// let age =12; //else if condition.
//  if(age<18)
//  {
//     console.log("gunior");

//  }
//  else if(age>60)
//  {
//     console.log("sinior");

//  }
//  else{
//     console.log("miidle");
//  }
// if else codotion for age:
// let num=20;
// if(num%2===0){
//     console.log(num," is even");
// }
// else{
//     console.log(num,"is odd");
// }
//  practice:
// let num=prompt("enter a numbers");
//   if(num%5===0)
// {
//     console.log(num,"is a multiple of 5" );
// }
//         else{
//         console.log(num,"is not multiple of 5");
//             }
// practice two:
let score=50;
let grade;
if(score>=90 && score<=100){
    grade="a";
}
else if(score>=70 && score<=89)
{
    grade="b";
}

else if(score>=60 && score<=69)
{
    grade="c";
}
else if(score >=50 && score<=59)
{
    grade="d";
}
else if(score>=0 && score<=49)
{
    grade="f";
}
console.log("according your score your grade ",grade);

// ternary opretors:
let age = 20;

let result = age > 18 ? "adult" : "not adult";

console.log(result); // "adult"





