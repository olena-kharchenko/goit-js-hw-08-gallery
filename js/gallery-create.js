import itemsDefault from './gallery-items.js';

/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>; */

const galleryList = document.querySelector('.js-gallery');

/*
 * Пишем функцию для создания разметки галереи
 */

const createGalleryMarkup = elements => {
  return elements.map(element => {
    const listEl = document.createElement('li');
    listEl.classList.add('gallery__item');

    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = element.original;

    const imageEl = document.createElement('img');
    imageEl.classList.add('gallery__image');
    imageEl.src = element.preview;
    imageEl.dataset.source = element.original;
    imageEl.alt = element.description;

    linkEl.append(imageEl);

    listEl.append(linkEl);

    return listEl;
  });
};

const itemsOfGallery = createGalleryMarkup(itemsDefault);

galleryList.append(...itemsOfGallery);

console.log(galleryList);
