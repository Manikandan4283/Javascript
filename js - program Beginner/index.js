 //Find the sum of numbers from 1 to 100. 
let j =0;
for(let i = 1; i<=100; i++){
    
    j += i;
}
console.log(j)


// Reverse a string without using reverse().

let str = 'Mani'
 let b ='';
for (let i =str.length -1 ; i>=0; i-- ){
   
    b +=str[i]
}

console.log(b);

//Check whether a string is a palindrome.

let palStr = 'maam'
let palB=''

for(let i=palStr.length -1 ; i>=0; i--){
    palB +=palStr[i]
   
}
 if(palB === palStr){
        console.log('palindrome')
    }
    else{
        console.log('not palindrome')
    }


//Find the largest and small number in an array.

let arr =[47,63,23,39,18,53]
let large =arr[0];
let small =arr[0];

for (let i=0; i<arr.length; i++){
    if(large < arr[i]){
        large=arr[i]   
    }
    else if(small>arr[i]){
        small =arr[i]    
    }
}
console.log('large: ' + large)
console.log('small: ' + small)

//Count the vowels in a string.

let nameStr = 'Manikandan'
// let vowels ='aeiou'
let count =0

for (let i=0; i<=nameStr.length;i++){
    let aa = nameStr.toLocaleLowerCase();
    if (aa[i] === 'a' || aa[i] === 'e' || aa[i] === 'i' || aa[i] === 'o' || aa[i] === 'u' ){
        count++
    }

}

console.log(count)

//Swap two variables without using a third variable.

let a1 ='aa';
let b1 ='bb';

[a1, b1] = [b1, a1];

console.log("a =", a1);
console.log("b =", b1);

let a11 =10;
let b11 =20;

a11 = a11 + b11;
b11 = a11 - b11;
a11 = a11 - b11

console.log("a11 =", a11);
console.log("b11 =", b11);

