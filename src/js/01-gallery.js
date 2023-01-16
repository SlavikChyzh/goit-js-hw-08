// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const imgMarkup = createGalleryItem(galleryItems);

function createGalleryItem(items) {
  return items.reduce(
    (acc, item) =>
      (acc += `<a class="gallery__item" rel="noopener noreferrer" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
      </a>
      `),
    ''
  );
}

gallery.insertAdjacentHTML('beforeend', imgMarkup);

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
