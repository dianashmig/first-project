const menu = document.querySelector("#mobile-navigation");
const menuButton = document.querySelector(".btn__menu:not(.btn__menu--close)");
const closeButton = document.querySelector(".btn__menu--close");

function openMenu() {
    document.body.classList.add("menu--open");
    menu.setAttribute("aria-hidden", "false");
    menuButton.setAttribute("aria-expanded", "true");
    closeButton.focus();
}

function closeMenu() {
    document.body.classList.remove("menu--open");
    menu.setAttribute("aria-hidden", "true");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

menu.addEventListener("click", (event) => {
    if (event.target === menu) {
        closeMenu();
    }
});

menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("menu--open")) {
        closeMenu();
    }
});

document.querySelector("#signup-form").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#signup-message").textContent =
        "This demo is front-end only. Connect a signup service to collect email addresses.";
});

const testimonials = [
    {
        title: "Amazing User Experience",
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        name: "Charlotte Hale",
        role: "Director, Delos Inc."
    },
    {
        title: "Everything We Needed",
        quote: "The templates are thoughtfully designed, easy to customize, and helped our team get a polished new project off the ground in no time.",
        name: "Sarah Johnson",
        role: "Founder, Clearpath"
    }
];

let activeTestimonial = 0;

document.querySelectorAll("[data-testimonial]").forEach((button) => {
    button.addEventListener("click", () => {
        activeTestimonial = button.dataset.testimonial === "next"
            ? (activeTestimonial + 1) % testimonials.length
            : (activeTestimonial - 1 + testimonials.length) % testimonials.length;

        const testimonial = testimonials[activeTestimonial];
        document.querySelector(".testimonial__title").textContent = testimonial.title;
        document.querySelector(".testimonial__quote").textContent = testimonial.quote;
        document.querySelector(".testimonial__name").textContent = testimonial.name;
        document.querySelector(".testimonial__role").textContent = testimonial.role;
    });
});
