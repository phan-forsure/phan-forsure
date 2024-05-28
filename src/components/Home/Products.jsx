import React, { useRef, useState } from 'react'
import Details from './Details'
import { products } from '../App'

const Product = ({ src, price, type, name, method }) => {
    return (
        <div onClick={method} className='product' product-name={name} product-price={price}>
        <img className={type} src={src} alt={`${name}`} />
            <div product-name={name} product-price={price}>
                <div product-name={name} product-price={price}>
                    <p>طبق {name} مصري اصيل</p>
                    <p>$السعر: {price}</p>
                </div>
                <span>مطبوخ خصيصا من يد الحاجه الوالده</span>
            </div>
        </div>
    )
}

const Products = () => {
    const [shown, setShown] = useState(false)
    let nameRef = useRef(null)
    let priceRef = useRef(null)

    const HandleProductClick = (e) => {
        setShown(!shown)
        nameRef.current = e.target.parentElement.classList.contains('products') ? e.target.getAttribute('product-name') : e.target.parentElement.getAttribute('product-name');
        priceRef.current = e.target.parentElement.classList.contains('products') ? e.target.getAttribute('product-price') : e.target.parentElement.getAttribute('product-price') ; 
    }
    
    const HandleExitClick = () => {
        setShown(!shown)
    }

    return (
        <section className='comp products'>
            <h2 className='title'>اشهر الأطباق</h2>
            <div className='products'>
                <Product method={HandleProductClick} name={products.molokhia} price={products.molokhiaPrice} type='molk' src={products.molokhiaSrc} />
                <Product method={HandleProductClick} name={products.koshari} price={products.koshariPrice} type='koshari' src={products.koshariSrc} />
                <Product method={HandleProductClick} name={products.beans} price={products.beansPrice} type='bean' src={products.beanSrc} />
                <Product method={HandleProductClick} name={products.molokhia} price={products.molokhiaPrice} type='molk' src={products.molokhiaSrc} />
                <Product method={HandleProductClick} name={products.salad} price={products.saladPrice} type='salad' src={products.saladSrc} />
            </div>

            {shown ? <Details price={priceRef.current} method={HandleExitClick} name={nameRef.current} /> : null}
        </section>
    )
}

export default Products