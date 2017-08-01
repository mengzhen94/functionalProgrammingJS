// Callback: when the thing is done, this will be executed
// Promises are, just like callbacks, a way of dealing with things being asynchronous

import LoadImagePromised from './load-image-promised'

LoadImagePromised('image/cat.jpg')
  .then((img) => {
    let imageElement = document.createElement("img");
    imageElement.src = img.src
    document.body.appendChild(imageElement)
  })

// Equals to
let imgLoaded = LoadImagePromised('image/cat.jpg')
imgLoaded.then((img) => {
  let imageElement = document.createElement("img");
  imageElement.src = img.src
  document.body.appendChild(imageElement)
})

// error
LoadImagePromised('image/cat.jpg')
  .then((error, img) => {
    let imageElement = document.createElement("img");
    imageElement.src = img.src
    document.body.appendChild(imageElement)
  })


// When there are many cats
let addImg = (src) => {
  let imgElment = document.createElement('img')
  imgElment.src = src
  document.appendChild(imgElment)
}

LoadImageCallbacked('image/cat1.jpg', (error, img1) => {
  if(error) throw error
  addImg(img1.src)
  LoadImageCallbacked('image/cat2.jpg', (error, img2) => {
    if(error) throw error
    addImg(img2.src)
    LoadImageCallbacked('image/cat3.jpg', (error, img3) => {
      if(error) throw error
      addImg(img3.src)
    })
  })
})
