const getStoreCart = () => {
    const storeCartString = localStorage.getItem('cart');

    if (storeCartString) {
        return JSON.parse(storeCartString)
    }

    return [];

}

const saveLocalStore = cart => {
    const cartStringfy= JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfy);
}

const addToLS= id=>{
    const cart= getStoreCart();
    cart.push(id);
    saveLocalStore(cart);
}

export { addToLS };