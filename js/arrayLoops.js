// const array = ["peter","Paul","John","Marc"];
let array = [1000,2000,3000,5000];
let numbers = [100,200,300,500];

const newArray = array.forEach((x)=>{
    // return x*2
    console.log(x)
})
const newNumbers = numbers.map((x)=>{
    console.log(x);
    return x*2;
})

console.log("the new array is ", newArray);
console.log("the new numbers is ", newNumbers);