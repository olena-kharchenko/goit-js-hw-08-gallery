import itemsDefault from './gallery-items.js';

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryList = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkup(itemsDefault);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
}

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
// // Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

/* 2 вариант создания разметки createElement
---------------------------------------------
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

galleryList.append(...itemsOfGallery);*/
