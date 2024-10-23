import "./Bottle.css"
import PropTypes from 'prop-types';


const Bottle = ({bottle, handleBuyNow}) => {
    return (
        <div className="bottle">
            <h2>Name: {bottle.name}</h2>
            <h3>Material: {bottle.material}</h3>
            <h3>Colour: {bottle.color}</h3>
            <h3>Price: {bottle.price_usd}</h3>
            <button onClick={()=>handleBuyNow(bottle)}>Buy Now</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleBuyNow: PropTypes.func.isRequired
}

export default Bottle;
