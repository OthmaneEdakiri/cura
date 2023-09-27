import "./BannerText.css"

const BannerText = (props) => {
    return (
        <div className="banner-text">
        <h2>{props.info.title}</h2>
        <h3>{props.info.subtitle}</h3>
    </div>
    )
}

export default BannerText
