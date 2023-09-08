import { Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../features/cartSlice";

const Product = (props) => {
    const { image, title, price, rating, description } = props;
    const product = props
    const dispatch = useAppDispatch();

const handleAddProduct = () => {
    console.log("Product: ", product)
    dispatch(addToCart(product))
}

return (
    <section className="Detail">

        <article className="Detail_thumbnail">
            <img src={image} alt={title} />
        </article>

        <article className="Detail_info">
            <div className="Detail_info-header">
            <h2>{title}</h2>
            </div>
            <div classNAme="Detail_info">
                <span className="Detail_info-price">{price}</span>
                <span className="Detail_info-rating">Rating: {rating.rate}</span>
            </div>
            <p className="Detail_info-description">{description}</p>
            <Button variant="primary" onClick={handleAddProduct}>Add to Cart</Button>
        </article>

    </section>
)
}

export default Product;