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
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}"> 
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
</div>`;
    })
    .join("");
}

function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
    return;
    }

    const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
    );
    instance.show();

    window.addEventListener("keydown", onEscClose);

    function onEscClose(event) {
    if (event.code === "Escape") {
        window.removeEventListener("keydown", onEscClose);
        instance.close();
    }
    }
}