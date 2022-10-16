function toggleDropdown() {
    item = document.getElementById("head-right");
    cabeca=document.getElementById("header");
    if (item.style.display) {
        item.style.display = ""
        cabeca.style.height = ""
    } else {
        item.style.display = "flex"
        cabeca.style.height = "7.5rem"
        cabeca.style.height = "7.5rem"
    }
}