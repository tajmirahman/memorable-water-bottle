import './Bottol.css'

const Bottol = ({ bottol, handleAdToCart }) => {
    // console.log(bottol);

    const { name, img, price } = bottol;

    return (
        <div className="bottol">
            <h3>{name}</h3>
            <img className='bottol-img' src={img} alt="" />
            <p>Price- {price}</p>
            <button onClick={()=> handleAdToCart(bottol)}>Purches</button>
        </div>
    );
};

export default Bottol;