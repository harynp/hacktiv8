var pageTitleElement = document.getElementById("fill-me");
var pageBoxElements = document.getElementsByClassName("change-all-of-me");
var pageHeadings = document.getElementsByTagName("h2");

var pageTitleElementContent = pageTitleElement.innerHTML = 'HALO !';
console.log('isi <div id="container"> :' + pageTitleElementContent);



for(var i = 0; i < pageBoxElements.length; i++) {
  var currentPageBoxElement         = pageBoxElements[i];
  var currentPageBoxElementContent  = currentPageBoxElement.innerHTML = 'HALO JUGA!';
  // console.log('isi <div class="page-box"> index ke ' + i + ': ' + currentPageBoxElementContent);
}

// var x = document.getElementsByTagName("h2");
// var i;
// for (i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "Apa Kabar!";
// }
// document.getElementsByTagName("h2")[0].innerHTML = "Apa Kabar!"; 	
pageHeadings[0].innerHTML = "Apa Kabar!"; 	