import React from 'react'

const Details = ({ name, price, method }) => {
    return (
        <div className="details">
            <h2>Product Details</h2>
            <div className='info'>
                <p>طبق {name} مصري اصيل</p>
                <p>${price} :السعر</p>
            </div>
            <button className='add'>Add to Cart</button>
            <button onClick={method} className='exit'>Cancel</button>
        </div>
    )
}

export default Details