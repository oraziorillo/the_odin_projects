const container = document.querySelector("#container");

const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement("div");
// div.style.border = "black solid 4px";

const h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I'm in a div";
div.appendChild(h1InDiv);

const pInDiv = document.createElement("p");
pInDiv.textContent = "ME TOO!";
div.appendChild(pInDiv);

container.appendChild(div);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

btn2.addEventListener("click", alertFunction);
