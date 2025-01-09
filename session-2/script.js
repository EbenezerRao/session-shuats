// fetch gifs
async function fetchGifs(query) {
    // const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=oha3Nsu0SNo5h3pL7D9HUvo5DArIxvwG&limit=${limit}&offset=${offset}`;

    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=oha3Nsu0SNo5h3pL7D9HUvo5DArIxvwG&limit=10`;  //! It is not recommended to use the API_KEY in the url itself its Publicly. It is better to use it in the headers.
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data.data;
}

// create gif card
function createGifCard(gifData) {
    const url = gifData.images.fixed_width.url;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src = "${url}" />
    `
    return card;
}


// submit function
async function submit() {
    const container = document.getElementById("container");
    const query = document.getElementById("input").value;

    const data = await fetchGifs(query);
    for (let i = 0; i < data.length; i++) {
        const card = createGifCard(data[i]);
        container.appendChild(card);
    }
}



// intersection observer for infinite scroll
