console.log("Hoisting and closure");


//Hoisting

console.log(a);

var a =10;

greet();

function greet() {
    console.log("Hello Mani");
}


//Closure

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();



function bankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (amount > balance) {
                return "Insufficient balance";
            }

            balance -= amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount(1000);

console.log(account.deposit(500));  // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.getBalance());  // 1300