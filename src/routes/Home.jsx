import {Navbar,HomeHero, Features, Products, Banner, Banners} from '../components';
import { products, arrivals } from "../constant";

const Home = () => {
return (
    <div>
        <Navbar />
        <HomeHero />
        <Features />
        <Products 
            info={{
                products:products,
                title:"Featured Products",
                collection:"Summer Collection"
            }} />
        <Banner 
            info={{
                classN:"main-banner section-m1",
                title:"Rapair Services",
                discount:"70",
                btnClassN:"normal",
                btnTitle:"Explore More",
            }}
        />
        <Products 
            info={{
                products:arrivals,
                title:"New Arrivals",
                collection:"Summer Collection New Modern Design"
            }} />
        <Banners />
    </div>
)
}

export default Home
