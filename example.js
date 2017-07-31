// Video One => Higher Order function
// functions as values
var triple = function triple(x) {
  return x * 3;
}

var sample = triple
sample(30);

// composation => composation allows us to reuse the small functions all of the places
// filter
var animals =[
  {name: 'one', species: 'rabbit'},
  {name: 'two', species: 'dog'},
  {name: 'three', species: 'cat'},
  {name: 'four', species: 'dog'},
  {name: 'five', species: 'rabbit'},
  {name: 'six', species: 'cat'}
]

// First solution
var dogs = [];
for(var i = 0; i < animals.length; i++){
  if(animals[i].species === 'dog'){
    dogs.push(animals[i]);
  }
}

// Second Solution
// filter function and filter function are composable
// function that you send it into another function called callback function
// function return true or false to the filter function
var dogs = animals.filter((animal) => {return animal.species === 'dog'});

// Third Solution
var isDog = (animal) => {return animal.species === 'dog'};
var dogs = animals.filter(isDog);
