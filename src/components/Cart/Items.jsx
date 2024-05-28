import React from "react";
import { products } from "../App";

const Item = ({ name, price, availability, src, id, refer, setCount, setPrice, item }) => {
    return (
        <div className="item">
            <div className="img-container">
                <img src={src} alt={name} className={id} />
            </div>
            <div>
                <h2>المنتج</h2>
                <p>اسم المنتج: {name}</p>
                <p>$<span>{price}</span> :سعر المنتج</p>
                <p>{availability} :متاح حاليا</p>
            </div>
            <button onClick={e => { 
                e.target.parentElement.remove();
                setCount(refer.current.childElementCount); 

                let result = 0;
                for (let i = 0; i < item.length; i++) {
                    result += +item[i].textContent
                    setPrice(result - +e.target.parentElement.children[1].children[2].children[0].textContent)
                }
            }} className="del">Delete Item</button>
        </div>
    )
}

const count = [1, 2, 3, 4];

const Items = ({ refer, setCount, setPrice, item, result }) => {
    return (
        <section className="comp cart-items">
            <h2 className="title">سلة المشتريات</h2>

            <div className="items" ref={refer} >
                {count.map((val) => <Item setPrice={setPrice} item={item} setCount={setCount} refer={refer} key={val} id='molk' name={products.molokhia} src={products.molokhiaSrc} price={products.molokhiaPrice} availability={2} />)}
                {count.map((val) => <Item setPrice={setPrice} item={item} setCount={setCount} refer={refer} key={val} id='koshari' name={products.koshari} src={products.koshariSrc} price={products.koshariPrice} availability={1} />)}
                {count.map((val) => <Item setPrice={setPrice} item={item} setCount={setCount} refer={refer} id='bean' key={val} name={products.beans} src={products.beanSrc} price={products.beansPrice} availability={5} />)}
            </div>
        </section>
    )
}

export default Items