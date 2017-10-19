

/* prints pyramid in console window */
function printPyramid() {
    var count = 0;
    var i = 0;
    var pyramid = '';
    for (count; count < 10; count++) {
        while (i < count) {
            pyramid += '#';
            i++;
        }
        console.log(pyramid);
        /* only works on console log and not innerHTML */
        document.getElementById("pyramid").innerHTML += pyramid + '\n';

    }
}

/* create a function that grabs form data */
function getFormData() {
    var n = document.getElementById("n").value;
    fizzbuzz(n);
}

function fizzbuzz(n) {
    var response = '';
    if (n%5==0 && n%3==0) {
        response = 'FizzBuzz';
    } else if (n%5==0) {
        response = 'Fizz';
    } else if (n%3==0) {
        response = 'Buzz';
    } else {
        response = n;
    }
    alert(response);
}

function sayHello() {
   // alert("Hello Jason!");
}
