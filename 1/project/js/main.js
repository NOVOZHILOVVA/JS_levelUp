`use strict`
const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
    { id: 5 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title = 'Undefined', price = undefined) => {
    return `<div class="product-item">
                <h3 class='h-cart'>${title}</h3>
                <p class='text-cart'>${price}</p>
                <img src="img/${title}.jpg" alt="">
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item =>
        renderProduct(item.title, item.price)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);
document.querySelector('.btn-cart').addEventListener('click', () =>
    document.querySelector('.basketRow').classList.toggle('hidden')
);