function showalert() {
  alert("Hello, welcome to my website!");
}
document.getElementById("clickbtn").addEventListener("click", showalert);


document.getElementById("hide").addEventListener("click", function() {
  document.getElementById("paragraph").style.display = "none";
});