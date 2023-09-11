// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
  //  When the promise is rejected, the function provided to the .catch method is invoked. 'Promise rejected! 😞' is printed then the promise is resolved with the printed messge "--- Oops ---"

// **2)** What happens when you call both `resolve` and `reject`? Test this.
  // Once a promise's state is set (either resolved or rejected), it cannot be changed. 
  // This means that if you reject a promise first, the resolve calls will have no effect, 
  // and vice versa. Whichever block is called first, gets run. 

// **3)** Does the order matter you call resolve and reject matter? Test this. 
  // Yes, the order does matter. Once a promise's state is set 
  // (either resolved or rejected), subsequent calls to resolve or 
  // reject will have no effect. 

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
  // Once a promise's state is set, further calls to resolve or reject have no effect.