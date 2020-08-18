import React from 'react'

function ProductCategory(title, image) {
    return (
        <div className="product category" >
            <div className="category__info">
                <span className="category__title">{title}</span>
            </div>
            <img src={image} alt={title}/>
            <a href="#" className="category__link">See more</a>
        </div>
    )
}

export default ProductCategory
