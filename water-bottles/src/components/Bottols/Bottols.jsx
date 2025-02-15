import { useEffect } from "react";
import { useState } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'


const Bottols = () => {

    const [bottols, setBottols] = useState([]);

    useEffect(() => {
        fetch('bottols.json')
            .then(res => res.json())
            .then(data => setBottols(data))
    }, [])

    const handleAdd=(bottol)=>{
        console.log(bottol);
    }


    return (
        <div>
            <h3>Bottols Available -{bottols.length}</h3>

            <div className="bottols-container">
                {
                    bottols.map(bottol => <Bottol
                        key={bottols.id}
                        handleAdd={handleAdd}
                        bottol={bottol}></Bottol>)
                }
                
            </div>

        </div>
    );
};

export default Bottols;