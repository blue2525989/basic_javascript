/* how to define an object */
var cat = {
    name : 'Chief',
    age : 12,
    weight : 'fat ass'
};

/* sets cat object to specific elements */
function loadCat() {
    document.getElementById("name").innerHTML = cat.name;
    document.getElementById("age").innerHTML = cat.age + '';
    document.getElementById("weight").innerHTML = cat.weight;
}

/* write function that add the cat object to nodes on page load */
function addCatToNodes() {
    document.onload = loadCat();
}
/* call function */
addCatToNodes();