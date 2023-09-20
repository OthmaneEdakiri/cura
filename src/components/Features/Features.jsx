import { features } from "../../constant";
import {Feature} from "../../components";
import "./Features.css";


const Features = () => {
    return (
        <div className="features section-p1">
            <div className="container">
                <div className="features-content">
                    {features.map(feature=><Feature key={feature.id} info={{image:feature.image,title:feature.title}}/>)}
                </div>
            </div>
        </div>
    )
}

export default Features
