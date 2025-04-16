const menuButton = document.getElementById("menu-btn");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    const expanded = menuButton.ariaExpanded;
    menuButton.setAttribute("aria-expanded", expanded === "true" ? "false" : "true");
    navigation.classList.toggle("open")
})