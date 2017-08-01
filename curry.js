/*
let dragon = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!'

console.log(dragon('sdhow', 'tiny', 'lightning'))


let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'
// First
console.log(dragon('sdhow')('tiny')('lightning'))
// Second
let sdDragon = dragon('adhow')
console.log(sdDragon('tiny')('lightning'))
// Third
let sdDragon1 = dragon('adhow')
let TinyDragon = sdDragon1('tiny')
console.log(TinyDragon('lightning'))
// Fourth
let sdDragon2 = dragon('adhow')
let TinyDragon1 = sdDragon2('tiny')
let FinalDragon = TinyDragon1('Lightning')
console.log(FinalDragon)

*/

// Second Example
let dragons = [
  {name: 'one',   element: 'lightning'},
  {name: 'two',   element: 'fire'},
  {name: 'three', element: 'water'},
  {name: 'four',  element: 'lightning'},
  {name: 'five',  element: 'lightning'},
  {name: 'six',   element: 'fire'},
]

let hasElement = (element, obj) => obj.element === element
let LightningDragons = dragons.filter(x => hasElement('lightning', x))
console.log(LightningDragons)
