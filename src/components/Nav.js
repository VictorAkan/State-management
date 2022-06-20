import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";

export default function Navbar() {
    const [cart, setCart] = useContext(CartContext)
    return (
        <div className="nav__top p-4 justify-content-between">
            <h1>ShoppingList App</h1>
            <p>You have <span>{cart.length}</span> items in your shopping list</p>
        </div>
    )
}