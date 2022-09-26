import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElements = document.querySelector(".gallery");
const cardsMarkUp = createCardsMarkUp(galleryItems);

galleryElements.insertAdjacentHTML("beforeend", cardsMarkUp);
galleryElements.addEventListener("click", onClick);

function createCardsMarkUp(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
}

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  let gallery = new SimpleLightbox(".gallery__item", {
    captionDelay: 250,
    captionsData: "alt",
  });
  gallery.on("show.simplelightbox");
}