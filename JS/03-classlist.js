const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

 
// const navEl = document.querySelector('.site-nav')
// console.log(navEl.classList)
// navEl.classList.add('super-cool')
// navEl.classList.remove('site-nav') 
// console.log(navEl.classList.contains('super-cool'))

// navEl.classList.replace('site-nav', 'qwe')

// magicBtn.addEventListener('click', () => {
//   navEl.classList.toggle('qwe')
// })
 

const currenPageUrl = "/about";

const linkEl = document.querySelector(`.site-nav__link[href="${currenPageUrl}"]`)
console.log(linkEl)

linkEl.classList.add('site-nav__link--current')
