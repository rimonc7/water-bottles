import PropTypes from 'prop-types';
import './Cart.css'


const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className="cart">
            <h3>Bottle Cart: {cart.length}</h3>
            <div className='cart-bottles'>
                {
                    cart.map(bottle => <div key={bottle.id} >
                        <p className='cart-bottle'>{bottle.name}</p>
                        <button onClick={() => handleRemoveFromCart(bottle.id)} className='button'>Remove</button>
                        </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
}

export default Cart;