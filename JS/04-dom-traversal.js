/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

 const navEl = document.querySelector('.site-nav')
console.log(navEl)

// const firstNavItemEl = document.querySelector('.site-nav__item')
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl)

console.log(navEl.children)