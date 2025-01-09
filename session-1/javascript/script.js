const btn = document.getElementById("btn");
const container = document.getElementById("container");

async function clickHandler() {
	const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
	const dataToJson = await data.json()
	// console.log(dataToJson)
	container.innerHTML = JSON.stringify(dataToJson)
}

function mouseOutHandler() {
	container.innerHTML = "";
}

btn.addEventListener("click", clickHandler);
// btn.addEventListener("mouseover", clickHandler);
// btn.addEventListener("mouseout", mouseOutHandler);