/* Make dynamic date appear */
(function () {
    if (document.getElementById("get-current-year")) {
        document
            .getElementById("get-current-year")
            .innerHTML = new Date().getFullYear();
    }
})();
/* Function for opening navbar on mobile */
function toggleNavbar(collapseID) {
    document
        .getElementById(collapseID)
        .classList
        .toggle("hidden");
    document
        .getElementById(collapseID)
        .classList
        .toggle("block");
}
/* Function for dropdowns */
function openDropdown(event, dropdownID) {
    let element = event.target;
    while (element.nodeName !== "A") {
        element = element.parentNode;
    }
    Popper.createPopper(
        element,
        document.getElementById(dropdownID),
        {placement: "bottom-start"}
    );
    document
        .getElementById(dropdownID)
        .classList
        .toggle("hidden");
    document
        .getElementById(dropdownID)
        .classList
        .toggle("block");
}
function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }
