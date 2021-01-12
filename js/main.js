

const products = [
    { id: 1, title:'название товара'},
    { id: 2, title:'название товара'},
    { id: 3, title:'название товара'},
    { id: 4, title:'название товара'},
    { id: 5, title:'название товара'},
    { id: 6, title:'название товара'},
    { id: 7, title:'название товара'},
    { id: 8, title:'название товара'},
    { id: 9, title:'название товара'},
    { id: 10, title:'название товара'},
    { id: 11, title:'название товара'},
    { id: 12, title:'название товара'},
];


const renderProduct = (title) => {
    return `<div class="product-item">
                <img class="img-product "src="img/eye.jpg" name="myImage" width=120 height=80>
                <h3 class="title-text">${title}</h3>
                <button class="search-result" type="get">Добавить</button>
            </div>`
};

const render = productsList => {
    const productsElements = productsList.map(item => renderProduct(item.title)).join('');;
    document.querySelector('.products').innerHTML = productsElements;
    
};


render(products);