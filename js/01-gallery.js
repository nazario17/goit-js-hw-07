import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, description }) => { 
    `<li class = "gallery__item">
      <img src="${preview}" alt="${description}">
    </li>`;
});


container.insertAdjacentHTML("beforeend", markup.join(""));

// console.log(galleryItems);
