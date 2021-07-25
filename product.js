const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
        (item) => product.name === item.name
    );
    
    if (itemInCart){
        itemInCart.quantity++;
    }
    else{
        itemInCart={
            ...product, 
            quantity : 1,
        };
        newCart.push(itemInCart);
    }
    // console.log("added to cart");
    setCart(newCart);
    };

useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const removeFromCart = (productToRemove) =>(
    setCart(cart.filter(product => product !== productToRemove))
)
