// LETS BUILD OUR XMLHTTPREQUEST OBJECT CALL

// Step 1: to set up our request

let xhr = new XMLHttpRequest();

console.log(xhr.readyState);
console.log(xhr.status);

// Step 2: create a function to deal with the response when its done

xhr.onreadystatechange = function() {
  // Getting sucess informations
  if (xhr.readyState == 4 && xhr.status == 200) {
    document.write("ALL DONE \n");
    console.log(xhr.readyState, xhr.status);
  }

  // Show the XMLHTTPREQUEST object
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr);
  }

  // Getting the informations of request response to fisrt object in array
  if (xhr.readyState == 4 && xhr.status == 200) {
    let data = JSON.parse(this.responseText)[0];
    console.log(data);
  }

  // Show data object in HTML
  if (xhr.readyState == 4 && xhr.status == 200) {
    let data = JSON.parse(this.responseText)[0];
    document.write(data, "\n");
    // console.log("\n");
  }

  // Show the content of data object in HTML
  if (xhr.readyState == 4 && xhr.status == 200) {
    let data = JSON.parse(this.responseText)[0];
    document.write(JSON.stringify(data, "\n"));
    console.log("\n");
  }
};

// Step 3: open and send our request

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
