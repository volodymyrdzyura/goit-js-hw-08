// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createGallery(galleryItems));

new SimpleLightbox(".gallery a", {
  animationSpeed: 150,
  captionsData: "alt",
  captionDelay: 150,
});