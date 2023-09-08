import { Container } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import Product from "./Product";

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart);
    console.log("CartItems; ", cartItems)

    return (
        <Container>
            <h1>Cart will be here</h1>
            {cartItems.length === 0 && <p>Your cart is empty</p>}
            {cartItems.map((item) => (
                 <Product {...item} />
            ))}
        </Container>
    )
}

export default Cart;