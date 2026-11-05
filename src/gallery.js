// Gallery page: category filters and image preview.

// FILTERS
const filterButtons = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    galleryItems.forEach((item) => {
      const show = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hidden", !show);
    });

    filterButtons.forEach((otherButton) => {
      otherButton.setAttribute("aria-pressed", String(otherButton === button));
    });
  });
});

// IMAGE PREVIEW
// <dialog> gives us focus trapping, the Esc key and focus return for free.
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");

document.querySelectorAll("[data-preview]").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");

    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.showModal();
  });
});

// A click on the dark area outside the image lands on the dialog itself.
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
