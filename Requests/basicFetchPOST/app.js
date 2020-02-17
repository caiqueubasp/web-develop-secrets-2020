let customPost = {
  title: "Hello Word",
  body: "This is my story... blah, blah",
  userID: 1
};

let customHeader = {
  "Content-Type": "application/json; charset-UTF-8"
};

// lets puts a comment
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: customHeader,
  body: JSON.stringify(customPost)
})
  .then(response => response.json())
  .then(response => console.log(response));
