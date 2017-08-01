/*
  Monad is a factor that implements flatmap
*/
// Bus is an EventStream that allows you to push values into the stream.

const Bacon = require('baconjs')
const stream = new Bacon.Bus()

stream
  .map(word => word.toUpperCase())
  .onValue(word => console.log(word))

stream.push('cat')
stream.push('dog')
stream.push('rabbit')


/*
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline,
such as requests and responses.
It also provides a global fetch() method that provides an easy,
logical way to fetch resources asynchronously across the network.
*/
/*
https://www.sitepoint.com/introduction-to-the-fetch-api/
The Fetch API provides a fetch() method defined on the window object, which you can use to perform requests.
This method returns a Promise that you can use to retrieve the response of the request.
*/
var URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=your_api_key&format=json&nojsoncallback=1&tags=penguins';

function fetchDemo() {
  fetch(URL).then(function(response) {
    return response.json();
  }).then(function(json) {
    insertPhotos(json);
  });
}

fetchDemo();


// flatmap
['a','b','c'].flatMap(function(e) {
    return [e, e+ 'x', e+ 'y',  e+ 'z'  ];
});
//['a', 'ax', 'ay', 'az', 'b', 'bx', 'by', 'bz', 'c', 'cx', 'cy', 'cz']


['a','b','c'].map(function(e) {
    return [e, e+ 'x', e+ 'y',  e+ 'z'  ];
});
//[Array[4], Array[4], Array[4]]
