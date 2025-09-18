let heroes=["ironman","thor","hulk","shaktiman","spiderman","altman"];
for(let idx=0;idx<heroes.length;idx++){
    console.log(heroes[idx]);

}
// for of loop:
for(let hero of heroes){
    console.log(hero);
}
let citeis=["delhi","punu","mumbai","gujrat","hydrabad"];
for(let city of citeis)
{
    console.log(city.toUpperCase());
}
// practice question one:

let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum+=val;
    console.log(val)
}
let avg=sum/marks.length;
console.log(`avg maks of the class=${avg}`);
// practice question two:
// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){
//     console.log(`value of items=${val}`);
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offers=${items[i]}`);
//     i++;
// }
let items=[250,645,300,900,50];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;

}
console.log(items);
// array method:
// let fooditems=["aaple","mango","banana","oramge","payaya"];
// console.log(fooditems);
// fooditems.push("patato","tamato");//push method:
// console.log(fooditems);
// pop method:
let fooditems=["mango","mango","banana","oramge","payaya"];
console.log(fooditems);
let deleteditems =fooditems.pop();
console.log(fooditems);
console.log(deleteditems)
// tostring method:
let fooditem=["aaple","mango","banana","turmeric","payaya"];
console.log(fooditem);
console.log(fooditem.toString()); 
// cancat method:
let indianhero=["rana","tana","sana","jana","uncle"];
let rejahero=["you","him"];
let technohero=indianhero.concat(rejahero);
console.log(technohero);
let array=[1,2,3,4,5,6,7];
array.splice(3,1,101);//replace
console.log(array);
