const Product = (props) => {
    const { image, title } = props;


return (
    <section className="Detail">
        <article className="Detail_thumbnail">
            <img src={image} alt={title} />
        </article>
    </section>
)
}

export default Product;