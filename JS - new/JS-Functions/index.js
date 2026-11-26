console.log("Functions")


//Function Expression

const func =function(a,b){
    return a+b;
}

console.log(func(1,2))

//Function Declaration

function add(a,b){
    return a+ b;
}

console.log(add(10,20))


//Return Values

function add1(a,b){
    return a+ b;
}

const result =add(20,20)

console.log(result)

//Default Parameters

function greet(name = "Guest") {
    return "Hello " + name;
}

console.log(greet("John"));
console.log(greet());


//Rest Parameters

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30, 40);

//Spread Operator

const numbers = [10, 20, 30];

console.log(...numbers);



//Callback Functions

function greett(name, callback) {
    console.log("Hello " + name);

    callback();
}

function welcome() {
    console.log("Welcome to JavaScript");
}

greett("John", welcome);


//Higher-Order Functions

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, multiply));