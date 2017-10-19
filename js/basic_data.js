/* declare a variable and add it to html page */
var title = "Javascript Examples";
/* get element by id seems to only return one html tag despite there being more */
document.getElementById("title").innerHTML = title;
document.getElementById("title-h2").innerHTML = title;