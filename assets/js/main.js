function imageSwap(image) {
  document.getElementById(image).src = 'assets/img/' + image + '_2.jpg'
}

function imageRevert(image) {
  document.getElementById(image).src = 'assets/img/' + image + '.jpg'
}
