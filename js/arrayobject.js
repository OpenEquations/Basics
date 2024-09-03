const teachers=[{
    fname:"HABIMANA",
    lname:"Camille",
    age:37,

},

{fname:"NDUNGUTSE",
    lname:"David",
    age:38,
},

{
    fname:"UTUJE",
    lname:"Jame",
    age:37,

}]

const teachersNew={
    ...teachers,
    
        3:{fname:"Marc",
        lname:"MANISHIMWE",
        age:39,
        },
    


}
//console.log(teachersNew);
const FourthTeacher={
    fname:"HABIMANA",
lname:"Camille",
age:37,
}
let {fname,lname,date=10}=FourthTeacher
// console.log(fname,date)

const numbers1 = {
    one:1,
    two:2,
}

const numbers2 = {
    ...numbers1,
    three:3,
}

// console.log(numbers2);
// manipurating objects

numbers2.four = 10;
numbers2.camil = 100;

console.log(numbers2);