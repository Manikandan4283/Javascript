let cartCount = 0;

cartCount++;
cartCount++;

console.log(cartCount)


//function

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(500, 3));

const handleLogin = () => {
    console.log("Login clicked");
};


//reduce

const cart = [
    { product: "Laptop", price: 50000 },
    { product: "Mouse", price: 1000 },
    { product: "Keyboard", price: 2000 }
];

const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
);

console.log(total);


//destructuring

const user = {
    name: "Mani",
    age: 25
};

const{name,age}=user

console.log(name,age)




const API_URL = "/api/products";

const getProducts = async () => {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load products");
        }

        const products = await response.json();

        const activeProducts = products
            .filter(product => product.active)
            .map(product => ({
                ...product,
                displayPrice: `₹${product.price}`
            }));

        console.log(activeProducts);

    } catch (error) {

        console.error(error);

    }
};