const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

window.openModal = function(imageSrc) {
  imageModal.classList.remove("hidden");
  imageModal.classList.add("flex");
  modalImage.src = imageSrc;
}

window.closeModal = function() {
  imageModal.classList.add("hidden");
  imageModal.classList.remove("flex");
}