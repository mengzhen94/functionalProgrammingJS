import LoadImage from './load-image-callbacked'

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

LoadImage('image/cat1.jpg').then((img1) => {
  addImg(img1.src)
  LoadImage('image/cat2.jpg'.then((img2) => {
    addImg(img2.src)
    LoadImage('image/cat3.jpg').then((img3) => {
      addImg(img3.src)
    })
  })
})

// composate

Promise.all([
  LoadImage('image/cat1.jpg'),
  LoadImage('image/cat2.jpg'),
  LoadImage('image/cat3.jpg')
]).then((images) => {
  images.forEach(image => addImg(image.url))
}).catch((error) => {
  // handle error 
})
