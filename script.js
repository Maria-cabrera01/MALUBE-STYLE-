document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown > a").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            let submenu = this.nextElementSibling;
            submenu.classList.toggle("show");
        });
    });
});

// Cerrar submenús si se hace clic fuera de ellos
document.addEventListener("click", function (e) {
    if (!e.target.matches('.dropdown > a')) {
        document.querySelectorAll(".submenu").forEach(submenu => {
            submenu.classList.remove("show");
        });
    });