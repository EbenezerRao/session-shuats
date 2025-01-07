const btn = document.getElementById("btn");
const container = document.getElementById("container");

async function clickHandler() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const dataToJson = await data.json();
    container.innerHTML = "";

    for (const key in dataToJson) {
        if (dataToJson.hasOwnProperty(key)) {
            const item = document.createElement("p");
            item.innerHTML = `<strong>${key}:</strong> ${dataToJson[key]}`;
            container.appendChild(item);
        }
    }
}

function mouseOutHandler() {
    container.innerHTML = "";
}

btn.addEventListener("click", clickHandler);

