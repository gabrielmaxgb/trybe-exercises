const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  // Adicionar lógica aqui!


  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById("jokeContainer").innerText = data.joke);

};



const fetchJoke2 = (url) => {

    const myObject = {
        method: "GET",
        headers: { Accept: "application/json" },
      };

    if(url === "https://icanhazdadjoke.com/"){
        fetch(url, myObject)
            .then(response => console.log(response.json()));
    }
}

window.onload = () => fetchJoke2("https://icanhazdadjoke.com/");