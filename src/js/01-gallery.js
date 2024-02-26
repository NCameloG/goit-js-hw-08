// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGalleyItem = createGalleyMakeup(galleryItems);

function createGalleyMakeup(gallery) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
      <a class="gallery__item" href="${original}" >
        <img 
        class= "gallery__image" 
        src="${preview}"
        alt="${description}"/>
      </a>`,
    )
    .join(' ');
}

galleryContainer.insertAdjacentHTML('beforeend', createGalleyItem);

const lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: '250ms',
});
