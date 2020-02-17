let url = "https://jsonplaceholder.typicode.com/todos";

//lets define our FETCH
fetch(url)
  .then(data => data.json())
  .then(newData => console.log(newData));
