function fun() {
  return "mani";
}

console.log(fun());

function userLog() {
  console.log("user loged in...");
}

userLog();

// async function getUsers() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");

//   let data = await response.json();

//   console.log(data);
// }

// getUsers();

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));

function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest([1, 2, 3, 122, 43, 54, 89, 90, 4, 5]));
