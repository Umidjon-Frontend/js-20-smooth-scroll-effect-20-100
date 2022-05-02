const items = document.querySelectorAll(".nav-list li a");

items.forEach((item) => {
    item.addEventListener("click", smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}
