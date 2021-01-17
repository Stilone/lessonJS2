
class Product {
    constructor(product, img = 'https://placehold.it/100x50') {
        let { title, price = 0, id } = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

    render() {
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price}</p>
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
        this._fetchData();
        this._render();
        this.summ()
    }

  
    _fetchData() {
        this.data = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Keyboard', price: 200 },
            { id: 3, title: 'Mouse', price: 100 },
            { id: 4, title: 'Gamepad' },
        ];
    }


       

    _render() {
        for (let dataEl of this.data) {
            const product = new Product(dataEl);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
//задание 2.
    summ() {
        let total = 0
        const collectSumm = (product) => {
            total += product.price;
            return total;
        }
    
        this.products.forEach(collectSumm)
        return console.log(total);
    }

}



const list = new ProductsList();

//задание 1.
//Добавьте пустые классы для корзины товаров и элемента корзины товаров. 
//Продумайте, какие методы понадобятся для работы с этими сущностями.

    /*class Cart {
    constructor() {
        скорее всего тут нужно создать отдельный контейнер для отображения
    }
    Прошу извинить за не выполненное первое задание, чекал в гугле, чтобы про анализировать как там, чтобы написать,
    но там для Js подключают JQuery, поэтому я напишу со своих слов примерно...

    пустой массив для хранения товаров на которые нажали добавить в корзину
    
    метод, который будет добавлять по клику в массив товар

    метод, который будет выводить title и prise товаров считая стоимость.


    (возможно нужно сделать 2 класса, 1 для отображения корзины в Html,
         другой для добавления и отображения, но это не точно)

         на этой ноте я пойду спать, сильно не ругайте)) zZzZzZz
}*/


