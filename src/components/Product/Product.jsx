import "./Product.css";
import { product1 } from "../../assets";

const Product = (props) => {
    return (
        <div className='product'>
            <img src={props.info.image} className="product-image" alt="" />
            <div className="product-des">
                <span>{props.info.mark}</span>
                <h5>{props.info.title}</h5>
                <div className="product-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <h4 className="product-price">{props.info.price}</h4>
            </div>
            <a href=""><i className="fa-solid fa-cart-shopping product-cart"></i></a>
        </div>
    )
}

export default Product
