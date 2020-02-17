function requestListener() {
  console.log("this is what the request NOW looks like", this);

  //lets convert the response text into JSON
  let data = JSON.parse(this.responseText);
  console.log("the response text is converted to JSON", data);
  let user = data.results[0];
  console.log("the user now looks like", user);

  // extract data we would like to use and display on our page

  let firstName = user.name.first;
  let lastName = user.name.last;
  let picture = user.picture.large;
  console.log(firstName);

  // lets create our HTML Elements
  let li = document.createElement("li");
  let img = document.createElement("img");
  let p = document.createElement("p");

  img.src = picture;
  p.innerHTML = `${firstName} ${lastName}`;

  // append these items to our HTML
  document.getElementById("user").appendChild(li);
  li.appendChild(img);
  li.appendChild(p);
}

function requestError() {
  console.log("oops, I did it again");
}

/// SET UP OUR REQUEST

let url = "https://randomuser.me/api/";
let method = "GET";

// create a new XMLHttpRequest object

let xhr = new XMLHttpRequest();
console.log("this is like our request looks initialy", xhr);

// open conection with the server

xhr.open(method, url, true);

// when the user has been retrived from the server, lets do something
// we will use onload(), remember that onload() is executed when the request is complete and sucesfull

xhr.onload = requestListener;

// now lets handler our error
xhr.onerror = requestError;

// send the request
xhr.send();
