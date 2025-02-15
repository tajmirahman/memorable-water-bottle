import { useEffect } from "react";
import { useState } from "react";
import Bottol from "../Bottol/Bottol";


const Bottols = () => {

    const [bottols, setBottols]=useState([]);

    useEffect(()=>{
        fetch('bottols.json')
        .then(res=>res.json())
        .then(data=>setBottols(data))
    } , [])


    return (
        <div>
            <h3>Bottols Available -{bottols.length}</h3>

        {
            bottols.map(bottol=> <Bottol 
                
                key={bottols.id}
                bottol={bottol}></Bottol>)
        }

        </div>
    );
};

export default Bottols;