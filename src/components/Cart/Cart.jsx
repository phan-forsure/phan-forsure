import React, { createContext, useEffect, useRef, useState } from "react";
import Section from "./Section";
import Items from "./Items";
import Checkout from "./Checkout";

export const CountContext = createContext(null)
export const FullPriceContext = createContext(null)

const Cart = () => {
    const [itemCount, setItemCount] = useState(0)
    let lengthRef = useRef(null)
    let [result, setResult] = useState(0)
    
    useEffect(() => {
        setItemCount(lengthRef.current.childElementCount)

        let item = document.querySelectorAll('.item > div > p > span')
        for (let i = 0; i < item.length; i++) {
            setResult(result += +item[i].textContent)
        }
    }, [])

    return (
        <>
        <CountContext.Provider value={itemCount}>
            <FullPriceContext.Provider value={result}>
                <Section />
                <Items refer={lengthRef} />
                <Checkout />
            </FullPriceContext.Provider>
        </CountContext.Provider>
        </>
    )
}

export default Cart