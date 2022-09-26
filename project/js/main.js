`use strict`
class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());

        }
    }

    getSum() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;
        });
    }
}


class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
    }

    render(title = 'Undefined', price = undefined) {
        return `<div class="product-item" data-id="${this.id}" data-name="${this.title}" data-price="${this.price}">
                <h3 class='h-cart'>${this.title}</h3>
                <p class='text-cart'>${this.price}</p>
                <img src="img/${this.title}.jpg" alt="">
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class BasketList {
    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }

    render() {

    }
}


class BasketItem {
    render() {

    }
}


let list = new ProductList();


document.querySelector('.btn-cart').addEventListener('click', () =>
    document.querySelector('.basket').classList.toggle('hidden')
);




/* 
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
); */