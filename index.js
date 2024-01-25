const title = document.getElementById("title");
const btn = document.getElementById("hg");

btn.addEventListener("click", () => {
     console.log("Hello Git");
     title.style.color = "#48e";
     title.innerText = "Hola Git!";
})