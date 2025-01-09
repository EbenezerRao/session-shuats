let currentOffset = 0;
let currentQuery = '';
let isLoading = false;

async function fetchGifs(query, offset = 0) {
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=oha3Nsu0SNo5h3pL7D9HUvo5DArIxvwG&limit=${limit}&offset=${offset}`; //! It is not recommended to use the API_KEY in the url itself its Publicly. It is better to use it in the headers.
    const resp = await fetch(url);
    const data = (await resp.json()).data;
    return data;
}

function createGifCard(gifData) {
    const url = gifData.images.original.url;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${url}" alt="gif">
        <div class="comment-box">
            <textarea placeholder="Add a comment..."></textarea>
            <button onclick="saveComment(this)">Save Comment</button>
        </div>
    `;
    return card;
}

async function submit() {
    const container = document.getElementById('container');
    const query = document.getElementById('input').value;
    if (!query) return;

    // Reset everything for new search
    container.innerHTML = '';
    currentOffset = 0;
    currentQuery = query;

    const data = await fetchGifs(query);
    data.forEach(element => {
        container.appendChild(createGifCard(element));
    });
}

// Setup Intersection Observer for infinite scroll
const observerTarget = document.getElementById('observer-target');
const observer = new IntersectionObserver(async (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && currentQuery && !isLoading) {
        isLoading = true;
        currentOffset += 10;
        const container = document.getElementById('container');
        const data = await fetchGifs(currentQuery, currentOffset);
        data.forEach(element => {
            container.appendChild(createGifCard(element));
        });
        isLoading = false;
    }
});

observer.observe(observerTarget);