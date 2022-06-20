import { createContext, useState } from "react"

export  const  CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "Shoe",
            price: 500
        },
        {
            id: 2,
            name: "Bag",
            price: 1000
        },
        {
            id: 3,
            name: "Slippers",
            price: 2000
        },
    ])

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}