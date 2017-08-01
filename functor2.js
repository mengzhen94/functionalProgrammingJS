/*
A functor is an object that has a map method.
Arrays in JavaScript implement map and are therefore functors.
Promises, Streams and Trees often implement map in functional languages,
and when they do, they are considered functors.
The map method of the functor takes it’s own contents and transforms each of them
using the transformation callback passed to map, and returns a new functor,
which contains the structure as the first functor, but with the transformed values.
*/

/*
const name = dragons.map(dragon => dragon.name);
dragon => dragon.name is the tranformation function and it transform dragon to dragon's name
(dragon, i) => dragon.name ===> i is the array index
*/
