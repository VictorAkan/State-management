export default function ShoppingItem({item}) {
    return(
        <div>
            <h1>{item.name}</h1>
            <p>{"$" + item.price}</p>
            <hr />
        </div>
    )
}