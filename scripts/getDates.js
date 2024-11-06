const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

yearElement.innerText = new Date().getFullYear();

if (lastModifiedElement) {
    lastModifiedElement.innerText = document.lastModified
}
