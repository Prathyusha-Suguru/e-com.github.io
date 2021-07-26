
let products = [
    {name:"dozen apple", image:"apple.jpg", price:12},
    {name:"1kg tomato", image:"tomato.jpg", price:33},
    {name:"blue jeans", image:"p1.jpeg", price:1500},
    {name:"dairy milk", image:"p1.jpg", price:80},
    {name:"Amul Dark Chocolate", image:"p2.jpeg", price:250},
    {name:"nutella spread", image:"3.jpg", price:750}
];

let cart = []


function load() {
    products.forEach((i, index)=> {
        
        let item = document.createElement('div');
        item.innerHTML = `
        <div class="product">
        <div class="gallery">
        <img class="img" src="images/${i.image}">
        <div>
        <p class="name">${i.name}</p>
        <p class="price">$${i.price}</p>
        </div>
        <button class="add">Add to cart</button>
        </div>
        `
        const items = document.getElementById('items');

        item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
            addTocart(index)
        });

        items.append(item)
    });
}

load();

function addTocart(index){
    cart.push(index)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${products[index].name} added to cart`)
}