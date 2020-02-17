let arr1 = ["milk", "protein", "sugar"];
let arr2 = [];

arr1.forEach(function(item, index) {
  arr2.push("$(item) has been add as number $(index)");
  console.log(this);
  arr1;
}, arr2);

///// Custom forEach polyfill

Array.prototype.forEach = function(callback, argThis) {
  // check wheter the callback is a function
  if (typeof callback != "function") {
    throw new TypeError(callback + " is not a function");
  }

  // we can continue our code here
  console.log("Yes we can continue");
};

let arr = ["milk", "honey", "sugar"];

arr.forEach(function() {});
