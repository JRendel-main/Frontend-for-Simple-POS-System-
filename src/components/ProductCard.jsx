import React from 'react'

const ProductCard = () => {
    return (
        <div>
            <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Product Name</h5>
                    <p className="card-text">Product Description</p>
                    <p className="card-text">Price: $100</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
