Array.prototype.forEach = function(callback, argThis) {
  // check wheter the callback is a function
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  // we can continue our code here
  let len = this.length;

  //loop through our array
  for (var i = 0; i < len; i++) {
    // callback function goes here
    callback(this[i], i, this);
  }
};

let arr = ["milk", "honey", "sugar"];

arr.forEach(function(item, index, argThis) {
  console.log(this);
}, arr);
