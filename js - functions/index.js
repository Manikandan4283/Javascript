// 1. Function Declaration

function greet(name){
    return `name: ${name}`
}

console.log(greet('Manikandan'))


sayHi();

function sayHi(){
    console.log('Hi')
};

// 2. Function expression

const greetFun = function(name){
   return `Hello ${name}`
}

console.log(greetFun('Maniknadan'))


//Arrow Functions

const add = (a,b)=>{
    return a+b;
}

console.log(add(10,10))

const person =()=>({
    name: 'Mani',
    age: '25'
})
console.log(person())

const squre=(a,b)=>{return a * b}

console.log(squre(2,2));


const addd =(a,b)=>(
    a + b
)

console.log(addd(2,2));



