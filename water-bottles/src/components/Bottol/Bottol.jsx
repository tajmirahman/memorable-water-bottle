

const Bottol = ({bottol}) => {
    console.log(bottol);

    const {name, img, price}=bottol;

    return (
        <div>
            <h3>name -{name}</h3>
            <img src={img} alt="" />
            <p>Price- {price}</p>
        </div>
    );
};

export default Bottol;