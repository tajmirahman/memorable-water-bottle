import './Cart.css'

const Cart = ({cart, handleRemove}) => {
    console.log(cart)
    return (
        <div >
            <h4>Add To Cart</h4>
            <div >
               {
                cart.map(bottol=> <div key={bottol.id}>
                    <img className='cart-container' src={bottol.img}></img>
                    <button onClick={()=>handleRemove(bottol.id)}>Remove</button>
                </div>)
            }
            
            </div>
        </div>
    );
};

export default Cart;