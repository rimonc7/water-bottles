import PropTypes from 'prop-types';
import './Cart.css'


const Cart = ({ cart }) => {
    return (
        <div className="cart">
            <h3>Bottle Cart: {cart.length}</h3>
            <div className='cart-bottles'>
            {
                cart.map(bottle=> <div key={bottle.id} className='cart-bottle'>{bottle.name} <button className='button'>Remove</button></div>)
            }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;