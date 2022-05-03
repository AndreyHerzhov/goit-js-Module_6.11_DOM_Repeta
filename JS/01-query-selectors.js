 const magicBtn = document.querySelector('.js-magic-btn')

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */


console.dir(document)
 
const navItemEl = document.querySelector('.site-nav__item') // null - если ничего не нашло
console.log(navItemEl)

const navLinkEl = document.querySelectorAll('.site-nav__link') // [] - пустой массив, если ничего не нашло
console.log(navLinkEl)
/*
 * Document.querySelector* и Element.querySelector*
 */