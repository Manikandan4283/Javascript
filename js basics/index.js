console.log('hello world')

function sum(...numbers) {
    console.log(numbers);
}

sum(2)


let a =1;
let b=0;

for(i=a;i<=100;i++){
    console.log(i)
}


for(i=a;i<=100;i++){
 if(i % 2 == 0){
      console.log("Even No: " + i)
 }
}

for(i=a;i<=100;i++){
 if(i % 2 != 0){
      console.log("Odd No: " + i)
 }
}

for(i=a;i<=100;i++){
  b +=i;
}
  console.log(b);

  let arr =[101,15,63,94,23,42]
  let arrNew=arr[0]
  let smallArr=arr[0]
  let profit=0
  let proArr=arr[0]

for(i=0;i<=arr.length;i++){

if(arrNew < arr[i]){
    arrNew=arr[i]
}
else if (smallArr > arr[i]){
    smallArr=arr[i]
}
  }
  console.log(arrNew,smallArr)

  // profit

  for(i=1;i<arr.length;i++){
    
    if( arr[i] < proArr){
        proArr =arr[i]

    }
    let currentProfit = arr[i] - proArr;

    if (currentProfit > profit) {
        profit = currentProfit;
    }


}
console.log(profit)

//Nullish Coalescing (??)

const marks = 0;
console.log(marks ?? '50')
console.log(marks || '50')

//Optional Chaining (?.)

const user1 = null;

console.log(user1?.name);

const user = {
  name: "Manikandan",
  age: 25
};

console.log(user?.name);

//while

let ii =1;
let jj =1;

while(ii <= 5){
    console.log(ii);
    ii++
}

do{
    console.log(jj)
    jj++
}while(jj<=6)


// for in
 
for(key in user){
    console.log(key, user[key])
}

const fruits = ["Apple", "Orange", "Mango"];

for(index in fruits){
    console.log(index, fruits[index])
}

//for of

for(fruit of fruits){
    console.log(fruit)
}

const users = [
    { name: "Mani" },
    { name: "Arun" },
    { name: "Ajay" }
];

for (let user of users) {
    console.log(user.name);
}

//break and continue

const usersb = ["Tamil", "English", "Maths", "Science"];

for (let user of usersb) {

    if (user === "Maths") {
        console.log("User Found");
        // break;
        continue;
    }

    console.log(user);
}
