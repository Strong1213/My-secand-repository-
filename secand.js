
 // for loop
//  let i=100;
// for(let i=12;i<=100;i++)//print 1 to 100
// {
//     console.log("hellow word");
// }
// console.log("loop has ended");
//calculate 1 to 5:
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum=",sum);
console.log("loop has ended");

// while loops:
// let i=0;

// while (i<5) {
//   i++;
// }

// console.log(i);
// Expected output: 3

// do while loops:
// let i=1;
// do{
//     console.log("apna coolege");
//     i++;
// }
// while(i<=10);
// console.log("loops has excuted");
// for of loops:
// 
// for in loops:
let student={
    name:"islam navi",
    age:20,
    cgpa:7.5,
    isPass:true,
};
for(let key in student){//for in loop  start here:
    console.log("key=",key,"value=",student[key]);
}
// practice question-1?
// print the even numbers 0 to 100:
for(let num=0;num<=100;num++){
    if(num%2===0){//even numbers
        console.log("num=",num);


    }
    else{

    }
}
//  practice question -2?
// let gameNum=25;
// let userNum=prompt("gues the numbers:");
// while(userNum !=gameNum){
//     userNum=prompt("you enterd wrong numbers.gues again");
// }

// console.log("congralutation,you enterd the right numbers");
// string:
let str ="apna\tcollege"//space tab`
console.log(str);
console.log(str.length);//for lenght
console.log(str[3]) // for indices

// template litrals:
let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log("the cost of",obj.item,"is",obj.price,"rupees");
console.log(output);
// practice username start with @""
let fullName=prompt("enter the fullname without spaces");
let userName="@"+fullName+fullName.length;
console.log(userName);
