// console.log(a);
// const a = 10; //var=>undefined let,const=>Reference Error bcoz TDZ

var a = 10;

function test() {
    console.log(a);
}

(function () {
    var a = 20;
    test();
})();

var a = 10;

function test() {
    console.log(a);
}

function demo() {
    var a = 30;
    return test;
}

var fn = demo();
fn();

var a = 10;

function outer() {
    function inner() {
        console.log(a);
    }

    var a = 20;

    return inner;
}

var fn = outer();
fn();

var a = 10;

function test() {
    console.log(a);
    var a = 20;
}

test();


var a = 10;

function test() {
    a = 20;
    console.log(a);
    var a;
}

test();

console.log(a);
var a = 1;

function test1() {
    console.log(a);

    var a = 2;

    function a() {}

    console.log(a);
}

test1();