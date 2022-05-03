/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */


/*
 * Создаём заголовок
 */
 
const titleEl = document.createElement('h1')
titleEl.classList.add('page-title')
titleEl.textContent = 'Это заголовок страницы'
// console.log(titleEl)

document.body.appendChild(titleEl)

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imgEl = document.createElement('img')
imgEl.src = "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imgEl.alt = 'valais-alpine-mountains-glacier';
imgEl.width = 320;
console.log(imgEl)

document.body.appendChild(imgEl)

const heroEl = document.querySelector('.hero')
// heroEl.appendChild(titleEl)
// heroEl.appendChild(imgEl)

heroEl.append( imgEl, titleEl) // за одну операцию добавляем сколько угодно элементов

/*
 * Создаём и добавляем новый пункт меню
 */

 const navItemEl = document.createElement('li')
 navItemEl.classList.add('site-nav__item')

 const navLinkEl = document.createElement('a')
 navLinkEl.classList.add('site-nav__link')
 navLinkEl.textContent = 'Личный кабинет'
 navLinkEl.href = '/profile'

navItemEl.appendChild(navLinkEl)
console.log(navItemEl)


const navEl = document.querySelector('.site-nav') // к ul добавили новую li в конец
// navEl.appendChild(navItemEl) 

navEl.insertBefore(navItemEl, navEl.firstElementChild) // первый
// navEl.insertBefore(navItemEl, navEl.lastElementChild) //  предпоследний
// navEl.insertBefore(navItemEl, navEl.children[3]) // куда угодно 