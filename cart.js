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
    const cartData = localStorage.getItem('cart');
    cart = JSON.parse(cartData)

    cart.forEach((i)=> {
        
        let item = document.createElement('div');
        item.innerHTML = `
        <div class="product">
        <div class="gallery">
        <img class="img" src="images/${products[i].image}">
        <div>
        <p class="name">${products[i].name}</p>
        <p class="price">$${products[i].price}</p>
        </div>
        <button class="remove">Remove</button>
        </div>
        </div>
        `
        const items = document.getElementById('items');

        item.getElementsByClassName('remove')[0].addEventListener('click', (e)=>{
            remove(i, e)
        });

        items.append(item)
    });
    tot();
}

load();

function tot(){
    let total = 0;
    cart.forEach((i)=> {
        total += products[i].price
    });
    document.getElementById('total').innerText = total;
}

function remove(i, e){
    for (let j = 0; j < cart.length; j++) {
        if(cart[j] === i){
            cart.splice(j, 1)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    
    e.target.parentElement.remove();
    tot();
    alert(`${products[i].name} removed from cart`)
    
}