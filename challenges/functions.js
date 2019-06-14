// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function add (x, y, cb) {
let addNums = x + y;
cb(addNums);
}
add (10, 20, (addNums) => {
console.log(addNums);
})


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (x, y, cb) {
  let addNums = x + y;
  cb(addNums);
}
add (10, 20, (addNums) => {
  console.log(addNums);
});

function multiply (x, y, cb) {
  let multiplyNums = x * y;
  cb(multiplyNums);
}
multiply (2, 10, (multiplyNums) => {
  console.log(multiplyNums);
});

function greeting (first, last, cb) {
  let sayHi = `Hello ${first} ${last}, nice to meet you!`;
  cb(sayHi);
};
greeting ('Johnny', 'Appleseed', (sayHi) => {
  console.log(sayHi);
});


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

/* Explanation: 
Nested is able to access the variable internal because it is nested inside of myFunction. It doesn't have a 
variable immediately there to use in the function, so it starts to look up in the scope chain and towards myFunction.
In myFunction, nested finds a value and is then able to invoke that in its own function. The concept of closures basically
desribes a situation in which a function doesn't have context. In that situation, the function will look in its environment
and move upwards in the scope until it finds context.
*/
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();