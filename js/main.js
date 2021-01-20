
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getData = (url, cb) => {
    let xhr = new XMLHttpRequest();
    // window.ActiveXObject -> new ActiveXObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                console.log('error');
            } else {
                cb(xhr.responseText);
            }
        }
    }
};

class Product {
    constructor(product, img = 'https://placehold.it/100x50') {
        let { product_name, price = 0, id_product } = product;
        this.title = product_name;
        this.img = img;
        this.price = price;
        this.id = id_product;
        this.rendered = false;
    }

    render() {
        this.rendered = true;
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3 class="title_cart">${this.title}</h3>
                      <p class="price_cart">${this.price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
    }
}

class ProductsList {
    constructor(container = '.products') {
        this.data = [];
        this.products = [];
        this.container = document.querySelector(container);
        this._fetchData()
            .then(() => this._render());
    }

    init() {}

    calcSum() {
        return this.products.reduce((accum, item) => accum += item.price, 0);
    }

    _fetchData() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.data = data;
                for (let dataEl of this.data) {
                    const product = new Product(dataEl);
                    this.products.push(product);
                }
            })
    }

    _render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }

            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

const getProduct = document.getElementsByClassName('buy-btn');

class Cart {
    constructor(cartConteiner, img = 'https://placehold.it/50x50') {
        let = { title_cart, price_cart, id_product } = cartConteiner;
        this.img = img;
        this.title = title_cart;
        this.price = price_cart;
        this.id = id_product;
        
    }

    renderCart() {
        return `<div class="cart_list">
                    <img src="${this.img}" alt="${this.title}">
                    <div class="desc_cart">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                </div>
                    <p class="cart_full-price">${this.fullPrice}</p>
                    <button class="btn_remove">Удалить</button>
                </div>`
    }
}

class CartList {
    constructor(productsCart = '.contaier-Cart') {
    fullPrice = [];
    this.productsCart = document.querySelector(productsCart);    
    }

    addProduct() {
        getProduct.addEventListener('click', () => {
            fullPrice
    }
}

const list = new ProductsList();
console.log(list.calcSum());


// const products = [
//     { id: 1, title: 'Notebook', price: 2000 },
//     { id: 2, title: 'Keyboard', price: 200 },
//     { id: 3, title: 'Mouse', price: 100 },
//     { id: 4, title: 'Gamepad' },
// ];
//
// const renderProduct = (product, img = 'https://placehold.it/100x50') => {
//     return `<div class="product-item">
//                  <img src="${img}" alt="${product.title}">
//                  <div class="desc">
//                      <h3>${product.title}</h3>
//                      <p>${product.price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };

// const renderProduct = (product, img = 'https://placehold.it/100x50') => {
//     const { title, price = 10 } = product;
//     return `<div class="product-item">
//                  <img src="${img}" alt="${title}">
//                  <div class="desc">
//                      <h3>${title}</h3>
//                      <p>${price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };

// const renderPage = productsList => {
//     // document.querySelector(`.products`).innerHTML = productsList.map(product => renderProduct(product)).join('');
//     const element = document.querySelector(`.products`);
//     let strElements = '';
//     for (let product of productsList) {
//         element.insertAdjacentHTML('beforeend', renderProduct(product));
//     }
// };
//
// renderPage(products);