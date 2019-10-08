// Storing in expressions

function demofunction(a, b) {

    // Code to be Executed
    return a * b;
}

var x;

function demo() {
    var y;
}



var varname = demofunction

// 
var numbers = {
    first: 1,
    second: 2,
    add: function() {
        return this.first * this.second;
    }
}

numbers.add();



var x = [4, 5, 6];

document.getElementById("demo1").innerHTML = x[0];
document.getElementById("demo2").innerHTML = x[1];
document.getElementById("demo3").innerHTML = x[2];

x[0] = 7;
x[1] = 8;
x[2] = 9;


// Declaring with Constructors Syntax 

var sumVar = new Function(code_to_be_executed);