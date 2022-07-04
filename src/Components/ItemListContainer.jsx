import React, {useState, useEffect} from "react";
import './ItemListContainer.css'



const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);
    debugger
    async function getProducts () {

        try {
            const response = await fetch("../ItemsFolder/data.json");
            const data = await response.json();
            setItems(data);
            console.log(items)
        }
        catch (err) {
            console.log(err)
        }

    }


    useEffect(() =>{
        getProducts();

    }, [])

    return (
        <div className="item--list--container">
            <h1 className="item--list--container__title">{greeting}</h1>
        </div>

    );

}

export default ItemListContainer;