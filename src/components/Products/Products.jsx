import "./Products.css"
import {Product} from "../../components"

const Products = (props) => {
    return (
        <div className="products section-p1">
            <div className="container">
                <div className="main-title">
                    <h2>{props.info.title}</h2>
                    <p>{props.info.collection}</p>
                </div>
                <div className="products-content">
                    {props.info.products.map(product=><Product
                        key={product.id} 
                        info={{
                            image:product.image,
                            mark:product.mark,
                            price:product.price,
                            title:product.title
                            }} 
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Products
