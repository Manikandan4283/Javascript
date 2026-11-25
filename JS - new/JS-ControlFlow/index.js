console.log('Control flow')


// if
// else
// switch
// for
// while
// do while

//if & else

const age = 25;

if(age >= 18){
    console.log("if -- eligible")
}
else{
    console.log("not eligible")
}


// switch

const rank = 'A'

switch(rank){
    case "A":
        console.log("pass")
    break;
    case "B":
        console.log("Fail")

    default:
        console.log("Invalid")

}

//for

const arr =[1,2,3,4]
const arr2=[]

for(i=0;i<arr.length;i++){
   arr2[i] = arr[i]
}

console.log(arr2)

//while

let num =1;

while(num<=5){
    console.log(num)
    num ++;
}

//do while
let num2 =1;

do{
     console.log(num2)
    num2 ++;
}while(num2<=5)