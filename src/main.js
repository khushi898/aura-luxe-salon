// Shared by all four pages: mobile menu and dark mode button.

// MOBILE MENU
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.classList.toggle("hidden", isOpen);
  mobileMenu.classList.toggle("flex", !isOpen);
});

// DARK MODE
// The sun and moon icons swap through CSS (dark:hidden / dark:block).
const themeToggle = document.getElementById("theme-toggle");

themeToggle.setAttribute(
  "aria-pressed",
  String(document.documentElement.classList.contains("dark"))
);

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");

  themeToggle.setAttribute("aria-pressed", String(isDark));

  try {
    localStorage.setItem("aura-luxe-theme", isDark ? "dark" : "light");
  } catch (error) {
    // The theme still switches on this page if storage is blocked.
  }
});
