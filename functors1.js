// http://functionaljavascript.blogspot.ca/2013/07/functors.html
/*  a functor is a function, that, given a value and another function,
  unwraps the values to get to its inner value(s), calls the given function with the inner value(s),
  wraps the returned values in a new structure, and returns that new structure.
*/

function stringFunction(value, fn) {
  var chars = value.split("")
  return chars.map((char) => {
    return String.fromCharCode(fn(char.charCodeAt(0)))
  }).join("")
}


function plus1(value) {
  return value + 1
}

function minus1(value) {
  return value - 1
}

console.log(stringFunction("ABC", plus1))
console.log(stringFunction("ABC", minus1))
