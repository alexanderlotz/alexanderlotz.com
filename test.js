var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  /*var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;*/
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 20) {
    if (currentScrollPos > prevScrollpos) {
        document.getElementById("navbar").style.display = "none";
    } else {
        document.getElementById("navbar").style.display = "initial";
        document.getElementById("navbar").style.opacity = 0.8;
    }
  } else {
    document.getElementById("navbar").style.display = "initial";
    document.getElementById("navbar").style.opacity = 1;
  }
  prevScrollpos = currentScrollPos;
}
