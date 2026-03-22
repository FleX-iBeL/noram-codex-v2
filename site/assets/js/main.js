const header = document.querySelector(".home-header");
const menuToggle = document.querySelector(".menu-toggle");

if (header && menuToggle) {
  const mobileQuery = window.matchMedia("(max-width: 699px)");

  const syncMenuState = () => {
    if (!mobileQuery.matches) {
      header.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    }
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Sluit menu" : "Open menu"
    );
  });

  syncMenuState();
  mobileQuery.addEventListener("change", syncMenuState);
}
