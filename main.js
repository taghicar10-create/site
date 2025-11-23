const nav = document.querySelector(".nav-links");
const toggle = document.querySelector(".menu-toggle");
const yearSpan = document.getElementById("year");
const form = document.querySelector(".contact-form");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const vehicle = formData.get("vehicle") || "vehicle";
    const confirmation = document.createElement("p");
    confirmation.className = "form-note";
    confirmation.textContent = `Thank you ${name}, the TAGHI CAR concierge will contact you shortly regarding the ${vehicle}.`;
    const existing = form.querySelector(".form-note.confirmation");
    if (existing) {
      existing.remove();
    }
    confirmation.classList.add("confirmation");
    form.appendChild(confirmation);
    form.reset();
  });
}
