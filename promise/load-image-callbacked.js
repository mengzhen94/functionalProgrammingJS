import 'babelify/polyfill'

/*
function loadImage(url, callback) {
  let image = new Image()

  image.onload = function() {
    callback(null, image)
  }

  image.onerror = function() {
    let message = 'Could not load image at' + url
    callback(new Error(message))
  }

  image.src = url

}
export default loadImage
*/

function loadImage(url) {
  return new Promise(resolve, reject) => {
    let image = new Image()

    image.onload = function() {
      resolve(image)
    }

    image.onerror = function() {
      let message = 'Could not load image at' + url
      reject(new Error(message))
    }

    image.src = url

  })
}
export default loadImage
