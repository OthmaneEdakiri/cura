import "./Feature.css"

const Feature = (props) => {
    return (
        <div className="feature">
            <img src={props.info.image} alt="" />
            <h6>{props.info.title}</h6>
        </div>
    )
}

export default Feature
