function fun() {
  return "mani";
}

console.log(fun());

function userLog() {
  console.log("user loged in...");
}

userLog();

async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  let data = await response.json();

  console.log(data);
}

getUsers();
