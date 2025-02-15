import { useEffect } from "react";
import { useState } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'
import { addToLS } from "../../utilities/localstorage";


const Bottols = () => {

    const [bottols, setBottols] = useState([]);
    const [addBottol, setAddBottol]=useState([])

    useEffect(() => {
        fetch('bottols.json')
            .then(res => res.json())
            .then(data => setBottols(data))
    }, [])

    const handleAdToCart=(bottol)=>{
        const newBottol= [...addBottol, bottol];
        setAddBottol(newBottol);
        addToLS(bottol.id);
    }


    return (
        <div>
            <h3>Bottols Available -{bottols.length}</h3>
            <h4>Add Bottols- {addBottol.length}</h4>

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