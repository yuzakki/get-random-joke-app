let btn = document.querySelector(".btn");
let joke = document.querySelector("#joke");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function getJoke() {
  // Create a new XMLHttpRequest object
  let request = new XMLHttpRequest();
  // Set up the request
  request.open("GET", url, true);
  // Define a callback function to handle the response
  request.onload = function() {
    if (request.status === 200) {
      let response = JSON.parse(request.responseText);
      // Process the response data
      joke.textContent = response.joke;
    }
  };
  // Send the request
  request.send();
}
btn.addEventListener("click", getJoke);

// Run a random joke by default
getJoke()