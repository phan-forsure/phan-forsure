import React, { createContext, useState } from "react";
import Section from "./Section";
import Category from "./Category";
import Products from "./Products";

export const valueContext = createContext(null)

const ProductsPage = () => {
    const [value, setValue] = useState('')
    
    const handleClick = (e) => {
        setValue(e.target.textContent)
        e.target.parentElement.className = 'closed'
    }

    const handleMouseEnterBtn = (e) => {
        if (e.target.firstElementChild) {
            e.target.firstElementChild.className = 'open'
        } else {
            e.target.parentElement.className = 'open'
        }
    }

    const handleMouseLeaveBtn = (e) => {
        if (e.target.firstElementChild) {
            e.target.firstElementChild.className = 'closed'
        }
    }

    const handleMouseLeave = (e) => {
        e.target.parentElement.className = 'closed'
    }

    return (
        <>
        <valueContext.Provider value={value}>
            <Section />
            <Category selection={value} setter={setValue} click={handleClick} enter={handleMouseEnterBtn}
            leave={handleMouseLeave} leaveBtn={handleMouseLeaveBtn} />
            <Products />
        </valueContext.Provider>
        </>
    )
}

// idea: categories and conditional rendering based on which category is chosen
// categories: high protein, diet

export default ProductsPage