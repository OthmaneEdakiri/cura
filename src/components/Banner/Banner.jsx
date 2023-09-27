import "./Banner.css";

const Banner = (props) => {
    return (
        <div className={`banner ${props.info.classN}`}>
            <h4>{props.info.title}</h4>
            {props.info.discount?<h2>Up to <span>{props.info.discount} Off</span>-All t-Shirts & Accessories</h2>:<h2>{props.info.subtitle}</h2>}
            {props.info.desc?<span>{props.info.desc}</span>:null}
            <div><button className={props.info.btnClassN}>{props.info.btnTitle}</button></div>
        </div>
    )
}

export default Banner
