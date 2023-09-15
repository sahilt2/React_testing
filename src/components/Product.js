import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { changeQuantity } from "../features/cartSlice";

const Product = (props) => {
    const { image, title, price, rating, description, quantity } = props;
    const product = props
    const cartItems = props.cartItems
    const dispatch = useAppDispatch();
    const location = useLocation();

const handleAddProduct = () => {
    dispatch(changeQuantity({ ...product, quantity: 1 }))
}

const handleRemoveProduct = () => {
    dispatch(changeQuantity({ ...product, quantity: -1 }))
}

const handleChangeQuantityByNumber = (quantity) => {
    // Could be used later to increase quantity by more than 1
    dispatch(changeQuantity({ ...product, quantity }))
}


return (
    <section className="Detail">

        <article className="Detail_thumbnail">
            <img src={image} alt={title} />
        </article>

        <article className="Detail_info">
            <div className="Detail_info-header">
            <h2>{title} </h2>
            <h2>{quantity ? `Quantity: ${quantity}` : ""}</h2>
            </div>
            <div className="Detail_info">
                <span className="Detail_info-price">{price}</span>
                <span className="Detail_info-rating">Rating: {rating.rate}</span>
            </div>
            <p className="Detail_info-description">{description}</p>
            <Button variant="primary" onClick={handleAddProduct}>Add to Cart</Button>
            {location.pathname === "/cart" && <Button variant="danger" onClick={handleRemoveProduct}>Remove from Cart</Button>}
            {(cartItems.length > 0 && cartItems.find(item => item.id === product.id)) && <Button variant="danger" onClick={handleRemoveProduct}>Remove from Cart</Button>}
        </article>

    </section>
)
}

export default Product;