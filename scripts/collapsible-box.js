//Below is taken from https://www.w3schools.com/howto/howto_js_collapsible.asp

/*var coll = document.getElementsByClassName("collapsible-data");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collapsible-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}*/

var coll = document.getElementsByClassName("collapsible-data");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collapsible-active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var expall = document.getElementById("expand-all");
var colall = document.getElementById("collapse-all");

expall.addEventListener("click", function(){
  for (i = 0; i < coll.length; i++) {
      var content = coll[i].nextElementSibling;
      if (content.style.display === "none" || content.style.display == "") {
        coll[i].classList.toggle("collapsible-active");
        content.style.display = "block";
      }
  }
});

colall.addEventListener("click", function(){
  for (i = 0; i < coll.length; i++) {
      var content = coll[i].nextElementSibling;
      if (content.style.display === "block") {
        coll[i].classList.toggle("collapsible-active");
        content.style.display = "none";
      }
  }
});