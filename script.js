function toggleMenu() {
    var menu = document.getElementById("menuOptions");
    menu.classList.toggle("none")
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}