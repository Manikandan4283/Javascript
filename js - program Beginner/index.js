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

console.log(b)

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