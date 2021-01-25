

const products = [
    { id: 1, title:'IPhone 12Pro', price: '100 000р.' },
    { id: 2, title:'IPhone 12', price: '90 000р.' },
    { id: 3, title:'IPhone SE', price: '70 000р.'},
    { id: 4, title:'IPhone 11', price: '65 000р.'},
    { id: 5, title:'IPhone XR', price: '60 000р.'},
    { id: 6, title:'IPad Pro', price: '80 000р.'},
    { id: 7, title:'IPad Air', price: '70 000р.'},
    { id: 8, title:'iPad mini', price: '60 000р.'},
    { id: 9, title:'iPad', price: '75 000р.'},
    { id: 10, title:'MacBook Air', price: '100 000р.'},
    { id: 11, title:'MacBook Pro 13', price: '200 000р.'},
    { id: 12, title:'MacBook Pro 16', price: '250 000р.'},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <img class="img-product "src="img/eye.jpg" alt="myImage" width=120 height=80>
                <h3 class="title-text">${title}</h3>
                <p class="title-cost">${price} </p>
                <button class="search-result" type="get">Добавить</button>
            </div>`
};

const render = productsList => {
    const productsElements = productsList.map(item => renderProduct(item.title, item.price)).join('');
    document.querySelector('.products').innerHTML = productsElements;
    
};

render(products);
