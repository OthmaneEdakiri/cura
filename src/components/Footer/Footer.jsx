import "./Footer.css"
import {app, logo, pay, play} from "../../assets"

const Footer = () => {
    return (
        <div className='footer section-p1'>
            <div className="container">
                <div className="footer-content">
                    <div className="col">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <h4>Contact</h4>
                        <p><strong>Address:</strong>562Wellington Road. Street 32. San Francico</p>
                        <p><strong>Phone:</strong>+01 2222 365/(+91)012345 6789</p>
                        <p><strong>Hours:</strong>10:00-18:00. Mon-Sat</p>
                        <div className="social">
                            <h4>Foolow Us</h4>
                            <div className="icons">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-pinterest-p"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4>About</h4>
                        <a href="">About Us</a>
                        <a href="">Delivery Information</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Contact Us</a>
                    </div>
                    <div className="col">
                        <h4>My Account</h4>
                        <a href="">Sign in</a>
                        <a href="">View Cart</a>
                        <a href="">My Wishlist</a>
                        <a href="">Track My Order</a>
                        <a href="">Help</a>
                    </div>
                    <div className="col install">
                        <h4>Install App</h4>
                        <p>From App Store or Google Play</p>
                        <div className="footer-apps">
                            <img src={app} alt="" />
                            <img src={play} alt="" />
                        </div>
                        <p>Scured Payment Gateways</p>
                        <div className="">
                            <img src={pay} alt="" />
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>©{new Date().getFullYear()}. Tech2 wtc - React Ecommerce Template</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
