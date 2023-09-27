import BannerText from "../BannerText/BannerText"
import {Banner} from "../../components"
import "./Banners.css"

const Banners = () => {
    return (
        <div className="banners section-p1">
            <div className="container">
                <div className="banners-content">
                    <Banner 
                    info={{
                        classN:"sm-banner",
                        title:"crazy deals",
                        subtitle:"The best classic dress on sale at cara",
                        desc:"The best classic dress on sale at cara",
                        btnClassN:"white",
                        btnTitle:"Learn More",
                    }}
                    />
                    <Banner 
                    info={{
                        classN:"sm-banner",
                        title:"spring summer",
                        subtitle:"upcomming season",
                        desc:"The best classic dress on sale at cara",
                        btnClassN:"white",
                        btnTitle:"Collection",
                    }}
                    />
                    <BannerText 
                        info={{
                            title:"SEASON SALE",
                            subtitle:"Winter Collection -50% Off"
                        }} 
                    />
                    <BannerText 
                        info={{
                            title:"NEW FOOTWEAR COLLECTION",
                            subtitle:"Spring/Summer 2022"
                        }} 
                    />
                    <BannerText 
                        info={{
                            title:"T-SHIRTS",
                            subtitle:"New Trendy Prices"
                            }} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Banners
