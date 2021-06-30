export function loadRandomImage() {
  var randomPhoto = Math.floor(Math.random() * 148) + 1; 
  console.log(randomPhoto);
  document.getElementById("carlos").src = "/images/carlos" + randomPhoto + ".jpg";
}
