import { useContext,useState } from "react";
import { CartContext } from "../context/Cartcontext";

export const AddItem = () => {
    const [cart, setCart] = useContext(CartContext)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }
    const addItemToList = (e) => {
        e.preventDefault();
        const newItems = {id: 5, name, price}
        setCart(oldItems => [...oldItems,newItems])
    }

    return (
        <div className="p-4">
            <div className="input-group mb-4 d-md-flex">
                <input type="text" value={name} onChange={updateName}
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        const newItems = {id: 5, name, price}
                        setCart(oldItems => [...oldItems,newItems])
                    }
                }} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                <input type="text" value={price} onChange={updatePrice}
                onKeyPress={e => {
                    if (e.key ==="Enter") {
                        const newItems = {id: 5, name, price}
                        setCart(oldItems => [...oldItems,newItems])
                    }
                }} className="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" />
                <button onClick={addItemToList} className="btn btn-danger">Add Item</button>
            </div>
            <hr />
        </div>
    )
}