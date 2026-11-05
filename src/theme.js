// Loaded in <head>, before the page paints, so it never flashes the wrong theme.
// Uses the visitor's saved choice, otherwise their system preference.
(function () {
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem("aura-luxe-theme");
  } catch (error) {
    // Storage can be blocked in private browsing. The system preference still works.
  }

  const useDark = savedTheme
    ? savedTheme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.documentElement.classList.toggle("dark", useDark);
})();
