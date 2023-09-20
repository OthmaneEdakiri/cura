import "./Products.css"
import {Product} from "../../components";
import { products } from "../../constant";

const Products = () => {
    return (
        <div className="products section-p1">
            <div className="container">
                <div className="main-title">
                    <h2>Featured Products</h2>
                    <p>Summer Collection</p>
                </div>
                <div className="products-content">
                    {products.map(product=><Product
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
