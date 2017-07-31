// Video Two => Map
// Map transfer(change) the array

var animals =[
  {name: 'one', species: 'rabbit'},
  {name: 'two', species: 'dog'},
  {name: 'three', species: 'cat'},
  {name: 'four', species: 'dog'},
  {name: 'five', species: 'rabbit'},
  {name: 'six', species: 'cat'}
]

var names = [];
// First Solution

for(var i = 0; i < animals.length; i++){
  names.push(animals[i].name);
}

// Seconde Solution
names = animals.map((animal) => return animal.name);
names = animals.map((x) => x.name);
names = animals.map((animal) => {return animal.name + ' is a ' + animal.species});
console.log(names);
