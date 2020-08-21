import React from 'react'
import {useStateValue} from "./Data/StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import "./stylesheets/Checkout.css"

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            {console.log(basket)}
            {basket.length === 0 ?
            ( <div className="checkout__empty">
                <img className="checkout__ad" src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt=""/>
                <h2>Your shoppin Cart is empty</h2>
                </div> ):(
                    <div className="checkout__contain">
                        <div className="checkout__left">
                    <h2>Your shopping basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    </div>
                    <div className="checkout__right">

                    </div>
                </div>
                )
            }
        </div>
        
    )
}

export default Checkout
