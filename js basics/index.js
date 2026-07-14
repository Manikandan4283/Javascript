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

for(i=0;i<=arr.length;i++){

if(arrNew < arr[i]){
    arrNew=arr[i]
}
else if (smallArr > arr[i]){
    smallArr=arr[i]
}
  }
  console.log(arrNew,smallArr)