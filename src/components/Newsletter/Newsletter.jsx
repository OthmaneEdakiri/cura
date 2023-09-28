import "./Newsleter.css"

const Newsletter = () => {
    return (
        <div className='newsletter section-p1 section-m1'>
            <div className="container">
                <div className="newsletter-content">
                    <div className="news-text">
                        <h4>Sign Up For Newsletters</h4>
                        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                    </div>
                    <form action="">
                        <input type="email" placeholder='Your email address' />
                        <button type="submit" className="normal">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
