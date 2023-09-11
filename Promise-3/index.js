function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') { 
        resolve('hello ' + name);
      } else {
        reject('Greet expects a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}


// Above we have two functions that return promises. 
// These are greet and uppercaser. 
// Notice below how we chain these promises together. The 
// Result of one is then passed to the next. 
// When chained all of the promises have to resolve for success. 
// If any of the promises reject then you end in the catch block. 

greet('string') // Returns a Promise
  .then(str => uppercaser(str))  // Upper case the results from greet() Returns a Promise
  .then(str => console.log(str)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error


  greet(5) // Returns a Promise
  .then(str => uppercaser(str))  // Upper case the results from greet() Returns a Promise
  .then(str => console.log(str)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error

uppercaser(5)
  .then(str => console.log(str))
  .catch(err => console.log(err))

// Challenges: get greet() to fail by passing a non string value
// What happens? 
  // Promise is rejected and error message is displayed.

// Challenge: get uppercaser() to fail by passing a non string value
// What happens? 
  // Promise is rejected and error message is displayed.

// Challenge: Notice there is only a single .catch() at the end. 
// Explain the behavior?
  // You can chain functions that return a promise. 
  // When chaining promises if any promise along the way rejects, 
  // all of the promises reject and you skip the catch callback.
