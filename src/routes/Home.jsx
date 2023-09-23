import {Navbar,HomeHero, Features, Products, MainBanner} from '../components';
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
        <MainBanner />
        <Products 
            info={{
                products:arrivals,
                title:"New Arrivals",
                collection:"Summer Collection New Modern Design"
            }} />
    </div>
)
}

export default Home
