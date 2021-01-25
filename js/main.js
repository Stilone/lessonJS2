
/*const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

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
                      <button class="buy_btn">Купить</button>
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


const list = new ProductsList();
console.log(list.calcSum()); 


const getProduct = document.getElementsByClassName('buy-btn');
const cartAlert = document.getElementsByClassName('contaier-Cart');
let cart = [];

const addProduct = (product, target) => {
        target.push(product);
        return target;    
}

const removeProduct = (index) => {
  cart.splice(index, 1);

render(cart);
};

window.removeProduct = removeProduct; 

const getList = (list) => {
    const getElement = (product, index) => {
        return `<li> ${product} <button onclick="removeProduct(${index})">Удалить</button> </li>`;
    } 

	return list.map(getElement);
}

const render = (list) => {
    const htmlList = getList(list)

    cartAlert.innerHTML = htmlList.join('');
}

getProduct.addEventListener('click', () => {
    cart = addProduct(getProduct.value, cart);
		render(cart);

inputText.value = '';

});*/


let str = ` One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
    One: 'Not too bad. The weather is great isn't it?'
    Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
    Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.' `


console.log(str.replace(/(\s'|'\s)/g, '"'));

const inputName = document.getElementById('get-name');
const inputEmail = document.getElementById('get-email');
const inputNumber = document.getElementById('get-number');
const sendBatton = document.getElementById('send-result');


const NameCheck = (name) => { 
    if(name != null && name.value.length < 3 ) {
    
    }
    
    
}

sendBatton.addEventListener('click', () => {
    resultElement.textContent = NameCheck(); 
   inputText.value = '';
});



