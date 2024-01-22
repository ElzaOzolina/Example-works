function moreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var buttonText = document.getElementById("moreButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    buttonText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    buttonText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}