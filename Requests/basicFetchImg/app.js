// define our url
url = "https://randomuser.me/api/";

// Fetch API

fetch(url)
  .then(responseOne => responseOne.json())
  .then(function(responseTwo) {
    let user = responseTwo.results[0];
    console.log(user);
    // for each user we get lets display the user on the screen
    let li = document.createElement("li");
    let img = document.createElement("img");
    let p = document.createElement("p");
    // next lets add a source attribute so that we can actually see the picture
    img.src = user.picture.large;
    // lets add the person name below the img
    p.innerHTML = `${user.name.first} ${user.name.last}`;
    // lets now add all elements in the DOM
    li.appendChild(img);
    li.appendChild(p);
    document.getElementById("user").appendChild(li);
  })
  .catch(error => console.log("Ooops there are a error", error));
