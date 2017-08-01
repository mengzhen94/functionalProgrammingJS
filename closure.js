// Closures

// A closure is the combination of a function and the lexical environment
// within which that function was declared.

// function are closures => function body has access to the variables from outside scope
var name = 'Bruce Wayne'
function greetMe() {
  console.log('Hello, ' + name + '!')
}
name = 'BatMan' // => will console log batman
greetMe()

function sendRequest() {
  var requestId = 123;
  $.ajax({
    url: '/myurl',
    success: function(response) {
      console.log('Request' + requestId + 'done!')
    }
  })
}

// Make adder
// adder will return a function and assign it to the add5 and add10
function adder(x) {
  return function(y) {
    return x + y;
  }
}
var add5 = adder(5);
var add10 = adder(10);
// since add5 and add10 is a function so it takes an argument and return int result
console.log(add5(2));
console.log(add10(2));

// counter
// It’s an Immediately-Invoked Function Expression,
// or IIFE for short. It executes immediately after it’s created.

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val){
    return privateCounter += val;
  }
  return {
    increment : function(){
      changeBy(1);
    },
    decrement: function(){
      changeBy(-1);
    },
    value : function(){
      return privateCounter;
    }
  };
})();

console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());

// Second Solution
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();


// Performance
/*
It is unwise to unnecessarily create functions within other functions if closures are not needed
for a particular task, as it will negatively affect script performance both in terms of processing
speed and memory consumption.

For instance, when creating a new object/class, methods should normally be associated to the
object's prototype rather than defined into the object constructor.
*/
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    this.getMessage = function() {
        return this.message;
    };
}).call(MyObject.prototype);
