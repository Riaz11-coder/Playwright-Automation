

let users = [
  { name: "John Doe", age: 30, email: "johndoe@example.com" },
  { name: "Jane Doe", age: 28, email: "janedoe@example.com" },
  { name: "Bob Smith", age: 40, email: "bobsmith@example.com" },
];

console.log(
  users.map((user) => `${user.name} - ${user.age} years old, ${user.email}`)
);

//let numbers = [1,2,3,4,5];

//function

// function maxNumArray(arr) {
//     return Math.max(...arr);
// };

//Arrow function - elminates the "function" key word, 
// the curly braces/return of the body which are replaced with an arrow syntax 
let maxNumArray = (arr) => Math.max(...arr);

//console.log(maxNumArray(numbers));

let add = (a,b) => a + b;

console.log(add(5, 3));

let logDone = async () => { return new Promise((resolve) => setTimeout(() => resolve("Done!"), 2000)); };

logDone().then(console.log);

// let { chromium } = require('playwright');


// (async () => {
//     let browser = await chromium.launch({headless: false});
//     let page = await browser.newPage();
//     await page.goto('https://bing.com');
//     console.log(await page.title());
//     await page.screenshot({ path: "./downloads/screenshot.png" });
//     await browser.close();
// })();

//three dots (...) are called rest parameters in JavaScript. 
// They allow us to pass an indefinite number of arguments to a function.
//They create an array from the arguments passed to the function.
let sumOfNumbers = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(sumOfNumbers(1,2,3,4,5));


//Spread operator is used to combine the elements of an array into a new array.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread operator
console.log(arr2); // [1, 2, 3, 4, 5]

const Numbers = [1, 2, 3, 4, 5];

// map: Multiply each number by 2
//const doubled = Numbers.map(num => num * 2);
//console.log(doubled); // [2, 4, 6, 8, 10]

// filter: Keep only even numbers
const evens = Numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce: Sum all numbers
const total = Numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // 15

let scores = [{ name: "Joe", score: 85 }, { name: "Jane", score: 92 }, { name: "Bob", score: 78  }];

let results = scores.filter(score => score.score >= 80);

console.log(results);


let products = [{productName: "Apple", price: 1 }, { productName: "Banana", price: 3 }, { productName: "Orange", price: 3}];

let totalPrice = products.reduce((acc, product) => acc + product.price ,0);

console.log(totalPrice);


function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 2000);
}

fetchData(data => console.log(data)); // Data loaded (after 2 sec)

let fetchData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000);
  });
};

fetchData2().then(console.log); // Data loaded (after 2 sec)


const fetchData3 = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data loaded"), 2000)
  );
};

const loadData = async () => {
  console.log("Loading...");
  const data = await fetchData3();
  console.log(data);
};

loadData();

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));


  const getPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/2"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getPost();
//Function declaration - Hoisted - therefore it can be called 
// before the it's decalaration in your class/file and will not 
// throw an error
  function greet(name) {
    return `Hello, ${name}!`;
  }

  console.log(greet("John"));
//Function expression - Non Hoisted - therefore will throw an error 
//if called before it's expression in your class/file.
  let greet2 = function(name) {
    return `Hello ${name}!`;
  }

  console.log(greet2("Jane"));
//Basic Arrow Function
  let greet3 = (name) => `Hello, ${name}!`;
  
  console.log(greet3("Bob"));
  //Arrow Function without parameters
  let sayHello = () => "Hello, world!";
  console.log(sayHello());
//Arrow Function with multiple parameters   
  let addition = (a, b) => a + b;
    console.log(add(3, 7)); // Output: 10
//Arrow Function with Default parameters
let greetings = (name = "Guest") => `Hello, ${name}!`;

console.log(greetings());       // Output: Hello, Guest!
console.log(greetings("David")); // Output: Hello, David!
//Arrow Functions with Rest parameters (...) allow a function 
//to accept multiple arguments as an array. 
//Similar to the elipse function in Java
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//Spread Operator is given like the Rest function (...), but allows 
//expanding an array into individual elements
//For example an entire arrays data can be included into an individual
//element of another array
const numerals = [1, 2, 3];
const newNumbers = [...numerals, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

//Spread Operator can also be used to copy objects 
// into other objects/Arrays


const person = { name: "Alice", age: 25 };
const newPerson = { ...person, location: "NYC" };

console.log(newPerson); // Output: { name: "Alice", age: 25, location: "NYC" }
//Function passing(Callback)
const calculate = (a, b, operation) => operation(a, b);

const adding = (x, y) => x + y;
const subtract = (x, y) => x - y;

console.log(calculate(5, 3, adding));       // Output: 8
console.log(calculate(5, 3, subtract));  // Output: 2

//Using Callbacks in setTimeout
setTimeout(() => console.log("Executed after 2 seconds"), 2000);

//Array of numbers - Arrays Method exaples below are 
//map, filter, reduce, forEach
const numbers = [1, 2, 3, 4, 5];

//map Method can be used to transform an Array w/out modifying 
//the original
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

//filter Method can be used to remove unwanted elements
const Evens = numbers.filter(num => num % 2 === 0);
console.log(Evens); // Output: [2, 4]

//reduce Method can be used to aggregate values and give the sum 
//of those values
const Sum = numbers.reduce((total, num) => total + num, 0);
console.log(Sum); // Output: 15

//forEach Method can be used to iterate over an Array
numbers.forEach((num) => console.log(num * 2));

//Callback funtion simulating a Database call
function fetchUserData(callback) {
  setTimeout(() => {
    console.log("✅ Data fetched");
    callback({ name: "Alice", age: 25 });
  }, 2000);
}

fetchUserData((user) => {
  console.log(`User: ${user.name}, Age: ${user.age}`);
});
//Converting the Callback function above to use a promise


const fetchUserDataPromisified = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = true;
        if(success) {
            resolve({ name: "Alice", age: 25 });
            console.log("Data fetched successfully");
        }else {
            reject("Failed to fetch data");
        }

        
      }, 2000);
    });

};

fetchUserDataPromisified()
.then((data) => console.log(data))
.catch((error) => console.error(error))
.finally(() => console.log("Operation completed successfully"));

const fetchUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Alice" }), 2000);
    });
};
//Promise chainning 
const fetchOrders = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Order1", "Order2"]), 2000);
    });
};

// Chaining Promises
fetchUser()
    .then(user => {
        console.log(`User: ${user.name}`);
        return fetchOrders(user.id);
    })
    .then(orders => console.log(`Orders: ${orders.join(", ")}`))
    .catch(error => console.error(error));



//Async/Await example 
const fetchUserDataAsync = async () => {

    try {
        let user = await fetchUser();
        console.log(`User: ${user.name}`);
    

        let orders = await fetchOrders();
        console.log(`Orders: ${orders.join(", ")}`);
    }catch(error){
        console.error(error);
    }
};

fetchUserDataAsync();