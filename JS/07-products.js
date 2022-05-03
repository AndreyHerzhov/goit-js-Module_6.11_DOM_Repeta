import products from './data/products.js';
console.log(products)
 
/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */
 
 



 
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/
 

 

/*
 * Пишем функцию для создания карточки продукта
 */


const makeProductsCard = ({name, description, price}) => {
  const productEl = document.createElement('article')
  productEl.classList.add('product')
  
  const nameEl = document.createElement('h2')
  nameEl.textContent =  name
  nameEl.classList.add('product__name')
  
  const descrEl = document.createElement('p')
  descrEl.textContent =  description;
  descrEl.classList.add('product__descr')
  
  const priceEl = document.createElement('p')
  priceEl.textContent = `Цена: ${price}`;
  priceEl.classList.add('product__price')
  
  productEl.append(nameEl, descrEl, priceEl)

  return productEl;
}

// console.log(makeProductsCard(products[1]))

const productsContainerElement = document.querySelector('.js-products')



const elements = products.map(makeProductsCard) // ссылка на внешнею функцию 
productsContainerElement.append(...elements)
console.log(elements)