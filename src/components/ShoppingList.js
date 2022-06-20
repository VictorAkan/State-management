import { useContext } from "react"
import ShoppingItem from "./ShoppingItem"
import { CartContext } from "../context/Cartcontext";

const ShoppingList = () => {
    const [cart, setCart] = useContext(CartContext);
    return(
        <>
            {cart.map((item) => (
                <ShoppingItem item={item} />
            ))}
        </>
    )
}
export default ShoppingList