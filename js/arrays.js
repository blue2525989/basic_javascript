/* declare an array */
var nums = [];

/* fill array with random numbers */
function fillArray(nums) {
    var i = 0;
    for (i; i < 100; i++) {
        var rand = (Math.random() * 100);
        nums[i] = rand.toPrecision(2);
    }
    return nums;
}

/* turn array into a string */
function printArray(nums) {
    var i = 0;
    var numStr = '';
    for (i; i < nums.length; i++) {
        numStr += nums[i] + ' ';
    }
    return numStr;
}

/* add string to html element */
function addStrToHTML(str) {
    document.getElementById("numStr").innerHTML = str;
}

/* load function on document load */
function loadStrToNodes(str) {
    document.onload = addStrToHTML(str);
}

/* bubble sort the array */
function bubbleSort(nums) {
    var i = 0;
    var j = 0;
    for (i; i < nums.length-1; i++) {
        for (j; j < nums.length-1; j++) {
            if (nums[j] > nums[j+1]) {
                var temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
}

/* call functions */
nums = fillArray(nums);
bubbleSort(nums);
var numStr = printArray(nums);
addStrToHTML(numStr);
loadStrToNodes(numStr);


