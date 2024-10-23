// const getStoredCart = () => {
//     const getStroedCartString = localStorage.getItem('cart')
//     if (getStroedCartString) {
//         return JSON.parse(getStroedCartString)
//     }
//     return []
// }

// const saveCartToLs = cart => {
//     const cartSringyfy = JSON.stringify(cart)
//     localStorage.setItem('cart', cartSringyfy)
// }

// const addToLs = (id) => {
//     const cart = getStoredCart();
//     cart.push(id);
//     saveCartToLs(cart)
// }

// export {addToLs}



// const getPreviousCartString = () => {
//     const cart = localStorage.getItem('cart')
//     if (cart) {
//         const cartParse = JSON.parse(cart)
//         return cartParse;
//     }
//     return []
// }

// const setLocalStroage=(cart)=>{
//     const cartString = JSON.stringify(cart)
//     localStorage.setItem('cart',cartString)
// }


// const addToLs = (id) => {
//     const getCart = getPreviousCartString()
//     getCart.push(id)
//     setLocalStroage(getCart)
// }



// export {addToLs}


const setLocalS = (cart) => {
    const cartString = JSON.stringify(cart)
    localStorage.setItem('cart', cartString)
}

const getPreviousCart = () => {
    const GetCart = localStorage.getItem('cart');
    if (GetCart) {
        const cartParse = JSON.parse(GetCart);
        return cartParse;
    }
    return []
}



const addToLs = (id) => {
    const cart = getPreviousCart()
    cart.push(id)
    setLocalS(cart)
}


// const removeFromLS = id => {
//     const cart = getPreviousCart();
//     const remaining = cart.filter(idx => idx !== id)
//     setLocalS(remaining);
// }

export { addToLs, getPreviousCart}