// Without ending condition => RangeError: Maximum call stack size exceeded

let countDownFrom = (num) => {
  console.log(num)
  if(num > 0) {
    countDownFrom(num - 1)
  }
}

let countDownFrom_1 = (num) => {
  if(num === 0) return;
  console.log(num)
  countDownFrom_1(num - 1)
}

countDownFrom_1(10)

let categories = [
  {id: 'animals', parent: null},
  {id: 'mammals', parent: 'animals'},
  {id: 'cats', parent: 'mammals'},
  {id: 'dogs', parent: 'mammals'},
  {id: 'persian', parent: 'cats'},
  {id: 'siamie', parent: 'cats'},
  {id: 'chiwawa', parent: 'dogs'},
  {id: 'ersha', parent: 'dogs'}
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(x => x.parent === parent)
    .forEach(x =>
      node[x.id] = makeTree(categories, x.id))
  return node
}

console.log(
  JSON.stringify(
    makeTree(categories, null)
    , null, 2)
);

/*
{
  animals: {
    mammals: {
      dogs: {
        chiwawa: {},
        ersha: {}
      },
      cats: {
        persian: {},
        siamie: {}
      }
    }
  }
}
*/
