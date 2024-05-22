import React, { useRef, useState, useContext } from "react";

import { CountContext } from "./Cart";
import { FullPriceContext } from "./Cart";

const CartItems = () => {
    const count = useContext(CountContext)
    const fullPrice = useContext(FullPriceContext)

    return (
        <div className="current-items">
            <h3>تفاصيل الطلبية</h3>
            <div className="items">
                <p className="item-count">عدد المنتجات في السلة: {count}</p>
                <p className="full-price">$اجمالي السعر: {fullPrice}</p>
                <p className="shipping-fee">$خدمة التوصيل: {Math.floor(fullPrice / 8)}</p>
            </div>
        </div>
    )
}

const Payment = () => {
    let card = useRef(null)
    let [holder, setHolder] = useState(null)

    const HandleSelect = () => {
        setHolder(card.current.value)
    }

    return (
        <form action="">
            <div>
                <input type="number" placeholder={`${holder ? holder : 'Card'} Number`} required/> 
                <select ref={card} onChange={HandleSelect} name="" id="">
                    <option value="Visa">Visa</option>
                    <option value="Paypal">Paypal</option>
                </select>
            </div>
            <input type="submit" value={'ادفع'}/>
        </form>
    )
}

const Checkout = () => {
    return (
        <section className="comp checkout">
            <h2>طرق الدفع</h2>
            <CartItems />
            <Payment />
        </section>
    )
}

export default Checkout