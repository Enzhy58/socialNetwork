import './Preloader.css';
import preloader from "../../../assets/images/icons/preloader.gif";

let Preloader = (props) => {
    return (
        <div className="preloader">
            <img className="preloader__img" src={ preloader } width="200" height="200" alt="preloader"/>
        </div>
    )
    
}

export default Preloader;