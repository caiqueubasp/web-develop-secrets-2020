let getData = (url, callback) => {
  // step 1 of creating XMLHttpRequest: creating an instance of the XMLHttpRequest object

  let xhr = new XMLHttpRequest();

  // open the request

  xhr.open("GET", url, true);

  // the response type value defines what type of response we expect
  xhr.responseType = "json";

  // lets use the onload() method, onload() was later wheareas onreadystatechange has been around since par fall of the bus.
  xhr.onload = () => {
    let status = xhr.status;
    if (status == 200) {
      callback(null, xhr.response);
    } else {
      callback(status);
    }
  };

  // step3:  send the request
  xhr.send();
};

// first step is to create our very own function

getData("http://date.jsontest.com", (error, data) => {
  if (error != null) {
    console.log("OOPS", error);
  } else {
    let txt = ` at ${data.time} `;
    document.querySelector("h1").append(txt);
  }
});

// setInterval(getData, 1000);
