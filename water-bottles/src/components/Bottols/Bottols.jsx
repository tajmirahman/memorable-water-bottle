import { useEffect } from "react";
import { useState } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'
import { addToLS, getStoreCart, removeFromLs } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottols = () => {

    const [bottols, setBottols] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottols.json')
            .then(res => res.json())
            .then(data => setBottols(data))
    }, []);

    // load cart from localStorate

    useEffect(() => {
        if (bottols.length > 0) {
            const storeCart = getStoreCart();
            let saveCart = [];
            for (const id of storeCart) {
                // console.log(id);
                const bottol = bottols.find(bottol => bottol.id === id);
                if (bottol) {
                    saveCart.push(bottol);
                }
            }
            setCart(saveCart)
        }
    }, [bottols]);

    const handleAdToCart = (bottol) => {
        const newCart = [...cart, bottol];
        setCart(newCart);
        addToLS(bottol.id);
    }

    const handleRemove=id=>{

        // remove from ui
        const remaining=cart.filter(bottol=> bottol.id !== id);
        setCart(remaining);
        // remove from  local Storage
        removeFromLs(id);
        
    }


    return (
        <div>
            <h3>Bottols Available -{bottols.length}</h3>
            <Cart  
            cart={cart}
            handleRemove={handleRemove}
            ></Cart>

            <div className="bottols-container">
                {
                    bottols.map(bottol => <Bottol
                        key={bottols.id}
                        handleAdToCart={handleAdToCart}
                        bottol={bottol}></Bottol>)
                }

            </div>

        </div>
    );
};

export default Bottols;