function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  let meal = '';
  switch(timeOfDay.toLowerCase()) {
    case "breakfast":
      meal = "Eggs on toast";
      break;
    case "lunch":
      meal = "Ramen";
      break;
    case "dinner":
      meal = "Dosa";
      break;
  }
  return new Promise((resolve, reject) => {
    if (meal != '') { 
        resolve(meal);
      } else {
        reject("I'm not hungry right now");
      };
    })
    .then(food => console.log(food))
    .catch(err => console.log(err))
}

// whatToEat should return a promise. 
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
// If the `timeOfDay` is anything else reject the promise with 
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here: 

whatToEat('breakfast')
whatToEat('lunch')
whatToEat('dinner')

// Handle this Promise: 
whatToEat('elevens')
