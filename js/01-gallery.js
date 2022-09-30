import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const IMG_NODE_NAME = "IMG";
const ESC_KEY_CODE = "Escape";

const galleryElements = {
    gallery: document.querySelector(".gallery"),
};

galleryElements.gallery.innerHTML = galleryItems.map(createGalleryItemMarkup).join("");
galleryElements.gallery.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    const { nodeName, dataset } = event.target;
    nodeName === IMG_NODE_NAME && showModal(dataset.source);
}

function showModal(src) {
    const onEscClose = ({ code }) => {
    code === ESC_KEY_CODE && modal.close();
};

    const modalMarkup = `<img src="${src}" width="800" height="600">`;

    const modalOptions = {
    onShow: () => {
        document.addEventListener("keydown", onEscClose);
    },
    onClose: () => {
        document.removeEventListener("keydown", onEscClose);
    },
};

    const modal = basicLightbox.create(modalMarkup, modalOptions);

    modal.show();
}

function createGalleryItemMarkup({ preview, original, description }) {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>
    `;
}