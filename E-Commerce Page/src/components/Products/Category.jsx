import React, { useContext } from "react";
import { valueContext } from "./ProductsPage";

const items = ['Diet', 'Fast Food', 'Healthy', 'All']

const Items = ({ click, leave }) => {
    return (
        <ul onMouseLeave={leave} className="closed">
            {items.map(ele => <li key={ele} onClick={click}>{ele}</li>)}
        </ul>
    )
}

const Category = ({ selection, click, enter, leave, leaveBtn }) => {
    const value = useContext(valueContext);
    const units = document.querySelectorAll('div.unit')
    
    const handleClick = () => {
        for (let i = 0; i < units.length; i++) {
            units[i].className = 'unit none'
            if (units[i].getAttribute('selection-type') === value) {
                units[i].className = 'unit block'
            }
            if (value === 'All') {
                units[i].className = 'unit block'
            }
        }
    }

    return (
        <section className="comp category">
            <div className="info">
                <button name="" id="select" onMouseEnter={enter} onMouseLeave={leaveBtn}>
                    {selection ? selection : 'Select Type'}
                    <Items click={click} leave={leave} />
                </button>
                
                <button className="search" onClick={handleClick}>Search {selection}</button>
            </div>
            <h3>ابحث عن ما يناسبك</h3>
        </section>
    )
}   

export default Category