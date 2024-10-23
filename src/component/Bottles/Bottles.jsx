import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addToLs, getPreviousCart} from "../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch("bottles.json")
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    useEffect(() => {

        if (bottles.length) {
            const storedCart = getPreviousCart();
            const savedCart = []
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }
    }, [bottles])


    const handleBuyNow = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLs(bottle.id)
    }

    // const handleremoveFromCart = (id) = {
    //     removeFromLS(id)

    // }


    return (
        <div>
            <h2>Available Bottles: {bottles.length}</h2>
            <Cart key={cart.id} cart={cart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleBuyNow={handleBuyNow}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;
