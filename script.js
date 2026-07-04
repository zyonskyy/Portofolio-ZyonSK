/* NAVIGATION BAR */
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("message").innerText =
            "Pesan Berhasil Dikirim, TerimaKasih";
        this.reset();
    });

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Otomatis tutup menu setelah link diklik (khusus mobile)
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
