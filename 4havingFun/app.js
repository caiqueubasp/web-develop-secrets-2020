let span = document.getElementsByTagName("span")[0];
// change the DOM text of the span
span.innerHTML = "I've been changed by Javascript!";
span.style.display = "inline";
// add another html element with JS
let name = "Wally";
let displayText = "Welcome '${name}' ";
let newDiv = document.createElement("div");
newDiv.textContent = displayText;
newDiv.style.color = "green";
document.body.appendChild(newDiv);
