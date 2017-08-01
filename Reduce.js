// Reduce Basics

// arr.reduce(callback[, initialValue])

// initialValue
// [Optional] Value to use as the first argument to the first call of the callback.
// If no initial value is supplied, the first element in the array will be used.
// Calling reduce on an empty array without an initial value is an error.

/*
[0, 1, 2, 3, 4].reduce(
  function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue;
  }
);
*/

var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325}
]

var sum = orders.reduce((sum, order) => {return sum + order.amount}, 0);
console.log(sum);

// Reduce Advanced
/*
{
  'Mark Johnson': [
    {name: 'one',   price: '80',  quantity: '2'},
    {name: 'two',   price: '200', quantity: '1'},
    {name: 'three', price: '10',  quantity: '4'}
  ],
  'Niki Smith': [
    {name: 'four',  price: '80',  quantity: '1'},
    {name: 'five',  price: '10',  quantity: '2'},
    {name: 'six',   price: '20',  quantity: '3'}
  ]
}
*/

var fs = require('fs')

var output = fs.readFileSync('dataForReduce.txt', 'utf8')
  .trim()
  .split('\n')
   .map((line) => line.split(' '))
   .reduce((customers, line) => {
     customers[line[0]] = customers[line[0]] || []
     customers[line[0]].push({
       name: line[1],
       price: line[2],
       quantity: line[3]
     })
     return customers
   }, {});


 var output = fs.readFileSync('dataForReduce.txt', 'utf8')
   .trim()
   .split('\n')
    .map((line) => line.split(' '))
    .reduce((customers, [name, price, quantity]) => {
      customers[name] = customers[name] || []
      customers[name].push({name, price, quantity})
      return customers
    }, {});

console.log('output', output);
