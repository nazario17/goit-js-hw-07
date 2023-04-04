import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"> 
            <a class="gallery__link" href="${original}" >  
            <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />  
            </a>    
           </li>`
  )
  .join("");

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
  );
  modal.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.close();
    }
  });
}



function initLightbox() {
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: "bottom",
  });
}

initLightbox();
