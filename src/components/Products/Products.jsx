import React, { useState } from "react";
import { products } from "../App";
import Details from "../Home/Details";

const Data = ({ name, price, available, src, img, type }) => {
    const [shown, setShown] = useState(false)

    return (
        <div selection-type={type} className="unit" onClick={() => setShown(!shown)}>
            <div className="container">
                <img src={src} alt='' className={img}/>
            </div>
            <div className="info">
                <p>اسم المنتج: {name}</p>
                <p>$السعر: {price}</p>
                <p>متوفر حاليا: {available}</p>
            </div>
            {shown ? <Details name={name} price={price} method={() => setShown(!shown)} /> : null}
        </div>
    )
}

const Products = () => {
    return (
        <section className="comp results">
            <h2>النتائج</h2>
            <div className="data">
               {<Data name={products.molokhia} price={products.molokhiaPrice}
                available={2} src={products.molokhiaSrc} type={products.molokhiaType} />}

               {<Data name={products.koshari} price={products.koshariPrice}
                available={1} src={products.koshariSrc} img={'koshari'} type={products.koshariType} />}

               {<Data name={products.beans} price={products.beansPrice}
                available={3} src={products.beanSrc} img={'bean'} type={products.beansType} />}

               {<Data name={products.salad} price={products.saladPrice}
                available={4} src={products.saladSrc} img={'bean'} type={products.saladType} />}
            </div>
        </section>
    )
}

export default Products