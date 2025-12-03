let menu = document.getElementById("menu");

function myFunction(x) {
    x.classList.toggle("change");

    let menuStyle = window.getComputedStyle(menu);

    if (menuStyle.height === "0px" || menuStyle.height === "0") {
        menu.style.height = "auto";
    } else {
        menu.style.height = "0";
    }
}
