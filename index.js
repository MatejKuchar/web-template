/*Overlay gallery popup*/
const slideImages = document.querySelectorAll(".splide__slide img");
const slideImagesArr = Array.from(slideImages);
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay__inner img");
for (const image of slideImagesArr) {
  image.addEventListener("click", (e) => {
    overlay.classList.add("open");
    const src = e.currentTarget.src;
    const srcBig = src.replace("small", "big");
    overlayImage.src = srcBig;
  });
}
overlay.addEventListener("click", () => {
  overlay.classList.remove("open");
});
