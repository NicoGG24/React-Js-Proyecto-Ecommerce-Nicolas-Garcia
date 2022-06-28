import React, { useState } from "react";
import './ItemCount.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ItemCount = (props) => {

    const [contador, setContador] = useState(2);

    const addBtn = () => {
        if(contador <= props.stock - 1){
            setContador(contador + 1);
            console.log(contador);
        } else{
            alert(`La cantidad maxima disponible es de: ${props.stock}`);
        }
    }

    const removeBtn = () => {
        if(contador >= 1){
            setContador(contador - 1);
            console.log(contador);
        } else{
            alert("La cantidad debe ser superior a 0");
        }
    }

    const resetBtn = () => {
        setContador(0)
        console.log(contador);
    }

    return (
        <div className="flex--Wrapper">
            <div className="item--Count">
                <p>Cantidad</p>
                <AddCircleOutlineIcon className="cursor--pointer" onClick={addBtn} />          
                <div className="item--Count__Counter">{contador}</div>
                <RemoveCircleIcon className="cursor--pointer" onClick={removeBtn} />
                <button href="#" className="resetBtn cursor--pointer" onClick={resetBtn}>Reset</button>
            </div>
        </div>
    )    
}


export default ItemCount;