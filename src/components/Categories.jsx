import React, { useState } from 'react'

function Categories({ items, categoryActive, setcategoryActive }) {
    const clickToCategory = (index) => {
        console.log(index);
        setcategoryActive(index)
    }
    return (
        <div className="categories">
            <ul>
                {items.map((item, index) => (
                    <li onClick={() => clickToCategory(index)} className={categoryActive == index ? 'active' : null} key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;