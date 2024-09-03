const students = [
    {
    className:'sinior two',
    0:{
        firstName:"RUKUNDO",
        lastName:"Clement",
    },
    2:{
        firstName:"HABIMANA",
        lastName:"Patric",
    },
},
    {
    className:'sinior three',
    0:{
        firstName:"another",
        lastName:"Clement",
    },
    2:{
        firstName:"HABIMANA",
        lastName:"Patric",
    },
},

]

// console.log(students.className); // sinior two
// console.log(students[2].lastName); // sinior two



const car = {
    type : "toyota",
    carSits : 10,
    whatItDoes1: (passengers,power)=>{
        passengers <= this.carSits ? console.log("I am driving ", passengers, " and power of", power ) : console.log("many passengers")
        // console.log(passengers, power)
    },
    whatItDoes: function(passengers,power){
        passengers <= this.carSits ? console.log("I am driving ", passengers, " and power of", power ) : console.log("many passengers")
        // console.log(passengers, power)
    },



}

const driving = (a,b) => car.whatItDoes(a,b);
// driving(5,"350HP");
// driving(5,10);
// console.log(...students)

const colors = {
    color1 :"red",
    color2 :"green",
    color3 :"yelllow",
}

const secondColor ={
    ...colors,
    color4:"blue",

}

// console.log("second colors",secondColor)

// const person = {
//     firstName: "RUKUNDO",
//     patricName: "Patric",
// }

// const {firstName, lastName} = person;


let teacher={
    fname:"rurangwa",
    lname:"kevin",
    age:50,
    eyeColor:"blue",
    bothNames:function (){
        console.log(`The teacher has firstname as ${this.fname} and his age is ${this.age}`);
    },
    secondFunction: (a)=>{
        true ? console.log(`your age was ${this.age} and has became ${this.age*2} as New age`) : console.log(`your age has not changed`);
        // a < this.age ? console.log(`your age was `): null
    }
  
}
const ages= (x)=>{teacher.secondFunction(x)}
ages(45);
// teacher.bothNames();
// console.log(teacher.fname,"has",teacher.age,"years old")

